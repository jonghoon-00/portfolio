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
  size?: "default" | "sm";
  onClose?: () => void;
}

export default function ProjectModal({
  children,
  title,
  accent,
  size = "default",
  onClose,
}: ModalProps) {
  const maxWidth =
    size === "sm" ? "max-w-xl md:max-w-2xl" : "max-w-3xl md:max-w-5xl";

  const router = useRouter();
  const isDesktop = useIsDesktop();
  useLockBodyScroll(true);

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      router.back();
    }
  };

  // ESC 닫기
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && handleClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleClose]);

  return (
    <div
      className="fixed inset-0 z-100 bg-black/40 flex items-center justify-center p-4 maxWidth"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} 상세`}
      style={accent ? { ["--accent" as any]: accent } : undefined}
    >
      <div
        className={clsx(
          "project-modal modal-typography prose prose-neutral max-w-none relative",
          isDesktop ? "modal-enter" : "sheet-enter",
          maxWidth
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
  );
}
