"use client";

import clsx from "clsx";
import React from "react";

import { SECTIONS } from "@/constants/sections";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function Nav() {
  const HEADER_HEIGHT = 52.67; // 헤더 높이만큼 오프셋

  const activeId = useScrollSpy(
    SECTIONS.map((s) => s.id),
    HEADER_HEIGHT
  );

  // 함수를 반환하는 형태
  const handleClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();

    const el = document.getElementById(id);
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const scrollTop = window.pageYOffset + rect.top - HEADER_HEIGHT;

    window.scrollTo({
      top: scrollTop,
      behavior: "smooth",
    });
  };

  return (
    <nav>
      <ul className="flex gap-2">
        {SECTIONS.map((i) => {
          const isActive = activeId === i.id;
          return (
            <li key={i.id}>
              <button
                onClick={() => handleClick(i.id)}
                className={clsx(
                  "md:text-base text-sm",
                  "cursor-pointer",
                  "hover:text-primary-500",
                  isActive && "text-primary-500 font-semibold"
                )}
              >
                {i.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
