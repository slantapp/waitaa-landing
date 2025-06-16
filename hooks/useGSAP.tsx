"use client";

import { useEffect, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

// Use useLayoutEffect on client, useEffect on server
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

interface UseGSAPOptions {
  scope?: React.RefObject<HTMLElement | null>;
  dependencies?: any[];
  revertOnUpdate?: boolean;
}

export function useGSAP(
  callback: (context: gsap.Context) => void,
  options: UseGSAPOptions = {}
) {
  const { scope, dependencies = [], revertOnUpdate = true } = options;
  const contextRef = useRef<gsap.Context | null>(null);

  useIsomorphicLayoutEffect(() => {
    // Create GSAP context
    contextRef.current = gsap.context(callback, scope);

    // Cleanup function
    return () => {
      if (revertOnUpdate && contextRef.current) {
        contextRef.current.revert();
      }
    };
  }, dependencies);

  return contextRef.current;
}
