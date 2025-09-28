import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: ["ic-xs", "ic-sm", "ic-md", "ic-lg", "ic-xl", "ic-2xl"],
  theme: {
    extend: {
      colors: {
        black: "#1A1918",
        white: "#FFFFFF",
        gray100: "#FAFAFA",
        gray300: "#D1D1D1",
        gray600: "#8C8C8B",
        primary: "#1A1918",
        default: "#31302F",
        secondary: "#A3A3A3",
        neutral200: "#F2F2F2",
        neutral400: "#BABABA",
        gray: {
          100: "#fafafa",
          150: "#f7f7f7",
          200: "#f2f2f2",
          300: "#d1d1d1",
          400: "#bababa",
          500: "#a3a3a3",
          600: "#8c8c8b",
          800: "#484746",
          850: "#373737",
          900: "#31302f",
          950: "#2d3034",
          1000: "#1e1e1e",
          1050: "#14171c",
          1100: "#101318",
        },
        red: {
          100: "#900b09",
          200: "#c00f0c",
          300: "#ff4242",
          400: "#ff6b6b",
        },
        purple: {
          100: "6a42db",
          200: "9747ff",
        },
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
      fill: ({ theme }) => theme("colors"),
      stroke: ({ theme }) => theme("colors"),
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".ic-xs": { width: "16px", height: "16px" },
        ".ic-sm": { width: "20px", height: "20px" },
        ".ic-md": { width: "24px", height: "24px" },
        ".ic-lg": { width: "32px", height: "32px" },
        ".ic-xl": { width: "40px", height: "40px" },
        ".ic-2xl": { width: "48px", height: "48px" },
      });
    }),
  ],
} satisfies Config;
