"use client"

import { useState, useEffect, useRef } from "react"
import { TestimonialCard } from "@/components/testimonial-card"
import testimonials from "@/data/testimonials.json"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface TestimonialGridProps {
  className?: string
}

export function TestimonialGrid({ className = "" }: TestimonialGridProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const testimonialsPerPage = 9

  // Calculate total pages
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage)

  // Get current testimonials
  const indexOfLastTestimonial = currentPage * testimonialsPerPage
  const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialsPerPage
  const currentTestimonials = testimonials.slice(indexOfFirstTestimonial, indexOfLastTestimonial)

  // Initialize card refs array
  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, currentTestimonials.length)
  }, [currentTestimonials.length])

  // Intersection Observer for staggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = Number.parseInt(entry.target.getAttribute("data-card-index") || "0")
            setVisibleCards((prev) => new Set([...prev, cardIndex]))

            // Add animate class with staggered delay
            setTimeout(() => {
              const cardElement = entry.target as HTMLElement
              cardElement.classList.add("animate")
            }, cardIndex * 100)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      },
    )

    // Observe all current card elements
    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [currentTestimonials])

  // Reset animations when page changes
  useEffect(() => {
    setVisibleCards(new Set())
  }, [currentPage])

  // Change page
  const goToNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  const goToPrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1))
  const goToPage = (pageNumber: number) => setCurrentPage(pageNumber)

  // Generate page numbers
  const pageNumbers = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  return (
    <div className={`${className}`}>
      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentTestimonials.map((testimonial, index) => (
          <div
            key={`${testimonial.id}-${currentPage}`}
            className="h-full testimonial-card-reveal"
            ref={(el) => {
              cardRefs.current[index] = el
            }}
            data-card-index={index}
          >
            <TestimonialCard
              text={testimonial.text}
              name={testimonial.name}
              date={testimonial.date}
              platform={testimonial.platform}
              business={testimonial.business}
              image={testimonial.image}
              stars={testimonial.stars}
              isVisible={visibleCards.has(index)}
            />
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-10 space-x-2">
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            className={`p-2 rounded-md ${currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-purple-600 hover:bg-purple-50"}`}
            aria-label="Previous page"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => goToPage(number)}
              className={`h-8 w-8 rounded-md ${
                currentPage === number ? "bg-purple-600 text-white" : "text-gray-700 hover:bg-purple-50"
              }`}
            >
              {number}
            </button>
          ))}

          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-md ${currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "text-purple-600 hover:bg-purple-50"}`}
            aria-label="Next page"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  )
}
