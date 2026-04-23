"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  /** Initial vertical offset in px */
  y?: number;
  /** Seconds after the element enters the viewport */
  delay?: number;
  duration?: number;
  once?: boolean;
};

/** Subtle ease-out (no overshoot) */
const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

export function ScrollReveal({
  children,
  className,
  y = 32,
  delay = 0,
  duration = 0.52,
  once = true,
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.12, margin: "0px 0px -56px 0px" }}
      transition={{ duration, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
