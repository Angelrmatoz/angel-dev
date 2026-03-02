"use client";

import { Link, usePathname } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import React, { useEffect, useRef, useState } from "react";

export default function NavBar() {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const t = useTranslations("NavBar");
  const locale = useLocale();
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const threshold = 10;

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (Math.abs(currentY - lastScrollY.current) < threshold) {
            ticking.current = false;
            return;
          }

          if (currentY > lastScrollY.current && currentY > 50) {
            setHidden(true);
          } else if (currentY <= 50) {
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
      <div className="container mx-auto px-6 lg:px-20 py-6 flex items-center justify-center relative">
        <div className="flex space-x-8">
          <Link href="#home" className="text-white font-medium relative group">
            {t("home")}
            <span className="absolute left-0 bottom-0 w-full h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link
            href="#experience"
            className="text-white font-medium relative group"
          >
            {t("experience")}
            <span className="absolute left-0 bottom-0 w-full h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link
            href="#projects"
            className="text-white font-medium relative group"
          >
            {t("projects")}
            <span className="absolute left-0 bottom-0 w-full h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
        </div>

        {/* Language Switcher */}
        <div className="absolute right-6 lg:right-20 flex items-center space-x-4 bg-white/5 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
          <Link
            href={pathname}
            locale="es"
            className={`text-xs font-bold transition-colors ${
              locale === "es"
                ? "text-blue-400"
                : "text-gray-400 hover:text-white"
            }`}
          >
            ES
          </Link>
          <span className="text-white/20 text-xs">|</span>
          <Link
            href={pathname}
            locale="en"
            className={`text-xs font-bold transition-colors ${
              locale === "en"
                ? "text-blue-400"
                : "text-gray-400 hover:text-white"
            }`}
          >
            EN
          </Link>
        </div>
      </div>
    </nav>
  );
}
