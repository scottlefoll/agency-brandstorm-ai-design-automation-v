"use client"

import { useEffect } from "react"

export function ServiceImageAnimation() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate")
        }
      })
    }, observerOptions)

    // Observe service images
    const serviceImages = document.querySelectorAll(".service-image")
    serviceImages.forEach((img) => observer.observe(img))

    // Observe feature cards
    const featureCards = document.querySelectorAll(".feature-card")
    featureCards.forEach((card) => observer.observe(card))

    return () => {
      serviceImages.forEach((img) => observer.unobserve(img))
      featureCards.forEach((card) => observer.unobserve(card))
    }
  }, [])

  return null
}
