"use client";

import clsx from "clsx";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useCallback, useRef } from "react";

import { useIsMobile } from "@/hooks/useMediaQuery";
import ScrollIndicator from "./ScrollIndicator";
import SkillsBlock from "./SkillsBlock";

interface HeroProps {
  onHeroComplete?: () => void;
}

const TEXT_DURATION = 1;
const TEXT_STAGGER = 0.7;
const TEXT_ITEMS = 3;

const container = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
} as const;
const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

const DELAY = TEXT_DURATION + TEXT_STAGGER * (TEXT_ITEMS - 1) - 0.3;
const SNAP_THRESHOLD = 0.04; // 이 값 넘을 때 스냅

export default function Hero({ onHeroComplete }: HeroProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isMobile = useIsMobile();
  const overThresholdRef = useRef(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.25], [1, 1, 0]);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -24]);

  const handleScrollToNextSection = useCallback(() => {
    const heroEl = ref.current;
    if (!heroEl) return;

    const nextEl = heroEl.nextElementSibling as HTMLElement | null;
    if (!nextEl) return;

    const top = nextEl.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }, []);

  // 모바일에서만: threshold를 넘어갈 때 한 번 실행
  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (!isMobile) return;

    const wasOver = overThresholdRef.current;
    const isOver = value > SNAP_THRESHOLD;

    if (!wasOver && isOver) {
      handleScrollToNextSection();
    }

    // 값 업데이트(위로 올라올 시)
    overThresholdRef.current = isOver;
  });

  return (
    <section id="hero" className={clsx("relative section-hero")} ref={ref}>
      <div
        className={clsx(
          "hero-layer",
          "max-w-5xl min-h-screen md:min-h-[82vh]",
          "px-4 md:px-6  mx-auto",
          "flex flex-col items-center justify-center",
          "text-center",
          "-translate-y-6"
        )}
      >
        <div className={clsx("w-full max-w-5xl mx-auto")}>
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className={clsx("w-full mx-auto text-center", "md:max-w-[800px]")}
            style={{ opacity, y: translateY }}
          >
            <motion.h1
              variants={item}
              className={clsx(
                "mt-2 flex flex-col justify-center items-center md:flex-row gap-2",
                "hero-title"
              )}
            >
              <span>프론트엔드 엔지니어,</span>
              <span>이종훈입니다.</span>
            </motion.h1>

            <motion.p variants={item} className={clsx("hero-body mt-8")}>
              재사용 가능한 구조와 안정적인 UI를 설계합니다.
            </motion.p>

            <motion.p variants={item} className={clsx("hero-body")}>
              정교한 구조와 부드러운 인터랙션을 지향합니다.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* 모바일: 인디케이터 / 데스크탑: 스킬 블록 */}
      <SkillsBlock delay={DELAY} onHeroComplete={onHeroComplete} />

      {/* 인디케이터 클릭 시에도 항상 스크롤 동작 */}
      <ScrollIndicator delay={DELAY} onClick={handleScrollToNextSection} />
    </section>
  );
}
