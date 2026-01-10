export const PROJECT_IDS = {
  K_NOSTALGIA: "k-nostalgia",
  BOARD_MATE: "board-mate",
  // UI_KIT: "design-system-showcase",
} as const;

export const MAIN_PROJECT_IDS = [
  PROJECT_IDS.K_NOSTALGIA,
  PROJECT_IDS.BOARD_MATE,
  // PROJECT_IDS.UI_KIT,
] as const;

export type ProjectId = (typeof PROJECT_IDS)[keyof typeof PROJECT_IDS];
