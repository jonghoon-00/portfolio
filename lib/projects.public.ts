import { MAIN_PROJECT_IDS, PROJECT_IDS } from "@/constants/projectIds";
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
  },
] satisfies ProjectMetaBase[];

// 편의 함수
export const mainProjects = PROJECTS.filter((p) =>
  MAIN_PROJECT_IDS.includes(p.id)
);
export const otherProjects = PROJECTS.filter((p) => !mainProjects.includes(p));
export const getProjectById = (id: string): ProjectMetaBase | null =>
  PROJECTS.find((p) => p.id === id) ?? null;
