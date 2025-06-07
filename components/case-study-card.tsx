"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

interface CaseStudyCardProps {
  title: string
  services: string[]
  results: string[]
  image: string
  slug: string
  index?: number
}

export function CaseStudyCard({ title, services, results, image, slug, index = 0 }: CaseStudyCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  // Calculate delay based on index (150ms between each card)
  const delay = index * 150

  return (
    <div
      ref={cardRef}
      className={`case-study-card card-hover bg-white rounded-lg overflow-hidden shadow-lg ${
        isVisible ? "animate" : ""
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={`${title} - ${services.join(", ")} case study`}
          fill
          className="object-cover object-center image-zoom"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>

        <div className="mb-4">
          {services.map((service, i) => (
            <span
              key={i}
              className="service-tag inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded mr-2 mb-2"
              style={{ animationDelay: `${isVisible ? delay + 200 + i * 100 : 0}ms` }}
            >
              {service}
            </span>
          ))}
        </div>

        <ul className="mb-4 text-gray-700">
          {results.map((result, i) => (
            <li
              key={i}
              className={`mb-1 flex items-start text-fade-in ${isVisible ? "animate" : ""}`}
              style={{ transitionDelay: `${isVisible ? delay + 400 + i * 100 : 0}ms` }}
            >
              <span className="text-purple-600 mr-2">•</span>
              <span>{result}</span>
            </li>
          ))}
        </ul>

        <Link
          href={`/case-study/${slug}`}
          className="inline-block w-full text-center bg-purple-700 hover:bg-purple-800 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Read Full Case Study
        </Link>
      </div>
    </div>
  )
}
