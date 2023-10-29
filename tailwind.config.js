/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Red Hat Display','sans-serif']
      },
      colors:{
        PaleBlue: 'hsl(225, 100%, 94%)',
        BrightBlue: 'hsl(245, 75%, 52%)',
        BrightBlueOpacity: 'hsl(245, 75%, 52%,0.5)',
        VeryPaleBlue: 'hsl(225, 100%, 98%)',
        DesaturatedBlue: 'hsl(224, 23%, 55%)',
        DarkBlue: 'hsl(223, 47%, 23%)'
      }
    },
  },
  plugins: [],
}
