"use client";

import clsx, { ClassValue } from "clsx";
import React from "react";
import { FloatingToc } from "../ui/floating-toc/FloatingToc";

export default function ProjectContentShell({
  children,
  scrollRootEl = null,
  className,
}: {
  children: React.ReactNode;
  /** 모달 내부 스크롤이면 해당 요소, 페이지(window)면 null */
  scrollRootEl?: Element | null;
  className?: ClassValue;
}) {
  const contentRef = React.useRef<HTMLDivElement | null>(null);

  return (
    <>
      <div className="md:grid md:grid-cols-[minmax(0,1fr)_56px] md:gap-6">
        {/* 본문 */}
        <div ref={contentRef} className="min-w-0">
          {children}
        </div>

        {/* 우측 gutter(레일 자리) */}
        <aside className="md:relative md:block hidden">
          <div className={clsx("fixed mr-6", className)}>
            <FloatingToc
              containerRef={contentRef}
              scrollRootEl={scrollRootEl}
            />
          </div>
        </aside>
      </div>
    </>
  );
}
