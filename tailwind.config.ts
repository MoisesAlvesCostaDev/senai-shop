import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        baloo: ["Baloo 2", "cursive"],
      },
      colors: {
        primary: {
          dark: "#05497C",
          DEFAULT: "#007CD6",
          light: "#DEF0FF",
        },
        secondary: {
          dark: "#9C153E",
          DEFAULT: "#EE2E55",
          light: "#FEE5E8",
        },
        base: {
          title: "#272221",
          subtitle: "#403937",
          text: "#574F4D",
          label: "#8D8686",
          hover: "#D7D5D5",
          button: "#E6E5E5",
          input: "#EDEDED",
          background: "#FBFBFB",
          white: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
