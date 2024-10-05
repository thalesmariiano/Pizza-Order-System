/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        'menu': '0px 15px 20px rgba(0,0,0,.05)',
        'menu2': '0px 5px 5px rgba(0,0,0,0.05)',
        'cart-button': '0px 10px 5px rgba(255, 163, 42, .5)'
      }
    },
  },
  plugins: [],
}

