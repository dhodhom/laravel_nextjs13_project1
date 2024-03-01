const { sizeConst } = require('./sizeConst');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './main_apps/**/*.{js,ts,jsx,tsx,mdx}',
    './main_apps/**/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      padding: sizeConst(),
      margin: sizeConst(),
      height: sizeConst(),
      width: sizeConst(),
      gap: sizeConst(),
      fontSize: sizeConst(),
      lineHeight: sizeConst(),
      borderRadius: sizeConst(),
      borderWidth: sizeConst(),
      spacing: sizeConst(),
      inset: sizeConst(),
      letterSpacing: sizeConst(),
      minHeight: sizeConst(),
      minWidth: sizeConst(),
      maxWidth: sizeConst(),
      maxHeight: sizeConst(),
      colors: {
        "dark-blue": "#272D3D",
        "light-blue": "#356CFF",
        "dark-grey": "#606060",
        "light-blue": "#F4F4F5",
        "white": "#FFFFFF",
      }
    },
  },
  plugins: [],
}
