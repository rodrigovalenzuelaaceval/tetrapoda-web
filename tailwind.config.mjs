/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        /* ============================================================
           COLORES DE MARCA — extraídos de los logos Tetrapoda
           (logo solo.webp + ICONO PLUMA.jpg)
           - Naranja vibrante: la pluma
           - Negro texto
           - Azul y Verde: línea inferior
        ============================================================ */
        brand: {
          orange: {
            DEFAULT: '#FF7C00',   // naranja vibrante principal (acento/CTA)
            bright:  '#FF7300',   // naranja puro anunciado en la pluma
            flame:   '#FF3E03',   // rojo-naranja (extremo del degradado)
            glow:    '#FFB45C',   // naranja claro (hover suave / detalles)
          },
          black: {
            DEFAULT: '#10110E',   // negro del texto del logo
            ink:     '#0C0D09',   // negro profundo para fondos
          },
          azul: {
            DEFAULT: '#017DCC',   // azul de la línea inferior
            deep:    '#0B5E94',   // azul profundo (tintas científicas)
          },
          verde: {
            DEFAULT: '#5AB519',   // verde de la línea inferior
            deep:    '#3D7A10',   // verde oscuro (detalles)
          },
        },

        /* ============================================================
           PALETA COMPLEMENTARIA — outdoor / wildlife / científica
           tonos tierra, verdes bosque profundos y grises piedra
        ============================================================ */
        forest: {
          50:  '#f2f6ee',
          100: '#e0ebd7',
          200: '#c2d7b0',
          300: '#9cbd81',
          400: '#6f9b4f',
          500: '#1f5c36',   // verde bosque
          600: '#1a4a2c',
          700: '#143a23',
          800: '#0e2a19',
          900: '#0a1f12',
          DEFAULT: '#1f5c36',
        },
        earth: {
          50:  '#faf7f3',
          100: '#f0e9df',
          200: '#ddd0be',
          300: '#c3b094',
          400: '#a38a68',
          500: '#6b4f2f',   // marrón tierra
          600: '#594224',
          700: '#48361d',
          800: '#362816',
          900: '#241a0e',
          DEFAULT: '#6b4f2f',
        },
        stone: {
          50:  '#f6f7f6',
          100: '#e8ecea',
          200: '#d2d9d6',
          300: '#b3beba',
          400: '#8c9995',
          500: '#5f6c68',
          600: '#4c5654',
          700: '#3b4341',
          800: '#2b3130',
          900: '#1d2221',   // gris piedra profundo
          DEFAULT: '#5f6c68',
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
