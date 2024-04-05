/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#286E34',
        secondary: '#333333'
      },
      height:{
        'box':'32rem',
      },
      width:{ 
        'box2':'700rem',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem"
        },
        fontFamily: {
          'poppins': ['Poppins']
        }
    
      }
    },
  },
  plugins: [],
}

