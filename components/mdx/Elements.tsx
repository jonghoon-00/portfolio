import clsx from "clsx";
import React from "react";

import { Col, Columns } from "@/components/layout/Columns";
import { Section } from "@/components/layout/Section";
import CldImage from "@/components/ui/CldImage";

function H1(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className="mt-2 mb-3 text-3xl md:text-[2rem] font-bold leading-tight tracking-[-0.01em]"
      {...props}
    />
  );
}
function H2(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className="mt-10 mb-3 text-2xl md:text-[1.5rem] font-semibold leading-snug tracking-[-0.01em]"
      {...props}
    />
  );
}
function H3(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className="mt-8 mb-2 text-xl md:text-[1.25rem] font-semibold leading-snug"
      {...props}
    />
  );
}
function H4(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4 className="mt-6 mb-2 text-lg font-semibold leading-snug" {...props} />
  );
}

function P(props: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className="my-2 leading-7 text-[0.98rem] md:text-base text-[rgb(var(--text-strong))]"
      {...props}
    />
  );
}

function A(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className="underline underline-offset-[3px] decoration-[1.5px] hover:opacity-90"
      {...props}
    />
  );
}

function Ul(props: React.HTMLAttributes<HTMLUListElement>) {
  return <ul className="my-2 pl-6 list-disc space-y-1" {...props} />;
}
function Ol(props: React.HTMLAttributes<HTMLOListElement>) {
  return <ol className="my-2 pl-6 list-decimal space-y-1" {...props} />;
}
function Li(props: React.LiHTMLAttributes<HTMLLIElement>) {
  return (
    <li className="marker:text-neutral-400 leading-7 [&>p]:my-0" {...props} />
  );
}

function Blockquote(props: React.HTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote
      className="my-4 border-l-4 pl-4 text-[0.98rem] md:text-base italic text-(--text-muted)"
      {...props}
    />
  );
}

function Hr(props: React.HTMLAttributes<HTMLHRElement>) {
  return (
    <hr
      className="my-4 border-t border-neutral-200/50 dark:border-neutral-700/60"
      {...props}
    />
  );
}

/* ========= Code (inline & block) ========= */

function CodeInline(props: React.HTMLAttributes<HTMLElement>) {
  return (
    <code
      className="rounded-[6px] px-1.5 py-[2px] text-[0.92em] bg-neutral-100 dark:bg-neutral-800/80"
      {...props}
    />
  );
}
function Pre(props: React.HTMLAttributes<HTMLPreElement>) {
  return (
    <pre
      className={clsx(
        "my-4 w-full overflow-x-auto rounded-xl p-4",
        "bg-neutral-950 text-neutral-100 dark:bg-neutral-900",
        "text-[0.90rem] leading-6"
      )}
      {...props}
    />
  );
}

/* ========= Inline styles ========= */

function Strong(props: React.HTMLAttributes<HTMLElement>) {
  return <strong className="font-semibold" {...props} />;
}
function Em(props: React.HTMLAttributes<HTMLElement>) {
  return <em className="italic" {...props} />;
}
function Del(props: React.HTMLAttributes<HTMLElement>) {
  return <del className="opacity-80" {...props} />;
}

/* ========= Callout ========= */
type CalloutType = "note" | "tip" | "info" | "warn" | "danger";

const calloutStyle: Record<CalloutType, string> = {
  note: "bg-neutral-50 dark:bg-neutral-800/60",
  tip: "bg-emerald-50 dark:bg-emerald-900/20",
  info: "bg-sky-50 dark:bg-sky-900/20",
  warn: "bg-amber-50 dark:bg-amber-900/20",
  danger: "bg-rose-50 dark:bg-rose-900/20",
};

export function Callout({
  type = "note",
  icon,
  children,
  className,
  title,
}: {
  type?: CalloutType;
  icon?: string;
  title?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={clsx(
        "my-4 flex gap-3 rounded-xl p-3 border border-black/5 dark:border-white/10",
        calloutStyle[type],
        className
      )}
    >
      <div className="select-none text-lg leading-none pt-0.5">
        {icon ?? "💡"}
      </div>
      <div className="min-w-0">
        {title ? <div className="font-semibold mb-1">{title}</div> : null}
        <div className="[&>p]:my-0">{children}</div>
      </div>
    </div>
  );
}

/* ========= Checkbox list (Notion-style task list) =========
   MDX의 task list는 <li><input type="checkbox" /></li> 형태로 렌더됨.
   아래 li 스타일이 이를 자연스럽게 보이게 해줌.
*/
function TaskUl(props: React.HTMLAttributes<HTMLUListElement>) {
  // 선택적으로 사용하려면 mdx에서 <TaskUl>로 감싸도 되고,
  // 일반 ul에도 체크박스가 있으면 브라우저가 렌더해줌.
  return <ul className="my-2 pl-1 space-y-1" {...props} />;
}

function Details(props: React.HTMLAttributes<HTMLDetailsElement>) {
  // 토글(접기/펼치기) — Notion 토글 유사
  return (
    <details className="my-2 rounded-lg border border-neutral-200/60 dark:border-neutral-700/60 p-3">
      {props.children}
    </details>
  );
}
function Summary(props: React.HTMLAttributes<HTMLElement>) {
  return (
    <summary className="cursor-pointer font-medium [&::-webkit-details-marker]:hidden before:mr-2 before:content-['▸'] open:before:content-['▾']">
      {props.children}
    </summary>
  );
}

// 이미지 + 캡션용 블록 전용 컴포넌트
export function Figure({
  src = "",
  alt = "",
  title,
}: {
  src: string;
  alt?: string;
  title?: string;
}) {
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

export function Accent({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ color: "var(--accent)" }} className="font-semibold">
      {children}
    </span>
  );
}

export const mdxComponents = {
  // headings & text
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: P,
  a: A,
  strong: Strong,
  em: Em,
  del: Del,

  // lists
  ul: Ul,
  ol: Ol,
  li: Li,

  // quote / divider
  blockquote: Blockquote,
  hr: Hr,

  // code
  pre: Pre,
  code: CodeInline,

  // extras
  TaskUl,
  details: Details,
  summary: Summary,

  Accent, // 프로젝트 별 강조색

  // 커스텀 컴포넌트
  Columns,
  Col,
  Section,
  CldImage,
  Figure,
};
