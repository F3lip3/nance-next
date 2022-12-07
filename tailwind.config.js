/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
      '2xl': 24,
      '3xl': 32
    },
    colors: {
      black: '#000',
      chestnut: {
        600: '#B7524E'
      },
      cyan: {
        600: '#69AEDE',
        700: '#5098C9'
      },
      gray: {
        100: '#C4C4CC',
        200: '#E1E1E6',
        400: '#7C7C8A',
        800: '#202024',
        900: '#121214'
      },
      green: {
        400: '#4C7b54',
        700: '#0F484F'
      },
      transparent: 'transparent',
      white: '#fff'
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
      gridTemplateAreas: {
        toast: ['title action', 'description action']
      },
      gridTemplateColumns: {
        toast: 'auto max-content'
      },
      gridTemplateRows: {
        toast: 'auto auto'
      }
    }
  },
  plugins: [require('@savvywombat/tailwindcss-grid-areas')]
};
