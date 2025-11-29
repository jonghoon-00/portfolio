import localFont from "next/font/local";

export const pretendard = localFont({
  src: [
    {
      path: "../public/fonts/pretendard/PretendardVariable.woff2",
      style: "normal",
      weight: "100 900",
    },
  ],
  display: "swap",
  variable: "--font-pretendard",
});

import { Sora } from "next/font/google";

export const logoFont = Sora({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-logo",
});
