module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        backgroundColorGray: '#F6F6F6',
        primaryBlue: '#204F88',
        primaryBlack: '#222222',
        secondaryBlack: '#261800',
        primaryGray: '#7A7A7A',
        secondaryGray: '#7F7F7F',
      },
    },
  },
  plugins: [],
}
