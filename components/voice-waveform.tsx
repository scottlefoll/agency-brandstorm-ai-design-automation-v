"use client"

import { useEffect, useRef } from "react"

interface VoiceWaveformProps {
  className?: string
}

export function VoiceWaveform({ className = "" }: VoiceWaveformProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const width = canvas.width
    const height = canvas.height
    const midY = height / 2

    const barCount = 120
    const barSpacing = width / barCount
    const barWidth = barSpacing * 0.25 // thinner bars
    let t = 0

    function generateAmplitude(i: number, time: number) {
      // Composite of 3 sine waves + subtle randomness
      const f1 = Math.sin((i + time) * 0.15)
      const f2 = Math.sin((i * 0.5 + time * 0.8) * 0.07)
      const f3 = Math.sin((i * 1.2 - time * 1.5) * 0.05)
      const noise = (Math.random() - 0.5) * 0.2

      return f1 * 0.5 + f2 * 0.3 + f3 * 0.2 + noise
    }

    function draw() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < barCount; i++) {
        const x = i * barSpacing
        const envelope = Math.sin((Math.PI * i) / barCount) // fade sides
        const amplitude = generateAmplitude(i, t) * envelope
        const barHeight = Math.abs(amplitude) * 80 + 5

        // Lavender/purple color to match CTA buttons
        ctx.fillStyle = "#8B5CF6" // Purple-500

        // Top bar
        ctx.fillRect(x, midY - barHeight, barWidth, barHeight)

        // Bottom bar (mirrored)
        ctx.fillRect(x, midY, barWidth, barHeight)
      }

      t += 0.03 // smooth progression
      animationRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      width={300}
      height={150}
      className={`${className}`}
      style={{
        filter: "drop-shadow(0 2px 8px rgba(139, 92, 246, 0.4))",
      }}
    />
  )
}
