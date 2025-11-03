"use client";

import { useRouter } from "next/navigation";
import React from "react";

import { Prose } from "../mdx/Prose";

interface ModalProps {
  children: React.ReactNode;
  title: string;
  accent?: string;
}

export default function Modal({ children, title, accent }: ModalProps) {
  const router = useRouter();
  const onClose = () => router.back();

  return (
    <Prose>
      <div
        className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div
          className="card w-full max-w-3xl rounded-2xl shadow-2xl p-6"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl  font-semibold" style={{ color: accent }}>
              {title}
            </h2>
            <button onClick={onClose} className="px-2 py-1 rounded-md border">
              닫기
            </button>
          </div>
          {children}
        </div>
      </div>
    </Prose>
  );
}
