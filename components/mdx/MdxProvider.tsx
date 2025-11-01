"use client";

import { MDXProvider } from "@mdx-js/react";
import React from "react";
import { mdxComponents } from "./Elements";

export default function MdxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MDXProvider components={mdxComponents}>{children}</MDXProvider>;
}
