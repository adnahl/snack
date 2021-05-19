const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    colors: {
      blue: ['#130282'],
      white: ['#f1f1f1'],
      green: ['#45e6cb'],
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  variants: {
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
    }
  }
}