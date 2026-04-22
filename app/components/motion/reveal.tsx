"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /**
   * Animate only the first time the element enters the viewport.
   * Keep true for “scroll reveal” behavior.
   */
  once?: boolean;
  /**
   * How much of the element must be visible to trigger.
   */
  amount?: number;
  /**
   * Motion preset for common reveal styles.
   */
  variant?: "fade" | "fadeUp" | "fadeDown" | "fadeLeft" | "fadeRight" | "scale";
  /**
   * Optional delay in seconds.
   */
  delay?: number;
};

const presetVariants: Record<NonNullable<RevealProps["variant"]>, Variants> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeUp: {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0 },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -14 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: 14 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: -14 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { opacity: 1, scale: 1 },
  },
};

export function Reveal({
  children,
  className,
  once = true,
  amount = 0.3,
  variant = "fadeUp",
  delay = 0,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={presetVariants[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

