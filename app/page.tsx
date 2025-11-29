import Contact from "@/components/views/Contact";
import Hero from "@/components/views/Hero/Hero";

import ProjectsContainer from "@/components/views/projects/ProjectsContainer";
import Work from "@/components/views/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <Work />
        <ProjectsContainer />
        <Contact />
      </main>
    </>
  );
}
