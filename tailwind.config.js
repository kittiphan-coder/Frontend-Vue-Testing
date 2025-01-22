/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#243c5a',
        'primary':'#2F17FF',
        'secondary':'#1908B8',
      },
    },
  },
  plugins: [],
}

