"use client"

import { useEffect, useRef } from "react"

// This component will find and animate all CTA buttons except the one in the header
export function AnimateCTAButtons() {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    // Find all CTA buttons
    const ctaButtons = document.querySelectorAll(".bg-gradient-to-r.from-blue-600.to-purple-600")

    // Find the header element
    const header = document.querySelector("header")

    // Apply animation to all CTA buttons except the one in the header
    ctaButtons.forEach((button) => {
      // Skip if this button is inside the header
      if (header && header.contains(button)) return

      // Add the corner-bounce class to animate
      button.classList.add("corner-bounce")
    })
  }, [])

  // This component doesn't render anything
  return null
}
