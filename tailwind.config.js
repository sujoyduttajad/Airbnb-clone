import("tailwindcss").Config;

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Gotham_Medium_1",
          "Gotham_Medium",
          "Gotham_Light",
      
          // "Gotham_Bold",
        
         
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
