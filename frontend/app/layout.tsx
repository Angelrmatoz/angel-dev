import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

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
  themeColor: "#000000",
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
          containerClassName="min-h-[100dvh] w-full flex flex-col overflow-x-hidden"
          className="flex-1 flex flex-col"
        >
          <main className="flex-1 flex flex-col w-full relative">
            {children}
          </main>
        </BackgroundGradientAnimation>
      </body>
    </html>
  );
}
