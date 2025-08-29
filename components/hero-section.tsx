"use client"

import { CTAButton } from "@/components/cta-button"
import Image from "next/image"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true)
  }, [])

  return (
    <section
      className="relative w-full"
      style={{
        paddingTop: "5.36rem",
        paddingBottom: "4.5rem", // Reduced by 25% from 6rem to 4.5rem
      }}
    >
      {/* Background video as bottom layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          style={{ objectPosition: "center" }}
        >
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e97cb0fc-164a-4fe2-8f9a-eea40c2043e7_b7abd018-e8a6-4ba3-8438-8999163728b7M-D369dv2kS9lJiCCJOst12oFZswi9Lq.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark overlay with increased opacity (80% instead of 70%) */}
      <div className="absolute inset-0 bg-black/80 z-10"></div>

      {/* Blue gradient overlay with reduced opacity (30%) */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-800 to-blue-600 opacity-30 z-20"></div>

      <div className="container relative z-30 flex flex-col items-center text-center text-white">
        <h1
          className="text-6xl md:text-7xl lg:text-8xl font-black tracking-wide uppercase overflow-hidden"
          style={{
            textShadow: "0 0 1px rgba(255,255,255,0.1)",
            fontFamily: "'Montserrat', sans-serif",
            letterSpacing: "0.007em",
            wordSpacing: "-0.126em",
            lineHeight: "0.768",
          }}
        >
          <span
            className={`block bg-gradient-to-r from-blue-500 via-purple-400 to-indigo-300 bg-clip-text text-transparent animated-text ${isVisible ? "reveal-1" : ""}`}
            style={{
              backgroundSize: "200% auto",
              animation: isVisible ? "gradient 3s linear infinite" : "none",
            }}
          >
            TRANSFORM YOUR
          </span>
          <span
            className={`block bg-gradient-to-r from-blue-500 via-purple-400 to-indigo-300 bg-clip-text text-transparent animated-text ${isVisible ? "reveal-2" : ""}`}
            style={{
              backgroundSize: "200% auto",
              animation: isVisible ? "gradient 3s linear infinite" : "none",
            }}
          >
            BUSINESS WITH
          </span>
          <span
            className={`block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animated-text ${isVisible ? "reveal-3" : ""}`}
          >
            AI POWER
          </span>
        </h1>

        <div className={`py-2.5 flex items-center justify-center animated-element ${isVisible ? "fade-in" : ""}`}>
          {[1, 2, 3, 4, 5].map((star, index) => (
            <div key={star} style={{ marginLeft: index === 0 ? "0" : "3px", marginRight: index === 4 ? "0" : "3px" }}>
              <Image src="/images/five-star-gold.svg" alt="Gold star" width={25} height={25} className="h-6 w-6" />
            </div>
          ))}
        </div>

        <h2
          className={`text-3xl md:text-4xl font-black mb-6 text-white uppercase animated-element ${isVisible ? "fade-in-delay-1" : ""}`}
          style={{
            textShadow: "0 0 2px rgba(255,255,255,0.8), 0 0 10px rgba(255,255,255,0.3)",
            letterSpacing: "0.02em",
          }}
        >
          BECOME THE FIRST CHOICE. EVERY TIME.
        </h2>

        <div className={`max-w-3xl animated-element ${isVisible ? "fade-in-delay-2" : ""}`}>
          <p className="text-lg mb-1">
            Drive unstoppable growth through <strong className="font-extrabold">Elite Branding</strong>,
            high-performance <strong className="font-extrabold">Web Design</strong>,{" "}
            <strong className="font-extrabold">Google Maps Ranking</strong>,{" "}
            <strong className="font-extrabold">Google My Business Ranking</strong>,{" "}
            <strong className="font-extrabold">Search Box Optimization</strong>,{" "}
            <strong className="font-extrabold">Sales Automation</strong>, and{" "}
            <strong className="font-extrabold">Smart AI Employees</strong> that never rest.
          </p>
        </div>

        <p className={`text-xl font-extrabold mt-4 mb-5 animated-element ${isVisible ? "fade-in-delay-3" : ""}`}>
          More clients. More revenue. Unshakable loyalty.
        </p>

        <CTAButton
          className={`py-8 px-8 rounded-md text-lg font-bold border-2 border-purple-500 animated-element ${isVisible ? "fade-in-delay-4" : ""}`}
          style={{
            transition: "all 0.3s ease",
          }}
          source="Hero Section - Book Strategy Call"
        >
          <div className="flex flex-col">
            <span>BOOK YOUR STRATEGY CALL</span>
            <span className="text-xs font-normal">AND GET A FREE MARKETING AUDIT REPORT</span>
          </div>
        </CTAButton>
      </div>
    </section>
  )
}
