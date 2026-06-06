import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "sa-blue": "#005eb8",
        "sa-dark-blue": "#012169",
        "sa-white": "#ffffff",
      },
    },
  },
  plugins: [],
};

export default config;
