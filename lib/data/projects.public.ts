import {
  MAIN_PROJECT_IDS,
  PROJECT_IDS,
  ProjectId,
} from "@/constants/projectIds";
import boardMateCover from "@/public/images/cover/board-mate.png";
import kNostalgiaCover from "@/public/images/cover/k-nostalgia.png";
import type { OtherProjectMeta, ProjectMetaBase } from "@/types/project";

// 메인 프로젝트 메타
export const MAIN_PROJECT_CARD_META: Record<
  ProjectId,
  {
    imageSrc: string;
    imageAlt: string;
    description: string;
    contextTags: string[];
    techTags: string[];
  }
> = {
  // "design-system-showcase": {
  //   imageSrc: "",
  //   imageAlt: "UI-KIT 메인 화면",
  //   description: "UI 시스템 설계, 운영에 대한 사고방식을 담은 프로젝트입니다.",
  //   contextTags: [],
  //   techTags: [],
  // },
  "k-nostalgia": {
    imageSrc: kNostalgiaCover.src,
    imageAlt: "향그리움(K-Nostalgia) 서비스 메인 화면",
    description:
      "쿠폰/결제/주문 내역 등 실제 서비스에 가까운 플로우를 구현한 프로젝트입니다.",
    contextTags: ["Team Project", "E-commerce"],
    techTags: [
      "Next.js · TS",
      "zustand",
      "Tanstack query",
      "Tailwind",
      "PortOne · Supabase",
    ],
  },
  "board-mate": {
    imageSrc: boardMateCover.src,
    imageAlt: "보드메이트 서비스 메인 화면",
    description:
      // "주변 보드게임 유저를 탐색하고, 실시간으로 참여 인원을 구할 수 있는 위치 기반 커뮤니티 서비스입니다.",
      "보드게임 유저 탐색용 위치 기반 커뮤니티 사이트입니다.",
    contextTags: ["Team Project", "Community"],
    techTags: [
      "React · JS",
      "Redux Toolkit",
      "Tanstack query",
      "Styled-components",
      "Supabase",
    ],
  },
};

// 메인 프로젝트 MDX
export const PROJECTS: ProjectMetaBase[] = [
  // {
  //   id: PROJECT_IDS.UI_KIT,
  //   title: "UI Kit / Design System Showcase",
  //   accent: "#4A90E2",
  //   type: "personal",
  //   techs: [],
  //   mdx: () => import("@/markdown/projects/ui-kit.mdx"),
  // },
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
    mdx: () => import("@/markdown/projects/k-nostalgia.mdx"),
  },
  {
    id: PROJECT_IDS.BOARD_MATE,
    title: "보드메이트 (Board Mate)",
    accent: "#4A90E2",
    type: "team",
    techs: [
      "React",
      "Styled Components",
      "TanStack Query",
      "Redux Toolkit",
      "Supabase",
    ],
    mdx: () => import("@/markdown/projects/board-mate.mdx"),
  },
] satisfies ProjectMetaBase[];

export const mainProjects = PROJECTS.filter((p) =>
  MAIN_PROJECT_IDS.includes(p.id)
);
export const getProjectById = (id: string): ProjectMetaBase | null =>
  PROJECTS.find((p) => p.id === id) ?? null;

//  ---------- 기타 프로젝트 메타 데이터
import AuthTaskDetailMdx from "@/markdown/projects/other-projects/auth-assignment.mdx";
import BookInDetailMdx from "@/markdown/projects/other-projects/book-in.mdx";
import ExpenseTrackerDetailMdx from "@/markdown/projects/other-projects/expense-tracker.mdx";
import MuscleVillageDetailMdx from "@/markdown/projects/other-projects/muscle-village.mdx";
import PokedexDetailMdx from "@/markdown/projects/other-projects/pokedex.mdx";

export type OtherProjectId =
  | "auth-task"
  | "book-in"
  | "pokedex"
  | "expense-tracker"
  | "muscle-village";

export const OTHER_PROJECTS: OtherProjectMeta[] = [
  {
    id: "auth-task",
    title: "🛡️ Auth 기능 구현 (인턴십 과제)",
    badge: "인턴십 과제",
    summary: [
      "회원가입, 로그인, 마이페이지 등 인증/인가 전반을 3일 안에 구현하며,",
      "토큰 관리와 라우팅 가드를 설계한 과제형 프로젝트입니다.",
    ],
    tags: [
      "Vite",
      "React-TS",
      "Zustand",
      "TanStack Query",
      "Axios",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/jonghoon-00/fe-internship-task",
    deployUrl: "https://fe-internship-task.vercel.app/",
    mdx: AuthTaskDetailMdx,
  },
  {
    id: "book-in",
    title: "📚 책 In (도서 의견 공유 사이트)",
    badge: "팀 프로젝트",
    summary: [
      "알라딘 API를 활용한 도서 의견 공유 커뮤니티형 서비스.",
      "상세 페이지에 Quill 에디터를 활용한 댓글 CRUD를 구현했습니다.",
    ],
    tags: ["React", "Quill Editor", "Tailwind CSS", "Tanstack Query"],
    githubUrl: "https://github.com/jonghoon-00/8th-bookShare",
    //TODO: deployUrl: "...",
    mdx: BookInDetailMdx,
  },
  {
    id: "pokedex",
    title: "🎮 포켓몬 도감 (1세대)",
    badge: "부트캠프 과제",
    summary: [
      "PokeAPI를 활용해 151마리 포켓몬 도감을 구현한 토이 프로젝트입니다.",
      "API 활용 + 데이터 가공 + 메타데이터 동적 처리",
    ],
    tags: ["Next.js 14", "TypeScript", "TanStack Query", "TailwindCSS"],
    githubUrl: "https://github.com/jonghoon-00/next_first_assignment",
    mdx: PokedexDetailMdx,
  },
  {
    id: "expense-tracker",
    title: "🏦 Expense Tracker (가계부)",
    badge: "부트캠프 과제",
    summary: [
      "월별/일별 지출 내역을 관리하고 통계를 시각화한 프로젝트형 과제",
      "과제 내용 : pros drilling > context api > redux 순으로 리팩토링",
    ],
    tags: ["React", "Context API", "Redux", "상태관리 리팩토링"],
    githubUrl: "https://github.com/jonghoon-00/assignment_expense_report",
    mdx: ExpenseTrackerDetailMdx,
  },
  {
    id: "muscle-village",
    title: "💪 근육마을 (Muscle Village)",
    badge: "팀 프로젝트",
    summary: [
      "모바일 UI로 설계한 캐주얼 헬스 커뮤니티 서비스.",
      "게시물 상세 페이지와 조회수, 좋아요 기능을 구현했습니다.",
    ],
    tags: ["React", "React Router", "Supabase"],
    // githubUrl: "...",
    mdx: MuscleVillageDetailMdx,
  },
];

export const getOtherProjectById = (
  id: OtherProjectId
): OtherProjectMeta | null => OTHER_PROJECTS.find((p) => p.id === id) ?? null;
