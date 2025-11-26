import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds: string[], offset = 0) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (sectionIds.length === 0) return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    // 현재 화면 안에 있는 섹션들의 top을 저장
    const visibleMap = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;

          if (entry.isIntersecting) {
            visibleMap.set(id, entry.boundingClientRect.top);
          } else {
            visibleMap.delete(id);
          }
        });

        // 화면 안에 아무 섹션도 없으면
        const candidates = sectionIds
          .map((id) => {
            const top = visibleMap.get(id);
            if (top === undefined) return null;
            return { id, top };
          })
          .filter((v): v is { id: string; top: number } => v !== null);

        if (candidates.length === 0) {
          setActiveId(null);
          return;
        }

        // 헤더 바로 아래를 기준선으로
        const headerLine = offset + 8;

        // 기준선을 이미 지난 섹션들
        const passed = candidates.filter((c) => c.top <= headerLine);

        let newActiveId: string;

        if (passed.length > 0) {
          // 기준선을 지난 섹션들 중에서 "가장 마지막" 섹션을 active
          newActiveId = passed[passed.length - 1].id;
        } else {
          // 아직 어떤 섹션도 기준선을 지나지 않았으면
          // 화면 안에 보이는 섹션들 중 가장 위에 있는 걸 선택
          candidates.sort((a, b) => a.top - b.top);
          newActiveId = candidates[0].id;
        }

        setActiveId(newActiveId);
      },
      {
        root: null,
        rootMargin: `-${offset}px 0px 0px 0px`,
        threshold: 0, // 0 ~ 0.1 추천
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sectionIds, offset]);

  return activeId;
}
