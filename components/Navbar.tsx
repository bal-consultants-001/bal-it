"use client";

import { Link } from "react-scroll";

const menuItems = [
  { name: "Home", to: "intro" },
  { name: "About", to: "about" },
  { name: "Why BAL-IT", to: "why-choose-us" },
  { name: "Services", to: "services" },
  { name: "Pricing", to: "pricing" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-between p-4">
        <span className="font-bold text-xl text-black">BAL-IT</span>
        <div className="space-x-4 text-black">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="text-blue-600 font-semibold"
              className="cursor-pointer hover:text-blue-500"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
