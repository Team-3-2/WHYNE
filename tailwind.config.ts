import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#111111",
        white: "#FFFFFF",
        default: "#31302F",
        secondary: "#A3A3A3",
        tertiary: "#BABABA",
        gray100: "#FAFAFA",
        gray300: "#D1D1D1",
        gray600: "#8C8C8B",
        gray800: "#484746",
        primary: "#1A1918",
        neutral200: "#F2F2F2",
        neutral400: "#BABABA",
        danger: "#ff6b6b",
      },
      screens: {
        mobile: { max: "743px" },
        tablet: { min: "744px", max: "1279px" },
        pc: { min: "1280px" },
      },
      fontSize: {
        "title-hero": ["32px", { lineHeight: "46px", fontWeight: "700" }],
        "title-page-md": ["40px", { lineHeight: "52px", fontWeight: "700" }],
        "title-page-sm": ["32px", { lineHeight: "46px", fontWeight: "700" }],
        "heading-lg": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "heading-md": ["20px", { lineHeight: "30px", fontWeight: "700" }],
        "heading-sm": ["18px", { lineHeight: "30px", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "24px", fontWeight: "600" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "500" }],
        "body-sm": ["14px", { lineHeight: "20px", fontWeight: "500" }],
        caption: ["12px", { lineHeight: "16px", fontWeight: "400" }],
        "component-notes-md": [
          "12px",
          { lineHeight: "16px", fontWeight: "400" },
        ],
        "component-notes-sm": [
          "10px",
          { lineHeight: "14px", fontWeight: "400" },
        ],
        "button-lg": ["16px", { lineHeight: "20px", fontWeight: "700" }],
        "button-md": ["14px", { lineHeight: "18px", fontWeight: "700" }],
      },
    },
  },
  plugins: [],
} satisfies Config;
