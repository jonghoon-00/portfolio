import MdxProvider from "@/components/mdx/MdxProvider";
import type { Metadata } from "next";
import { pretendard } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jonghoon Portfolio",
  description: "프론트엔드 개발자 이종훈 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body>
        <MdxProvider>{children}</MdxProvider>
      </body>
    </html>
  );
}
