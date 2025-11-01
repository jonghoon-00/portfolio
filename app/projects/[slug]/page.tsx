import { getProjectById } from "@/lib/projects";
import { notFound } from "next/navigation";
import MdxContent from "./MdxContent";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = getProjectById(slug);
  if (!project) return notFound();

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
      <MdxContent project={project} />
    </main>
  );
}
