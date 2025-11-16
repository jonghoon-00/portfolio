"use client";

import Link from "next/link";
import Nav from "./Nav";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  return (
    <>
      <header className="header">
        {/* 좌측 - 홈버튼 */}
        <Link
          href="/"
          className="font-semibold text-lg"
          onClick={(e) => {
            // url 해시 제거
            window.history.replaceState(null, "", "/");
            // section 상태 동기화
            window.dispatchEvent(new HashChangeEvent("hashchange"));
          }}
        >
          {/* TODO 추후 수정 */}
          HOME
        </Link>

        {/* 우측 - nav, 다크모드 버튼 */}
        <div className="flex items-center gap-4 md:gap-6">
          <Nav />
          <ThemeToggle />
        </div>
      </header>
    </>
  );
}
