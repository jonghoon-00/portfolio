'use client";';
import clsx from "clsx";
import React from "react";

interface ProseProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

export function Prose({ className, ...props }: ProseProps) {
  return (
    <div
      className={clsx(
        "prose prose-neutral dark:prose-invert max-w-none",
        "prose-headings:font-semibold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl",
        "prose-p:leading-relaxed prose-li:marker:text-gray-400",
        "prose-img:rounded-xl prose-img:shadow-sm",
        "prose-blockquote:border-l-4 prose-blockquote:pl-4 prose-blockquote:italic",
        className
      )}
      {...props}
    />
  );
}
