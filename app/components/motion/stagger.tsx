"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type StaggerProps = {
  children: ReactNode;
  className?: string;
  once?: boolean;
  amount?: number;
  /**
   * Children should be wrapped in `StaggerItem` for best results.
   */
  stagger?: number;
  delayChildren?: number;
};

const container: Variants = {
  hidden: {},
  visible: {},
};

export function Stagger({
  children,
  className,
  once = true,
  amount = 0.25,
  stagger = 0.08,
  delayChildren = 0.02,
}: StaggerProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{ staggerChildren: stagger, delayChildren }}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  variant?: "fadeUp" | "fade";
};

const itemVariants: Record<NonNullable<StaggerItemProps["variant"]>, Variants> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeUp: {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
  },
};

export function StaggerItem({
  children,
  className,
  variant = "fadeUp",
}: StaggerItemProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={itemVariants[variant]}>
      {children}
    </motion.div>
  );
}

