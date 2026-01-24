import clsx from "clsx";
import React from "react";

import { Col, Columns } from "@/components/layout/Columns";
import { Section } from "@/components/layout/Section";
import CldImage from "@/components/mdx/customTag/CldImage";
import { OtherProjectCard } from "@/components/views/projects/OtherProjects";
import { SectionDivider } from "../ui/SectionDivider";
import SoftDivider from "../ui/SoftDivider";
import { AnchorHeading } from "./customTag/AnchorHeading";
import BoardmateIdbSchemaTable from "./customTag/tables/BoardmateIdbSchemaTable";

//프로젝트 타이틀
export const H1 = withHeadingMeta(
  "h1",
  1,
  clsx(
    "mt-6 mb-5",
    "font-bold tracking-[-0.02em]",
    "text-[clamp(30px,4.8vw,40px)] leading-[1.12]",
    "text-white"
  )
);
//큰 섹션
export const H2 = withHeadingMeta(
  "h2",
  2,
  clsx(
    "mt-16 mb-4",
    "font-semibold tracking-[-0.02em]",
    "text-[clamp(24px,4.2vw,32px)] leading-[1.2]",
    "text-[rgb(var(--text-strong))]"
  )
);
//번호 섹션
export const H3 = withHeadingMeta(
  "h3",
  3,
  clsx(
    "mt-10 mb-2",
    "font-semibold tracking-[-0.01em]",
    "text-[clamp(19px,3.6vw,25px)] leading-tight",
    "text-[rgb(var(--accent))]"
  )
);
//문제, 판단, 해결, 결과 등등
export const H4 = withHeadingMeta(
  "h4",
  4,
  clsx(
    "mt-6 mb-1",
    "font-medium tracking-[-0.005em]",
    "text-[clamp(16px,2.2vw,18px)] leading-normal",
    "text-[rgb(var(--text-muted))]"
  )
);

function P(props: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={clsx(
        "my-3",
        "text-[clamp(15px,1.15vw,18px)] leading-[1.75]",
        "text-[rgb(var(--text-strong))]"
      )}
      {...props}
    />
  );
}

function A({
  href = "",
  target,
  rel,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isHashLink = typeof href === "string" && href.startsWith("#");
  const isExternal = typeof href === "string" && /^(https?:)?\/\//.test(href);

  // 해시 링크는 무조건 같은 탭 이동
  if (isHashLink) {
    return <a href={href} {...props} />;
  }

  // 외부 링크는 새 탭
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props} />
    );
  }
  return (
    <a
      className="text-[var(--link)] hover:text-[var(--link-hover)] text-[18px]"
      {...props}
    />
  );
}

function Ul(props: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul
      className="my-3 pl-6 list-disc space-y-[0.35rem] text-[clamp(14px,1.1vw,19px)]"
      {...props}
    />
  );
}
function Ol(props: React.HTMLAttributes<HTMLOListElement>) {
  return (
    <ol
      className="my-3 pl-6 list-decimal space-y-[0.35rem] text-[clamp(14px,1.1vw,18px)]"
      {...props}
    />
  );
}
function Li(props: React.LiHTMLAttributes<HTMLLIElement>) {
  return (
    <li className=" leading-[1.65] [&>p]:my-0 [&>p]:text-inherit" {...props} />
  );
}

function Blockquote(props: React.HTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote
      className={clsx(
        "my-5 pl-4 border-l-4",
        "italic",
        "text-[rgb(var(--text-muted))]",
        "border-[rgb(var(--border))]"
      )}
      {...props}
    />
  );
}

function Hr(props: React.HTMLAttributes<HTMLHRElement>) {
  return (
    <hr className="my-2 border-t border-[rgb(var(--border))]" {...props} />
  );
}

function CodeInline(props: React.HTMLAttributes<HTMLElement>) {
  return (
    <code
      className="rounded-md px-[4px] py-[2px] bg-[rgb(var(--border))] text-[0.90em]"
      {...props}
      // style={{ backgroundColor: "dark gray" }}
    />
  );
}
function Pre(props: React.HTMLAttributes<HTMLPreElement>) {
  return (
    <pre
      className={clsx(
        "my-6 w-full overflow-x-auto rounded-xl p-4",
        "bg-neutral-950 dark:bg-neutral-900",
        "text-neutral-100 text-[0.9rem] leading-6"
      )}
      {...props}
    />
  );
}

