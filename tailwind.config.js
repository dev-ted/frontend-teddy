/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-conics": "conic-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(var(--conic-position), var(--tw-gradient-stops))",
      },

      animation: {
        "gradient-1": "animate-gradient-1 4s infinite",
        "gradient-2": "animate-gradient-2 4s infinite",
        "gradient-3": "animate-gradient-3 4s infinite",
        disco: "disco 1.5s linear infinite",
        typing: "typing 5s infinite steps(34)",
        heartbeat: "heartbeat 1.5s alternate infinite",
      },
      keyframes: {
        "animate-gradient-1": {
          "0%, 16.667%, 100%": { opacity: "1" },
          "33.333%, 83.333%": { opacity: "0" },
        },
        "animate-gradient-2": {
          "0%, 16.667%, 66.667%, 100%": { opacity: "0" },
          "33.333%, 50%": { opacity: "1" },
        },
        "animate-gradient-3": {
          "0%, 50%,  100%": { opacity: "0" },
          "66.667%, 83.333%": { opacity: "1" },
        },
        disco: {
          "0%": { transform: "translateY(-50%) rotate(0deg)" },
          "100%": { transform: "translateY(-50%) rotate(360deg)" },
        },
        typing: {
          "0%": {
            width: "0",
          },
          "80%": {
            width: "34ch",
          },
          "100%": {
            width: "34ch",
          },
        },
        heartbeat: {
          from: {
            transform: "scale(1)",
          },
          to: {
            transform: "scale(1.5)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
