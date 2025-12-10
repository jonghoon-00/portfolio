import { ProjectId } from "@/constants/projectIds";
import { OtherProjectId } from "@/lib/data/projects.public";
import { ComponentType } from "react";

// 프로젝트 구분
export type ProjectType = "team" | "personal";

export interface ProjectMetaBase {
  id: ProjectId;
  title: string;
  accent?: string; // 글자 강조색
  type: ProjectType;
  techs: string[]; // 카드/리스트에 노출할 대표 기술 스택
  //test
  mdx: () => Promise<any>; // MDX 콘텐츠 동적 임포트 함수
}

export interface OtherProjectMeta {
  id: OtherProjectId;
  title: string;
  badge?: string;
  summary: string[];
  tags: string[];
  githubUrl?: string;
  deployUrl?: string;
  mdx: ComponentType;
}

export interface OtherProjectCardProps {
  title: string;
  badge?: string;
  summary: string[];
  tags: string[];
  githubUrl?: string;
  deployUrl?: string;
  onClick?: () => void;
}
