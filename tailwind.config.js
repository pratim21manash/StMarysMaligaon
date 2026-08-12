/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif']
      },
      colors: {
        maroon: {
          50: '#fdf2f3',
          100: '#fbe6e8',
          200: '#f5c9cd',
          300: '#ed9fa5',
          400: '#dd6b73',
          500: '#c94a54',
          600: '#b02d3a',
          700: '#8a1e2a',
          800: '#7A0C1E',
          900: '#5c0a17',
          950: '#3d0510'
        },
        gold: {
          50: '#fdf8ef',
          100: '#faedd1',
          200: '#f4dba3',
          300: '#ecc470',
          400: '#D9A441',
          500: '#c48d32',
          600: '#a5722a',
          700: '#835826',
          800: '#6b4624',
          900: '#5a3b21'
        }
      },
      boxShadow: {
        '3xl': '0 25px 60px -15px rgba(122, 12, 30, 0.25)'
      }
    }
  },
  plugins: []
}
