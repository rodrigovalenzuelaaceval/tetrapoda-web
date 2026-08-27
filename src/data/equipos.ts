// ============================================================
// equipos.ts — Datos compartidos del catálogo de equipos.
// Fuente única usada por:
//   · Catalogo.astro        (vista de catálogo en la landing)
//   · src/pages/equipos/[slug].astro  (páginas dinámicas por equipo)
// ============================================================
import type { ImageMetadata } from "astro";
import imgAudiomoth from "../assets/equipos/audiomoth.webp";
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
  especificaciones?: string[]; // ficha técnica real, un bullet por línea
  incluye?: string[]; // qué incluye el arriendo, un bullet por línea
  descripcionLarga?: { titulo?: string; texto: string }[];
  // Array de párrafos con subtítulo opcional en negrita. Cuando existe,
  // la página de detalle lo usa en vez de `descripcion` para el cuerpo
  // completo (texto real transcrito del sitio anterior, NO resumido).
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
    especificaciones: [
      "Peso: 424 g con baterías",
      "Micrófono ultrasónico de bajo ruido",
      "Grabación en formato Full Spectrum o Zero Crossing",
      "Autonomía: hasta 50 noches de 10 horas con 8 pilas AA",
      "Configuración inalámbrica vía app móvil (iOS/Android) por Bluetooth",
      "Configuración de ubicación GPS integrada",
      "Carcasa de policarbonato IP67 (impermeable y resistente al polvo)",
      "Soporte para trípode y orificios para candado",
    ],
    incluye: [
      "Grabadora Song Meter Mini Bat 2 AA",
      "Tarjeta SD de alta capacidad",
      "Juego de 8 pilas AA de larga duración",
    ],
  },
  {
    slug: "audiomoth",
    nombre: "AudioMoth",
    descripcion:
      "Grabadora acústica compacta y de bajo consumo, desarrollada por investigadores de la Universidad de Oxford. Diseño de código abierto, sensible a frecuencias audibles y ultrasónicas — ideal para vocalizaciones de aves, ranas, insectos y murciélagos.",
    etiquetas: ["Bioacústica", "Código abierto"],
    especificaciones: [
      "Rango de grabación: 8 kHz a 384 kHz sin comprimir",
      "Diseño de código abierto (Open Acoustic Devices, Univ. de Oxford)",
      "Bajo consumo: funciona con 3 pilas AA",
      "Configuración vía aplicación de escritorio o interfaz web",
      "Tamaño compacto: 58 x 48 x 15 mm",
      "Graba en formato .WAV sin comprimir en tarjeta microSD",
    ],
    incluye: [
      "Grabadora acústica AudioMoth",
      "Tarjeta microSD",
      "Juego de 3 pilas AA",
      "Opcional: carcasa protectora IPX7 resistente a la intemperie",
    ],
    imagen: imgAudiomoth,
  },
  {
    slug: "bushnell-core-ds-4k-32mp-no-glow",
    nombre: "Bushnell Core DS-4K 32 MP No Glow",
    descripcion:
      "Cámara trampa de doble sensor optimizado día/noche. 32 MP, video 4K, flash invisible.",
    etiquetas: ["Foto-trampeo", "4K"],
    imagen: imgBushnellCoreDs4k,
    especificaciones: [
      "Doble sensor (DS): óptimo de día y de noche",
      "Fotos hasta 32 MP, video 4K",
      "Rango de detección nocturna de hasta 30 metros",
      "Velocidad de disparo: 0.15 s · Recuperación: 0.5 s",
      "Flash No Glow de 36 LED, invisible para fauna y personas",
      "Modo híbrido (foto + video) y múltiples fotos por disparo",
      "Pantalla a color de 1.5 pulgadas",
      "Alimentación: 6 pilas AA + entrada externa 12V",
      "Tarjetas SD compatibles hasta 512 GB (se recomienda 32 GB)",
      "Resistente a la intemperie",
    ],
    incluye: ["Cámara Bushnell Core DS-4K 32 MP No Glow"],
  },
  {
    slug: "bushnell-core-ds-30mp-no-glow",
    nombre: "Bushnell Core DS 30 MP No Glow",
    descripcion:
      "Cámara trampa de alto rendimiento, doble sensor, video Full HD.",
    etiquetas: ["Foto-trampeo", "Full HD"],
    imagen: imgBushnellCoreDs30,
    especificaciones: [
      "Doble sensor (DS): óptimo de día y de noche",
      "Fotos hasta 30 MP, video Full HD 1920x1080 con audio",
      "Velocidad de disparo: 0.2 s · Recuperación: 0.6 s",
      "Flash No Glow de 4 LED, alcance 25-30 metros",
      "Modo híbrido + ráfaga de hasta 5 fotos · Field Scan 2x",
      "Pantalla LCD a color de 1.5 pulgadas",
      "Alimentación: 6 pilas AA, compatible con panel solar externo",
      "Sello de fecha, hora, temperatura, fase lunar y geolocalización GPS",
      "Resistente a la intemperie",
    ],
    incluye: ["Cámara Bushnell Core DS 30 MP No Glow"],
  },
  {
    slug: "rexing-h1-16mp-hi",
    nombre: "Rexing H1 16 MP HI",
    descripcion:
      "Cámara trampa costo-efectiva, rápida velocidad de disparo, video Full HD.",
    etiquetas: ["Foto-trampeo", "Costo-efectiva"],
    imagen: imgRexingH1,
    especificaciones: [
      "Sensor de 8 MP, fotos de hasta 16 MP",
      "Video Full HD 1080p con audio",
      "Velocidad de disparo: 0.2 s",
      "Detección de movimiento de 3 sensores, ángulo de 120°",
      "Flash infrarrojo No Glow de 40 LED, alcance 20 metros",
      "Modo Cam + Video, Time-Lapse y ráfaga de fotos",
      "Pantalla LCD de 2.4 pulgadas",
      "MicroSD hasta 128 GB · 4 u 8 pilas AA o fuente externa 6V",
      "Clasificación de impermeabilidad IP54",
      "Protección por contraseña",
    ],
    incluye: ["Cámara Rexing H1 16 MP"],
  },
  {
    slug: "swarovski-ats-65-hd",
    nombre: "Swarovski ATS 65 HD",
    descripcion:
      "Telescopio terrestre de fluoruro con ocular 20-60x. Alta fidelidad de color, ideal para digiscoping. Incluye trípode Manfrotto.",
    etiquetas: ["Óptica", "Digiscoping"],
    imagen: imgSwarovskiScope,
    especificaciones: [
      "Cristales de fluoruro HD, mínima aberración cromática",
      "Recubrimientos SWARODUR, SWAROTOP y SWAROCLEAN",
      "Ocular de magnificación variable 20-60x",
      "Sistema de enfoque rápido y fino",
      "Carcasa de aleación de magnesio con recubrimiento de goma",
      "Impermeable, relleno de nitrógeno (anti-empañamiento)",
      "Compatible con digiscoping",
    ],
    incluye: [
      "Telescopio terrestre Swarovski ATS 65 HD",
      "Ocular 20-60x",
      "Tapa de objetivo y ocular",
      "Estuche de transporte",
      "Trípode Manfrotto 190L",
    ],
  },
  {
    slug: "hides-fotograficos",
    nombre: "Hides fotográficos",
    descripcion:
      "Estructuras autoarmables o tipo manta para observación indetectable.",
    etiquetas: ["Observación", "Soporte"],
    imagen: imgHides,
    especificaciones: [
      "Hide autoarmable: estructura fija que ofrece un espacio cómodo para tomar datos, fotografiar o usar un scope",
      "Hide tipo manta: diseño liviano que permite desplazarse y cambiar de punto de observación con mayor comodidad",
      "Diseñados para minimizar la detección por parte de la fauna, reduciendo el sesgo en el comportamiento observado",
    ],
    descripcionLarga: [
      {
        texto: "Los hides, también conocidos como escondites fotográficos o puestos de observación, son estructuras diseñadas para que los observadores de vida silvestre, como biólogos, naturalistas y fotógrafos, puedan acercarse a los animales sin ser detectados. Su principal utilidad es permitir un estudio y una documentación más detallados de la biodiversidad, minimizando el impacto humano en el entorno natural. Son además una gran herramienta para la investigación científica, por cuanto permiten observar el comportamiento natural de las especies, como patrones de alimentación, reproducción, interacciones sociales y migración. Esto es muy importante, ya que la presencia humana a menudo altera estos comportamientos, sesgando los datos. Por otra parte, para los fotógrafos, los hides ofrecen la oportunidad de capturar imágenes de alta calidad de animales en su entorno natural, sin perturbarlos. Esto se traduce en fotografías más auténticas y emotivas, ya que los animales se comportan de forma más natural.",
      },
      {
        texto: "En Tetrapoda SpA contamos con hides autoarmables que te permitirán contar con un espacio cómodo para tomar datos, tomar fotografías u observar con un scope. Y si prefieres andar con menos carga, puedes probar un hide tipo manta que te dará la posibilidad de moverte con ligereza y cambiar de spot con mayor comodidad.",
      },
    ],
  },
  {
    slug: "atractores-olfativos",
    nombre: "Atractores olfativos",
    descripcion:
      "Fórmulas específicas para carnívoros, nutrias y ciervos de larga duración.",
    etiquetas: ["Atractores"],
    ctaTexto: "Consultar disponibilidad →",
    especificaciones: [
      "Atrayente para carnívoros: formulado para pumas, zorros y felinos menores; larga duración y amplio alcance",
      "Atrayente para nutrias: combinación de extractos de mariscos y aceites de pescado, aplicable en rocas y troncos",
      "Atrayente para ciervos: replica señales de comunicación entre ciervos, efectivo en época de apareamiento y el resto del año",
    ],
    descripcionLarga: [
      {
        texto: "Tenemos una selección de atractores olfativos de alta calidad diseñados para el monitoreo y estudio de fauna, con fórmulas especializadas para diferentes especies. Estos productos se basan en la biología y comportamiento de los animales para lograr una respuesta efectiva y confiable en el campo.",
      },
      {
        titulo: "Atrayentes para Carnívoros",
        texto: "Nuestros atrayentes para carnívoros están formulados para captar la atención de especies como pumas, zorros y felinos menores. La fórmula de estos atrayentes resultan irresistiblemente llamativos. Este tipo de señuelo está diseñado para perdurar y tener un amplio alcance, asegurando que los animales en un área extensa sean atraídos hacia el punto de monitoreo.",
      },
      {
        titulo: "Atrayentes para Nutrias",
        texto: "Para el monitoreo de nutrias ofrecemos un atrayente especializado que se basa en una combinación de extractos de mariscos y aceites de pescado que son muy atractivos para estas especies. La fórmula está diseñada para ser aplicada en superficies como rocas y troncos, creando un rastro olfativo que guía a las nutrias hacia las cámaras trampa o puntos de observación.",
      },
      {
        titulo: "Atrayentes para Ciervos",
        texto: "Ofrecemos un atrayente especializado para ciervos, diseñado para captar su atención de forma efectiva y segura. Este producto está formulado con una mezcla de compuestos que replican de manera precisa las señales de comunicación que los ciervos usan entre sí, tanto durante la temporada de apareamiento como en otros momentos del año.",
      },
    ],
  },
];
