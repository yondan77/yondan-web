
"use client";

import { useState } from "react";

export  default function Navbar() {
const [isOpen, setIsOpen] = useState(false);

const navItems = [
{ label: "Home", href: "/" },
{ label: "About", href: "/about" },
{ label: "Feedback Team", href: "/feedback-team" },
{ label: "Contact", href: "#contact" },
];

return (
<nav id="navbar" className="relative w-full bg-green-950 shadow-sm">
<div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
{/* Logo */}
<a href="#home" className="text-xl font-bold text-white">
DANI MABAR
</a>

    {/* Desktop Navbar */}
    <div className="hidden items-center gap-8 md:flex">
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
className="relative inline-block text-green-300 hover:text-green-50 transition-transform duration-500 hover:-translate-y-0.5 hover:translate-x-0.5 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-200 after:transition-all after:duration-300 hover:after:w-full"        >
          {item.label}
        </a>
      ))}
    </div>

    {/* Mobile Hamburger */}
    <button
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      className="flex h-10 w-10 items-center justify-center rounded-md text-white hover:bg-green-900 md:hidden"
      aria-label="Toggle navigation"
      aria-expanded={isOpen}
    >
      {isOpen ? (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      )}
    </button>

    {/* Mobile Dropdown */}
    {isOpen && (
      <div className="absolute left-0 top-full z-50 w-full border-t border-gray-100 bg-green-100 px-6 py-3 shadow-lg md:hidden">
        <div className="flex flex-col">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="rounded-md px-3 py-3 text-gray-600 transition  hover:text-green-950 hover:bg-green-200"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    )}
  </div>
</nav>

);
}