import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

export default async function DocumentPage({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) {
  const { slug } = "then" in params ? await params : params;

  const filePath = path.join(
    process.cwd(),
    "content/documents",
    `${slug}.md`
  );

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const content = fs.readFileSync(filePath, "utf8");

  return (
    <article className="max-w-4xl mx-auto py-16 px-6 sm:px-8 md:px-12">
	
	  <div className="flex justify-end mb-8">
		<Link
		  href="/"
		  className="
			px-4
			py-3
			border-2
			border-black
			rounded
			font-semibold
			hover:bg-black
			hover:text-white
			transition
			text-center
		  "
		>
		  Return to Site
		</Link>
	  </div>
	
      {/* Wrap ReactMarkdown in a div for styling */}
      <div className="whitespace-pre-wrap break-words text-base sm:text-lg leading-relaxed">
        <ReactMarkdown
          // Optional: customize elements with Tailwind classes
          components={{
            h1: ({ node, ...props }) => <h1 className="text-2xl font-bold mb-4" {...props} />,
            h2: ({ node, ...props }) => <h2 className="text-xl font-semibold mb-3" {...props} />,
            h3: ({ node, ...props }) => <h3 className="text-lg font-semibold mb-2" {...props} />,
            p: ({ node, ...props }) => <p className="mb-3" {...props} />,
            li: ({ node, ...props }) => <li className="ml-6 list-disc mb-1" {...props} />,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
