"use client"

import { useEffect } from "react"

export function CTAAnimationScript() {
  useEffect(() => {
    const addAnimationToCTAButtons = () => {
      // Find all CTA buttons (buttons with the gradient background)
      const ctaButtons = document.querySelectorAll('button[class*="from-blue-600"][class*="to-purple-600"]')

      ctaButtons.forEach((button) => {
        // Check if the button is inside the header/nav
        const isInHeader = button.closest("header") || button.closest("nav")

        // Only add animation if NOT in header
        if (!isInHeader) {
          button.classList.add("corner-bounce")
        }
      })
    }

    // Run immediately
    addAnimationToCTAButtons()

    // Also run after a short delay to catch any dynamically loaded content
    const timer = setTimeout(addAnimationToCTAButtons, 1000)

    return () => clearTimeout(timer)
  }, [])

  return null // This component doesn't render anything
}
