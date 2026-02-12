import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export const HeroAside = () => {
  return (
    <aside className="flex justify-center lg:justify-end">
      <CardContainer className="inter-var" containerClassName="py-0">
        <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] w-56 h-56 sm:w-64 sm:h-72 md:w-80 md:h-96 lg:w-105 lg:h-130">
          <CardItem
            translateZ="100"
            className="w-full h-full relative"
          >
            <Image
              src="/me/IMG_0781.JPG"
              alt="Ángel Matos"
              fill
              priority
              sizes="(min-width: 1024px) 420px, (min-width: 768px) 320px, 256px"
              className="object-cover object-[50%_12%] md:object-[60%_30%] rounded-xl shadow-2xl"
            />
          </CardItem>
        </CardBody>
      </CardContainer>
    </aside>
  );
};
