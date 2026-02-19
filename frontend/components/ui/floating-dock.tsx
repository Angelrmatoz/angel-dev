"use client";
/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

import { useRef, useState, useEffect } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
  magnification = 80,
  distance = 150,
  showTooltip = true,
}: {
  items: {
    title: string;
    icon: React.ReactNode;
    href: string;
    download?: string | boolean;
  }[];
  desktopClassName?: string;
  magnification?: number;
  distance?: number;
  showTooltip?: boolean;
}) => {
  // Render only the desktop variant so that from `sm` upwards the horizontal
  // dock is visible (no toggle button). This makes `sm` behave like `md`/`lg`.
  return (
    <FloatingDockDesktop
      items={items}
      className={desktopClassName}
      magnification={magnification}
      proximity={distance}
      showTooltip={showTooltip}
    />
  );
};

// Mobile variant removed: we intentionally keep only the desktop dock so that
// sm behaves exactly like md/lg (horizontal bar, no toggle button).

const FloatingDockDesktop = ({
  items,
  className,
  magnification,
  proximity,
  showTooltip,
}: {
  items: {
    title: string;
    icon: React.ReactNode;
    href: string;
    download?: string | boolean;
  }[];
  className?: string;
  magnification: number;
  proximity: number;
  showTooltip: boolean;
}) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      data-variant="desktop"
      className={cn(
        // In small screens the dock is in-flow (not fixed). From md and up
        // it becomes fixed and centered at the bottom like before. On small
        // screens it will be full-width and centered below the text.
        // Now we keep the dock in-flow for all sizes so it appears directly
        // below the content. We center it and limit its max width so it's
        // symmetric on md/lg as requested.
        "w-full flex justify-center h-12 md:h-16 items-center gap-4 rounded-2xl px-4 pb-3 mx-auto max-w-xl",
        className,
      )}
    >
      {items.map((item) => (
        <IconContainer
          mouseX={mouseX}
          key={item.title}
          magnification={magnification}
          proximity={proximity}
          showTooltip={showTooltip}
          {...item}
        />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
  download,
  magnification,
  proximity,
  showTooltip,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
  download?: string | boolean;
  magnification: number;
  proximity: number;
  showTooltip: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  // Detect small screens to disable the hover/resize animation on touch
  // devices (and small viewports). We use a media query for < md.
  const [isSmall, setIsSmall] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(max-width: 767px)").matches;
    }
    return false;
  });

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");

    const handle = (e: MediaQueryListEvent) => setIsSmall(e.matches);

    mq.addEventListener("change", handle);
    return () => mq.removeEventListener("change", handle);
  }, []);

  // On small screens we disable the proximity-based size animation and
  // use fixed sizes so tapping an icon won't make it grow. On larger
  // screens preserve the original interactive behavior.
  // Always create the motion transforms/springs so Hooks order is stable.
  // We will use static numbers for styles when `isSmall` is true.
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(
    distance,
    [-proximity, 0, proximity],
    [40, magnification, 40],
  );
  const heightTransform = useTransform(
    distance,
    [-proximity, 0, proximity],
    [40, magnification, 40],
  );

  const widthTransformIcon = useTransform(
    distance,
    [-proximity, 0, proximity],
    [20, magnification / 2, 20],
  );
  const heightTransformIcon = useTransform(
    distance,
    [-proximity, 0, proximity],
    [20, magnification / 2, 20],
  );

  const springOpts = { mass: 0.1, stiffness: 150, damping: 12 };
  const widthSpring = useSpring(widthTransform, springOpts);
  const heightSpring = useSpring(heightTransform, springOpts);
  const widthIconSpring = useSpring(widthTransformIcon, springOpts);
  const heightIconSpring = useSpring(heightTransformIcon, springOpts);

  // Use the motion springs.
  const width = isSmall ? 40 : widthSpring;
  const height = isSmall ? 40 : heightSpring;
  const widthIcon = isSmall ? 20 : widthIconSpring;
  const heightIcon = isSmall ? 20 : heightIconSpring;

  const [hovered, setHovered] = useState(false);

  return (
    <a href={href} download={download}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-transparent"
      >
        {showTooltip && (
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0, y: 10, x: "-50%" }}
                animate={{ opacity: 1, y: 0, x: "-50%" }}
                exit={{ opacity: 0, y: 2, x: "-50%" }}
                className="absolute -top-8 left-1/2 w-fit rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs whitespace-pre text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white"
              >
                {title}
              </motion.div>
            )}
          </AnimatePresence>
        )}
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}
