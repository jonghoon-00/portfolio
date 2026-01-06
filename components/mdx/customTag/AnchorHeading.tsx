import { H2, H3, H4 } from "@/components/mdx/Elements";
import React from "react";

type Level = 2 | 3 | 4;

type AnchorHeadingProps = {
  id: string;
  level?: Level;
  title: React.ReactNode;
  scrollMt?: number; // px
};

export function AnchorHeading({
  id,
  level = 3,
  title,
  scrollMt = 180,
}: AnchorHeadingProps) {
  const Comp = level === 2 ? H2 : level === 3 ? H3 : H4;

  return <Comp id={id}>{title}</Comp>;
}
