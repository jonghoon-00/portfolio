"use client";

import { useState } from "react";

import Contact from "@/components/views/Contact";
import Hero from "@/components/views/Hero/Hero";

import ProjectsContainer from "@/components/views/projects/ProjectsContainer";
import Work from "@/components/views/Work";

export default function Home() {
  // 인터렉션 딜레이 관리용 state
  const [heroDone, setHeroDone] = useState(false);
  return (
    <>
      <Hero onHeroComplete={() => setHeroDone(true)} />
      <main>
        <Work heroDone={heroDone} />
        <ProjectsContainer />
        <Contact />
      </main>
    </>
  );
}
