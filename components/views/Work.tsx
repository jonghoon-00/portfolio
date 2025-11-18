"use client";

import { WORKS } from "@/lib/data/work.public";
import { motion } from "framer-motion";

export default function Work() {
  const containerVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.08,
      },
    },
  } as const;

  const leftVariants = {
    hidden: { opacity: 0, x: -16 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  } as const;

  const rightVariants = {
    hidden: { opacity: 0, x: 16 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  } as const;

  console.log("WORKS in WorkSectionVariantB", WORKS);
  return (
    <motion.section
      id="work"
      className="scroll-mt-24 py-16 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* 섹션 타이틀 */}
      <motion.header
        className="mb-8 space-y-2"
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <p className="text-xs font-medium tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
          실서비스 환경에서 다룬 첫 프론트엔드 경험
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
          WORK EXPERIENCE
        </h2>
      </motion.header>

      {/* 2컬럼 레이아웃 */}
      {WORKS.map(({ id, company, role, period, Mdx }) => (
        <div
          key={company + period}
          className="grid gap-6 md:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]"
        >
          {/* 왼쪽 타임라인/메타 정보 */}
          <motion.div
            className="relative flex flex-col justify-between gap-3 border-l border-neutral-200 pl-4 text-sm dark:border-neutral-800 md:pl-6"
            variants={leftVariants}
          >
            {/* 타임라인 점 */}
            <div className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-neutral-400 dark:bg-neutral-500" />

            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
                2025
              </p>
              <p className="text-sm font-medium text-neutral-900 dark:text-neutral-50">
                {period}{" "}
                {/* {work.period && <span>{work.periodDetail}</span>} */}
              </p>
              <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">
                {company}
              </p>
              <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                {role}
              </p>
            </div>

            <p className="hidden text-xs text-neutral-500 dark:text-neutral-400 md:block">
              Java/Spring 기반 서비스를 다루며 프론트엔드 동작을 실제 트래픽
              환경에서 검증했습니다.
            </p>
          </motion.div>

          {/* 오른쪽 디테일 카드 */}
          <motion.div
            className="rounded-2xl border border-neutral-200/80 bg-white/80 px-4 py-4 shadow-sm backdrop-blur-sm dark:border-neutral-800/70 dark:bg-neutral-950/70"
            variants={rightVariants}
          >
            <div className="prose prose-sm md:prose-base prose-neutral dark:prose-invert max-w-none">
              <Mdx />
            </div>
          </motion.div>
        </div>
      ))}
    </motion.section>
  );
}
