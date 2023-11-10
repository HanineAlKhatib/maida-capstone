/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
        edu: ["Edu TAS Beginner"],
      },
      colors: {
        primary: ["#FA4400"]
      }
    },
  },
  plugins: [],
};

