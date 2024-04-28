/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,}"],
  theme: {
    extend: {
      colors: {
        dark: "#333",
        light: "#FFFAFA",
        primary: {
          100: "#B1D9F2",
          200: "#88B5A2",
          300: "#418393",
        },
      },
      fontFamily: {
        main: ['"Mulish", sans-serif'],
      },
    },
  },
  plugins: [],
};
