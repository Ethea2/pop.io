/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'pink-main': '#F26CA7',
      'peach': '#F0A7A0',
      'purple-light': '#947BD3',
      'purple-dark': '#5E4AE3',
      'blue-main': '#05299E',
      'gray-dark-main': '#393E46',
      'white': '#FFFFFF',
      'black': '#000000',
      'transparent': 'transparent'
    },
    
    fontFamily: {
      sans: ['Rubik', 'sans-serif'],
      mono: ['Fira Mono', 'monospace']
    },
    extend: {}
  },
  plugins: []
};