import type { Metadata } from "next";
import React from "react";
import "./globals.css";

import { pretendard } from "./fonts";

import Header from "@/components/common/header/Header";

export const metadata: Metadata = {
  title: "Jonghoon Portfolio",
  description: "프론트엔드 개발자 이종훈 포트폴리오",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal?: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${pretendard.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Header />
        {children}
        {modal}
      </body>
    </html>
  );
}
