/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
  theme: {
    extend: {
      fontFamily:{
        'Albert' :["Albert Sans"],
        'Oswald' :["Oswald", 'sans-serif'],
   
      },
      colors: {
        'sky-blue': '#5D9CEC', 
        'Charcoal' : '#3C3B3D',
        'Grass': '#A0D468',
      },
    },
  },
  plugins: [],
}

