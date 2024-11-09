/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   roboto: ["Roboto", sans - serif],
      //   poppins: ["Poppins", sans - serif],
      // },
      width: {
        'calc-100-10px': 'calc(100% - 20px)',  // Custom calculated width
      },
    },
    screens: {
      // Add custom breakpoints if needed
      'xs': '500px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [
    require('daisyui'),
    require('tailwind-scrollbar'),
  ],
}