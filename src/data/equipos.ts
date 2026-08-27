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
    descripcionLarga: [
      {
        texto: "El Song Meter Mini Bat 2 AA es la herramienta ideal para la detección y monitoreo de murciélagos. Combina un diseño ultracompacto y resistente con un rendimiento excepcional, haciendo que la recolección de datos en terreno sea más fácil y eficiente que nunca. Es la opción perfecta para proyectos de investigación, estudios de impacto ambiental y monitoreo a largo plazo.",
      },
      {
        titulo: "Compacto y ligero",
        texto: "Su diseño pequeño y ergonómico, junto con su peso ligero (424 g con baterías), facilita su transporte y despliegue en cualquier entorno, desde bosques densos hasta zonas urbanas.",
      },
      {
        titulo: "Micrófono de alta fidelidad",
        texto: "Equipado con un micrófono ultrasónico de bajo ruido, el Mini Bat 2 AA captura vocalizaciones de murciélagos en alta calidad, registrando en formato Full Spectrum o Zero Crossing. Esto asegura que obtengas los datos más precisos para tu análisis.",
      },
      {
        titulo: "Batería de larga duración",
        texto: "Gracias a su configuración de 8 pilas AA, puede grabar hasta 50 noches de 10 horas seguidas, lo que reduce la frecuencia de las visitas al sitio y el costo de mantenimiento.",
      },
      {
        titulo: "Fácil de usar",
        texto: "Configura la grabadora de forma inalámbrica a través de una aplicación móvil (iOS o Android) mediante Bluetooth. Esto te permite programar el horario de grabación, revisar el estado del equipo y configurar la ubicación GPS de forma rápida y sencilla, sin necesidad de cables ni computadoras en terreno.",
      },
      {
        titulo: "Resistente a la intemperie",
        texto: "Su carcasa de policarbonato con clasificación IP67 la hace completamente impermeable y resistente al polvo, permitiendo su despliegue en las condiciones ambientales más exigentes.",
      },
      {
        titulo: "Opciones de montaje versátiles",
        texto: "Incluye un soporte para trípode y orificios para candado, lo que te permite asegurar la grabadora en árboles, postes o cualquier otra estructura de manera estable y protegida.",
      },
      {
        texto: "Con el Song Meter Mini Bat 2 AA en tu proyecto, obtendrás datos de alta calidad de forma confiable, permitiéndote concentrarte en la investigación y el análisis.",
      },
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
    descripcionLarga: [
      {
        texto: "La AudioMoth es una grabadora acústica compacta y de bajo consumo, diseñada para revolucionar el monitoreo de la biodiversidad y los paisajes sonoros. Desarrollada por un equipo de investigadores de la Universidad de Oxford, se ha convertido en una herramienta esencial y económica, ideal para científicos, consultores, educadores y conservacionistas que buscan una solución de alto rendimiento sin un alto costo.",
      },
      {
        titulo: "Versatilidad de frecuencia",
        texto: "La AudioMoth es sensible tanto a las frecuencias audibles como a las ultrasónicas. Puede grabar audio sin comprimir desde 8 kHz hasta 384 kHz, lo que la hace perfecta para estudios de vocalizaciones de aves, ranas, insectos y, especialmente, murciélagos.",
      },
      {
        titulo: "Diseño de código abierto",
        texto: "Al ser un dispositivo de código abierto, la comunidad científica ha contribuido a su desarrollo y mejora constante. Esto garantiza una gran flexibilidad y adaptabilidad a diferentes proyectos de investigación.",
      },
      {
        titulo: "Bajo consumo energético",
        texto: "Funciona con solo 3 pilas AA, lo que le permite tener una larga autonomía para despliegues prolongados en el campo. Su eficiencia energética es uno de sus mayores puntos fuertes.",
      },
      {
        titulo: "Fácil de configurar",
        texto: "La configuración se realiza a través de una aplicación de escritorio o una interfaz web simple. Esto permite programar con precisión los horarios de grabación, la duración y la frecuencia de muestreo de cada sesión.",
      },
      {
        titulo: "Resistente y discreta",
        texto: "Su tamaño extremadamente compacto (58 x 48 x 15 mm) y su diseño de bajo perfil facilitan su camuflaje en el entorno natural. Para protección adicional contra la intemperie, se puede utilizar con una carcasa protectora.",
      },
      {
        titulo: "Grabaciones de alta calidad",
        texto: "Graba archivos de audio sin comprimir en formato .WAV en una tarjeta microSD, lo que garantiza la integridad de los datos para un análisis robusto y confiable.",
      },
      {
        texto: "La AudioMoth te ofrece una solución potente y accesible para capturar la riqueza sonora de cualquier ecosistema, proporcionando datos de alta calidad para tus investigaciones y proyectos de monitoreo.",
      },
    ],
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
    descripcionLarga: [
      {
        texto: "La Bushnell Core DS-4K 32 MP No Glow es una cámara trampa de alta gama que ofrece una calidad de imagen excepcional. Su sensor Dual Sensor (DS) optimiza el rendimiento tanto de día como de noche. De día, captura imágenes fijas con una resolución de hasta 32 MP y graba videos en 4K. De noche, un sensor dedicado captura imágenes de baja luminosidad con un rango de detección de hasta 30 metros. Esta configuración de doble sensor garantiza que la calidad no se degrade sin importar la hora del día.",
      },
      {
        texto: "Esta cámara está diseñada para ser rápida y no perderse ningún momento. Posee una velocidad de disparo de 0.15 segundos y un tiempo de recuperación de 0.5 segundos. Esto significa que puede capturar múltiples imágenes o videos de forma rápida y consecutiva, ideal para seguir el rastro de la fauna en movimiento. Su flash de 36 LED No Glow es completamente invisible para los animales y las personas, lo que asegura que la cámara pase desapercibida.",
      },
      {
        titulo: "Modos de captura",
        texto: "Ofrece un modo híbrido que permite capturar tanto una foto como un video en cada activación, así como la posibilidad de tomar múltiples fotos por disparo.",
      },
      {
        titulo: "Pantalla",
        texto: "Incluye una pantalla a color de 1.5 pulgadas para una fácil configuración y revisión de las imágenes en el campo.",
      },
      {
        titulo: "Alimentación",
        texto: "Funciona con seis pilas AA, lo que le da una larga duración, y cuenta con una entrada para una fuente de alimentación externa de 12V.",
      },
      {
        titulo: "Diseño",
        texto: "Es una cámara resistente a la intemperie, construida para soportar las duras condiciones del exterior.",
      },
      {
        titulo: "Conectividad",
        texto: "Acepta tarjetas de memoria SD de hasta 512 GB (se recomienda uso de 32 GB).",
      },
      {
        texto: "Esta y muchas otras opciones de configuración hacen de la Bushnell Core DS-4K 32 MP No Glow la herramienta perfecta para el monitoreo de fauna. Su combinación de alta resolución, rapidez y tecnología invisible la convierte en una opción ideal para investigadores y entusiastas de la naturaleza.",
      },
    ],
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
    descripcionLarga: [
      {
        texto: "La Bushnell Core DS 30 MP No Glow es una cámara trampa de alto rendimiento, diseñada para capturar imágenes y videos de calidad superior. Al igual que otros modelos de la serie Core DS, utiliza un sistema de Doble Sensor (DS), con un sensor optimizado para la luz del día y otro para las condiciones de poca luz. Esto garantiza que las fotos diurnas sean nítidas y ricas en color, mientras que las nocturnas tengan un alto contraste y una iluminación uniforme. Ofrece una resolución fotográfica de hasta 30 MP y graba videos en Full HD (1920x1080p) con audio.",
      },
      {
        texto: "Esta cámara es extremadamente rápida, con una velocidad de disparo de 0.2 segundos y un tiempo de recuperación de 0.6 segundos. Esto minimiza la posibilidad de perder una toma, ya que la cámara está lista para volver a disparar casi instantáneamente. Su flash No Glow de 4 LED es completamente invisible para los animales y las personas, lo que la hace ideal para monitoreo de fauna sin ser detectada. El alcance del flash es de hasta 25-30 metros.",
      },
      {
        titulo: "Modos de captura",
        texto: "Incluye un modo híbrido que captura una foto y un video en cada activación, así como la posibilidad de tomar múltiples fotos por disparo (hasta 5). También cuenta con la función Field Scan 2x, que permite capturar imágenes a intervalos programados.",
      },
      {
        titulo: "Pantalla",
        texto: "Posee una pantalla LCD a color de 1.5 pulgadas para una fácil configuración y para revisar las imágenes y videos en el campo.",
      },
      {
        titulo: "Alimentación y almacenamiento",
        texto: "Funciona con seis pilas AA y es compatible con tarjetas de memoria SD. También puede ser usada con un panel solar externo.",
      },
      {
        titulo: "Resistencia",
        texto: "Construida para resistir las inclemencias del tiempo, es robusta y duradera, adecuada para las condiciones exteriores más exigentes.",
      },
      {
        titulo: "Sellos de información",
        texto: "Las fotos y videos capturados incluyen un sello con la fecha, la hora, la temperatura y la fase lunar, además de la capacidad de geolocalización GPS.",
      },
      {
        texto: "La Bushnell Core DS 30 MP No Glow es una opción excelente para quienes buscan una cámara trampa que combine alta resolución, velocidad y la discreción de la tecnología No Glow.",
      },
    ],
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
    descripcionLarga: [
      {
        texto: "La Rexing H1 es una cámara trampa diseñada para ser una herramienta efectiva y confiable para monitoreo de fauna. Posee un sensor de 8 MP que captura imágenes fijas de hasta 16 MP y graba videos en Full HD (1080p) con audio. Esta cámara es capaz de capturar imágenes y videos claros tanto de día como de noche.",
      },
      {
        texto: "La Rexing H1 destaca por su velocidad de disparo ultrarrápida de 0.2 segundos, lo que minimiza la posibilidad de perder una toma. Su sistema de detección de movimiento de 3 sensores (uno frontal y dos laterales) ofrece un amplio ángulo de detección de 120 grados, asegurando que los sujetos sean capturados tan pronto como entren en el campo de visión. El flash infrarrojo No Glow con 40 LED ilumina sujetos a una distancia de hasta 20 metros, permitiendo una excelente visión nocturna.",
      },
      {
        titulo: "Modos de captura",
        texto: "Ofrece un modo \"Cam + Video\" que permite tomar fotos y videos simultáneamente con cada activación. También cuenta con funciones de \"Time-Lapse\" y ráfaga de fotos.",
      },
      {
        titulo: "Pantalla",
        texto: "Incluye una pantalla LCD de 2.4 pulgadas para una fácil configuración y revisión de los archivos multimedia.",
      },
      {
        titulo: "Almacenamiento y alimentación",
        texto: "Es compatible con tarjetas de memoria micro SD de hasta 128 GB. Funciona con 4 u 8 pilas AA, y también puede ser alimentada con una fuente de alimentación externa de 6V.",
      },
      {
        titulo: "Resistencia",
        texto: "Con una clasificación de impermeabilidad IP54, la cámara está protegida contra la lluvia y el polvo, lo que la hace adecuada para su uso en exteriores.",
      },
      {
        titulo: "Seguridad",
        texto: "La cámara puede protegerse con una contraseña para prevenir el acceso no autorizado.",
      },
      {
        texto: "La Rexing H1 16 MP es una cámara trampa con una excelente relación calidad-precio, ideal para monitoreo de fauna, con una rápida velocidad de disparo y un rendimiento confiable tanto de día como de noche.",
      },
    ],
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
    descripcionLarga: [
      {
        texto: "El Swarovski ATS 65 HD es el telescopio terrestre de alta gama ideal para observadores de aves y amantes de la naturaleza que buscan un equipo compacto y ligero sin comprometer la calidad de la imagen. Combinado con el ocular de 20-60x, ofrece un rango de magnificación versátil y una luminosidad excepcional, incluso en condiciones de poca luz.",
      },
      {
        titulo: "Óptica de alta definición (HD)",
        texto: "Los cristales de fluoruro de alta calidad minimizan la aberración cromática, produciendo imágenes con una fidelidad de color excepcional y un contraste asombroso. Los detalles más sutiles, como el plumaje de las aves o el pelaje de los mamíferos, se aprecian con una claridad impresionante.",
      },
      {
        titulo: "Recubrimientos SWARODUR, SWAROTOP y SWAROCLEAN",
        texto: "Estos recubrimientos patentados garantizan imágenes nítidas y brillantes en todo el rango de magnificación. El recubrimiento SWAROCLEAN en la lente exterior facilita la limpieza de suciedad, polvo y agua, manteniendo la calidad óptica intacta en cualquier condición.",
      },
      {
        titulo: "Ocular 20-60x de gran angular",
        texto: "Este ocular de magnificación variable te permite pasar de un campo de visión amplio (20x) para localizar rápidamente tu objetivo, a un aumento de 60x para observar detalles minuciosos a larga distancia. Su diseño ergonómico y el gran relieve ocular hacen que la observación sea cómoda, incluso para quienes usan gafas.",
      },
      {
        titulo: "Manejo suave y preciso",
        texto: "El sistema de enfoque rápido y fino permite ajustar la nitidez con precisión, asegurando que el sujeto esté siempre perfectamente enfocado.",
      },
      {
        titulo: "Cuerpo robusto y ligero",
        texto: "Con su carcasa de aleación de magnesio y recubrimiento de goma resistente, el telescopio está diseñado para soportar las exigencias del trabajo de campo. Es duradero y resistente a los golpes.",
      },
      {
        titulo: "Impermeable y relleno de nitrógeno",
        texto: "El cuerpo está sellado y purgado con nitrógeno, lo que previene el empañamiento interno de las lentes y asegura que el telescopio sea completamente impermeable, ideal para usar en climas húmedos o con lluvia.",
      },
      {
        titulo: "Compatibilidad con digiscoping",
        texto: "La combinación de alta calidad óptica y su diseño robusto lo convierte en una excelente herramienta para la fotografía y videografía a través del telescopio (digiscoping), permitiéndote capturar imágenes de alta calidad con tu smartphone o cámara.",
      },
      {
        texto: "El Swarovski ATS 65 HD es una inversión en calidad y rendimiento que te permitirá llevar tus observaciones de la naturaleza al siguiente nivel.",
      },
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
