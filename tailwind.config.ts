import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor:{
        "primary": "#F0F0F5",
      },
      colors:{
        "primary": "#737380",
        "brand-blue":"#115D8C",
        "primary-dark":"#41414D",
        "primary-black":"#09090A",
        "custom-orange":"#FFA585"
      },


    },
  },
  plugins: [],
};
export default config;
