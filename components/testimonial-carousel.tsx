"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { TestimonialCard } from "@/components/testimonial-card"
import testimonials from "@/data/testimonials.json"

interface TestimonialCarouselProps {
  className?: string
  darkMode?: boolean
}

export function TestimonialCarousel({ className = "", darkMode = false }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Number of cards to display based on screen size
  const getVisibleCount = () => {
    if (isMobile) return 1
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) return 1
      if (window.innerWidth < 1024) return 3
      if (window.innerWidth < 1280) return 4
    }
    return 5
  }

  const [visibleCount, setVisibleCount] = useState(getVisibleCount())

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount())
      setIsMobile(window.innerWidth < 768)
    }

    // Set initial values
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = testimonials.length - visibleCount

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex))
  }

  return (
    <div className={`relative ${className}`}>
      {/* Left navigation button */}
      <button
        onClick={handlePrev}
        disabled={currentIndex === 0}
        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 
                   ${darkMode ? "text-gray-800" : "text-gray-800"} 
                   ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "opacity-100 hover:bg-gray-200"} 
                   transition-all duration-200 bg-gray-100 rounded-full p-2 shadow-md`}
        aria-label="Previous testimonials"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* Testimonial cards */}
      <div className="overflow-hidden px-4">
        <div
          className="flex transition-transform duration-300 ease-in-out space-x-1"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0"
              style={{ width: `calc((100% / ${visibleCount}) - 0.8px)` }}
            >
              <TestimonialCard
                text={testimonial.text}
                name={testimonial.name}
                date={testimonial.date}
                platform={testimonial.platform}
                business={testimonial.business}
                image={testimonial.image}
                stars={testimonial.stars}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right navigation button */}
      <button
        onClick={handleNext}
        disabled={currentIndex >= maxIndex}
        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 
                   ${darkMode ? "text-gray-800" : "text-gray-800"} 
                   ${currentIndex >= maxIndex ? "opacity-50 cursor-not-allowed" : "opacity-100 hover:bg-gray-200"} 
                   transition-all duration-200 bg-gray-100 rounded-full p-2 shadow-md`}
        aria-label="Next testimonials"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  )
}
