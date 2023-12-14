/** @type {import('tailwindcss').Config} */
module.exports = {



  theme: {
    extend: {
      backgroundColor: {
        'Black': 'var(--Black, #2A2A2A)',
      },
    },
  },

  
 
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}