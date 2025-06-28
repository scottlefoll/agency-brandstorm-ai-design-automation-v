"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface AnimatedHeroProps {
  title: string
  subtitle?: string
  description?: string
  children?: React.ReactNode
  className?: string
}

export function AnimatedHero({ title, subtitle, description, children, className = "" }: AnimatedHeroProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`text-center ${className}`}>
      <h1
        className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animated-hero-title ${isVisible ? "slide-in-left" : ""}`}
      >
        {title}
      </h1>

      {subtitle && (
        <h2
          className={`text-xl md:text-2xl text-gray-600 mb-8 animated-hero-subtitle ${isVisible ? "slide-in-right" : ""}`}
        >
          {subtitle}
        </h2>
      )}

      {description && (
        <div
          className={`text-lg text-gray-700 mb-8 max-w-3xl mx-auto animated-hero-description ${isVisible ? "fade-up" : ""}`}
        >
          {description}
        </div>
      )}

      {children && <div className={`animated-hero-content ${isVisible ? "fade-up-delay" : ""}`}>{children}</div>}
    </div>
  )
}
