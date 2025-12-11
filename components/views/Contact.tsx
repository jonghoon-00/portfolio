"use client";

import clsx from "clsx";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import { IoArrowUp, IoCheckmark, IoCopy } from "react-icons/io5";

import { useIsDesktop } from "@/hooks/useMediaQuery";
import { SectionDivider } from "../ui/SectionDevider";

type ContactItemKey = "email" | "phone" | "";

interface ContactViewProps {
  copiedItem: ContactItemKey;
  onCopy: (item: ContactItemKey, text: string) => void;
}

export default function Contact() {
  const isDesktop = useIsDesktop();
  const [copiedItem, setCopiedItem] = useState<ContactItemKey>("");

  const handleCopy = (item: ContactItemKey, text: string) => {
    // 나중에 try/catch 추가해서 에러 처리
    navigator.clipboard.writeText(text);
    setCopiedItem(item);

    // 2초 후 상태 리셋
    window.setTimeout(() => setCopiedItem(""), 2000);
  };

  return (
    <section id="contact" className="section-contact md:py-24">
      <div className="max-w-5xl mx-auto px-2 md:px-4">
        <header className="mb-8 md:mb-10">
          <p className="eyebrow">contact</p>
          <h2 className="section-title">문의 및 연락</h2>
          <p className="flex flex-col">
            <span className="title-lead">함께 성장하고 싶습니다 👋</span>
            <span className="title-lead">
              새로운 도전과 배움의 기회를 기다리고 있습니다.
            </span>
          </p>
        </header>

        <SectionDivider />

        {/* 레이아웃 분기: 뷰포트 기준 */}
        {isDesktop ? (
          <DesktopContactView copiedItem={copiedItem} onCopy={handleCopy} />
        ) : (
          <MobileContactView copiedItem={copiedItem} onCopy={handleCopy} />
        )}
      </div>
    </section>
  );
}

/* ===========================
   Mobile Contact View
   =========================== */

