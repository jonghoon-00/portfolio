"use client";

import clsx from "clsx";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  return (
    <header
      className={clsx(
        "flex items-center justify-between",
        "px-4 py-3",
        "border-b dark:border-neutral-200 border-neutral-800"
      )}
    >
      <div className="flex gap-4">
        <Link href="/" className="font-semibold text-lg">
          {/* TODO 추후 수정 */}
          Jonghoon.dev
        </Link>
        <ThemeToggle />
      </div>
      {/* TODO 각 파트 이동용 NA바 제작 */}
      <nav className="flex items-center gap-3"> nav바</nav>
    </header>
  );
}
