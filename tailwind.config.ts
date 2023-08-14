import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e0dfdd",
      },
    },
  },
  plugins: [],
} satisfies Config;
