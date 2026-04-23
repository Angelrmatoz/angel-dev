import { Badge } from "@/components/ui/badge";
import { HeroAside } from "@/components/HeroAside";
import { DockMenu } from "@/components/DockMenu";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("HomePage");

  return (
    <div id="home" className="relative">
      <div className="relative z-10 flex flex-col items-center pt-6">
        <div className="container mx-auto px-6 lg:px-20 py-10 md:py-16 lg:py-20 flex justify-center">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 w-full max-w-6xl">
            {/* Sección izquierda: texto de presentación */}
            <section className="max-w-xl text-center lg:text-left">
              <Badge className="inline-block bg-gray-800/60 text-sm text-gray-200 px-3 py-1 mb-2">
                {t("badge")}
              </Badge>
              <h2 className="text-lg font-bold text-white">{t("hello")}</h2>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-2 text-white">
                {t("title")}
              </h1>
              <h2 className="text-xl font-bold text-gray-200 mt-2">
                {t("role")}
              </h2>

              <div className="mt-6 space-y-4 text-gray-300">
                <p>{t("description_1")}</p>
                <p>{t("description_2")}</p>
                <p>{t("description_3")}</p>
              </div>

              <div className="mt-8 flex justify-center lg:justify-start">
                <DockMenu />
              </div>
            </section>

            {/* Aside derecho: imagen */}
            <div className="py-8 lg:py-0 flex-shrink-0">
              <HeroAside />
            </div>
          </div>
        </div>

        {/* Sección de Experiencia con Timeline */}
        <Experience />

        <Projects />

        <div className="relative container mx-auto">
          {/* Anchor targets */}
          <div id="contact" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
