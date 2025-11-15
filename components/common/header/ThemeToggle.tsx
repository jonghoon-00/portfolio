"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia?.(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (saved === "dark" || (!saved && prefersDark)) {
      root.classList.add("dark");
      setIsDark(true);
    } else {
      root.classList.remove("dark");
      setIsDark(false);
    }
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const next = !isDark;

    setIsDark(next);

    if (next) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // 마운트 전: 대략적인 형태만 렌더(hydration mismatch 최소화)
  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="테마 토글"
        className={clsx(
          "relative inline-flex items-center",
          "h-7 w-12",
          "cursor-pointer",
          "border border-zinc-300 rounded-full",
          "bg-white",
          "p-1"
        )}
      >
        <span
          className={clsx("inline-flex justify-center items-center", "h-5 w-5")}
        />
      </button>
    );
  }
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"}
      aria-pressed={isDark}
      className={clsx(
        "relative inline-flex items-center",
        "h-7 w-12 p-1",
        "cursor-pointer",
        "rounded-full",
        "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        isDark
          ? "border border-white bg-zinc-700 focus-visible:ring-zinc-500"
          : "border bg-white border-gray-400"
      )}
    >
      {/* 둥근 내부 버튼(thumb) */}
      <span
        className={clsx(
          "h-5 w-5",
          "inline-flex items-center justify-center",
          "transition-transform duration-200 ease-out",
          isDark ? "translate-x-5" : "translate-x-0"
        )}
      >
        {isDark ? (
          <HiOutlineMoon className="h-3.5 w-3.5 text-[#fff700]" />
        ) : (
          <HiOutlineSun className="h-4 w-4 text-[#ff4e4e]" />
        )}
      </span>
    </button>
  );
}
