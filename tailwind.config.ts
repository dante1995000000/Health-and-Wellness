import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F8F6EF",
        paper: "#FCFBF6",
        ink: {
          50: "#F2F3ED",
          100: "#E3E6D8",
          200: "#C6CCB2",
          300: "#A3AD85",
          400: "#7E8B60",
          500: "#606C47",
          600: "#4B5537",
          700: "#3A4229",
          800: "#2C321F",
          900: "#1F2416",
        },
        sage: {
          50: "#F5F7EF",
          100: "#E8ECDA",
          200: "#D3DBBB",
          300: "#B7C393",
          400: "#9BAB72",
          500: "#7F9257",
          600: "#657444",
          700: "#4F5B36",
          800: "#3D4629",
          900: "#2A3019",
        },
        clay: {
          100: "#F3E0D8",
          300: "#E0AF9E",
          400: "#D3947F",
          500: "#C17A61",
          600: "#A6624B",
        },
        gold: {
          300: "#E4CE97",
          400: "#D3B565",
          500: "#BC9A45",
        },
        plum: {
          300: "#C9B3C0",
          400: "#AC8AA0",
          500: "#8E6A82",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      maxWidth: {
        "8xl": "90rem",
      },
      letterSpacing: {
        widest2: ".22em",
      },
    },
  },
  plugins: [],
};

export default config;
