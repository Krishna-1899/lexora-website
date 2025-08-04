/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      '4xl': '2560px',
    },
    extend: {
      colors: {
        'primary': '#0056A6',
        'secondary': '#2B1E16',
        'accent': '#F59E0B',
        'kajaria-blue': {
          50: '#EBF5FF',
          100: '#D6EBFF',
          200: '#A8D1FF',
          300: '#7AB7FF',
          400: '#4C9DFF',
          500: '#1E83FF',
          600: '#0069E6',
          700: '#0056A6',
          800: '#003D73',
          900: '#00244D',
        },
        'kajaria-brown': {
          50: '#F9F6F5',
          100: '#F3EDEB',
          200: '#E7DBD7',
          300: '#D9C9C3',
          400: '#C0A79E',
          500: '#A68578',
          600: '#8D6B5E',
          700: '#6F5347',
          800: '#4F3C33',
          900: '#2B1E16', // This is the secondary color
        }
      },
      fontFamily: {
        'dm-sans': ['"DM Sans"', 'sans-serif'],
        'jakarta': ['"Plus Jakarta Sans"', 'sans-serif'],
        'quicksand': ['Quicksand', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
      },
      backgroundImage: {
        'footer-pattern': "url('/src/assets/images/shapes/footer-bg-1-1.png')",
      },
      scale: {
        '130': '1.3',
      },
    },
  },
  plugins: [],
} 