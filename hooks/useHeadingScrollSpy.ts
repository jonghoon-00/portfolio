"use client";

import React from "react";

type SpyItem = { id: string; el: HTMLElement };

type Options = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
};

export function useHeadingScrollSpy(items: SpyItem[], options: Options = {}) {
  const [activeId, setActiveId] = React.useState<string | null>(null);

  const {
    root = null,
    rootMargin = "-15% 0px -75% 0px",
    threshold = [0, 1],
  } = options;

  React.useEffect(() => {
    if (items.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;

        visible.sort((a, b) => {
          const aTop = (a.target as HTMLElement).getBoundingClientRect().top;
          const bTop = (b.target as HTMLElement).getBoundingClientRect().top;
          return aTop - bTop;
        });

        setActiveId((visible[0].target as HTMLElement).id);
      },
      { root, rootMargin, threshold }
    );

    items.forEach((it) => io.observe(it.el));
    return () => io.disconnect();
  }, [items, root, rootMargin, threshold]);

  return activeId;
}
