"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface FeatureCard {
  title: string
  description: string
  icon?: React.ReactNode
}

interface FeatureCardsCascadeProps {
  cards?: FeatureCard[]
  className?: string
}

export function FeatureCardsCascade({ cards = [], className = "" }: FeatureCardsCascadeProps) {
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
        threshold: 0.1,
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
  }, [])

  // Don't render anything if no cards are provided
  if (!cards || cards.length === 0) {
    return null
  }

  return (
    <div ref={ref} className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${className}`}>
      {cards.map((card, index) => (
        <div
          key={index}
          className={`feature-card ${isVisible ? `cascade-${index + 1}` : ""} bg-white p-6 rounded-lg shadow-lg border border-gray-200`}
        >
          {card.icon && <div className="mb-4 text-blue-600">{card.icon}</div>}
          <h3 className="text-xl font-semibold mb-3 text-gray-900">{card.title}</h3>
          <p className="text-gray-600">{card.description}</p>
        </div>
      ))}
    </div>
  )
}
