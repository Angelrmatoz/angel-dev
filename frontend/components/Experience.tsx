"use client";

import { Timeline } from "@/components/ui/timeline";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const Experience = () => {
  const t = useTranslations("Experience");

  const experienceData = [
    {
      title: t("dga_role"),
      date: t("dga_date"),
      content: (
        <div key="exp-dga">
          <p className="text-gray-200 text-xs md:text-sm font-normal mb-4">
            {t("dga_desc_1")}
          </p>
          <p className="text-gray-200 text-xs md:text-sm font-normal mb-4">
            {t("dga_desc_2")}
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
      title: t("property_role"),
      date: t("property_date"),
      content: (
        <div key="exp-property">
          <p className="text-gray-200 text-xs md:text-sm font-normal mb-4">
            {t.rich("property_desc", {
              b: (chunks) => <b>{chunks}</b>,
            })}
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
                {t("website")}
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
                {t("repo")}
              </a>
            </Badge>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      id="experience"
      className="relative w-full mt-0 md:mt-12 lg:mt-24 mb-10 scroll-mt-20"
    >
      <Timeline data={experienceData} />
    </section>
  );
};
