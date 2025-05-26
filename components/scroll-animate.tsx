"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import type { ReactNode } from "react"

interface ScrollAnimateProps {
  children: ReactNode
  className?: string
  direction?: "up" | "left" | "right"
  delay?: number
}

export function ScrollAnimate({ children, className = "", direction = "up", delay = 0 }: ScrollAnimateProps) {
  const { ref, isVisible } = useScrollAnimation()

  const getAnimationClass = () => {
    switch (direction) {
      case "left":
        return "scroll-animate-left"
      case "right":
        return "scroll-animate-right"
      default:
        return "scroll-animate"
    }
  }

  return (
    <div
      ref={ref}
      className={`${getAnimationClass()} ${isVisible ? "animate" : ""} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
