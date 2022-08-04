/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      serif: ["'Source Sans Pro'", "sans-serif"],
      title: ["Monoton", "cursive"]
    },
    extend: {}
  },
  plugins: []
};
