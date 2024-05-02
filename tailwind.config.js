const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,tsx,ts,js,jsx,css,scss,sass,less,json}'],
  theme: {
    extend: {
      transitionProperty: {
        height: 'height'
      }
    }
  },
  daisyui: {
    themes: [
      {
        light: {
          'color-scheme': 'light',
          'primary': 'oklch(49.12% 0.3096 275.75)',
          'secondary': 'oklch(69.71% 0.329 342.55)',
          'secondary-content': 'oklch(98.71% 0.0106 342.55)',
          'accent': 'oklch(76.76% 0.184 183.61)',
          'neutral': '#000000',
          'neutral-content': '#FFFFFF',
          'base-100': 'oklch(100% 0 0)',
          'base-200': '#F2F2F2',
          'base-300': '#E5E6E6',
          'base-content': '#1f2937'
        }
      }
    ]
  },
  variants: {},
  plugins: [
    require('tailwindcss'),
    require('@tailwindcss/typography'),
    require('autoprefixer'),
    require('daisyui'),
    plugin(function ({ addBase, config }) {
      addBase({
        a: {
          'color': '#6c5ce7',
          'textDecoration': 'none',
          '&:hover': {
            textDecoration: 'underline'
          }
        }
      })
    })
  ],
  corePlugins: {
    preflight: false
  }
}
