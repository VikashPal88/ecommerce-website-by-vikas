/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: "#5E5E4A",
      },
      backgroundColor: {
        customGreeen: "rgb(94, 94, 74)",
        customWhite: "rgb(245, 245, 235)",
        section3: "#D7D7CB",
        section5: "#D7D7CB4D",
      },
    },
  },
  plugins: [],
};
