// ============================================================
// equipos.ts — Datos compartidos del catálogo de equipos.
// Fuente única usada por:
//   · Catalogo.astro        (vista de catálogo en la landing)
//   · src/pages/equipos/[slug].astro  (páginas dinámicas por equipo)
// ============================================================
import type { ImageMetadata } from "astro";
import imgZefiroStrix from "../assets/equipos/zefirostrix.jpg";
import imgZefiroPuma from "../assets/equipos/zefiropuma.jpg";
import imgSongMeter from "../assets/equipos/minibat2_front.webp";
import imgBushnellCoreDs4k from "../assets/equipos/bushnell_core_ds-4k32_119987C.webp";
import imgBushnellCoreDs30 from "../assets/equipos/bushnell_30_119977cb.jpg";
import imgRexingH1 from "../assets/equipos/rexing_16mph1.jpg";
import imgSwarovskiScope from "../assets/equipos/scope.jpg";
import imgHides from "../assets/equipos/hide.jpg";

export interface Producto {
  slug: string; // ruta /equipos/{slug} (kebab-case, sin tildes)
  nombre: string;
  descripcion: string;
  etiquetas: string[];
  imagen?: ImageMetadata; // fotografía del equipo (renderizada con <Image />)
  ctaTexto?: string; // texto del CTA; por defecto "Consultar arriendo →"
  servicioRelacionado?: { texto: string; href: string }; // nota secundaria: equipo → servicio de análisis
}

export const equipos: Producto[] = [
  {
    slug: "zefiro-strix",
    nombre: "Tetrapoda® Zéfiro Strix",
    descripcion:
      "Estación automatizada de monitoreo bioacústico para aves nocturnas. Configurable vía app celular por Bluetooth. Sincronización GPS automática, registra fecha, hora, temperatura, humedad relativa, presión atmosférica y coordenadas UTM.",
    etiquetas: ["Bioacústica", "Playback", "Log coordenadas UTM, temperatura, humedad, presión atmosférica", "Arriendo"],
    imagen: imgZefiroStrix,
  },
  {
    slug: "zefiro-puma",
    nombre: "Tetrapoda® Zéfiro-Puma",
    descripcion:
      "Señuelo acústico programable. Reproduce audios personalizables vía microSD (aves, anfibios, mamíferos). Chasis en verde oliva, amplificador clase D de alta potencia, tamaño reducido y alta eficiencia. Batería Li-Ion de altísima autonomía.",
    etiquetas: ["Señuelo acústico", "Amplificador Clase D", "Tarjeta microSD", "Arriendo"],
    imagen: imgZefiroPuma,
  },
  {
    slug: "song-meter-mini-bat-2-aa",
    nombre: "Song Meter Mini Bat 2 AA",
    descripcion:
      "Grabadora pasiva para detección de murciélagos. IP67, incluye SD 32GB y 8 pilas AA.",
    etiquetas: ["Bioacústica", "Quirópteros"],
    imagen: imgSongMeter,
    servicioRelacionado: {
      texto: "¿Ya tienes los audios? Conoce nuestro servicio de identificación →",
      href: "/servicios/identificacion-quiropteros",
    },
  },
  {
    slug: "bushnell-core-ds-4k-32mp-no-glow",
    nombre: "Bushnell Core DS-4K 32 MP No Glow",
    descripcion:
      "Cámara trampa de doble sensor optimizado día/noche. 32 MP, video 4K, flash invisible.",
    etiquetas: ["Foto-trampeo", "4K"],
    imagen: imgBushnellCoreDs4k,
  },
  {
    slug: "bushnell-core-ds-30mp-no-glow",
    nombre: "Bushnell Core DS 30 MP No Glow",
    descripcion:
      "Cámara trampa de alto rendimiento, doble sensor, video Full HD.",
    etiquetas: ["Foto-trampeo", "Full HD"],
    imagen: imgBushnellCoreDs30,
  },
  {
    slug: "rexing-h1-16mp-hi",
    nombre: "Rexing H1 16 MP HI",
    descripcion:
      "Cámara trampa costo-efectiva, rápida velocidad de disparo, video Full HD.",
    etiquetas: ["Foto-trampeo", "Costo-efectiva"],
    imagen: imgRexingH1,
  },
  {
    slug: "swarovski-ats-65-hd",
    nombre: "Swarovski ATS 65 HD",
    descripcion:
      "Telescopio terrestre de fluoruro con ocular 20-60x. Alta fidelidad de color, ideal para digiscoping. Incluye trípode Manfrotto.",
    etiquetas: ["Óptica", "Digiscoping"],
    imagen: imgSwarovskiScope,
  },
  {
    slug: "hides-fotograficos",
    nombre: "Hides fotográficos",
    descripcion:
      "Estructuras autoarmables o tipo manta para observación indetectable.",
    etiquetas: ["Observación", "Soporte"],
    imagen: imgHides,
  },
  {
    slug: "atractores-olfativos",
    nombre: "Atractores olfativos",
    descripcion:
      "Fórmulas específicas para carnívoros, nutrias y ciervos de larga duración.",
    etiquetas: ["Atractores"],
    ctaTexto: "Consultar disponibilidad →",
  },
];
