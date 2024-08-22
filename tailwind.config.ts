import type { Config } from "tailwindcss";

const config: Config = {
  content: [
        "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
		outfit: ["Outfit", "sans-serif"],
		poppins: ["Poppins", "sans-serif"],
		inter: ["Inter", "sans-serif"],
	},
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
