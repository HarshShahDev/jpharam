/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#0a9a73",
        light: "#657984",
      },
      backgroundColor: {
        background: "#f3f4f6",
      },
      boxShadow:{
        light: "0 1px 6px 0 rgba(32, 33, 36, .28);"
      }
    },
  },
  plugins: [],
};
