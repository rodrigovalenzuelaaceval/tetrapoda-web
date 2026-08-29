// ============================================================
// whatsapp-catalog.xml.ts — Feed XML (RSS 2.0 + namespace g: de
// Google Merchant / Meta) para Meta Commerce Manager (catálogo de
// productos de WhatsApp Business).
// Reemplaza al feed CSV: el hosting (Imunify360 / WAF) bloquea la
// extensión .csv, mientras que .xml se sirve correctamente.
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

// Escapa un valor de texto para insertarlo dentro de una etiqueta XML.
// Reemplaza, en este orden: & -> &amp;, < -> &lt;, > -> &gt;,
// " -> &quot; y ' -> &apos;.
function xmlEscape(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET(): Promise<Response> {
  const items = await Promise.all(
    equiposConImagen.map(async (equipo) => {
      // Resuelve la imagen optimizada (webp) y arma la URL absoluta completa.
      const imagen = await getImage({ src: equipo.imagen, format: "webp" });
      const imageLink = `${SITE_URL}${imagen.src}`;
      const link = `${SITE_URL}/equipos/${equipo.slug}`;

      return [
        `  <item>`,
        `    <g:id>${equipo.slug}</g:id>`,
        `    <title>${xmlEscape(equipo.nombre)}</title>`,
        `    <description>${xmlEscape(equipo.descripcion)}</description>`,
        `    <g:price>1.00 CLP</g:price>`,
        `    <link>${link}</link>`,
        `    <g:image_link>${imageLink}</g:image_link>`,
        `    <g:availability>in stock</g:availability>`,
        `    <g:condition>new</g:condition>`,
        `    <g:brand>Tetrapoda SpA</g:brand>`,
        `  </item>`,
      ].join("\n");
    })
  );

  const xml = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">`,
    `  <channel>`,
    `    <title>Tetrapoda SpA — Catálogo de equipos</title>`,
    `    <link>${SITE_URL}</link>`,
    `    <description>Catálogo de productos para WhatsApp Business / Meta Commerce Manager</description>`,
    ...items,
    `  </channel>`,
    `</rss>`,
  ].join("\n");

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}

// NOTA: "Atractores olfativos" no aparece en este feed porque no tiene
// campo `imagen` en equipos.ts.