function MobileContactView({ copiedItem, onCopy }: ContactViewProps) {
  return (
    <div className="max-w-md mx-auto">
      {/* Header */}
      <div className="text-center space-y-3">
        {/* Contact Items */}
        <div className="space-y-2.5">
          {/* Email */}
          <button
            onClick={() => onCopy("email", "your-email@example.com")}
            className="w-full group relative bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/15 transition-all border border-white/10 hover:border-white/20"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <HiMail className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 text-left">
                <div className="text-xs text-gray-400 mb-0.5">Email</div>
                <div className="text-white text-sm font-medium">
                  your-email@example.com
                </div>
              </div>
              {copiedItem === "email" ? (
                <IoCheckmark className="w-5 h-5 text-green-400" />
              ) : (
                <IoCopy className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              )}
            </div>
          </button>

          {/* Phone */}
          <button
            onClick={() => onCopy("phone", "+82 10-2246-9211")}
            className="w-full group relative bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/15 transition-all border border-white/10 hover:border-white/20"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <HiPhone className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 text-left">
                <div className="text-xs text-gray-400 mb-0.5">Phone</div>
                <div className="text-white text-sm font-medium">
                  +82 10-2246-9211
                </div>
              </div>
              {copiedItem === "phone" ? (
                <IoCheckmark className="w-5 h-5 text-green-400" />
              ) : (
                <IoCopy className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              )}
            </div>
          </button>

          {/* Location */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <HiLocationMarker className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 text-left">
                <div className="text-xs text-gray-400 mb-0.5">Location</div>
                <div className="text-white text-sm font-medium">
                  경기 구리시
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GitHub */}
        <a
          href="https://github.com/jonghoon-00"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 group-hover:border-white/40 transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <FaGithub className="w-5 h-5 text-gray-900" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-400 mb-0.5">GitHub</div>
                  <div className="text-white text-sm font-medium">
                    jonghoon-00
                  </div>
                </div>
              </div>
              <div className="text-white text-lg group-hover:translate-x-1 transition-transform">
                →
              </div>
            </div>
          </div>
        </a>

        {/* Footer */}
        <div className="pt-8 md:pt-12 space-y-4 border-t border-white/10">
          <p className="text-center text-gray-400 text-sm leading-relaxed">
            포트폴리오를 봐주셔서 감사합니다
            <br />
            좋은 인연으로 만나길 기대합니다
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-full py-2.5 bg-white/5 hover:bg-white/10 rounded-lg text-white text-sm font-medium transition-all flex items-center justify-center gap-2 group border border-white/10 hover:border-white/20"
          >
            <span>맨 위로 올라가기</span>
            <IoArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ===========================
   Desktop Contact View
   =========================== */

const FIRST_LINE_CARDS = clsx(
  "group relative",
  "flex-1 min-w-0",
  "bg-white/10 backdrop-blur-sm",
  "rounded-xl p-5 hover:bg-white/15 border border-white/10 hover:border-white/20",
  "transition-all"
);

function DesktopContactView({ copiedItem, onCopy }: ContactViewProps) {
  return (
    <div className={clsx("w-full mx-auto", "flex flex-col gap-4")}>
      {/* Contact Grid */}
      <div className="flex justify-between gap-4">
        {/* Email (full width) */}
        <button
          onClick={() => onCopy("email", "your-email@example.com")}
          className={FIRST_LINE_CARDS}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
              <HiMail className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 text-left">
              <div className="text-xs text-gray-400 mb-1">Email</div>
              <div className="text-white font-medium">
                jonghoon2246@gmail.com
              </div>
            </div>
            {copiedItem === "email" ? (
              <div className="flex items-center gap-2 text-green-400">
                <IoCheckmark className="w-5 h-5" />
                <span className="text-sm font-medium">복사됨</span>
              </div>
            ) : (
              <IoCopy className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            )}
          </div>
        </button>

        {/* Phone */}
        <button
          onClick={() => onCopy("phone", "+82 10-2246-9211")}
          className={FIRST_LINE_CARDS}
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
              <HiPhone className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 text-left min-w-0">
              <div className="text-xs text-gray-400 mb-1">Phone</div>
              <div className="text-white font-medium text-sm">
                +82 10-2246-9211
              </div>
            </div>
            {copiedItem === "phone" ? (
              <IoCheckmark className="w-5 h-5 text-green-400 absolute top-5 right-5" />
            ) : (
              <IoCopy className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors absolute top-5 right-5" />
            )}
          </div>
        </button>

        {/* Location */}
        <div className={FIRST_LINE_CARDS}>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
              <HiLocationMarker className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 text-left">
              <div className="text-xs text-gray-400 mb-1">Location</div>
              <div className="text-white font-medium">경기 구리시</div>
            </div>
          </div>
        </div>
      </div>

      {/* GitHub */}
      <a
        href="https://github.com/jonghoon-00"
        target="_blank"
        rel="noopener noreferrer"
        className="block relative group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 group-hover:border-white/40 transition-all">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <FaGithub className="w-6 h-6 text-gray-900" />
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-400 mb-1">GitHub Profile</div>
                <div className="text-white font-medium">jonghoon-00</div>
                <div className="text-xs text-gray-500 mt-1">
                  28 repositories available
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-white">
              <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                프로필 보기
              </span>
              <div className="text-xl group-hover:translate-x-1 transition-transform">
                →
              </div>
            </div>
          </div>
        </div>
      </a>

      {/* Footer */}
      <div className="pt-6 space-y-4 border-t border-white/10">
        <p className="text-center text-gray-400 leading-relaxed text-sm">
          포트폴리오를 끝까지 봐주셔서 진심으로 감사드립니다
          <br />
          좋은 인연으로 만나 함께 성장할 수 있기를 기대합니다
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mx-auto flex items-center gap-2 px-6 py-2.5 bg-white/5 hover:bg-white/10 rounded-lg text-white text-sm font-medium transition-all group border border-white/10 hover:border-white/20"
        >
          <span>맨 위로 올라가기</span>
          <IoArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
}
