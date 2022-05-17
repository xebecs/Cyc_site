module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1680px',
    },
    colors: {
      VividViolet: '#83439C',
      Orchid: '#C158E8',
      Frog: '#4DE84D',
      PrairieSand: '#9C3524',
      FlamePea: '#E85941',
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      purple: '#3f3cbb',
      midnight: '#121063',
      metal: '#565584',
      silver: '#ecebff',
      'bubble-gum': '#ff77e9',
      bermuda: '#78dcca',
    },
  },
  plugins: [],
}
