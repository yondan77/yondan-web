
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Dropdown() {
  const [open, setOpen] = useState(false);

  const items = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Feedback Team", href: "/feedback-team" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="relative inline-block w-56">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="flex w-full items-center justify-between rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Menu

        <svg
          className={`h-4 w-4 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m6 9 6 6 6-6"
          />
        </svg>
      </button>

      {open && (
        <ul className="absolute left-0 z-50 mt-2 w-full rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-2 text-sm text-gray-700 transition hover:bg-green-50 hover:text-green-700"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
