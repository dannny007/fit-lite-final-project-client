/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        koho: ["KoHo", "sans-serif"],
      },
      colors: {
        customPurple: "#B433FF",
        customNavbar: "#15071C",
        customLightPurple: "#7E6284",
      },
    },
  },
  plugins: [],
};
