import clsx from "clsx";

import Contact from "@/components/views/Contact";
import MainProjects from "@/components/views/projects/MainProjects";
import OtherProjects from "@/components/views/projects/OtherProjects";
import Work from "@/components/views/Work";

export default function Home() {
  return (
    <main
      className={clsx(
        "max-w-5xl",
        "mx-auto mt-14",
        "px-2 md:px-4 py-2 md:py-10 space-y-10"
      )}
    >
      <Work />
      <MainProjects />
      <OtherProjects />
      <Contact />
    </main>
  );
}
