"use client";

import clsx from "clsx";
import { useState } from "react";

import { Prose } from "@/components/mdx/Prose";
import ProjectModal from "@/components/ui/ProjectModal";
import { SectionDivider } from "@/components/ui/SectionDivider";

import {
  OTHER_PROJECTS,
  type OtherProjectId,
  getOtherProjectById,
} from "@/lib/data/projects.public";
import { OtherProjectCardProps } from "@/types/project";

export default function OtherProjects() {
  const [openId, setOpenId] = useState<OtherProjectId | null>(null);

  const openModal = (id: OtherProjectId) => setOpenId(id);
  const closeModal = () => setOpenId(null);

  const current = openId ? getOtherProjectById(openId) : null;
  const Detail = current?.mdx;

  return (
    <section id="other-projects" className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-2 md:px-4 space-y-8">
        <header className="space-y-2">
          <p className="eyebrow">Other Projects</p>
          <h2 className="section-title">기타 프로젝트</h2>
          <div>
            <p className="title-lead">
              짧은 실습, 인턴십 과제, 학습 목적의 사이드 프로젝트를 정리한
              섹션입니다.
            </p>
            <p className="title-lead">
              서비스 전체보다는 특정 기능 구현과 기술 실험에 집중했습니다.
            </p>
          </div>
          <SectionDivider />
        </header>

        {/* 모달 */}
        {Detail && current && (
          <ProjectModal title={current.title} size="sm" onClose={closeModal}>
            <Prose className="prose-others py-4">
              <Detail />
            </Prose>
          </ProjectModal>
        )}

        {/* 2컬럼 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-stretch">
          {OTHER_PROJECTS.map((project) => (
            <OtherProjectCard
              key={project.id}
              title={project.title}
              badge={project.badge}
              summary={project.summary}
              tags={project.tags}
              githubUrl={project.githubUrl}
              deployUrl={project.deployUrl}
              onClick={() => openModal(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function OtherProjectCard({
  title,
  badge,
  summary,
  tags,
  githubUrl,
  deployUrl,
  onClick,
}: OtherProjectCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "bg-surface-card/70",
        // 한 줄 안에서 높이를 일정하게 맞추기 위한 설정
        "flex h-full min-h-[160px] md:min-h-[180px] flex-col justify-between text-left",
        "group",
        "rounded-xl border border-white/6",
        "px-4 py-3 md:px-5 md:py-4",
        "shadow-[0_6px_18px_rgba(0,0,0,0.25)]",
        "transition-transform duration-150",
        "hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.4)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500",
        "cursor-pointer"
      )}
    >
      <div className="flex flex-col gap-1.5">
        {badge && (
          <p className="text-muted text-[15px] md:text-[17px]">{badge}</p>
        )}
        <h3 className="text-[17px] md:text-[20px] font-semibold tracking-[-0.01em]">
          {title}
        </h3>
        <p className="flex flex-col text-[14px] md:text-[15px] leading-relaxed text-muted line-clamp-2">
          {summary.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </p>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-neutral-200"
          >
            {tag}
          </span>
        ))}
      </div>

      {(githubUrl || deployUrl) && (
        <div className="mt-3 flex flex-wrap gap-3 text-[11px] text-primary-300">
          {deployUrl && (
            <a
              href={deployUrl}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 decoration-primary-500/60 group-hover:decoration-primary-400"
              onClick={(e) => e.stopPropagation()}
            >
              배포 링크
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 decoration-primary-500/60 group-hover:decoration-primary-400"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub
            </a>
          )}
        </div>
      )}
    </button>
  );
}
