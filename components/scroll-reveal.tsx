"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ScrollRevealProps {
  children: React.ReactNode
  threshold?: number
  delay?: number
  className?: string
  direction?: "up" | "down" | "left" | "right" | "fade"
  distance?: number
}

export function ScrollReveal({
  children,
  threshold = 0.1,
  delay = 0,
  className = "",
  direction = "up",
  distance = 30,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  const getInitialTransform = () => {
    switch (direction) {
      case "left":
        return `translateX(-${distance}px)`
      case "right":
        return `translateX(${distance}px)`
      case "down":
        return `translateY(-${distance}px)`
      case "up":
        return `translateY(${distance}px)`
      case "fade":
        return "translateY(0)"
      default:
        return `translateY(${distance}px)`
    }
  }

  const animationStyle = {
    opacity: 0,
    transform: getInitialTransform(),
    transition: `opacity 0.8s ease, transform 0.8s ease`,
    transitionDelay: `${delay}ms`,
  }

  const visibleStyle = {
    opacity: 1,
    transform: "translateY(0) translateX(0)",
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...animationStyle,
        ...(isVisible ? visibleStyle : {}),
      }}
    >
      {children}
    </div>
  )
}
