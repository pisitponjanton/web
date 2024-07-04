/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "Home-icon": "url('/img/house.png')",
        "Chat-icon" : "url('/img/chat.png')",
        "About-icon" : "url('/img/about.png')",
        "Search-icon" : "url('/img/magnifying-glass.png')",
        "Shop-icon" : "url('/img/shopping-cart.png')"
      },
    },
  },
  plugins: [],
};
