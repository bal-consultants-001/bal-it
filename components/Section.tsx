import { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
  background?: ReactNode;
  className?: string;
  fullWidth?: boolean;
};

export default function Section({
  id,
  title,
  children,
  background,
  className = "",
  fullWidth = false,
}: SectionProps) {
  return (
    <section
	  id={id}
	  className={`relative py-12 ${
		fullWidth ? "px-0" : "px-6"
	  } overflow-hidden ${className}`}
	>
      {background && (
        <div className="absolute inset-x-0 top-1/2 h-[102%] -translate-y-1/2 -z-10">
          {background}
        </div>
      )}

      <div className={fullWidth ? "w-full" : "max-w-4xl mx-auto"}>
        <div
          className={`bg-black/70 text-white p-8 shadow-lg ${
            fullWidth ? "rounded-none" : "rounded-xl"
          }`}
        >
          <h2 className="text-3xl font-bold mb-6">{title}</h2>
          <div className="text-lg leading-relaxed">{children}</div>
        </div>
      </div>
    </section>
  );
}
