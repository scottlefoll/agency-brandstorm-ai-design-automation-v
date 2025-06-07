"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

type AnimationType = "fade-in" | "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "zoom-out"

interface ScrollAnimateProps {
  children: React.ReactNode
  type?: AnimationType
  delay?: number
  duration?: number
  threshold?: number
  className?: string
  once?: boolean
}

export function ScrollAnimate({
  children,
  type = "fade-up",
  delay = 0,
  duration = 800,
  threshold = 0.1,
  className = "",
  once = true,
}: ScrollAnimateProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [once, threshold])

  const getAnimationClass = () => {
    if (!isVisible) return "opacity-0"

    switch (type) {
      case "fade-in":
        return "animate-fade-in"
      case "fade-up":
        return "animate-fade-up"
      case "fade-down":
        return "animate-fade-down"
      case "fade-left":
        return "animate-fade-left"
      case "fade-right":
        return "animate-fade-right"
      case "zoom-in":
        return "animate-zoom-in"
      case "zoom-out":
        return "animate-zoom-out"
      default:
        return "animate-fade-in"
    }
  }

  return (
    <div
      ref={ref}
      className={`transition-all ${className} ${getAnimationClass()}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
