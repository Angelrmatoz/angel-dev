"use client";

import React from "react";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import { FloatingDock } from "@/components/ui/floating-dock";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      title: "GitHub",
      href: "https://github.com/Angelrmatoz",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/%C3%A1ngel-ricardo-matos-mart%C3%ADnez-1b135a268/",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    {
      title: "WhatsApp",
      href: "https://wa.me/8099431211?text=Hola%20%C3%A1ngel",
      icon: (
        <IconBrandWhatsapp className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    {
      title: "Instagram",
      href: "https://instagram.com/angelr_matos",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
  ];

  return (
    <footer className="w-full border-t border-white/10 bg-black/30 backdrop-blur-xl py-12 relative z-20">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Lado Izquierdo: Enlaces de Contacto con FloatingDock */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center">
              <FloatingDock
                items={socialLinks}
                desktopClassName="bg-transparent border-none p-0 h-auto gap-2"
                magnification={55}
                distance={100}
                showTooltip={false}
              />
            </div>
          </div>

          {/* Lado Derecho: Tecnologías y Copyright */}
          <div className="text-center md:text-right space-y-2">
            <p className="text-gray-400 text-sm md:text-base max-w-xs md:max-w-md">
              Diseñada con{" "}
              <span className="text-white font-medium">Next.js 16</span>,{" "}
              <span className="text-white font-medium">Tailwind CSS 4</span>,{" "}
              <span className="text-white font-medium">GraphQL</span>,{" "}
              <span className="text-white font-medium">Framer Motion</span> y{" "}
              <span className="text-white font-medium">Radix UI</span>.
            </p>
            <p className="text-gray-500 text-xs">
              © {currentYear} Ángel Matos. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
