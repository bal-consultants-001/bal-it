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

  /* 🔒 Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto flex items-center p-4">

        {/* Desktop Nav */}
        <div className="hidden lg:flex w-full items-center text-black">
          
          {/* Centered menu items */}
          <div className="flex flex-1 justify-center space-x-6">
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
          </div>

          {/* Right-aligned button */}
          <Link
            href={isBusinessPage ? "/" : "/business"}
            className="ml-auto px-3 py-1 border border-black rounded hover:bg-black hover:text-white transition"
          >
            {isBusinessPage ? "Home Users" : "Business Users"}
          </Link>
        </div>

        {/* Mobile / Tablet Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden ml-auto text-black z-50"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile menu */}
      <div
        className={`fixed top-[72px] left-0 w-full bg-white shadow-lg transform transition-transform duration-300 lg:hidden ${
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
              onClick={() => setMenuOpen(false)}
              activeClass="text-blue-600 font-semibold"
              className="cursor-pointer text-lg hover:text-blue-500 transition"
            >
              {item.name}
            </ScrollLink>
          ))}

          {/* Mobile button */}
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
