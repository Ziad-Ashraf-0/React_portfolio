/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          dark: "#10141a",
          light: "#f8fafc",
        },
        card: {
          dark: "#181d25",
          light: "#ffffff",
        },
        accent: {
          DEFAULT: "#00e6fb",
        },
        text: {
          dark: "#e5e7eb",
          light: "#1e293b",
        },
      },
      fontFamily: {
        mono: [
          "Fira Mono",
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
        signature: ["Great Vibes"],
      },
    },
  },
  plugins: [],
};
