/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5B8C51",
        secondary: "#EDDD5E",
        aColor: "#A44A3F",
        bgColor: "#F8F7F0",
        tColor: "#404A3D",
        primaryDark: '#171923',
        secondaryDark: '#4A5568', 
      },
    },
  },
  plugins: [],
}
