import { Client } from "basic-ftp";
import dotenv from "dotenv";
import path from "node:path";
import fs from "node:fs";

dotenv.config({ path: ".env.deploy" });

const { FTP_HOST, FTP_USER, FTP_PASSWORD, FTP_REMOTE_DIR } = process.env;

if (!FTP_HOST || !FTP_USER || !FTP_PASSWORD || !FTP_REMOTE_DIR) {
  console.error(
    "Faltan variables de entorno. Revisa que .env.deploy exista en la " +
    "raiz del proyecto y tenga FTP_HOST, FTP_USER, FTP_PASSWORD y " +
    "FTP_REMOTE_DIR."
  );
  process.exit(1);
}

const filesArg = process.argv.slice(2);

if (filesArg.length === 0) {
  console.error(
    "Uso: node scripts/deploy-file.mjs <ruta-al-archivo> [otra-ruta...]\n" +
    "Las rutas deben estar dentro de la carpeta public/, por ejemplo:\n" +
    "  node scripts/deploy-file.mjs public/manual-zefiro-strix.html"
  );
  process.exit(1);
}

const publicDir = path.resolve("public");

function resolveRemoteRelativePath(localPathArg) {
  const absoluteLocal = path.resolve(localPathArg);

  if (
    absoluteLocal !== publicDir &&
    !absoluteLocal.startsWith(publicDir + path.sep)
  ) {
    throw new Error(
      `"${localPathArg}" no esta dentro de la carpeta public/. Este ` +
      "script solo sube archivos estaticos que public/ copia tal cual " +
      "(paginas huerfanas, assets sueltos). Para paginas que pasan por " +
      "Astro (src/pages/) usa npm run deploy:full."
    );
  }

  if (!fs.existsSync(absoluteLocal)) {
    throw new Error(`No se encontro el archivo: ${absoluteLocal}`);
  }

  const relativeToPublic = path.relative(publicDir, absoluteLocal);
  return relativeToPublic.split(path.sep).join("/");
}

async function main() {
  const uploads = filesArg.map((f) => ({
    local: path.resolve(f),
    remoteRelative: resolveRemoteRelativePath(f),
  }));

  const client = new Client(120_000);
  client.ftp.verbose = false;

  try {
    await client.access({
      host: FTP_HOST,
      user: FTP_USER,
      password: FTP_PASSWORD,
      secure: false,
    });

    for (const { local, remoteRelative } of uploads) {
      const remoteDir = path.posix.dirname(
        `${FTP_REMOTE_DIR}/${remoteRelative}`
      );
      const remoteFileName = path.posix.basename(remoteRelative);

      console.log(`Subiendo ${remoteRelative} -> ${remoteDir}/${remoteFileName}`);
      await client.ensureDir(remoteDir);
      await client.uploadFrom(local, remoteFileName);
    }

    console.log(`\nListo. ${uploads.length} archivo(s) subido(s) correctamente.`);
  } catch (err) {
    console.error("\nError durante la subida:", err.message);
    console.error(
      "Revisa que .env.deploy tenga las credenciales correctas y que el " +
      "archivo exista en la ruta indicada."
    );
    process.exitCode = 1;
  } finally {
    client.close();
  }
}

main();
