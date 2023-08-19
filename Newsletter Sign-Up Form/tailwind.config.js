/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(4, 100%, 67%)',
        'dark-slate-gray': 'hsl(234, 29%, 20%)',
        'charcoal-gray': 'hsl(235, 18%, 26%)',
        gray: 'hsl(231, 7%, 60%)',
      },
    },
  },
  plugins: [],
};
