import MainProjects from "@/components/views/projects/MainProjects";
import OtherProjects from "@/components/views/projects/OtherProjects";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10 space-y-10">
      <MainProjects />
      <OtherProjects />
    </main>
  );
}
