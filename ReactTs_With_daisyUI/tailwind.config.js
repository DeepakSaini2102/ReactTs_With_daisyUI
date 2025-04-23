/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // <-- Yeh important hai
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // <-- DaisyUI plugin
};
