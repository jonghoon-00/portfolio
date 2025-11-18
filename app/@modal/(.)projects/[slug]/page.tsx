import { Prose } from "@/components/mdx/Prose";
import ProjectModal from "@/components/ui/Modal";
import { getProjectById } from "@/lib/data/projects.public";
import { notFound } from "next/navigation";

export default async function ProjectModalPage({
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
    <ProjectModal title={project.title} accent={project.accent}>
      <Prose>
        <Mdx />
      </Prose>
    </ProjectModal>
  );
}
