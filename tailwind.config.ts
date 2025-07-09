import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // 👈 isso é o mais importante!
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
