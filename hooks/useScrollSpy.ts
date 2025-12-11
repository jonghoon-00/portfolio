import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds: string[], offset = 0) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (sectionIds.length === 0) return;

    const handle = () => {
      if (typeof window === "undefined") return;

      const scrollY = window.scrollY || window.pageYOffset;
      const viewportHeight = window.innerHeight;
      const doc = document.documentElement;
      const docHeight = doc.scrollHeight;
      const scrollBottom = scrollY + viewportHeight;

      // 1) 맨 위/맨 아래 엣지 구간 처리
      const TOP_RANGE = 16; // px
      const BOTTOM_RANGE = 16; // px

      if (scrollY <= TOP_RANGE) {
        setActiveId(sectionIds[0] ?? null); // home
        return;
      }

      if (docHeight - scrollBottom <= BOTTOM_RANGE) {
        setActiveId(sectionIds[sectionIds.length - 1] ?? null); // contact
        return;
      }

      // 2) 모든 섹션의 문서 기준 top 계산
      const sections = sectionIds
        .map((id) => {
          const el = document.getElementById(id);
          if (!el) return null;
          const rect = el.getBoundingClientRect();
          const topInDocument = rect.top + scrollY;
          return { id, top: topInDocument };
        })
        .filter((v): v is { id: string; top: number } => v !== null)
        .sort((a, b) => a.top - b.top);

      if (sections.length === 0) {
        setActiveId(null);
        return;
      }

      // 3) 헤더 바로 아래 기준선
      const referenceLine = scrollY + offset + 8;

      // 기준선을 지난 섹션들
      const passed = sections.filter((s) => s.top <= referenceLine);

      if (passed.length > 0) {
        // 기준선을 지난 섹션들 중 가장 아래 섹션
        setActiveId(passed[passed.length - 1].id);
      } else {
        // 아직 기준선을 지난 섹션이 없으면, 화면 상 가장 위 섹션
        setActiveId(sections[0].id);
      }
    };

    // 스크롤 이벤트에 requestAnimationFrame으로 묶어서 부담 줄이기
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(() => {
          handle();
          ticking = false;
        });
      }
    };

    const onResize = () => {
      handle();
    };

    // 초기 1회 계산
    handle();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [sectionIds, offset]);

  return activeId;
}
