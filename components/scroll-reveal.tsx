"use client"

import type React from "react"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  animation?: "fade" | "slide-up" | "slide-left" | "slide-right" | "scale" | "slide-down"
  delay?: number
  duration?: number
}

export function ScrollReveal({
  children,
  className,
  animation = "fade",
  delay = 0,
  duration = 700,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1, triggerOnce: true })

  const animationClasses = {
    fade: isVisible ? "opacity-100" : "opacity-0",
    "slide-up": isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
    "slide-down": isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12",
    "slide-left": isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12",
    "slide-right": isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12",
    scale: isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95",
  }

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn("transition-all ease-out", animationClasses[animation], className)}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
