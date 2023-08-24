const { nextui } = require('@nextui-org/react')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  darkMode: 'class',
  plugins: [
    nextui({
      layout: {
        radius: {
          small: '3px',
          medium: '6px',
          large: '8px'
        }
      },
      themes: {
        dark: {
          colors: {
            danger: '#ef4444',
            primary: {
              DEFAULT: '#ee5533'
            },
            focus: '#ee5533'
          }
        }
      }
    })]
}
