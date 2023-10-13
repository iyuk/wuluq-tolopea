/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ''),
    files: ['./public/**/*.{html,js}'],
  },
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
  
  theme: {
    extend: {
      fontFamily: {
        jakarta : 'Plus Jakarta Sans'
      },
      colors: {
        'tolopea': {
          '50': '#f3f1ff',
          '100': '#ece5ff',
          '200': '#daceff',
          '300': '#bfa7ff',
          '400': '#a176ff',
          '500': '#863fff',
          '600': '#7a18ff',
          '700': '#6e07fa',
          '800': '#5b05d2',
          '900': '#4c06ac',
          '950': '#190041',
      },      
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('taos/plugin')
  ],
}

