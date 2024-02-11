// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
//   darkMode: 'class',
//   theme: {
//     extend: {
//       fontFamily: {
//         inter: ['Inter', 'sans-serif'],
//       },
//     },
//   },
//   plugins: [require('tailwindcss'), require('autoprefixer')],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
    },
  },
},
  plugins: [],
}