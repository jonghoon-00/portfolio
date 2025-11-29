import { otherProjects } from "@/lib/data/projects.public";
import Link from "next/link";

export default function OtherProjects() {
  return (
    <section id="other-projects" className="section-others py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-2 md:px-4 space-y-14">
        <h2>Others</h2>
        <ul className="grid md:grid-cols-2 gap-4">
          {otherProjects.map((p) => (
            <li key={p.id} className="rounded-2xl border p-4">
              <h3 className="font-semibold">{p.title}</h3>
              <Link
                href={`/projects/${p.id}`}
                scroll={false}
                className="underline mt-3 inline-block"
              >
                자세히 보기
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
