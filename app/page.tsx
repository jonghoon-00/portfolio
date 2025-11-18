import clsx from "clsx";

import Contact from "@/components/views/Contact";
import Hero from "@/components/views/Hero/Hero";
import MainProjects from "@/components/views/projects/MainProjects";
import OtherProjects from "@/components/views/projects/OtherProjects";
import Work from "@/components/views/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <main
        className={clsx(
          "max-w-5xl",
          "mx-auto",
          "px-2 md:px-4 py-2 md:py-10 space-y-10"
        )}
      >
        <Work />
        <section id="projects">
          <MainProjects />
          <OtherProjects />
        </section>
        <Contact />
      </main>
    </>
  );
}
