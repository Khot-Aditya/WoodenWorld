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
      keyframes: {
        fade_in_out: {
          "0%": {
            opacity: "0",
            transform: "translateX(50%)",
          },
          "20%": {
            opacity: "1",
            transform: "translateX(0%)",
          },
          "80%": {
            opacity: "1",
            transform: "translateX(0%)",
          },
          "100%": {
            opacity: "0",
            transform: "translateX(-50%)",
          },
        },
      },
      animation: {
        "fade-in-out": "fade_in_out 6s linear infinite",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
