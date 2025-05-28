"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function PartnerLogos() {
  // Base set of logos
  const baseLogos = [
    { name: "YouTube", file: "/images/youtube-logo.svg", width: 120, height: 40 },
    { name: "Medium", file: "/images/medium-logo.png", width: 540, height: 180 },
    { name: "NBC", file: "/images/nbc-logo.svg", width: 120, height: 60 },
    { name: "MarketWatch", file: "/images/marketwatch-logo.svg", width: 120, height: 40 },
    { name: "Wired", file: "/images/wired-logo.svg", width: 120, height: 40 },
    { name: "CNN", file: "/images/cnn-logo.svg", width: 100, height: 40 },
  ]

  // Create a longer array with multiple duplicates to ensure no gaps on wide screens
  const logos = [...baseLogos, ...baseLogos, ...baseLogos, ...baseLogos, ...baseLogos, ...baseLogos]

  const scrollRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    const outerContainer = containerRef.current
    if (!scrollContainer || !outerContainer) return

    // Set initial position
    scrollContainer.style.transform = "translateX(0)"

    // Get container width
    const containerWidth = outerContainer.offsetWidth

    // Calculate total width of logos
    const totalWidth = Array.from(scrollContainer.children).reduce(
      (width, child) => width + (child as HTMLElement).offsetWidth + 40, // 40px for gap
      0,
    )

    // Create animation
    const animate = () => {
      let currentPosition = 0
      const step = 0.798 // Speed from previous adjustment

      const moveLogos = () => {
        if (!scrollContainer) return

        currentPosition -= step

        // Create a seamless loop by resetting when a full set of logos has scrolled
        // This creates a more continuous effect without visible gaps
        const baseSetWidth = totalWidth / 6 // We have 6 duplicates of the base set
        if (Math.abs(currentPosition) >= baseSetWidth) {
          currentPosition = currentPosition + baseSetWidth
        }

        scrollContainer.style.transform = `translateX(${currentPosition}px)`
        requestAnimationFrame(moveLogos)
      }

      requestAnimationFrame(moveLogos)
    }

    animate()
  }, [])

  return (
    <section
      className="w-full bg-gradient-to-r from-blue-800 to-blue-700 via-teal-800 overflow-hidden"
      style={{ height: "72px" }} // Reduced by 20% from 90px to 72px
    >
      <div className="relative h-full flex items-center" ref={containerRef}>
        <div ref={scrollRef} className="flex items-center gap-10" style={{ whiteSpace: "nowrap" }}>
          {logos.map((logo, index) => (
            <div key={`${logo.name}-${index}`} className="flex items-center justify-center flex-shrink-0">
              <div className="px-4">
                <Image
                  src={logo.file || "/placeholder.svg"}
                  alt={`${logo.name} logo`}
                  width={logo.width}
                  height={logo.height}
                  className="w-auto h-auto brightness-0 invert opacity-90"
                  style={{
                    maxHeight: logo.name === "Medium" ? "104px" : logo.name === "NBC" ? "48px" : "36px",
                    background: "transparent",
                    // Using transform to adjust vertical position without changing size
                    transform: "scale(1)", // Keeping the same size
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
