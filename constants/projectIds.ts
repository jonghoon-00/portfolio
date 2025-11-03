export const PROJECT_IDS = {
  K_NOSTALGIA: "k-nostalgia",
} as const;

export const MAIN_PROJECT_IDS = [PROJECT_IDS.K_NOSTALGIA];

export type ProjectId = (typeof PROJECT_IDS)[keyof typeof PROJECT_IDS];
