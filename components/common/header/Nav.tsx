"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

import { scrollToSection } from "@/lib/scroll";

const NAV_ITEMS = [
  { id: "work", label: "Work" },
  { id: "main-projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const HEADER_OFFSET = 54;

  const [section, setSection] = useState("");

  useEffect(() => {
    const syncSectionWithHash = () => {
      const hash = window.location.hash;
      const current = hash.replace("#", "");

      if (current) {
        setSection(current);
      } else {
        setSection(""); // 해시 없으면 강조 제거
      }
    };

    syncSectionWithHash();
    window.addEventListener("hashchange", syncSectionWithHash);

    return () => {
      window.removeEventListener("hashchange", syncSectionWithHash);
    };
  }, []);

  const handleClick = (id: string) => {
    setSection(id); // 클릭 즉시 active 반영
    scrollToSection(id, HEADER_OFFSET);
  };

  return (
    <nav>
      <ul className="flex gap-2">
        {NAV_ITEMS.map((i) => (
          <li key={i.id}>
            <button
              onClick={() => handleClick(i.id)}
              className={clsx(
                "md:text-base text-sm",
                "cursor-pointer",
                "hover:text-primary-500",
                section === i.id && "text-primary-500 font-semibold"
              )}
            >
              {i.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
