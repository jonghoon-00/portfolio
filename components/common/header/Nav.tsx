"use client";

import clsx from "clsx";
import React from "react";

import { SECTIONS } from "@/constants/sections";
import { useSectionScrollSpy } from "@/hooks/useSectionScrollSpy";

export default function Nav() {
  const HEADER_HEIGHT = 48; // 헤더 높이만큼 오프셋

  const activeId = useSectionScrollSpy(
    SECTIONS.map((s) => s.id),
    HEADER_HEIGHT
  );

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
                onClick={handleClick(i.id)}
                className={clsx(
                  "cursor-pointer",
                  "nav-link",
                  isActive && "nav-link--active"
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
