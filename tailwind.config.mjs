/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        /* ============================================================
           PALETA DE MARCA — Manual de Identidad Tipográfica y Cromática v2
           Cada color de acento tiene un rol único y exclusivo:
           naranjo = acción/CTA · azul = dato técnico · verde = confirmación
           sage = secundario / superficie oscura de marca
        ============================================================ */
        brand: {
          orange: {
            DEFAULT: '#E8670A',   // naranjo — único color de acción/CTA
            glow:    '#F5954A',   // naranjo claro — hover y acentos sobre fondo oscuro
          },
          black: {
            DEFAULT: '#10110E',   // negro de marca — títulos, texto sobre naranjo
          },
          azul: {
            DEFAULT: '#2A7AB5',   // único color de dato/precisión técnica
          },
          verde: {
            DEFAULT: '#5AAA3C',   // único color de confirmación (checkmarks)
          },
        },

        /* ============================================================
           SUPERFICIE OSCURA DE MARCA — escala derivada de Sage
           Reemplaza la antigua escala "forest" (verde-bosque improvisada,
           ajena al manual). Úsala para secciones "tecnología propia".
        ============================================================ */
        sage: {
          50:  '#F4F6F4',
          100: '#E4E9E3',
          200: '#C9D2C7',
          300: '#A8B8AA',   // = Sage claro del manual
          400: '#8B9C8D',
          500: '#6B7C6E',   // = Sage (DEFAULT del manual)
          600: '#56655A',
          700: '#424D45',
          800: '#2C332E',
          900: '#171C18',   // fondo de secciones oscuras
          DEFAULT: '#6B7C6E',
        },

        /* ============================================================
           NEUTROS CÁLIDOS — reemplaza la escala "stone" fría anterior.
           Los anclajes exactos del manual quedan en 50/100/200/700/900;
           el resto son interpolaciones para una rampa suave.
        ============================================================ */
        stone: {
          50:  '#F4F1EA',   // = Paper (fondo claro base)
          100: '#EDE9E0',   // = Mist (paneles/tarjetas secundarias)
          200: '#CDC9BE',   // = Border (bordes y separadores)
          300: '#B7B2A4',
          400: '#9C978A',
          500: '#827D70',
          600: '#5C584E',
          700: '#44403C',   // = Gris de párrafos
          800: '#2A2723',
          900: '#10110E',   // = Negro de marca
          DEFAULT: '#827D70',
        },

        /* Alias semánticos directos, por si conviene nombrarlos así en vez
           de vía la escala stone (mismo valor, mismo resultado visual). */
        paper:  '#F4F1EA',
        mist:   '#EDE9E0',
        border: '#CDC9BE',

        /* ============================================================
           EXTENSIÓN OPCIONAL — Tierra (solo Catálogo de equipos)
           Uso restringido: no reemplaza ni compite con la paleta núcleo.
        ============================================================ */
        earth: {
          50:  '#faf7f3',
          100: '#f0e9df',
          200: '#ddd0be',
          300: '#c3b094',
          400: '#a38a68',
          500: '#6b4f2f',
          600: '#594224',
          700: '#48361d',
          800: '#362816',
          900: '#241a0e',
          DEFAULT: '#6b4f2f',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Montserrat"', '"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
