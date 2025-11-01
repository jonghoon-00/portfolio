"use client";

import React from "react";

function H1(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 className="text-3xl md:text-4xl font-bold tracking-tight" {...props} />
  );
}
function H2(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h2 className="mt-10 text-2xl md:text-3xl font-semibold" {...props} />;
}
function P(props: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className="leading-7" {...props} />;
}
function Ul(props: React.HTMLAttributes<HTMLUListElement>) {
  return <ul className="list-disc pl-6 space-y-1" {...props} />;
}
function Ol(props: React.HTMLAttributes<HTMLOListElement>) {
  return <ol className="list-decimal pl-6 space-y-1" {...props} />;
}
function Blockquote(props: React.HTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote className="border-l-4 pl-4 italic opacity-90" {...props} />
  );
}
export function Accent({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ color: "var(--accent)" }} className="font-semibold">
      {children}
    </span>
  );
}

function MdImg(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const { src = "", alt = "", title } = props;
  return (
    <figure className="my-6">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="rounded-xl shadow-sm" />
      {title ? (
        <figcaption className="text-sm text-muted-foreground mt-1">
          {title}
        </figcaption>
      ) : null}
    </figure>
  );
}

export const mdxComponents = {
  h1: H1,
  h2: H2,
  p: P,
  ul: Ul,
  ol: Ol,
  blockquote: Blockquote,
  img: MdImg,
  Accent,
};
