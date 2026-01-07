"use client";

import { useRouter } from "next/navigation";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import useLockBodyScroll from "@/hooks/useLockBodyScroll";
import { useIsDesktop } from "@/hooks/useMediaQuery";
import clsx from "clsx";
import ProjectContentShell from "../layout/ProjectContentShell";
import { Prose } from "../mdx/Prose";

interface ModalProps {
  children: React.ReactNode;
  title: string;
  accent?: string;
  size?: "default" | "sm" | "wide";
  onClose?: () => void;
}

export default function ProjectModal({
  children,
  title,
  accent,
  size = "default",
  onClose,
}: ModalProps) {
  const router = useRouter();
  const isDesktop = useIsDesktop();
  useLockBodyScroll(true);

  const headerRef = useRef<HTMLElement | null>(null);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [scrollEl, setScrollEl] = useState<HTMLDivElement | null>(null);

  const [headerH, setHeaderH] = useState(0);

  useLayoutEffect(() => {
    if (!headerRef.current) return;
    const el = headerRef.current;

    const measure = () => setHeaderH(el.offsetHeight);

    measure();

    // 헤더 높이가 반응형/폰트 로딩 등으로 변할 수 있으니 ResizeObserver로 추적
    const ro = new ResizeObserver(measure);
    ro.observe(el);

    return () => ro.disconnect();
  }, [title, isDesktop]);

  const sizeClass =
    size === "sm"
      ? "project-modal--sm"
      : size === "wide"
      ? "project-modal--wide"
      : "project-modal--default";

  const handleClose = useCallback(() => {
    if (onClose) onClose();
    else router.back();
  }, [onClose, router]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && handleClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleClose]);

  return (
    <div
      className={clsx(
        "fixed inset-0 z-100",
        "bg-black/40",
        "flex items-center justify-center",
        "p-3 md:p-6"
      )}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} 상세`}
      style={accent ? ({ ["--accent" as any]: accent } as any) : undefined}
    >
      <div
        className={clsx(
          "project-modal modal-typography relative w-full",
          isDesktop ? "modal-enter" : "sheet-enter",
          sizeClass
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="prose prose-neutral max-w-none flex flex-col w-fit mx-auto min-h-0 h-[80vh]">
          <header
            ref={headerRef}
            className={clsx(
              "sticky top-0 z-10",
              "bg-card/95 backdrop-blur",
              "flex items-center justify-between",
              "py-4",
              "border-b border-white/10"
            )}
          >
            <h2
              className="text-2xl font-semibold tracking-tight"
              style={{ color: accent ?? "inherit" }}
            >
              {title}
            </h2>

            <button
              onClick={handleClose}
              className="modal-close btn btn-ghost h-9 w-9 flex items-center justify-center"
              aria-label="닫기"
            >
              ✕
            </button>
          </header>

          <div
            ref={(el) => {
              scrollRef.current = el;
              if (el) setScrollEl(el);
            }}
            className={clsx(
              "modal-body modal-scroll",
              "overscroll-contain",
              "max-h-[80vh] overflow-y-auto"
            )}
          >
            <ProjectContentShell scrollRootEl={scrollEl} className="mt-10">
              <Prose>{children}</Prose>
            </ProjectContentShell>
          </div>
        </div>
      </div>
    </div>
  );
}
