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

  return (
    <>
      <section id="work" className="section-work py-16">
        <div className="max-w-5xl mx-auto px-2 md:px-4">
          <p className="text-xs font-medium tracking-[0.18em] mb-2">
            실서비스 환경에서 다룬 첫 프론트엔드 경험
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            WORK EXPERIENCE
          </h2>
          <motion.div
            id="work"
            className="scroll-mt-24 py-16 md:py-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {/* 섹션 타이틀 */}
            {/* <motion.header
          className="mb-8 space-y-2"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
        >

        </motion.header> */}

            {/* 2컬럼 레이아웃 */}
            {WORKS.map(({ id, company, role, period, Mdx }) => (
              <div
                key={company + period}
                className="grid gap-6 md:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]"
              >
                {/* 왼쪽 타임라인/메타 정보 */}
                <motion.div
                  className="relative flex flex-col gap-3 border-l border-neutral-200 pl-4 text-sm dark:border-neutral-800 md:pl-6"
                  variants={leftVariants}
                >
                  <div className="space-y-1">
                    <p className="text-sm font-medium tracking-[0.22em]">
                      {period}
                    </p>
                    <p className="text-sm font-semibold">{company}</p>
                    <p className="text-xs font-medium ">{role}</p>
                  </div>

                  <p className=" text-xs  md:block">
                    Java/Spring 기반 서비스를 다루며 프론트엔드 동작을 실제
                    트래픽 환경에서 검증했습니다.
                  </p>
                </motion.div>

                {/* 오른쪽 디테일 카드 */}
                <motion.div variants={rightVariants} className="card">
                  <div className="prose prose-sm md:prose-base prose-neutral dark:prose-invert max-w-none">
                    <Mdx />
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
