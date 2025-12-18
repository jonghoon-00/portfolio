"use client";

import clsx from "clsx";
import { motion, useAnimationControls, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

import { Col, Columns } from "@/components/layout/Columns";
import { SectionDivider } from "../ui/SectionDivider";

import { WORK_ITEMS } from "@/lib/data/work.public";

type WorkProps = {
  heroDone: boolean;
};

const containerVariants = {
  hidden: { opacity: 0, y: 2 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.15,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.06,
    },
  },
} as const;

// 왼쪽 컬럼 – 좀 더 빠르게
const leftVariants = {
  hidden: { opacity: 0, x: -14 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
} as const;

// 오른쪽 컬럼 – 약간 늦게 + 부드럽게
const rightVariants = {
  hidden: { opacity: 0, x: 18 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.08 },
  },
} as const;

export default function Work({ heroDone }: WorkProps) {
  const controls = useAnimationControls();
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: 0.25, once: true });

  // heroDone + inView 둘 다 true일 때만 visible로 전환
  useEffect(() => {
    if (heroDone && inView) {
      controls.start("visible");
    }
  }, [heroDone, inView, controls]);

  return (
    <section id="work" className="section-work">
      <div className="max-w-5xl mx-auto">
        {/* 헤더 – 살짝만 페이드업 */}
        {/* heroDone + inView 조건 충족 시점부터 재생 */}
        <motion.header
          className="space-y-2"
          initial={{ opacity: 0, y: 10 }}
          animate={heroDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <p className="eyebrow ml-1">Work Experience</p>
          <h2 className="section-title">실무 경험</h2>
          <p className="title-lead">
            실서비스 환경에서 다룬 첫 프론트엔드 경험입니다.
          </p>
          <SectionDivider />
        </motion.header>

        <motion.div
          ref={ref}
          className="scroll-mt-24 py-0 md:py-6 md:pt-4 space-y-10"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {WORK_ITEMS.map(
            ({ id, period, company, role, summary, duties, learnings }) => (
              <motion.section
                key={id}
                className="py-2 md:py-6 border-b border-[rgb(var(--border))]/60 last:border-b-0"
                variants={containerVariants}
              >
                <Columns
                  cols={2}
                  equalCols={false}
                  gap="gap-8 md:gap-10"
                  className="md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]"
                >
                  {/* LEFT: meta + 요약 */}
                  <Col>
                    <motion.div variants={leftVariants} className="space-y-4">
                      <div className="work-meta">
                        <span className="work-meta-dot" />
                        <div className="space-y-1.5 text-sm md:text-[0.96rem]">
                          <p className="text-xs md:text-[14px] font-semibold tracking-[0.22em] text-[rgb(var(--text-muted))]">
                            {period}
                          </p>
                          <p className="text-[1.5rem] font-semibold">
                            {company}
                          </p>
                          <p className="text-sm md:text-[15px] text-[rgb(var(--text-muted))]">
                            {role}
                          </p>
                        </div>
                      </div>

                      <p
                        className={clsx(
                          "text-[clamp(15px,1vw,18px)]",
                          "leading-[1.65]",
                          "mt-1"
                        )}
                      >
                        {summary}
                      </p>
                    </motion.div>
                  </Col>

                  {/* RIGHT: 담당 업무 / 경험 */}
                  <Col>
                    <motion.div
                      variants={rightVariants}
                      className={clsx(
                        "mt-6 pt-6 border-t border-[rgb(var(--border))]/60",
                        "md:mt-0 md:pt-0 md:pl-10 md:border-t-0 md:border-l"
                      )}
                    >
                      <div className="space-y-8">
                        {/* 담당 업무 */}
                        <section>
                          <p className="section-label">담당 업무</p>
                          <ul
                            className={clsx(
                              "mt-3 pl-5 list-disc",
                              "space-y-2.5",
                              "text-[clamp(15px,0.9vw,19px)] leading-[1.65]"
                            )}
                          >
                            {duties.map((duty) => (
                              <li key={duty}>{duty}</li>
                            ))}
                          </ul>
                        </section>

                        {/* 경험 */}
                        <section>
                          <p className="section-label">경험</p>
                          <ul
                            className={clsx(
                              "mt-3 pl-5 list-disc",
                              "space-y-2.5",
                              "text-[clamp(15px,0.9vw,18px)] leading-[1.65]"
                            )}
                          >
                            {learnings.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </section>
                      </div>
                    </motion.div>
                  </Col>
                </Columns>
              </motion.section>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
