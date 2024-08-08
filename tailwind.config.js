/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage :{
        'img' : 'url(assets/headerImg11.jpg)'
      },
      width :{
        '900':'1330px',
      },
      height:{
        'he':'450px',
      },
      
    },
  },
  plugins: [],
}