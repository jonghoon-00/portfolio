import ClientMDXLoader from "@/components/mdx/ClientMDXLoader";
import { PROJECT_IDS } from "@/constants/projectIds";
import { getProjectById } from "@/lib/projects.public";
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

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
      <ClientMDXLoader slug={slug as any} project={project} />
    </main>
  );
}
