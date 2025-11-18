import kizlingMdx from "@/markdown/work/kizling.mdx";
import type { ComponentType } from "react";

export type WorkMeta = {
  id: string;
  company: string;
  role: string;
  period: string;
  Mdx: ComponentType;
};

export const WORKS: WorkMeta[] = [
  {
    id: "kizling",
    company: "(주)키즐링",
    role: "Frontend Developer Intern",
    period: "2025.02 - 2025.03",
    Mdx: kizlingMdx,
  },
];
