"use client";

import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const menuItems = [
  { name: "Home", to: "logo" },
  { name: "About", to: "about" },
  { name: "Why BAL-IT", to: "why-choose-us" },
  { name: "Services", to: "services" },
  { name: "Pricing", to: "pricing" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isBusinessPage = pathname === "/business";
  const [menuOpen, setMenuOpen] = useState(false);

  /* 🔒 Lock body scroll when menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <span className="font-bold text-xl text-black">
          BAL-IT
        </span>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-black">
          {menuItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              spy
              smooth
              offset={-90}
              duration={500}
              activeClass="text-blue-600 font-semibold"
              className="cursor-pointer hover:text-blue-500 transition"
            >
              {item.name}
            </ScrollLink>
          ))}

			<Link
			  href={isBusinessPage ? "/" : "/business"}
			  className="hidden md:inline-block ml-6 px-3 py-1 border border-black rounded hover:bg-black hover:text-white transition"
			>
			  {isBusinessPage ? "Home Users" : "Business Users"}
			</Link>

        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-black z-50"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 🔲 Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* 📱 Mobile Menu Panel */}
      <div
        className={`fixed top-[72px] left-0 w-full bg-white shadow-lg transform transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col px-6 py-6 space-y-5 text-black">
          {menuItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              smooth
              offset={-90}
              duration={500}
              spy
              activeClass="text-blue-600 font-semibold"
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer text-lg hover:text-blue-500 transition"
            >
              {item.name}
            </ScrollLink>
          ))}

          <Link
            href={isBusinessPage ? "/" : "/business"}
            onClick={() => setMenuOpen(false)}
            className="mt-6 px-4 py-3 border-2 border-black rounded text-center font-semibold hover:bg-black hover:text-white transition"
          >
            {isBusinessPage ? "Home Users" : "Business Users"}
          </Link>
        </div>
      </div>
    </nav>
  );
}
