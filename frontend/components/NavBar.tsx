"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export default function NavBar() {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const threshold = 10; // mínima diferencia para considerar un cambio de scroll

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          // ignorar pequeños cambios
          if (Math.abs(currentY - lastScrollY.current) < threshold) {
            ticking.current = false;
            return;
          }

          // si hacemos scroll hacia abajo y ya pasamos 50px, ocultar
          if (currentY > lastScrollY.current && currentY > 50) {
            setHidden(true);
          } else if (currentY <= 50) {
            // si llegamos arriba del todo (o casi), mostrar
            setHidden(false);
          }

          lastScrollY.current = currentY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-transparent transform transition-transform duration-300 ease-in-out hidden lg:block ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
      style={{ willChange: "transform" }}
    >
      <div className="container mx-auto px-6 lg:px-20 py-6 flex flex-col sm:flex-row items-center justify-center">
        <div className="flex space-x-8 mt-3 sm:mt-0">
          <Link href="#home" className="text-white font-medium relative group">
            Home
            <span className="absolute left-0 bottom-0 w-full h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link
            href="#experience"
            className="text-white font-medium relative group"
          >
            Experience
            <span className="absolute left-0 bottom-0 w-full h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link
            href="#projects"
            className="text-white font-medium relative group"
          >
            Projects
            <span className="absolute left-0 bottom-0 w-full h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
