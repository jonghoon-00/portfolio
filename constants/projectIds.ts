export const PROJECT_IDS = {
  K_NOSTALGIA: "k-nostalgia",
} as const;

export type ProjectId = (typeof PROJECT_IDS)[keyof typeof PROJECT_IDS];
