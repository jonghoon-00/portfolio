"use client";
// 브라우저 뷰포트 변화에 따라 true/false를 실시간으로 반환하는 훅

import * as React from "react";

export const BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
} as const;

/** 데스크탑(>= md) 여부 */
export function useIsDesktop() {
  return useMediaQuery(`(min-width: ${BREAKPOINTS.md})`);
}
/** 모바일(< md) 여부 */
export function useIsMobile() {
  // 0.02px는 일부 브라우저의 반올림 오차 대응
  return useMediaQuery(`(max-width: ${parseInt(BREAKPOINTS.md) - 0.02}px)`);
}

/**
 * 현재 뷰포트 상태를 감시(클라 전용)
 *
 * @param {string} query - CSS 미디어쿼리 문자열
 * 예시: `"(min-width: 768px)"`, `"(prefers-color-scheme: dark)"`, `"(orientation: portrait)"`
 * @returns {boolean} 주어진 조건이 현재 뷰포트에 부합하면 `true`, 아니면 `false`
 *
 */
export function useMediaQuery(query: string) {
  const [matches, setMatches] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia(query);
    const onChange = (e: MediaQueryListEvent) => setMatches(e.matches);

    // 최초 동기화
    setMatches(mql.matches);

    // 최신/구버전 WebKit 모두 대응
    if (mql.addEventListener) mql.addEventListener("change", onChange);
    else (mql as any).addListener?.(onChange);

    return () => {
      if (mql.removeEventListener) mql.removeEventListener("change", onChange);
      else (mql as any).removeListener?.(onChange);
    };
  }, [query]);

  return matches;
}
