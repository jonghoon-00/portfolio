type SectionDividerProps = {
  /** 섹션 위아래 여백 강도 */
  space?: "sm" | "md" | "lg";
  /** 좌우 끝까지(full) vs 컨텐츠에 맞게(inset) */
  variant?: "full" | "inset";
  /** 추가 클래스 */
  className?: string;
};

/**
 *
 * @param space - 위아래 여백 강도 sm | md | lg
 * @param variant - 좌우 길이 full  | inset(컨텐츠에 맞게)
 * @returns
 */
export function SectionDivider({
  space = "md",
  variant = "full",
  className = "",
}: SectionDividerProps) {
  const spaceClass = space === "sm" ? "my-4" : space === "lg" ? "my-8" : "my-6";

  const widthClass = variant === "inset" ? "max-w-3xl" : "w-full";

  return (
    <div
      className={`${spaceClass} ${widthClass} h-px bg-linear-to-r from-transparent via-white/10 to-transparent ${className}`}
    />
  );
}
