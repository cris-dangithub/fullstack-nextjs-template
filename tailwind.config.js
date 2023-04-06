/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    extend: {
      colors: {},
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        'app-card': '0px 2px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
