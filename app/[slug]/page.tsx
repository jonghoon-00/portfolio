import Overview from "@/content/projects/k-nostalgia/overview.mdx";
import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";

export default function Project({ params }: { params: { slug: string } }) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) return notFound();

  return (
    <article className="prose prose-neutral max-w-none">
      <h1 className="text-3xl md:text-4xl font-bold">{p.title}</h1>
      <Overview />
    </article>
  );
}
