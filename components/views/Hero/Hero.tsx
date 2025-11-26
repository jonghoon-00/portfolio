"use client";

import { scrollToSection } from "@/lib/scroll";
import clsx from "clsx";
import { motion, type Variants } from "framer-motion";

const TEXT_DURATION = 1.2;
const TEXT_STAGGER = 0.7;
const TEXT_ITEMS = 5; // 항목 개수(줄 수)

const container: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: TEXT_DURATION,
      ease: "easeOut",
      staggerChildren: TEXT_STAGGER,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

const ARROW_DELAY = TEXT_DURATION + TEXT_STAGGER * (TEXT_ITEMS - 1) + 0.15;
export default function Hero() {
  return (
    <section
      id="hero"
      className={clsx(
        "relative min-h-screen",
        "bg-hero-light bg-hero-dark hero-spotlights"
      )}
    >
      <div className="relative z-10 flex min-h-[80vh] md:min-h-screen">
        <div className="w-full max-w-5xl mx-auto px-4 md:px-5 flex items-center">
          {/* 여기 translateY로 데스크탑에서 약간 위로 끌어올림 */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="w-full md:max-w-[800px] md:translate-y-[-16vh]"
          >
            <motion.p variants={item} className="tracking-[0.22em] uppercase">
              Frontend Engineer
            </motion.p>

            <motion.h1 variants={item} className="mt-4">
              프론트엔드 엔지니어, 이종훈
            </motion.h1>

            <motion.p
              variants={item}
              className=""
              // style={{ color: "var(--text-muted)" }}
            >
              읽기 좋은 코드로 안정적인 UI를 만듭니다.
            </motion.p>
            <motion.p variants={item} className="">
              디테일을 놓치지 않고, 사용자 경험을 우선합니다.
            </motion.p>
            <motion.p variants={item} className="" style={{ color: "red" }}>
              TODO : 소개 문구 한줄 추가 + 기술 스택 나열
            </motion.p>
          </motion.div>
        </div>
      </div>
      {/* 스크롤 유도 화살표 */}
      <motion.button
        type="button"
        onClick={() => scrollToSection("work")}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: ARROW_DELAY,
          duration: 0.4, // 페이드인 속도
          ease: [0.22, 0.61, 0.36, 1],
        }}
        style={{ animationDelay: `${ARROW_DELAY + 0.1}s` }}
        className="hero-scroll-indicator arrow-bounce z-100"
      >
        <span className="hero-scroll-label">Scroll</span>
        <span className="hero-scroll-icon">↓</span>
      </motion.button>
    </section>
  );
}
