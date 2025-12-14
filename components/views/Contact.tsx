"use client";

import clsx from "clsx";
import { useMemo, useState } from "react";
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

  const CONTACT = useMemo(
    () => ({
      email: "jonghoon2246@gmail.com",
      phone: "+82 10-2246-9211",
      location: "경기 구리시",
      github: "https://github.com/jonghoon-00",
      githubId: "jonghoon-00",
    }),
    []
  );

  const handleCopy = (item: ContactItemKey, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(item);
    window.setTimeout(() => setCopiedItem(""), 2000);
  };

  return (
    <section
      id="contact"
      className={clsx("section-contact md:py32", "relative overflow-hidden")}
    >
      <div
        className={clsx(
          "pointer-events-none absolute inset-0",
          "opacity-[0.55]"
        )}
        style={{
          background:
            "radial-gradient(900px 260px at 50% 140px, rgba(255,255,255,0.06), transparent 55%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-2 md:px-6">
        <header className="mb-12 md:mb-16">
          <p className="eyebrow">contact</p>
          <h2 className="section-title">문의 및 연락</h2>

          <div className="mt-5">
            <SectionDivider />
          </div>

          <div className="mt-16 md:mt-20 mb-12 md:mb-14">
            <p className="mx-auto max-w-3xl flex flex-col items-center text-center">
              <span
                className={clsx(
                  "text-[20px] md:text-[28px] font-semibold tracking-[-0.01em]",
                  "text-white/95"
                )}
                style={{
                  color: "color-mix(in srgb, rgb(var(--accent)) 70%, white)",
                }}
              >
                함께 성장하고 싶습니다{" "}
                <span
                  className={clsx(
                    "inline-block align-middle",
                    "transition-transform duration-300",
                    "hover:-translate-y-[1px] hover:rotate-[-6deg]"
                  )}
                  aria-hidden
                >
                  👋
                </span>
              </span>

              <span className=" text-[15px] md:text-[22px] text-white/70 leading-relaxed">
                새로운 도전과 배움의 기회를 기다리고 있습니다.
              </span>
            </p>
          </div>
        </header>

        {isDesktop ? (
          <DesktopContactView
            contact={CONTACT}
            copiedItem={copiedItem}
            onCopy={handleCopy}
          />
        ) : (
          <MobileContactView
            contact={CONTACT}
            copiedItem={copiedItem}
            onCopy={handleCopy}
          />
        )}
      </div>
    </section>
  );
}

/* ===========================
   Mobile Contact View
   =========================== */

function MobileContactView({
  copiedItem,
  onCopy,
  contact,
}: ContactViewProps & {
  contact: {
    email: string;
    phone: string;
    location: string;
    github: string;
    githubId: string;
  };
}) {
  return (
    <div className="max-w-md mx-auto">
      <div className="text-center space-y-3">
        <div className="space-y-2.5">
          {/* Email */}
          <button
            onClick={() => onCopy("email", contact.email)}
            className="w-full group relative bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/15 transition-all border border-white/10 hover:border-white/20"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <HiMail className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 text-left">
                <div className="text-xs text-gray-400 mb-0.5">Email</div>
                <div className="text-white text-sm font-medium">
                  {contact.email}
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
            onClick={() => onCopy("phone", contact.phone)}
            className="w-full group relative bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/15 transition-all border border-white/10 hover:border-white/20"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <HiPhone className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 text-left">
                <div className="text-xs text-gray-400 mb-0.5">Phone</div>
                <div className="text-white text-sm font-medium">
                  {contact.phone}
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
                  {contact.location}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GitHub */}
        <a
          href={contact.github}
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
                    {contact.githubId}
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
        <div className="pt-8 space-y-4 border-t border-white/10">
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

const CARD_BASE = clsx(
  "group relative flex-1 min-w-0",
  "bg-white/10 backdrop-blur-sm",
  "rounded-2xl p-6",
  "border border-white/10 hover:border-white/20",
  "hover:bg-white/15 transition-all"
);

function DesktopContactView({
  copiedItem,
  onCopy,
  contact,
}: ContactViewProps & {
  contact: {
    email: string;
    phone: string;
    location: string;
    github: string;
    githubId: string;
  };
}) {
  return (
    <div className={clsx("w-full mx-auto", "flex flex-col gap-6")}>
      {/* Contact Grid */}
      <div className="flex justify-between gap-6">
        {/* Email */}
        <button
          onClick={() => onCopy("email", contact.email)}
          className={clsx(CARD_BASE, "text-left")}
        >
          <div className="absolute top-5 right-5">
            {copiedItem === "email" ? (
              <IoCheckmark className="w-5 h-5 text-green-400" />
            ) : (
              <IoCopy className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            )}
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
              <HiMail className="w-6 h-6 text-white" />
            </div>
            <div className="min-w-0">
              <div className="text-xs text-gray-400 mb-1">Email</div>
              <div className="text-white font-medium truncate">
                {contact.email}
              </div>
              {copiedItem === "email" && (
                <div className="text-xs text-green-400 mt-1">복사됨</div>
              )}
            </div>
          </div>
        </button>

        {/* Phone */}
        <button
          onClick={() => onCopy("phone", contact.phone)}
          className={clsx(CARD_BASE, "text-left")}
        >
          <div className="absolute top-5 right-5">
            {copiedItem === "phone" ? (
              <IoCheckmark className="w-5 h-5 text-green-400" />
            ) : (
              <IoCopy className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            )}
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
              <HiPhone className="w-6 h-6 text-white" />
            </div>
            <div className="min-w-0">
              <div className="text-xs text-gray-400 mb-1">Phone</div>
              <div className="text-white font-medium truncate">
                {contact.phone}
              </div>
              {copiedItem === "phone" && (
                <div className="text-xs text-green-400 mt-1">복사됨</div>
              )}
            </div>
          </div>
        </button>

        {/* Location */}
        <div className={clsx(CARD_BASE, "text-left")}>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
              <HiLocationMarker className="w-6 h-6 text-white" />
            </div>
            <div className="min-w-0">
              <div className="text-xs text-gray-400 mb-1">Location</div>
              <div className="text-white font-medium truncate">
                {contact.location}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* GitHub */}
      <a
        href={contact.github}
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
                <div className="text-white font-medium">{contact.githubId}</div>
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
      <div className="pt-8 space-y-4 border-t border-white/10">
        <p className="text-center text-gray-400 leading-relaxed text-[19px]">
          포트폴리오를 끝까지 봐주셔서 진심으로 감사드립니다
          <br />
          좋은 인연으로 만나 함께 성장할 수 있기를 기대합니다
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={clsx(
            "flex items-center gap-2",
            "px-6 py-2.5 mx-auto",
            "bg-white/5 hover:bg-white/10 rounded-lg",
            "text-white text-[16px] font-medium",
            "transition-all group",
            "border border-white/10 hover:border-white/20"
          )}
        >
          <span>맨 위로 올라가기</span>
          <IoArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
}
