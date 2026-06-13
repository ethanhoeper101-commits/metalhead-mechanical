"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Wraps the app so all Framer Motion animations honor the user's
 * `prefers-reduced-motion` setting (transforms collapse to instant/opacity).
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
