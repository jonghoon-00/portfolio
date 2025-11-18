import { mainProjects } from "@/lib/data/projects.public";
import clsx from "clsx";
import Link from "next/link";

export default function MainProjects() {
  return (
    <section id="main-projects">
      <h2 className="">Main Projects(주요 프로젝트)</h2>
      <ul
        className={clsx("grid sm:grid-cols-2 gap-2 sm:gap-4", "py-4 sm:py-6")}
      >
        {mainProjects.map((p) => (
          <li key={p.id} className="card">
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
