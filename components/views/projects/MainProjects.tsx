import clsx from "clsx";
import Link from "next/link";

import { ProjectId } from "@/constants/projectIds";
import { mainProjects } from "@/lib/data/projects.public";

import KNostalgiaCover from "@/public/images/cover/k-nostalgia.png";

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
    imageSrc: KNostalgiaCover.src,
    imageAlt: "향그리움(K-Nostalgia) 서비스 메인 화면",
    description:
      "전통시장 상점을 위한 커머스 서비스로, 쿠폰/결제/주문 내역 등 실제 서비스에 가까운 플로우를 구현한 프로젝트입니다.",
    tags: ["Team Project", "E-commerce", "Next.js · TS", "PortOne · Supabase"],
  },
};

export default function MainProjects() {
  return (
    <section id="main-projects" className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-2 md:px-4 space-y-14">
        <h2>Main Projects(주요 프로젝트)</h2>

        <ul
          className={clsx("grid sm:grid-cols-2 gap-3 sm:gap-4", "py-4 sm:py-6")}
        >
          {mainProjects.map((p) => (
            <MainProjectCard key={p.id} id={p.id} title={p.title} />
          ))}
        </ul>
      </div>
    </section>
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
            "rounded-[14px] border border-white/10 bg-surface-card/95",
            "p-3.5 shadow-[0_8px_24px_rgba(0,0,0,0.2)]",
            "transition-all duration-150 ease-[cubic-bezier(.22,.61,.36,1)]",
            "group-hover:-translate-y-1 group-hover:border-white/20 group-hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)]"
          )}
        >
          {/* 썸네일 */}
          <div className="relative overflow-hidden rounded-xl bg-linear-to-br from-primary-500/30 via-primary-700/20 to-transparent aspect-video">
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
