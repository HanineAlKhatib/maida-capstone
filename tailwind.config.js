/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"], // Assuming you want to fall back to sans-serif if Inter isn't available
        "edu-tas": ["'Edu TAS Beginner'", "cursive"], // Use a single string for the font name and quote it if there are spaces
      },

      colors: {
        primary: "#F94700",
        secondary: "#030057",
        bgc: "#030057", // Consider giving a more descriptive name than 'bgc'
      },
    },
  },
  plugins: [],
};
