/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Correct paths for Next.js app/pages router
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Define extensions here
    extend: {
      colors: {
        charcoal: "#1a1a1a",
        accentOrange: "#ff7b00",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};