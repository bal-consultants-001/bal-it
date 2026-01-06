export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="relative min-h-screen pt-24 pb-16 px-6 overflow-hidden"
    >
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
        <div className="text-lg leading-relaxed">{children}</div>
      </div>
    </section>
  );
}
