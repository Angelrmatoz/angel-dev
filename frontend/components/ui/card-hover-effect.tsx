import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";

import { useState } from "react";

export type HoverItem = {
  title: string;
  description?: string;
  link: string;
} & Record<string, unknown>;

// eslint-disable-next-line no-unused-vars
export type RenderItem = (item: HoverItem) => React.ReactNode;

export const HoverEffect = ({
  items,
  className,
  renderItem,
}: {
  items: HoverItem[];
  className?: string;
  renderItem?: RenderItem;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item?.link as string}
          key={String(item?.link)}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-blue-500/5 block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <motion.div
            animate={{
                scale: hoveredIndex === idx ? 1.02 : 1,
            }}
            transition={{ duration: 0.2 }}
            className="h-full w-full"
          >
            <Card className="flex flex-col h-full">
              <div className="flex-1">
                {renderItem ? (
                  renderItem(item)
                ) : (
                  <>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{String(item.description ?? '')}</CardDescription>
                  </>
                )}
              </div>
            </Card>
          </motion.div>
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 dark:border-white/20 group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 relative z-20",
        className
      )}
    >
      <div className="relative z-50 h-full">
        <div className="p-4 h-full flex flex-col min-h-55">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
