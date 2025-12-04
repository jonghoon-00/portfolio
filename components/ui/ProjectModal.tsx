// 프로젝트 전용 모달
"use client";

import useLockBodyScroll from "@/hooks/useLockBodyScroll";
import { useIsDesktop } from "@/hooks/useMediaQuery";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { Prose } from "../mdx/Prose";

interface ModalProps {
  children: React.ReactNode;
  title: string;
  accent?: string;
}

export default function ProjectModal({ children, title, accent }: ModalProps) {
  const router = useRouter();
  const onClose = () => router.back();

  const isDesktop = useIsDesktop();
  useLockBodyScroll(true);

  // ESC 닫기
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div
      className="fixed inset-0 z-100 bg-black/40 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} 상세`}
      style={accent ? { ["--accent" as any]: accent } : undefined}
    >
      <div
        className={clsx(
          "project-modal modal-typography prose prose-neutral max-w-none relative",
          isDesktop ? "modal-enter" : "sheet-enter"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 닫기 버튼 (모바일 safe-area 대응) */}
        <button
          onClick={onClose}
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
