const { nextui } = require('@nextui-org/react')

const palette = {
  primary: '#ee5533',
  background: '#1c153d',
  text: { light: 'rgba(0,0,0,0.88)', dark: 'rgba(255,255,255,0.85)' }
}

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
  plugins: [nextui({
    layout: {
      spacingUnit: 4, // in px
      disabledOpacity: '.5', // this value is applied as opacity-[value] when the component is disabled
      dividerWeight: '1px', // h-divider the default height applied to the divider component
      fontSize: {
        tiny: '0.75rem', // text-tiny
        small: '0.875rem', // text-small
        medium: '1rem', // text-medium
        large: '1.125rem' // text-large
      },
      lineHeight: {
        tiny: '1rem', // text-tiny
        small: '1.25rem', // text-small
        medium: '1.5rem', // text-medium
        large: '1.75rem' // text-large
      },
      radius: {
        small: '8px', // rounded-small
        medium: '12px', // rounded-medium
        large: '14px' // rounded-large
      },
      borderWidth: {
        small: '1px', // border-small
        medium: '2px', // border-medium (default)
        large: '3px' // border-large
      }
    },

    themes: {
      light: {
        colors: {
          background: '#FFFFFF',
          foreground: '#11181C',
          default: '#ff0000',
          defaultForeground: palette.text.light,
          primary: {
            DEFAULT: palette.primary,
            foreground: '#000000'
          },
          focus: palette.primary
        }
      },
      dark: {
        colors: {
          background: palette.background,
          foreground: '#ECEDEE',
          default: '#31256a',
          'default-foreground': palette.text.dark,
          primary: {
            DEFAULT: palette.primary,
            foreground: '#000000'
          },
          focus: palette.primary
        }
      }
    }
  })]
}
