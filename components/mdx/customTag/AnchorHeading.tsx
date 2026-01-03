import React from "react";

import { H2, H3, H4, mdxComponents } from "@/components/mdx/Elements";

type Level = 2 | 3 | 4;

type AnchorHeadingProps = {
  id: string;
  level?: Level;
  children: React.ReactNode;
  scrollMt?: number; // px
};

// children이 태그로 들어올 경우 unwrap (단일 단락 풀기)
function unwrapSingleParagraph(children: React.ReactNode) {
  const arr = React.Children.toArray(children).filter((n) => {
    // 공백 텍스트 노드 제거
    return !(typeof n === "string" && n.trim() === "");
  });

  if (arr.length !== 1) return children;

  const only = arr[0];

  if (!React.isValidElement<Record<string, any>>(only)) return children;

  // 1) <p>태그로 들어오는 경우
  if (only.type === "p") return only.props.children;

  // 2) MDX의 커스텀 P 컴포넌트
  if (mdxComponents?.p && only.type === mdxComponents.p) {
    return only.props.children;
  }

  return children;
}

export function AnchorHeading({
  id,
  level = 3,
  children,
  scrollMt = 180,
}: AnchorHeadingProps) {
  const Comp = level === 2 ? H2 : level === 3 ? H3 : H4;

  const content = unwrapSingleParagraph(children);

  return (
    <Comp id={id} style={{ scrollMarginTop: `${scrollMt}px` }}>
      {content}
    </Comp>
  );
}