function Strong(props: React.HTMLAttributes<HTMLElement>) {
  return <strong className="font-semibold" {...props} />;
}
function Em(props: React.HTMLAttributes<HTMLElement>) {
  return <em className="italic" {...props} />;
}
function Del(props: React.HTMLAttributes<HTMLElement>) {
  return <del className="opacity-70" {...props} />;
}

type CalloutType = "note" | "tip" | "info" | "warn" | "danger";

const calloutStyle: Record<CalloutType, string> = {
  note: "bg-neutral-50 dark:bg-neutral-800/40",
  tip: "bg-emerald-50/70 dark:bg-emerald-900/20",
  info: "bg-sky-50/70 dark:bg-sky-900/20",
  warn: "bg-amber-50/70 dark:bg-amber-900/20",
  danger: "bg-rose-50/70 dark:bg-rose-900/20",
};

export function Callout({
  type = "note",
  icon,
  title,
  className,
  children,
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
        "my-5 flex gap-3 rounded-xl p-4 border border-[rgb(var(--border))]/40",
        calloutStyle[type],
        className
      )}
    >
      <div className="text-lg pt-0.5 select-none">{icon ?? "💡"}</div>
      <div className="min-w-0">
        {title && <div className="font-semibold mb-1">{title}</div>}
        <div className="[&>p]:my-0 leading-[1.65]">{children}</div>
      </div>
    </div>
  );
}

function TaskUl(props: React.HTMLAttributes<HTMLUListElement>) {
  return <ul className="my-3 pl-1 space-y-[0.3rem]" {...props} />;
}

function Details(props: React.HTMLAttributes<HTMLDetailsElement>) {
  return (
    <details
      className="my-3 rounded-lg p-3 border border-[rgb(var(--border))]/50"
      {...props}
    />
  );
}

function Summary(props: React.HTMLAttributes<HTMLElement>) {
  return (
    <summary
      className="cursor-pointer font-medium [&::-webkit-details-marker]:hidden before:mr-2 before:content-['▸'] open:before:content-['▾']"
      {...props}
    />
  );
}

export function Figure({
  src,
  alt,
  title,
}: {
  src: string;
  alt?: string;
  title?: string;
}) {
  return (
    <figure className="my-6">
      <img src={src} alt={alt} className="rounded-xl shadow-sm" />
      {title && (
        <figcaption className="text-sm text-[rgb(var(--text-muted))] mt-1">
          {title}
        </figcaption>
      )}
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
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: P,
  a: A,
  strong: Strong,
  em: Em,
  del: Del,
  ul: Ul,
  ol: Ol,
  li: Li,
  blockquote: Blockquote,
  hr: Hr,
  pre: Pre,
  code: CodeInline,
  TaskUl,
  details: Details,
  summary: Summary,
  Accent,
  Columns,
  Col,
  Section,
  CldImage,
  Figure,
  OtherProjectCard,
  SectionDivider,
  SoftDivider,
  AnchorHeading,
  BoardmateIdbSchemaTable,
};

// 유틸 함수
function getText(node: React.ReactNode): string {
  if (node == null) return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(getText).join("");
  if (React.isValidElement(node)) {
    const element = node as React.ReactElement<{ children?: React.ReactNode }>;
    return getText(element.props.children);
  }
  return "";
}
function slugify(input: string) {
  return input
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-가-힣]/g, "");
}
function withHeadingMeta<T extends React.HTMLAttributes<HTMLHeadingElement>>(
  Tag: "h1" | "h2" | "h3" | "h4",
  level: 1 | 2 | 3 | 4,
  className: string
) {
  return function Heading(props: T) {
    const text = getText(props.children);
    const id = (props as any).id ?? (text ? slugify(text) : undefined);

    return React.createElement(Tag, {
      ...props,
      id,
      "data-toc-heading": "true",
      "data-level": String(level),
      className: clsx(className, props.className),
      children: props.children,
    });
  };
}
