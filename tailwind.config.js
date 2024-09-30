/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        customblack: 'rgba(0, 0, 0, 1)',  // Or use a slightly less dark black like rgba(25, 25, 25, 1)
        darkpurple: "rgba(60, 30, 85, 1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
