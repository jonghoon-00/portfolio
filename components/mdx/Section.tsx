export function Section({
  title,
  children,
  kicker,
}: {
  title: string;
  kicker?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-8 md:mb-10">
      {kicker && (
        <p className="text-sm uppercase tracking-widest text-neutral-500">
          {kicker}
        </p>
      )}
      <h3 className="mt-1 text-xl md:text-2xl font-semibold">{title}</h3>
      <div className="mt-3 prose prose-neutral max-w-none">{children}</div>
    </section>
  );
}
