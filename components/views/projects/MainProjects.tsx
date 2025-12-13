import clsx from "clsx";
import Link from "next/link";

import { ProjectId } from "@/constants/projectIds";
import { mainProjects } from "@/lib/data/projects.public";

import { SectionDivider } from "@/components/ui/SectionDevider";

import boardMateCover from "@/public/images/cover/board-mate.png";
import kNostalgiaCover from "@/public/images/cover/k-nostalgia.png";

//TODO : - 태그 2줄로 정렬
//	1줄: 프로젝트 성격(Team / 개인 / 도메인 영역 등)
//	2줄: 기술 스택
const MAIN_PROJECT_CARD_META: Record<
  ProjectId,
  {
    imageSrc: string;
    imageAlt: string;
    description: string;
    tags: string[];
  }
> = {
  "k-nostalgia": {
    imageSrc: kNostalgiaCover.src,
    imageAlt: "향그리움(K-Nostalgia) 서비스 메인 화면",
    description:
      "전통시장 상점을 위한 커머스 서비스로, 쿠폰/결제/주문 내역 등 실제 서비스에 가까운 플로우를 구현한 프로젝트입니다.",
    tags: ["Team Project", "E-commerce", "Next.js · TS", "PortOne · Supabase"],
  },
  "board-mate": {
    imageSrc: boardMateCover.src,
    imageAlt: "보드메이트 서비스 메인 화면",
    description:
      "주변 보드게임 유저를 탐색하고, 실시간으로 참여 인원을 구할 수 있는 위치 기반 커뮤니티 서비스입니다.",
    tags: ["Team Project", "Community", "React · JS", "Supabase"],
  },
};

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
              "grid sm:grid-cols-2 gap-4 sm:gap-8",
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
        scroll={false}
        className="group block h-full"
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
          <div className="flex flex-col gap-1.5">
            <h3 className="text-[15px] md:text-[16px] font-semibold tracking-[-0.02em]">
              {title}
            </h3>

            {meta && (
              <>
                <p className="text-[13px] md:text-[14px] leading-relaxed text-muted line-clamp-3">
                  {meta.description}
                </p>

                <div className="mt-2 flex flex-wrap gap-1.5">
                  {meta.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-neutral-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </article>
      </Link>
    </li>
  );
}
