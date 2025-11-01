import type { Metadata } from "next";
import "./globals.css";

import { pretendard } from "./fonts";

import Header from "@/components/common/header/Header";
import MdxProvider from "@/components/mdx/MdxProvider";
import Script from "next/script";
import React from "react";

export const metadata: Metadata = {
  title: "Jonghoon Portfolio",
  description: "프론트엔드 개발자 이종훈 포트폴리오",
};

export default function RootLayout({
  children,
  modal, // 병렬 슬롯. @modal
}: Readonly<{
  children: React.ReactNode;
  modal?: React.ReactNode;
}>) {
  // script : 저장된 theme 읽고, 없으면 light
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){
            try {
              var root = document.documentElement;
              var t = localStorage.getItem('theme') || 'light';
              if (t === 'dark') root.classList.add('dark');
            } catch (e) {}
          })();`}
        </Script>
      </head>
      <body>
        <MdxProvider>
          <Header />
          {children}
          {modal}
        </MdxProvider>
      </body>
    </html>
  );
}
