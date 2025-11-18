// intersection-observer > 섹션 관찰
//화면 안에 보이는 섹션 중 가장 위 : active

import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds: string[], offset = 0) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (sectionIds.length === 0) return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible: { id: string; top: number }[] = [];

        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.push({
              id: entry.target.id,
              top: entry.boundingClientRect.top,
            });
          }
        }

        if (visible.length === 0) {
          setActiveId(null);
          return;
        }

        // 화면 상단에 가장 가까운 섹션을 active로
        visible.sort((a, b) => a.top - b.top);
        setActiveId(visible[0].id);
      },
      {
        root: null,
        // 상단 fixed header 높이만큼 보정
        rootMargin: `-${offset}px 0px 0px 0px`,
        // 섹션의 30% 정도 화면에 들어오면 보이는걸로 판단
        threshold: 0.2,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sectionIds, offset]);

  return activeId;
}
