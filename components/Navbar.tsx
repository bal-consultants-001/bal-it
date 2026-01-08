"use client";

import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const menuItems = [
  { name: "Home", to: "intro" },
  { name: "About", to: "about" },
  { name: "Why BAL-IT", to: "why-choose-us" },
  { name: "Services", to: "services" },
  { name: "Pricing", to: "pricing" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const isBusinessPage = pathname === "/business";

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <Image
              src="/images/bal-it.png"
              alt="BAL-IT"
              width="160"
			  height="80"
              className="object-cover"
            />
			{/*<span className="font-bold text-xl text-black">BAL-IT</span>*/}

        <div className="flex items-center space-x-6 text-black">
          {/* Scroll navigation (same-page only) */}
          {menuItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-120}
              duration={500}
              activeClass="text-blue-600 font-semibold"
              className="cursor-pointer hover:text-blue-500"
            >
              {item.name}
            </ScrollLink>
          ))}

          {/* Page switch link */}
          <Link
            href={isBusinessPage ? "/" : "/business"}
            className="ml-6 px-3 py-1 border border-black rounded hover:bg-black hover:text-white transition"
          >
            {isBusinessPage ? "Home Users" : "Business Users"}
          </Link>
        </div>
      </div>
    </nav>
  );
}
