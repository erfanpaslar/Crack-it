/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'gray-050': '#EBEBEB',
      'gray-100': '#D6D6D6',
      'gray-200': '#ADADAD',
      'gray-300': '#858585',
      'gray-400': '#5C5C5C',
      'gray-500': '#333333',
      'gray-600': '#292929',
      'gray-700': '#1F1F1F',
      'gray-800': '#141414',
      'gray-900': '#050505',

      'green-500': '#37E666',
      'red-500': '#E63751',
      'pink-500': '#E62C9E',
      'blue-500': '#2AAEEB',
      'yellow-500': '#EBC72A',
      'orange-500': '#E86A38',
      'purple-500': '#8438E8',
      'aqua-500': '#2ADBC1',
    },
    fontFamily: {
      roboto_mono: ['Roboto Mono', 'monospace'],
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addBase({
        h1: {
          fontSize: 40,
          lineHeight: '64px',
          fontWeight: 700,
        },
        h2: {
          fontSize: 32,
          lineHeight: '48px',
          fontWeight: 700,
        },
        h3: {
          fontSize: 24,
          lineHeight: '32px',
          fontWeight: 700,
        },
        h4: {
          fontSize: 20,
          lineHeight: '32px',
          fontWeight: 700,
        },
        h5: {
          fontSize: 18,
          lineHeight: '24px',
          fontWeight: 700,
        },
        h6: {
          fontSize: 16,
          lineHeight: '20px',
          fontWeight: 700,
        },
      });
      addComponents({
        '.sub-1': {
          fontSize: 18,
          lineHeight: '24px',
          fontWeight: 600,
        },
        '.sub-2': {
          fontSize: 14,
          lineHeight: '20px',
          fontWeight: 600,
        },
        '.body-1': {
          fontSize: 18,
          lineHeight: '20px',
          fontWeight: 400,
        },
        '.body-2': {
          fontSize: 14,
          lineHeight: '20px',
          fontWeight: 400,
        },
        '.body-3': {
          fontSize: 12,
          lineHeight: '16px',
          fontWeight: 400,
        },
      });
    }),
  ],
};
