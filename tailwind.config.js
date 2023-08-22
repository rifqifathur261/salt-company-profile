/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1BA0E1',
        'grey': '#B6B6B6',
      },
    }
  },
  plugins: [],
}

