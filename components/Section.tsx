import { ReactNode } from "react";

export default function Section({
  id,
  title,
  children,
  background,
}: {
  id: string;
  title: string;
  children: ReactNode;
  background?: ReactNode;
}) {
  return (
    <section
      id={id}
      className="relative py-24 px-6 overflow-hidden"
    >
      {/* Background layer */}
      {background && (
        <div className="absolute inset-x-0 top-1/2 h-[120%] -translate-y-1/2 -z-10">
          {background}
        </div>
      )}

      {/* Content */}
      <div className="max-w-4xl mx-auto w-full">
        <div className="bg-black/70 text-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6">{title}</h2>
          <div className="text-lg leading-relaxed">{children}</div>
        </div>
      </div>
    </section>
  );
}
