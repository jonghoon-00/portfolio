import { ProjectId } from "@/constants/projectIds";

// 프로젝트 구분
export type ProjectType = "team" | "personal";

export interface ProjectMetaBase {
  id: ProjectId;
  title: string;
  accent?: string; // 글자 강조색
  type: ProjectType;
  techs: string[]; // 카드/리스트에 노출할 대표 기술 스택
}
