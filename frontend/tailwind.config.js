/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#664914',
          light: '#906E31',
        },
        secondary: {
          DEFAULT: '#44403C',
          light: '#79716B',
        },
        accent: {
          DEFAULT: '#FFEEB1',
          dark: '#1C1917',
        },
        background: {
          DEFAULT: '#F5F3EF',
          light: '#F5F5F5',
        },
        border: {
          DEFAULT: '#D7D3D0',
          light: 'rgba(255, 255, 255, 0.3)',
        }
      },
      fontFamily: {
        'butler': ['Butler', 'serif'],
        'figtree': ['Figtree', 'sans-serif'],
      },
      fontSize: {
        'hero': ['78px', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        'title': ['72px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'heading': ['40px', { lineHeight: '1.6', letterSpacing: '-0.02em' }],
        'subtitle': ['20px', { lineHeight: '1.5' }],
        'body': ['16px', { lineHeight: '1.5' }],
        'small': ['14px', { lineHeight: '1.43' }],
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}
