import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#228EAC',
        'custom-black': '#000000',
      },
      gradientColorStops: {
        'primary': 'Skyblue',
        'secondary': 'black',
      },
      boxShadow: {
        'blue-light': '20px 4px 16px rgba(0, 0, 255, 0.3)', // Custom light blue shadow
        'blue-dark': '0 10px 15px rgba(0, 0, 255, 0.5)', // Custom dark blue shadow
      },
    },
  },
  plugins: [],
};
export default config;
