"use client"

import { useEffect } from "react"

export function ServicePageAnimations() {
  useEffect(() => {
    // Add intersection observer for images
    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate")
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    // Add intersection observer for feature cards
    const featureObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate")
            }, index * 100)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    // Observe images
    const images = document.querySelectorAll(".image-reveal")
    images.forEach((img) => imageObserver.observe(img))

    // Observe feature cards
    const featureCards = document.querySelectorAll(".feature-card-cascade")
    featureCards.forEach((card) => featureObserver.observe(card))

    return () => {
      images.forEach((img) => imageObserver.unobserve(img))
      featureCards.forEach((card) => featureObserver.unobserve(card))
    }
  }, [])

  return null
}
