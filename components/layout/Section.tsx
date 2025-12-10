import clsx from "clsx";

export function Section({
  title,
  children,
  kicker,
  variant = "default",
}: {
  title: string;
  kicker?: string;
  children: React.ReactNode;
  variant?: "default" | "card";
}) {
  return (
    <section
      className={clsx(
        "mb-8 md:mb-10",
        variant === "card" &&
          "rounded-xl border border-white/8 bg-surface-card/60 p-4 md:p-5 shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
      )}
    >
      {kicker && (
        <p className="text-xs md:text-sm uppercase tracking-[0.18em] text-[rgb(var(--text-muted))]">
          {kicker}
        </p>
      )}
      <h3 className="mt-1 text-[15px] md:text-[16px] font-semibold tracking-[-0.02em]">
        {title}
      </h3>
      <div className="mt-3 prose prose-neutral max-w-none">{children}</div>
    </section>
  );
}
