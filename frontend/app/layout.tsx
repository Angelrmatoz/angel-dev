import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import NavBar from "@/components/NavBar";
import { HamburgerSideBar } from "@/components/HamburgerSideBar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ángel Matos",
  description: "Full-Stack Web & Mobile Developer",
  icons: {
    icon: "/icons/icon.svg",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        <BackgroundGradientAnimation
          containerClassName="min-h-screen w-full flex flex-col overflow-x-hidden"
          className="flex-1 flex flex-col"
        >
          <header>
            <NavBar />
            <HamburgerSideBar />
          </header>
          {/* 
            Este 'main' es el que recibe el padding para no chocar con el notch, 
            pero el BackgroundGradientAnimation de arriba sigue cubriendo todo.
          */}
          <main className="flex-1 flex flex-col w-full relative pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
            {children}
          </main>
          <Footer />
        </BackgroundGradientAnimation>
      </body>
    </html>
  );
}
