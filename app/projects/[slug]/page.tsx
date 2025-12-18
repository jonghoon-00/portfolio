import { Prose } from "@/components/mdx/Prose";
import { PROJECT_IDS } from "@/constants/projectIds";
import { getProjectById } from "@/lib/data/projects.public";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return Object.values(PROJECT_IDS).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectById(slug);
  if (!project) {
    notFound();
  }
  return {
    title: `${project.title} | Jonghoon Lee`,
    description: `Details about the ${project.title} project.`,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectById(slug);

  if (!project) {
    notFound();
  }
  const { default: Mdx } = await project.mdx();

  return (
    <main className="max-w-5xl mx-auto px-4 py-20">
      <h1
        className="text-xl md:text-4xl font-bold mb-4"
        style={{ color: `${project.accent}` }}
      >
        {project.title}
      </h1>
      <article style={{ ["--accent" as any]: project.accent }}>
        <Prose>
          <Mdx />
        </Prose>
      </article>
    </main>
  );
}
