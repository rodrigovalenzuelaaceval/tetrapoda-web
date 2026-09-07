/**
 * Deploy manual asistido por script — sube dist/ por FTP a
 * public_html en Dedicados.cl/NinjaHosting.cl.
 * Requiere copiar .env.deploy.example a .env.deploy y completar
 * las credenciales reales (ese archivo NUNCA se commitea).
 * Uso: npm run deploy:full
 */
import dotenv from "dotenv";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Client } from "basic-ftp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");

// Carga SOLO .env.deploy (no .env) para no chocar con variables de
// otros servicios del proyecto (p. ej. Web3Forms).
dotenv.config({ path: path.join(projectRoot, ".env.deploy"), quiet: true });

const requiredVars = ["FTP_HOST", "FTP_USER", "FTP_PASSWORD", "FTP_REMOTE_DIR"];
const missing = requiredVars.filter((key) => !process.env[key]);
if (missing.length > 0) {
  console.error(`❌ Faltan variables en .env.deploy: ${missing.join(", ")}`);
  console.error("   Copia .env.deploy.example a .env.deploy y completa las credenciales reales.");
  process.exit(1);
}

const { FTP_HOST, FTP_USER, FTP_PASSWORD, FTP_REMOTE_DIR } = process.env;

const localDistPath = path.join(projectRoot, "dist");
if (!fs.existsSync(localDistPath)) {
  console.error("❌ No existe la carpeta dist/. Ejecuta primero: npm run build");
  process.exit(1);
}

const uploadedFiles = new Set();
const startedAt = Date.now();

const client = new Client();

// secure: false porque el hosting solo ofrece FTP plano (sin FTPS).
// Nota: basic-ftp no soporta un modo "optional"/auto-detección de FTPS;
// sus valores válidos son false (FTP plano), true (FTPS explícito) o "implicit".
client.trackProgress((info) => {
  if (info.type === "upload" && !uploadedFiles.has(info.name)) {
    uploadedFiles.add(info.name);
    console.log(`  ↑ ${info.name}`);
  }
});

try {
  console.log(`Conectando a ${FTP_HOST} ...`);
  await client.access({
    host: FTP_HOST,
    user: FTP_USER,
    password: FTP_PASSWORD,
    secure: false,
  });

  console.log(`Subiendo contenido de ${localDistPath} → ${FTP_REMOTE_DIR} ...`);
  await client.uploadFromDir(localDistPath, FTP_REMOTE_DIR);

  const elapsed = ((Date.now() - startedAt) / 1000).toFixed(2);
  console.log("");
  console.log(`✅ Deploy completado: ${uploadedFiles.size} archivo(s) subido(s) en ${elapsed}s.`);
} catch (error) {
  console.error("❌ Error durante el deploy por FTP.");
  console.error("   Revisa que .env.deploy exista y tenga las credenciales correctas.");
  if (error && typeof error === "object" && "code" in error) {
    console.error(`   Código: ${error.code}`);
  }
  console.error(`   Detalle: ${error instanceof Error ? error.message : String(error)}`);
  process.exitCode = 1;
} finally {
  client.close();
}
