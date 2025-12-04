import MainProjects from "@/components/views/projects/MainProjects";
import OtherProjects from "@/components/views/projects/OtherProjects";

export default function ProjectsContainer() {
  return (
    <section id="projects" className="section-projects">
      <MainProjects />
      <OtherProjects />
    </section>
  );
}
