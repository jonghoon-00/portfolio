"use client";

import { Prose } from "@/components/mdx/Prose";
import { getProjectById } from "@/lib/projects";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const mdxMap: Record<string, () => Promise<{ default: React.ComponentType }>> =
  {
    "k-nostalgia": () => import("@/markdown/projects/k-nostalgia/overView.mdx"),
  };

export default function ProjectModalPage() {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();

  if (!slug) return null;

  const project = getProjectById(slug);
  const [MDX, setMDX] = React.useState<React.ComponentType | null>(null);

  useEffect(() => {
    mdxMap[slug]?.().then((mod) => setMDX(() => mod.default));
  }, [slug]);

  if (!project) return null;

  const onClose = () => router.back();

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="card w-full max-w-3xl rounded-2xl shadow-2xl p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <button onClick={onClose} className="px-2 py-1 rounded-md border">
            닫기
          </button>
        </div>
        {MDX ? (
          <Prose>
            <article style={{ ["--accent" as any]: project.accent }}>
              <MDX />
            </article>
          </Prose>
        ) : (
          <p>불러오는 중…</p>
        )}
      </div>
    </div>
  );
}
