import clsx from "clsx";
import Link from "next/link";

import { ProjectId } from "@/constants/projectIds";
import {
  MAIN_PROJECT_CARD_META,
  mainProjects,
} from "@/lib/data/projects.public";

import { SectionDivider } from "@/components/ui/SectionDivider";

export default function MainProjects() {
  return (
    <>
      <section id="main-projects">
        <div className="max-w-5xl mx-auto">
          <header className="mb-4 sm:mb-6 flex flex-col gap-1.5">
            <p className="ml-2 eyebrow">Main projects</p>
            <h2 className="section-title ml-2 font-bold">주요 프로젝트</h2>
            <p className="ml-2 flex flex-col md:flex-row md:gap-1">
              <span className="title-lead">
                대표적으로 구축한 서비스로, 실제 유저 플로우가 존재하고
              </span>
              <span className="title-lead">
                기획-설계-개발을 모두 경험한 프로젝트입니다.
              </span>
            </p>
          </header>
          <SectionDivider />

          <ul
            className={clsx(
              "grid sm:grid-cols-2 gap-4 sm:gap-12",
              "py-2 sm:py-4"
            )}
          >
            {mainProjects.map((p) => (
              <MainProjectCard key={p.id} id={p.id} title={p.title} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

/** 단일 프로젝트 카드 컴포넌트 (이미지 + 텍스트) */
function MainProjectCard({ id, title }: { id: ProjectId; title: string }) {
  const meta = MAIN_PROJECT_CARD_META[id];

  return (
    <li>
      <Link
        href={`/projects/${id}`}
        className="group block h-full no-underline text-inherit -mx-1!"
      >
        <article
          className={clsx(
            "flex h-full flex-col gap-3",
            // 카드 베이스 (모던 뉴트럴 플랫)
            "rounded-[14px] border border-white/8 bg-surface-card/90",
            "p-4 sm:p-5 shadow-[0_8px_24px_rgba(0,0,0,0.2)]",
            "transition-all duration-150 ease-[cubic-bezier(.22,.61,.36,1)]",
            "group-hover:-translate-y-2 group-hover:border-white/20 group-hover:shadow-[0_16px_36px_rgba(0,0,0,0.35)]"
          )}
        >
          {/* 썸네일 */}
          <div className="relative aspect-video overflow-hidden rounded-xl bg-linear-to-br from-primary-500/25 via-primary-700/15 to-transparent">
            {meta && (
              <img
                src={meta.imageSrc}
                alt={meta.imageAlt}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            )}
          </div>

          {/* 텍스트 영역 */}
          <div className="flex flex-col">
            <h3 className="text-[17px] md:text-[23px] font-semibold tracking-[-0.02em] mt-1 mb-0.5">
              {title}
            </h3>

            {meta && (
              <>
                <p className="h-[52px] text-muted">{meta.description}</p>

                <SectionDivider space="sm" />

                <div className="mt-2 flex flex-col gap-3">
                  {/* context tags */}
                  <div className="flex flex-wrap gap-1">
                    {meta.contextTags.map((c) => (
                      <span key={c} className="pill text-neutral-100!">
                        {c}
                      </span>
                    ))}
                  </div>

                  {/* tech tags */}
                  <div className="flex flex-wrap gap-1">
                    {meta.techTags.map((t) => (
                      <span key={t} className="pill ">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </article>
      </Link>
    </li>
  );
}
