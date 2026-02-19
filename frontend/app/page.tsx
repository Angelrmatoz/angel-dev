import { Badge } from "@/components/ui/badge";
import { HeroAside } from "@/components/HeroAside";
import { DockMenu } from "@/components/DockMenu";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <div id="home">
      <div className="relative z-10 flex flex-col items-center pt-6">
        <div className="container mx-auto px-6 lg:px-20 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Sección izquierda: texto de presentación */}
            <section className="max-w-xl mx-auto lg:mx-0">
              <Badge className="inline-block bg-gray-800/60 text-sm text-gray-200 px-3 py-1 mb-2">
                UI/UX
              </Badge>
              <h2 className="text-lg font-bold text-white">Hello, I&apos;m</h2>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-2 text-white">
                Ángel Matos
              </h1>
              <h2 className="text-xl font-bold text-gray-200 mt-2">
                Full-Stack Web & Mobile Developer
              </h2>

              <div className="mt-6 space-y-4 text-gray-300">
                <p>
                  Soy desarrollador web con pasión por construir interfaces
                  intuitivas y código limpio. Mi fascinación por la programación
                  nace de ver cómo la tecnología transforma ideas en realidad,
                  desde aplicaciones que resuelven problemas reales hasta
                  experiencias de usuario que generan impacto.
                </p>

                <p>
                  Me especializo en frontend con React (Next.js/Vite) y
                  desarrollo móvil con React Native, y he expandido mis
                  habilidades hacia el backend con Node.js, Express y GraphQL.
                  Trabajo con bases de datos como MongoDB y PostgreSQL, y
                  utilizo Docker y Docker Compose para levantar entornos y
                  servicios de forma consistente.
                </p>

                <p>
                  Si buscas a alguien apasionado por la calidad del código,
                  comprometido con el aprendizaje continuo y dispuesto a
                  entregar soluciones que realmente marquen la diferencia, me
                  encantaría conectar. Let’s build something great together.
                </p>
              </div>

              <div className="mt-8">
                <DockMenu />
              </div>
            </section>

            {/* Aside derecho: imagen */}
            <div className="py-8 lg:py-0">
              <HeroAside />
            </div>
          </div>
        </div>

        {/* Sección de Experiencia con Timeline */}
        <section>
          <Experience />
        </section>

        <Projects />

        <div className="container mx-auto px-6 lg:px-20">
          {/* Anchor targets */}
          <div id="contact" aria-hidden="true" className="py-10" />
        </div>
      </div>
    </div>
  );
}
