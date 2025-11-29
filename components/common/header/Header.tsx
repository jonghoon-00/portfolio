"use client";

import { logoFont } from "@/app/fonts";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import Nav from "./Nav";

export default function Header() {
  const router = useRouter();
  return (
    <>
      <header className="header">
        <div className="header-inner">
          <button
            className={clsx(
              logoFont.className,
              "text-xs md:text-sm tracking-[0.16em]"
            )}
            onClick={(e) => {
              router.push("/");
            }}
          >
            {/* TODO 추후 수정 */}
            FE&nbsp;|&nbsp;Jonghoon
          </button>

          <Nav />
        </div>
      </header>
    </>
  );
}
