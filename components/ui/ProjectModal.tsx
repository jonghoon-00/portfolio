// 프로젝트 전용 모달
"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

import useLockBodyScroll from "@/hooks/useLockBodyScroll";
import { useIsDesktop } from "@/hooks/useMediaQuery";
import clsx from "clsx";
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

  const sizeClass =
    size === "sm"
      ? "project-modal--sm"
      : size === "wide"
      ? "project-modal--wide"
      : "project-modal--default";

  const handleClose = () => {
    if (onClose) onClose();
    else router.back();
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && handleClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleClose]);

  return (
    <div
      className={clsx(
        "fixed inset-0 z-100 bg-black/40 flex items-center justify-center p-4"
      )}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} 상세`}
      style={accent ? { ["--accent" as any]: accent } : undefined}
    >
      <div
        className={clsx(
          "project-modal modal-typography relative w-full",
          isDesktop ? "modal-enter" : "sheet-enter",
          sizeClass
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="modal-close btn btn-ghost rounded-full h-9 w-9 flex items-center justify-center"
          aria-label="닫기"
        >
          ✕
        </button>

        {/* 실제 텍스트 컨텐츠 래퍼 */}
        <div className="prose prose-neutral max-w-none">
          <header className="mb-6">
            <h2
              className="text-2xl font-semibold tracking-tight"
              style={{ color: accent ?? "inherit" }}
            >
              {title}
            </h2>
          </header>

          <div className="modal-body">
            <Prose>{children}</Prose>
          </div>
        </div>
      </div>
    </div>
  );
}
