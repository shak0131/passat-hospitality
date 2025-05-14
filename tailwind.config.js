/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#B38A4C',
          black: '#1A1A1A',
          offwhite: '##f0eadc',
          cream: '#f0eadc',  // Updated color to match logo background
        },
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'serif'], // For PASSAT
        montserrat: ['var(--font-montserrat)', 'sans-serif'], // For HOSPITALITY
        serif: ['var(--font-cormorant)', 'serif'],
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}; 