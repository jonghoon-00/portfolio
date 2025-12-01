// work.data.ts
export type WorkItem = {
  id: string;
  period: string;
  company: string;
  role: string;
  summary: string;
  duties: string[];
  learnings: string[];
};

export const WORK_ITEMS: WorkItem[] = [
  {
    id: "kizling",
    period: "2025.02 - 2025.03",
    company: "(주)키즐링",
    role: "Frontend Developer Intern",
    summary:
      "Java/Spring 서비스의 Admin 페이지 개선 및 React 기반 심사 툴 초기 구축을 담당했습니다.",
    duties: [
      "공모전/챌린지 심사 툴의 React 초기 세팅 (라우팅, 폴더 구조, 레이아웃 설계)",
      "Tailwind theme/plugin 활용한 디자인 시스템 구축 및 공용 컴포넌트(modal, toast, 캘린더) 제작",
      "이벤트 신청 페이지 개발 (폼 UI, Supabase DB 연동, 유효성 검증 구현)",
      "Java/Spring 기반 Admin 페이지의 필터링·검색 기능 개선 및 UI/UX 수정",
      "중복 JS 코드를 공용 함수로 리팩토링하여 13개 파일의 유지보수성 향상",
    ],
    learnings: [
      "프로젝트 초기 단계에서 기술 스택 선정 이유를 명확히 하고 문서화하는 경험",
      "서비스 특성(정적 페이지 부재, 높은 인터렉션)을 고려한 React vs Next.js 기술 의사결정",
      "레거시 코드의 반복 패턴을 파악하고 common.js로 추상화하며 실용적 리팩토링 연습",
    ],
  },
];
