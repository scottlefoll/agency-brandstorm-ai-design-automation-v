"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface AnimatedTextContentProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function AnimatedTextContent({ children, className = "", delay = 0 }: AnimatedTextContentProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      {
        threshold: 0.1,
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
  }, [delay])

  return (
    <div ref={ref} className={`text-fade-in ${isVisible ? "animate" : ""} ${className}`}>
      {children}
    </div>
  )
}
