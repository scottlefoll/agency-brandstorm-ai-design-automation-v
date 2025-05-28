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
  const [visibleCount, setVisibleCount] = useState(1)

  // Number of cards to display based on screen size
  const getVisibleCount = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1 // Mobile: 1 card
      if (window.innerWidth < 768) return 1 // Small tablets: 1 card
      if (window.innerWidth < 1024) return 2 // Tablets: 2 cards
      if (window.innerWidth < 1280) return 3 // Small desktop: 3 cards
      return 4 // Large desktop: 4 cards
    }
    return 1
  }

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const newVisibleCount = getVisibleCount()
      setVisibleCount(newVisibleCount)
      // Adjust current index if needed
      const maxIndex = testimonials.length - newVisibleCount
      if (currentIndex > maxIndex) {
        setCurrentIndex(Math.max(0, maxIndex))
      }
    }

    // Set initial values
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [currentIndex])

  const maxIndex = Math.max(0, testimonials.length - visibleCount)

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex))
  }

  return (
    <div className={`relative ${className}`}>
      {/* Navigation buttons - only show if there are multiple cards */}
      {maxIndex > 0 && (
        <>
          {/* Left navigation button */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-10 
                       ${darkMode ? "text-gray-800" : "text-gray-800"} 
                       ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "opacity-100 hover:bg-gray-200"} 
                       transition-all duration-200 bg-gray-100 rounded-full p-2 shadow-md`}
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Right navigation button */}
          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 z-10 
                       ${darkMode ? "text-gray-800" : "text-gray-800"} 
                       ${currentIndex >= maxIndex ? "opacity-50 cursor-not-allowed" : "opacity-100 hover:bg-gray-200"} 
                       transition-all duration-200 bg-gray-100 rounded-full p-2 shadow-md`}
            aria-label="Next testimonials"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </>
      )}

      {/* Testimonial cards */}
      <div className="overflow-hidden px-2 sm:px-4">
        <div
          className="flex transition-transform duration-300 ease-in-out gap-2 sm:gap-4"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0"
              style={{ width: `calc((100% / ${visibleCount}) - ${visibleCount > 1 ? "8px" : "0px"})` }}
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

      {/* Dots indicator for mobile */}
      {maxIndex > 0 && visibleCount === 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentIndex === index ? "bg-purple-600" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
