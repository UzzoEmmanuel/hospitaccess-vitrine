module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Avenir', 'sans-serif'],
        intro: ['Intro', 'sans-serif'],
      },
      fontWeight: {
        thin: 100,
        light: 300,
        normal: 400,
        medium: 500,
        bold: 700,
      },
      colors: {
        // main colors
        primary: 'var(--primaryColor)', // clear blue
        secondary: 'var(--secondaryColor)', // dark blue
        tertiary: 'var(--tertiaryColor)', // purple
        // background colors
        white: 'var(--whiteColor)', // white
        backgroundLight: 'var(--backgroundLightColor)', // light grey
        backgroundDark: 'var(--backgroundDarkColor)', // grey
        backgroundFirstSpecial: 'var(--backgroundFirstSpecialColor)', // purple
        backgroundSecondSpecial: 'var(--backgroundSecondSpecialColor)', // blue
        backgroundthirdSpecial: 'var(--backgroundthirdSpecialColor)', // pink
        backgroundFourthSpecialColor: 'var(--backgroundFourthSpecialColor)', // pale blue
        backgroundFifthSpecialColor: 'var(--backgroundFifthSpecialColor)', // pale purple
        backgroundSixthSpecialColor: 'var(--backgroundSixthSpecialColor)', // pale grey
        // dark mode colors
        black: 'var(--blackColor)', // black
        // font colors
        fontMedium: 'var(--fontMediumColor)',
        fontLight: 'var(--fontLightColor)',
        fontSpecial: 'var(--fontSpecialColor)', // blue
        fontRedColor: 'var(--fontRedColor)', // red
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
  corePlugins: {
    preflight: true,
  },
};
