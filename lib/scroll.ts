/**
 *
 * @param sectionId 이동할 섹션 id
 * @param offset 상단 고정 헤더 높이 등 오프셋 값 (기본값: 0)
 */
export function scrollToSection(sectionId: string, offset = 0) {
  if (typeof window === "undefined") return;

  const el = document.getElementById(sectionId);
  if (!el) return;

  const rect = el.getBoundingClientRect(); // section 뷰포트 위치
  const absoluteY = rect.top + window.scrollY;
  const targetY = absoluteY - offset;

  window.scrollTo({
    top: targetY,
    behavior: "smooth",
  });

  // url 해시까지 변경
  window.history.replaceState(null, "", `#${sectionId}`);
}
