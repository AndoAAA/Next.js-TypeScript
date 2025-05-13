
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.css",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
      
    },
    extend: {
      fontFamily: {
        primary: "var(--font-dmSans)",
        secondary: "var(--font-barlow)",
      },
      colors: {
        primary: "#121315",
        secondary: "#666666",
        accent: "#ffca3b",
        border: "#7d7d7d",
      },
      boxShadow: {
        custom: "0px 4px 54px 10px rgba(18, 19, 21, 0.06)",
      },
      backgroundImage: {
        hero: "url('/assets/img/hero/bg.jpg')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
