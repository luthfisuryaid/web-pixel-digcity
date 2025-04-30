/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'digcity-orange': '#FF9D00', // Warna orange dari logo
        'digcity-yellow': '#FFCD00', // Warna kuning dari logo
        'digcity-blue': '#00B7E5',   // Warna biru dari logo
        'digcity-teal': '#008999',   // Warna teal dari logo
      },
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'cursive'],
        'body': ['"Roboto"', 'sans-serif'],
      },
      backgroundImage: {
        'pixel-pattern': "url('/src/assets/pixel-pattern.png')",
      },
      animation: {
        'pixel-float': 'pixel-float 3s ease-in-out infinite',
      },
      keyframes: {
        'pixel-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
