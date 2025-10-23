// slug/타이틀/경로 정보

export type Project = {
  slug: string; // 동적 라우팅 키
  title: string;
  summary?: string;
  tags?: string[];
  // 필요시 MDX 경로 등도 메타로
  mdx?: {
    overview?: string; // 예: '/content/projects/k-nostalgia/overview.mdx'
  };
};

export const projects: Project[] = [
  {
    slug: "k-nostalgia",
    title: "향그리움 (전통시장 커머스)",
    summary: "쿠폰/배송지/결제 흐름을 일관된 상태로 설계·구현",
    tags: ["Next.js", "Tailwind", "Zustand"],
    mdx: { overview: "/content/projects/k-nostalgia/overview.mdx" },
  },
  // ...다른 프로젝트들
];
