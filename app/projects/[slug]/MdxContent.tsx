"use client";

import { Prose } from "@/components/mdx/Prose";
import { ProjectMetaBase } from "@/types/project";
import { useRouter } from "next/navigation";
import React from "react";

export default function MdxContent({
  project,
}: {
  project: ProjectMetaBase | null;
}) {
  const router = useRouter();
  const [MDX, setMDX] = React.useState<React.ComponentType | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!project) {
      router.replace("/");
      return;
    }

    let alive = true;

    (async () => {
      try {
        const mod = await project.mdx(); // 실제 호출
        if (alive) setMDX(() => mod.default);
      } catch (e) {
        if (alive) setError("MDX 로드 실패");
      } finally {
        if (alive) setLoading(false);
      }
    })();

    return () => {
      alive = false;
    };
  }, [project, router]);

  if (loading) return <p>loading…</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!MDX) return null;

  return (
    <Prose>
      <MDX />
    </Prose>
  );
}
