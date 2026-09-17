/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#1E7E34',       // Verde Principal da Logo (Destaque e Ações)
          primaryHover: '#155d27',  // Verde Hover para botões
          dark: '#0B2912',          // Verde Florestal Escuro (Top Bar e Rodapé)
          accent: '#28A745',        // Verde Vibrante para detalhes ativos
          lightBg: '#F5F3ED',       // Fundo mineral quente para alternância de seções
        },
        slate: {
          heading: '#1A202C',       // Títulos (quase preto, evita #000 puro)
          body: '#4A5568',          // Textos corridos e descrições
          muted: '#5F6B62',         // Textos secundários com contraste acessível
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
