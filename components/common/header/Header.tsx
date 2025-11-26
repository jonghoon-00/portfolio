"use client";

import { useRouter } from "next/navigation";
import Nav from "./Nav";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  const router = useRouter();
  return (
    <>
      <header className="header">
        <div className="header-inner">
          {/* 좌측 - 홈버튼 */}
          <button
            className="font-semibold text-lg cursor-pointer"
            onClick={(e) => {
              router.push("/");
            }}
          >
            {/* TODO 추후 수정 */}
            HOME
          </button>

          {/* 우측 - nav, 다크모드 버튼 */}
          <div className="flex items-center gap-4 md:gap-6">
            <Nav />
            <ThemeToggle />
          </div>
        </div>
      </header>
    </>
  );
}
