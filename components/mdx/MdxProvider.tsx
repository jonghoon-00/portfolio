"use client";

import { MDXProvider } from "@mdx-js/react";

type HtmlProps<T> = React.DetailedHTMLProps<React.HTMLAttributes<T>, T>;

const components = {
  // 마크다운 요소 매핑 예시
  h1: (p: HtmlProps<HTMLHeadingElement>) => (
    <h1 className="text-3xl md:text-4xl font-bold" {...p} />
  ),
  h2: (p: HtmlProps<HTMLHeadingElement>) => (
    <h2 className="mt-8 text-2xl font-semibold" {...p} />
  ),
  p: (p: HtmlProps<HTMLHeadingElement>) => (
    <p className="leading-7 text-neutral-700" {...p} />
  ),
  ul: (p: HtmlProps<HTMLUListElement>) => (
    <ul className="list-disc pl-5 space-y-1" {...p} />
  ),
  // 커스텀 컴포넌트
};

export default function MdxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}
