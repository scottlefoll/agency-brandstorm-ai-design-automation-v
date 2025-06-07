"use client"

import Image from "next/image"
import { CTAButton } from "@/components/cta-button"
import { useEffect, useRef } from "react"

export function StopMissingCallsSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * window.devicePixelRatio
      canvas.height = rect.height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Sound wave animation
    const bars = 40
    const barWidth = canvas.width / window.devicePixelRatio / bars
    let animationId: number

    // Vibrant color palette similar to the uploaded image
    const colors = [
      "#FF6B6B",
      "#4ECDC4",
      "#45B7D1",
      "#96CEB4",
      "#FFEAA7",
      "#DDA0DD",
      "#98D8C8",
      "#F7DC6F",
      "#BB8FCE",
      "#85C1E9",
      "#F8C471",
      "#82E0AA",
      "#F1948A",
      "#85C1E9",
      "#F7DC6F",
    ]

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio)

      const time = Date.now() * 0.002

      for (let i = 0; i < bars; i++) {
        // Create varying heights with multiple sine waves for more organic movement
        const height1 = Math.sin(time + i * 0.3) * 30
        const height2 = Math.sin(time * 1.5 + i * 0.2) * 20
        const height3 = Math.sin(time * 0.8 + i * 0.4) * 15
        const totalHeight = Math.abs(height1 + height2 + height3) + 10

        // Get color from palette
        const colorIndex = Math.floor((i + time * 2) % colors.length)
        const gradient = ctx.createLinearGradient(0, 0, 0, totalHeight)
        gradient.addColorStop(0, colors[colorIndex])
        gradient.addColorStop(1, colors[(colorIndex + 1) % colors.length])

        ctx.fillStyle = gradient

        // Draw bar centered vertically
        const x = i * barWidth + barWidth * 0.1
        const y = (canvas.height / window.devicePixelRatio - totalHeight) / 2
        const width = barWidth * 0.8

        // Rounded rectangle
        ctx.beginPath()
        ctx.roundRect(x, y, width, totalHeight, width / 4)
        ctx.fill()

        // Add glow effect
        ctx.shadowColor = colors[colorIndex]
        ctx.shadowBlur = 10
        ctx.fill()
        ctx.shadowBlur = 0
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section className="w-full py-16 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <Image
              src="/images/customer-service-rep.png"
              alt="Customer service representative with headset"
              width={400}
              height={500}
              className="w-full max-w-md mx-auto rounded-lg shadow-md"
            />

            {/* Sound Wave Animation Overlay - Positioned much lower using top positioning */}
            <div className="absolute left-1/2 transform -translate-x-1/2 pointer-events-none" style={{ top: "136px" }}>
              {/* Animation container with same height as before */}
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <canvas ref={canvasRef} className="w-full h-full" style={{ width: "100%", height: "100%" }} />

                {/* Label positioned above the animation */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mb-4">
                  <div className="bg-black/20 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-white text-sm font-medium">AI Voice Assistant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-purple-800">
              Every Missed Call = Lost Revenue.
              <br />
              Stop Leaking Revenue, Start Growing it.
            </h2>

            <p className="text-lg mb-6">Sick of Chasing Calls and Losing Business?</p>

            <p className="text-lg mb-6">
              Every missed call is a missed opportunity — and your potential customer isn't waiting. They're dialing the
              next provider, and you're left counting the cost.
            </p>

            <p className="text-lg mb-6">Losing 4–5 deals a month? That's real revenue walking out the door.</p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">•</span>
                <span>plug the holes in your leaky bucket</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">•</span>
                <span>round-the-clock call handling by an expert AI</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">•</span>
                <span>instant booking, rescheduling, and follow-up</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">•</span>
                <span>sophisticated call tracking and analytics</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">•</span>
                <span>integrate with your current platforms</span>
              </li>
            </ul>

            <p className="text-lg mb-6">
              Let our AI-powered system catch every lead, book every call, and give you back the freedom to focus on
              what truly matters — growing your business and spending time with the people who matter most.
            </p>

            <CTAButton source="Stop Missing Calls Section">
              TALK WITH GRACE
              <br />
              <span className="text-xs">BOOK A DEMO NOW</span>
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}
