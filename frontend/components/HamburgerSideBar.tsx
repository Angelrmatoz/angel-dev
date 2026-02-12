"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export const HamburgerSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <div className="lg:hidden">
      {/* Botón Flotante */}
      <button
        onClick={toggleMenu}
        className="fixed top-6 right-6 z-[60] p-3 bg-gray-800/40 backdrop-blur-md border border-white/10 rounded-full text-white shadow-xl hover:bg-gray-700/50 transition-all active:scale-95"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[58]"
          onClick={toggleMenu}
        />
      )}

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900/40 backdrop-blur-xl border-l border-white/10 z-[59] transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col mt-24 px-8 space-y-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={toggleMenu}
              className="text-xl font-medium text-white/90 hover:text-white transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};
