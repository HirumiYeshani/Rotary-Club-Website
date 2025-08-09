/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     extend: {
      colors: {
        'rotary-blue': '#00579E',
        'rotary-gold': '#F7A600',
        'rotary-red': '#EE3E42',
        'rotary-green': '#009B77',
        'rotary-light': '#E6E7E8',
      },
    },
  plugins: [],
}
}

