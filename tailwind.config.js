/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Nunito: ["Nunito"],
        Outfit: ["Outfit"],
        Outfit_L: ["Outfit_L"],
      },
    },
  },
  plugins: [],
};
