/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          800: "#4d4d4d",
          500: "#777777",
          200: "#f5f5f5",
          100: "#fefefe",
        },
        brick: {
          500: "#af5b5e",
          100: "#cc9a9a",
        },
        green: "#5dc2af",
      },
    },
  },
  plugins: [],
};
