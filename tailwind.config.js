/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Inter',
      secondary: 'Open Sans',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1038px',
    },
    extend: {
      colors: {
        primary: {
          100: '#898846',
          200: '#897146',
          300: '#605631',
          400: '#896d46',
          500: '#604c31',
        },
        neutral: {
          100: '#ffffff',
          200: '#dedee3',
          300: '#9797a1',
          400: '#595962',
          500: '#131316',
        },
        page: '#fcfcff',
      },
      backgroundImage: {
        hero: "url('/src/assets/images/contact/437.jpg')",
        contact: "url('/src/assets/images/hero/1515.jpg')",

      },
    },
  },
  plugins: [],
};
