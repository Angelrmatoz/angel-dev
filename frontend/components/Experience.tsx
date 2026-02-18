import { Timeline } from "@/components/ui/timeline";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const Experience = () => {
  const experienceData = [
    {
      title: "Frontend Developer (DGA)",
      date: "Marzo 2025 – Junio 2025",
      content: (
        <div key="exp-dga">
          <p className="text-gray-200 text-xs md:text-sm font-normal mb-4">
            Desarrollo de aplicaciones web y móviles modernas utilizando las
            últimas tecnologías del ecosistema JavaScript.
          </p>
          <p className="text-gray-200 text-xs md:text-sm font-normal mb-4">
            Enfoque en la creación de interfaces intuitivas, código limpio y
            soluciones escalables que transforman ideas en productos digitales
            de impacto.
          </p>

          <div className="flex flex-wrap gap-2">
            <Image
              className="h-8 w-8 object-contain"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
              alt="TypeScript"
              width={32}
              height={32}
            />

            <Image
              className="h-8 w-8 object-contain"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
              alt="Vue.js"
              width={32}
              height={32}
            />
            <Image
              className="h-8 w-8 object-contain"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              alt="React"
              width={32}
              height={32}
            />

            <Image
              className="h-8 w-8 object-contain"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
              alt="Vite"
              width={32}
              height={32}
            />

            <Image
              className="h-8 w-8 object-contain"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
              alt="Redux"
              width={32}
              height={32}
            />
            <Image
              className="h-8 w-8 object-contain"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
              alt="Sass"
              width={32}
              height={32}
            />
            <Image
              className="h-8 w-8 object-contain"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
              alt="Node.js"
              width={32}
              height={32}
            />

            <Image
              className="h-8 w-8 object-contain"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg"
              alt="Microsoft SQL Server"
              width={32}
              height={32}
            />

            <Image
              className="h-8 w-8 object-contain"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
              alt="Git"
              width={32}
              height={32}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Property Group",
      date: "Diciembre 2025",
      content: (
        <div key="exp-property">
          <p className="text-gray-200 text-xs md:text-sm font-normal mb-4">
            Landing page profesional para una empresa de bienes raíces,
            desarrollada con <b>Next.js (React 19)</b> y <b>TypeScript</b>.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <Image
              className="h-8 w-8 object-contain"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"
              alt="JavaScript"
              width={32}
              height={32}
            />

            <Image
              className="h-8 w-8 object-contain"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg"
              alt="TypeScript"
              width={32}
              height={32}
            />

            <Image
              className="h-8 w-8 object-contain"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              alt="React"
              width={32}
              height={32}
            />

            <Image
              className="h-8 w-8 object-contain"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
              alt="Next.js"
              width={32}
              height={32}
            />

            <Image
              className="h-8 w-8 object-contain"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              alt="Tailwind CSS"
              width={32}
              height={32}
            />

            <Image
              className="h-8 w-8 object-contain"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
              alt="Node.js"
              width={32}
              height={32}
            />

            <Image
              className="h-8 w-8 object-contain"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
              alt="Express"
              width={32}
              height={32}
            />

            <Image
              className="h-8 w-8 object-contain"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
              alt="MongoDB"
              width={32}
              height={32}
            />

            <Image
              className="h-8 w-8 object-contain"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
              alt="Git"
              width={32}
              height={32}
            />

            <Image
              className="h-8 w-8 object-contain"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-plain.svg"
              alt="Postman"
              width={32}
              height={32}
            />
          </div>
          <div className="flex gap-4">
            <Badge
              asChild
              className="bg-blue-500/20 text-blue-400 border-blue-500/30 hover:bg-blue-500/30 transition-colors"
            >
              <a
                href="https://www.propertygrouprd.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sitio Web
              </a>
            </Badge>
            <Badge
              asChild
              className="bg-gray-500/20 text-gray-400 border-gray-500/30 hover:bg-gray-500/30 transition-colors"
            >
              <a
                href="https://github.com/Angelrmatoz/property-group-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repositorio
              </a>
            </Badge>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="experience" className="w-full mt-10 scroll-mt-20">
      <Timeline data={experienceData} />
    </section>
  );
};
