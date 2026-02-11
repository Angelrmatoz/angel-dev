"use client";

import React from "react";
import {FloatingDock} from "@/components/ui/floating-dock";
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandX,
    IconBrandWhatsapp,
} from "@tabler/icons-react";

export function DockMenu() {
    const links = [
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
            ),
            href: "https://github.com/Angelrmatoz",
        },
        {
            title: "LinkedIn",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
            ),
            href: "https://www.linkedin.com/in/%C3%A1ngel-ricardo-matos-mart%C3%ADnez-1b135a268/",
        },
        {
            title: "Facebook",
            icon: (
                <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
            ),
            href: "https://www.facebook.com/AngelRicardoMtM",
        },
        {
            title: "Instagram",
            icon: (
                <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
            ),
            href: "https://www.instagram.com/angelr_matos",
        },
        {
            title: "WhatsApp",
            icon: (
                <IconBrandWhatsapp className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
            ),
            href: "https://wa.me/8099431211?text=Hola%20%C3%A1ngel",
        },
        {
            title: "X",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
            ),
            href: "https://x.com/angelrmatoz1",
        },
    ];
    return (
        <div className="w-full">
            <FloatingDock items={links}/>
        </div>
    );
}
