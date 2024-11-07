/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    colors: {
      brown: "#574144",
      pink: "#bfa5a8",
      green: "#007868",
      red: "#b53155",
    },
    extend: {},
  },
  plugins: [],
};
