"use client";

import {
    useMotionValueEvent,
    useScroll,
    useTransform,
    motion,
} from "motion/react";
import React, {useEffect, useRef, useState} from "react";
import {Badge} from "@/components/ui/badge";

interface TimelineEntry {
    title: string;
    date?: string;
    content: React.ReactNode;
}

export const Timeline = ({data}: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const updateHeight = () => {
                const rect = ref.current?.getBoundingClientRect();
                if (rect) {
                    setHeight(rect.height);
                }
            };
            updateHeight();
            window.addEventListener('resize', updateHeight);
            return () => window.removeEventListener('resize', updateHeight);
        }
    }, []);

    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 90%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div
            className="w-full font-sans relative"
            ref={containerRef}
        >
            <div className="container mx-auto pt-10 pb-5 px-6 lg:px-20">
                <div className="max-w-xl mx-auto lg:mx-0">
                    <h2 className="text-lg font-bold md:text-4xl mb-4 text-white">
                        Experiencia Profesional
                    </h2>
                    <p className="text-gray-200 text-sm md:text-base">
                        Un resumen de mi trayectoria y los proyectos en los que he trabajado.
                    </p>
                </div>
            </div>

            <div ref={ref} className="relative container mx-auto pb-20">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-start pt-10 md:pt-20 md:gap-10 px-6 lg:px-20"
                    >
                        <div
                            className="sticky flex flex-col z-40 items-start top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            <div
                                className="h-10 absolute left-3 md:left-3 w-10 rounded-full backdrop-blur-sm flex items-center justify-center top-0">
                                <div
                                    className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2"/>
                            </div>
                            <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-white">
                                {item.title}
                            </h3>
                            {item.date && (
                                <div key={`date-desktop-${index}`} className="hidden md:block md:pl-20 mt-2">
                                    <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                                        {item.date}
                                    </Badge>
                                </div>
                            )}
                        </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
                            <h3 className="md:hidden block text-2xl mb-2 text-left font-bold text-white">
                                {item.title}
                            </h3>
                            {item.date && (
                                <div key={`date-mobile-${index}`} className="md:hidden mb-4">
                                    <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                                        {item.date}
                                    </Badge>
                                </div>
                            )}
                            {item.content}
                        </div>
                    </div>
                ))}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute left-[3.5rem] lg:left-[7rem] top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_100%,transparent_100%)] "
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};
