"use client";

import MdxProvider from "@/components/mdx/MdxProvider";
import { PROJECT_IDS } from "@/constants/projectIds";
import { ProjectMetaBase } from "@/types/project";
import React from "react";
import Loading from "../ui/Loading";

type ProjectId = (typeof PROJECT_IDS)[keyof typeof PROJECT_IDS];

const mdxMap: Record<
  ProjectId,
  () => Promise<{ default: React.ComponentType }>
> = {
  [PROJECT_IDS.K_NOSTALGIA]: () =>
    import("@/markdown/projects/k-nostalgia.mdx"),
};

export default function ClientMDXLoader({
  slug,
  project: { title, accent },
}: {
  slug: ProjectId;
  project: ProjectMetaBase;
}) {
  const [Comp, setComp] = React.useState<React.ComponentType | null>(null);

  React.useEffect(() => {
    let alive = true;
    mdxMap[slug]?.().then((m) => alive && setComp(() => m.default));
    return () => {
      alive = false;
    };
  }, [slug]);

  if (!Comp) return <Loading />;

  return (
    <div>
      <MdxProvider>
        <article style={{ ["--accent" as any]: accent }}>
          <Comp />
        </article>
      </MdxProvider>
    </div>
  );
}
