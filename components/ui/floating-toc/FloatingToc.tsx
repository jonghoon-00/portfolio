"use client";

import { useHeadingScrollSpy } from "@/hooks/useHeadingScrollSpy";
import { useToc } from "@/hooks/useToc";
import clsx from "clsx";
import React from "react";

function getScrollOffsetPx(root: Element | null) {
  if (!root) return 0;
  const v = getComputedStyle(root).getPropertyValue("--scroll-offset").trim();
  const n = parseFloat(v); // "72px" -> 72
  return Number.isFinite(n) ? n : 0;
}

function scrollToHeading(
  el: HTMLElement,
  scrollRootEl: Element | null,
  fallbackOffset = 12
) {
  // 모달 내부 스크롤 컨테이너가 있으면 그 안만 스크롤
  if (scrollRootEl instanceof HTMLElement) {
    const root = scrollRootEl;

    const rootRect = root.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();

    const offset = getScrollOffsetPx(root) || fallbackOffset;

    // el의 현재 화면 위치 - root의 현재 화면 위치 => root 내부에서의 상대 위치
    const delta = elRect.top - rootRect.top;

    const targetTop = root.scrollTop + delta - offset;

    root.scrollTo({
      top: Math.max(0, targetTop),
      behavior: "smooth",
    });

    return;
  }

  // 페이지 스크롤(모달 아닌 일반 페이지)인 경우만 scrollIntoView 사용
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// h1 가장 길고, h3으로 갈수록 짧게
function barWidth(level: 1 | 2 | 3) {
  if (level === 1) return "w-7";
  if (level === 2) return "w-5";
  return "w-3";
}

export function FloatingToc({
  containerRef,
  scrollRootEl = null,
}: {
  containerRef: React.RefObject<HTMLElement | null>;
  /** 모달 내부 스크롤 컨테이너면 해당 요소, 페이지(window)면 null */
  scrollRootEl?: Element | null;
}) {
  const items = useToc(containerRef);
  const [tip, setTip] = React.useState({ show: false, x: 0, y: 0 });
  const [isAtTop, setIsAtTop] = React.useState(true);

  const spyItems = React.useMemo(
    () => items.map((it) => ({ id: it.id, el: it.el })),
    [items]
  );

  const activeId = useHeadingScrollSpy(spyItems, {
    root: scrollRootEl,
    rootMargin: "-15% 0px -75% 0px",
    threshold: [0, 1],
  });

  const handleScrollTop = () => {
    if (scrollRootEl instanceof HTMLElement) {
      scrollRootEl.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  React.useEffect(() => {
    const root = scrollRootEl instanceof HTMLElement ? scrollRootEl : window;

    const update = () => {
      const top =
        root === window
          ? window.scrollY
          : (root as HTMLElement).scrollTop;
      setIsAtTop(top <= 0);
    };

    update();
    root.addEventListener("scroll", update, { passive: true });
    
    return () => root.removeEventListener("scroll", update);
  }, [scrollRootEl]);

  if (items.length === 0) return null;

  return (
    <div className="relative group">
      {/* 레일(기본 표시) */}
      <div className="flex flex-col items-end gap-2 opacity-100 transition-opacity duration-150 group-hover:opacity-0">
        {items.map((it) => {
          const isActive = it.id === activeId;

          return (
            <button
              key={it.id}
              type="button"
              onClick={() => scrollToHeading(it.el, scrollRootEl)}
              className={[
                "h-[3px] rounded-full transition",
                barWidth(it.level),
                isActive ? "bg-white/70" : "bg-white/25 hover:bg-white/40",
              ].join(" ")}
              aria-label={it.text}
              title={it.text}
            />
          );
        })}
      </div>

      {/* 텍스트 패널(hover 시 표시) */}
      <div
        className={clsx(
          "absolute top-0 right-0",
          "w-[320px] max-w-[40vw]",
          "max-h-[600px]",
          "rounded-2xl bg-neutral-950/90 shadow-lg",
          "opacity-0 pointer-events-none translate-x-1",
          "transition-all duration-150",
          "overflow-auto modal-scroll",
          "group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-x-0"
        )}
      >
        <div className="px-4 py-3 text-sm">
          <button
            type="button"
            className="mb-2 font-medium text-white/60 cursor-pointer"
            onClick={handleScrollTop}
            onMouseEnter={(e) =>
              setTip({ show: true, x: e.clientX, y: e.clientY })
            }
            onMouseLeave={() => setTip((prev) => ({ ...prev, show: false }))}
            onMouseMove={(e) =>
              setTip({ show: true, x: e.clientX, y: e.clientY })
            }
          >
            On this page
          </button>

          <ul className="space-y-1.5">
            {items.map((it) => {
              const isActive = it.id === activeId;
              const indent =
                it.level === 1 ? "pl-0" : it.level === 2 ? "pl-3" : "pl-6";

              return (
                <li key={it.id} className={indent}>
                  <button
                    type="button"
                    onClick={() => scrollToHeading(it.el, scrollRootEl)}
                    className={clsx(
                      "w-full text-left truncate transition",
                      "cursor-pointer",
                      isActive ? "text-white" : "text-white/70 hover:text-white"
                    )}
                    title={it.text}
                  >
                    {it.text}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {tip.show && !isAtTop && (
        <div
          className={clsx(
            "fixed z-50", 
            "pointer-events-none select-none", 
            "text-xs text-white/80",
            "bg-black",
            "px-0.5 py-1",
          )}
          style={{ left: tip.x + 12, top: tip.y + 12 }}
        >
          최상단 이동
        </div>
      )}
    </div>
  );
}
