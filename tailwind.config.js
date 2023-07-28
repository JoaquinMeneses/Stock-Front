/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#9333ea",
          secondary: "#d926a9",
          accent: "#1fb2a6",
          neutral: "#1c1917",
          "base-100": "#f3f4f6",
          info: "#38bdf8",
          success: "#16a34a",
          warning: "#facc15",
          error: "#dc2626",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
