import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import NavBar from "@/components/NavBar";
import { HamburgerSideBar } from "@/components/HamburgerSideBar";
import Footer from "@/components/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "HomePage" });

  return {
    title: t("title"),
    description: t("role"),
    icons: {
      icon: "/icons/icon.svg",
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: "black-translucent",
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        <NextIntlClientProvider messages={messages}>
          <BackgroundGradientAnimation
            containerClassName="min-h-screen w-full flex flex-col overflow-x-hidden"
            className="flex-1 flex flex-col"
          >
            <header>
              <NavBar />
              <HamburgerSideBar />
            </header>
            <main className="flex-1 flex flex-col w-full relative pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
              {children}
            </main>
            <Footer />
          </BackgroundGradientAnimation>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
