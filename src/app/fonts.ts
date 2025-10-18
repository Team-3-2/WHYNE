import localFont from "next/font/local";

export const sfPro = localFont({
  src: [
    { path: "../../public/fonts/SF-Pro.woff2" },
    { path: "../../public/fonts/SF-Pro.woff" },
  ],
  variable: "--font-sf-pro",
  display: "swap",
});
