/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#080B14',
        bg2: '#101727',
        card: '#151E30',
        electric: '#1677FF',
        cyan: '#38D5FF',
        text: '#F5F7FC',
        muted: '#A4AEC0',
      },
      boxShadow: {
        glow: '0 0 40px rgba(22,119,255,0.25)',
        soft: '0 10px 30px rgba(0,0,0,0.35)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(ellipse at top, rgba(22,119,255,0.25), transparent 55%), radial-gradient(ellipse at bottom right, rgba(56,213,255,0.18), transparent 45%)',
      },
    },
  },
  plugins: [],
};
