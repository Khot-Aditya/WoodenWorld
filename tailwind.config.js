module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          500: "#ff8757",
          600: "#ff753e",
        },
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
