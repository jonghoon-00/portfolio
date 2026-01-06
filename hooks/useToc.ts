"use client";

import React from "react";

export type TocItem = {
  id: string;
  text: string;
  level: 2 | 3 | 4;
  el: HTMLElement;
};

export function useToc(containerRef: React.RefObject<HTMLElement | null>) {
  const [items, setItems] = React.useState<TocItem[]>([]);

  React.useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const headings = Array.from(
      root.querySelectorAll<HTMLElement>("[data-toc-heading='true']")
    );

    const used = new Map<string, number>(); // baseId -> count
    const next: TocItem[] = [];

    for (const el of headings) {
      const level = Number(el.getAttribute("data-level") ?? "0");
      if (level < 2 || level > 4) continue;

      const text = (el.textContent ?? "").trim();
      if (!text) continue;

      // baseId 확보
      let baseId = el.id?.trim();
      if (!baseId) {
        baseId = text
          .trim()
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w\-가-힣]/g, "");
        if (!baseId) continue;
      }

      // 중복이면 suffix 붙여 유니크화
      const prev = used.get(baseId) ?? 0;
      const count = prev + 1;
      used.set(baseId, count);

      const uniqueId = count === 1 ? baseId : `${baseId}-${count}`;

      // 실제 DOM id도 교체(중복 제거)
      if (el.id !== uniqueId) el.id = uniqueId;

      next.push({
        id: uniqueId,
        text,
        level: level as 2 | 3 | 4,
        el,
      });
    }

    setItems(next);
  }, [containerRef]);

  return items;
}
