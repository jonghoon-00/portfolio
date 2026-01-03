import clsx from "clsx";
import React from "react";

interface ColumnsProps {
  children: React.ReactNode;
  cols?: 2 | 3;
  className?: string;
  gap?: number;
  equalCols?: boolean;

  showColumnDivider?: boolean;
  dividerClassName?: string;
}

interface ColProps {
  children: React.ReactNode;
  className?: string;
}

export function Columns({
  children,
  cols = 2,
  className,
  gap = 2,
  equalCols = true,
  showColumnDivider = false,
  dividerClassName,
}: ColumnsProps) {
  const arr = React.Children.toArray(children).filter(Boolean);
  const colsOnly = arr.filter(
    (child: any) => child?.type?.displayName === "Col"
  );

  if (process.env.NODE_ENV !== "production") {
    if (colsOnly.length === 0) {
      throw new Error(
        "[Columns] children으로 <Col>이 최소 1개 이상 필요합니다.\n\n<Columns>\n  <Col />\n  <Col />\n</Columns>"
      );
    }
  }
  const baseCols = "grid-cols-1";
  const equalMdCols = cols === 3 ? "md:grid-cols-3" : "md:grid-cols-2";
  const gridCols = equalCols ? `${baseCols} ${equalMdCols}` : baseCols;

  /**
   * divider(pseudo) 위치:
   * - equalCols=true일 때만 "정확한 비율"로 그릴 수 있음.
   * - equalCols=false(사용자 템플릿)인 경우는 divider를 자동 배치하면 틀어질 가능성이 커서, 기본은 그리지 않음.
   *
   * 필요시 추후 equalCols=false에서도 쓰도록 별도 props로 "dividerPositions" 등 추가하여 확장장
   */
  const canDrawDivider = showColumnDivider && equalCols;

  // 2col: 50%
  // 3col: 33.333%, 66.666%
  const dividerPos = cols === 3 ? ["33.3333%", "66.6667%"] : ["50%"];

  const dividerLines = canDrawDivider
    ? dividerPos
        .map(
          (left) =>
            `linear-gradient(to right, transparent calc(${left} - 0.5px), var(--columns-divider-color) 0, var(--columns-divider-color) calc(${left} + 0.5px), transparent 0)`
        )
        .join(",")
    : "";

  return (
    <div
      className={clsx("relative grid", gridCols, className)}
      style={
        {
          gap: `${gap}px`,
          // divider 색상 (기본값: bg-white/10 느낌)
          ["--columns-divider-color" as any]: "rgba(255,255,255,0.10)",
        } as React.CSSProperties
      }
    >
      <div
        aria-hidden
        className={clsx(
          "pointer-events-none absolute inset-0 hidden md:block",
          canDrawDivider && "block"
        )}
        style={{
          backgroundImage: dividerLines,
        }}
      />

      {/* children은 그대로 */}
      {colsOnly.length > 0 ? arr : <div className="min-w-0">{children}</div>}
    </div>
  );
}

export function Col({ children, className }: ColProps) {
  return <div className={clsx("min-w-0", className)}>{children}</div>;
}

Col.displayName = "Col";
