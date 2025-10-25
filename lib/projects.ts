import { PROJECT_IDS } from "@/constants/projectIds";
import { ProjectMetaBase } from "@/types/project";

export const PROJECTS: ProjectMetaBase[] = [
  {
    id: PROJECT_IDS.K_NOSTALGIA,
    title: "향그리움 (K-Nostalgia)",
    accent: "#BD873F",
    type: "team",
    techs: [
      "Next.js",
      "TS",
      "Tailwind",
      "TanStack Query",
      "Zustand",
      "Supabase",
    ],
    mdx: () => import("@/content/projects/k-nostalgia/overview.mdx"),
  },
];

// 편의 함수
export const mainProjects = PROJECTS.filter((p) =>
  ["k-nostalgia", "expense-tracker"].includes(p.id)
);
export const otherProjects = PROJECTS.filter((p) => !mainProjects.includes(p));
export const getProjectById = (id: string) =>
  PROJECTS.find((p) => p.id === id) ?? null;
