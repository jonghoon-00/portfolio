import { mainProjects } from "@/lib/projects";
import Link from "next/link";

export default function MainProjects() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Main Projects</h2>
      <ul className="grid md:grid-cols-2 gap-4">
        {mainProjects.map((p) => (
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
    </section>
  );
}
