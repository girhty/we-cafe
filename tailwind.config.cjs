module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f3ef',
          100: '#e5e0d8',
          500: '#a67c52',
          700: '#6b4c33',
          900: '#3b2a1e',
          accent: '#c94f2c'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
};