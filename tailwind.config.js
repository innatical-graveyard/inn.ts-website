module.exports = {
  purge: [
    "./index.html",
    "./pages/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#f4f4f4",
          dark: "#1a1d24",
        },
        secondary: {
          DEFAULT: "#d9d9d9",
          dark: "#20232c",
        },
        inndigo: {
          DEFAULT: "#1e6feb",
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
