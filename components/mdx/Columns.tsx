import clsx from "clsx";
import React from "react";

interface ColumnsProps {
  children: React.ReactNode;
  cols?: 2 | 3;
  className?: string;
  gap?: string; // 'gap-4' 같은 Tailwind 유틸 전달용
}
interface ColProps {
  children: React.ReactNode;
  className?: string;
}

export function Columns({
  children,
  cols = 2,
  className,
  gap = "gap-4",
}: ColumnsProps) {
  const arr = React.Children.toArray(children).filter(Boolean);
  const colCount = arr.filter(
    (child: any) => child?.type?.displayName === "Col"
  ).length;

  if (process.env.NODE_ENV !== "production") {
    if (colCount === 0) {
      throw new Error(
        "[Columns] children으로 <Col>이 최소 1개 이상 필요합니다. MDX:\n\n<Columns>\n  <Col>...</Col>\n  <Col>...</Col>\n</Columns>"
      );
    }
  }

  // 프로덕션 fallback: Col이 없으면 그냥 children을 단일 컬럼으로 wrap
  const gridCols =
    cols === 3 ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1 md:grid-cols-2";

  return (
    <div className={clsx("grid", gridCols, gap, className)}>
      {colCount > 0 ? arr : <div className="min-w-0">{children}</div>}
    </div>
  );
}

export function Col({ children, className }: ColProps) {
  return <div className={clsx("min-w-0", className)}>{children}</div>;
}
Col.displayName = "Col";
