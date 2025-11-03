import ClientMDXLoader from "@/components/mdx/ClientMDXLoader";
import Modal from "@/components/ui/Modal";
import { getProjectById } from "@/lib/projects.public";

export default async function ProjectModalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = getProjectById(slug);
  if (!project) return null;

  return (
    <Modal title={project.title} accent={project.accent}>
      <ClientMDXLoader slug={slug as any} project={project} />
    </Modal>
  );
}
