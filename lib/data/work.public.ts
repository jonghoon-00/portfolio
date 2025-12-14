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
      "공모전/챌린지 심사 툴의 React 초기 세팅",
      "디자인 시스템 구축 및 공용 컴포넌트 제작",
      "이벤트 신청 페이지 폼 UI, DB 연동, 유효성 검증 구현",
      "Java/Spring 기반 Admin 페이지의 필터링·검색 기능 개선 등 UX 향상",
    ],
    learnings: [
      "프로젝트 초기 단계 - 기술 스택 선정 이유를 명확히 하고 문서화하는 경험",
      "서비스 특성(정적 페이지 부재, 높은 인터렉션)을 고려한 기술 의사결정",
      "Admin 페이지 - 레거시 코드의 반복 패턴을 파악하고 common.js로 추상화하며 실용적 리팩토링 경험",
    ],
  },
];
