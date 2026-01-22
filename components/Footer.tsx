// components/Footer.tsx
import Link from "next/link";
import fs from "fs";
import path from "path";
import Image from "next/image";

export default function Footer() {
  // Get the list of markdown files from the server
  const documentsDir = path.join(process.cwd(), "content/documents");
  const files = fs.existsSync(documentsDir)
    ? fs.readdirSync(documentsDir).filter(f => f.endsWith(".md"))
    : [];

  return (
    <footer className="bg-black text-white p-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-6">

        {/* Left: Documents */}
        <div className="flex-1">
          <h4 className="font-semibold mb-3">Documents</h4>
          <ul className="space-y-1">
            {files.map(file => {
              const slug = file.replace(".md", "");
              return (
                <li key={file}>
                  <Link
                    href={`/documents/${slug}`}
                    className="text-blue-600 hover:underline"
                  >
                    {slug.replace(/-/g, " ")}
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="mt-6 text-sm text-gray-500">
            &copy; {new Date().getFullYear()} BAL-IT
          </p>
        </div>

        {/* Right: Logo */}
        <div className="flex-shrink-0 flex items-center">
          <Image
            src="/images/bal-it-d.png" // your logo path
            alt="BAL-IT Logo"
            width={180}
            height={80}
            className="object-contain"
          />
        </div>

      </div>
    </footer>
  );
}
