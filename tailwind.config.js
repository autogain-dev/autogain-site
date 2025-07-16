/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        bounceIn: 'bounceIn 1s ease-out'
      },
      keyframes: {
        bounceIn: {
          '0%': { opacity: 0, transform: 'scale(0.5)' },
          '60%': { opacity: 1, transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' }
        }
      }
    },
  },
  plugins: [],
}
