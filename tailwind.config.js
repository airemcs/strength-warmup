/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      roboto: 'Roboto',
      rubik: 'Rubik',
      kanit: 'Kanit',
      bebas: 'Bebas Neue',
      teko: 'Teko',
      cairo: 'Cairo',
    }
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      "light",
      "dark",
      "emerald",
      "dracula",
    ],
  },
}

