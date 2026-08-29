// ============================================================
// whatsapp-catalog.csv.ts — Feed CSV para Meta Commerce Manager
// (catálogo de productos de WhatsApp Business).
// Endpoint estático: se genera una vez durante el build, como
// cualquier otra página (output estático de Astro).
// ============================================================
import { equipos } from "../data/equipos";
import type { Producto } from "../data/equipos";
import type { ImageMetadata } from "astro";
import { getImage } from "astro:assets";

const SITE_URL = "https://www.tetrapoda.cl";

// Solo los equipos con fotografía entran al feed: Meta exige image_link
// obligatorio. Los que no tienen campo `imagen` se excluyen por completo
// (no se envían con imagen rota).
const equiposConImagen = equipos.filter(
  (equipo): equipo is Producto & { imagen: ImageMetadata } =>
    equipo.imagen !== undefined
);

// Escapa un valor para una celda CSV (RFC 4180): si contiene coma, comilla
// doble o salto de línea, se envuelve entre comillas dobles y se duplican
// las comillas dobles internas.
function csvEscape(value: string): string {
  if (/[",\n\r]/.test(value)) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

export async function GET(): Promise<Response> {
  const filas = await Promise.all(
    equiposConImagen.map(async (equipo) => {
      // Resuelve la imagen optimizada (webp) y arma la URL absoluta completa.
      const imagen = await getImage({ src: equipo.imagen, format: "webp" });
      const imageLink = `${SITE_URL}${imagen.src}`;

      return [
        equipo.slug,
        equipo.nombre,
        equipo.descripcion,
        "in stock",
        "new",
        "1.00 CLP",
        `${SITE_URL}/equipos/${equipo.slug}`,
        imageLink,
        "Tetrapoda SpA",
      ]
        .map(csvEscape)
        .join(",");
    })
  );

  const csv = [
    "id,title,description,availability,condition,price,link,image_link,brand",
    ...filas,
  ].join("\n");

  return new Response(csv, {
    headers: { "Content-Type": "text/csv; charset=utf-8" },
  });
}

// NOTA: "Atractores olfativos" no aparece en este feed porque no
// tiene campo `imagen` en equipos.ts. Agregar una foto y volverá a
// incluirse automáticamente en el próximo build.
