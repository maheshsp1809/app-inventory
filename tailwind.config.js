/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-dark": "rgb(43,43,43)",
        "custom-bg-bg-dark": "rgb(32, 32, 32)",
      },
    },
  },
  plugins: [],
};
