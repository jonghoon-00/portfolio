"use client";

import clsx from "clsx";
import { motion } from "framer-motion";

interface SkillsBlockProps {
  delay: number;
  onHeroComplete?: () => void;
}

export default function SkillsBlock({
  delay,
  onHeroComplete,
}: SkillsBlockProps) {
  const skills = [
    "React",
    "TypeScript",
    "Next.js",
    "TanStack Query",
    "Zustand",
    "Tailwind CSS",
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        delayChildren: delay,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="show"
      className={clsx(
        "z-100",
        "hidden md:block",
        "border-y border-neutral-200 dark:border-neutral-700",
        "bg-white/60 dark:bg-black/30 backdrop-blur-sm",
        "mt-[-2vh]"
      )}
      transition={{
        delay: delay,
        duration: 0.4,
        ease: "easeOut",
      }}
      onAnimationComplete={onHeroComplete}
    >
      <div
        className={clsx(
          "max-w-5xl mx-auto",
          "px-4 py-5",
          "flex flex-wrap justify-center gap-3"
        )}
      >
        {skills.map((skill) => (
          <motion.li key={skill} variants={item} className="pill">
            {skill}
          </motion.li>
        ))}
      </div>
    </motion.ul>
  );
}
