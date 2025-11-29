"use client";

import clsx from "clsx";
import { motion } from "framer-motion";

interface ScrollIndicatorProps {
  delay: number;
}

export default function ScrollIndicator({ delay }: ScrollIndicatorProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay,
        duration: 0.4,
        ease: "easeOut",
      }}
      className={clsx(
        "md:hidden",
        "absolute inset-x-0 bottom-13",
        "flex flex-col items-center justify-center",
        "z-50"
      )}
    >
      <div className="text-[10px] text-neutral-300/70">
        실서비스 환경에서의 프론트엔드 경험
      </div>
      <p
        className={clsx(
          "text-[10px] text-neutral-300/70",
          "flex justify-center items-center gap-1"
        )}
      >
        <span>Scroll</span>
        <span>↓</span>
      </p>
    </motion.button>
  );
}
