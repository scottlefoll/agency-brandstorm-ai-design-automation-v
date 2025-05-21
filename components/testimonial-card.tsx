"use client"

import { useState } from "react"
import { Star } from "lucide-react"
import { Modal } from "@/components/modal"
import Image from "next/image"

interface TestimonialCardProps {
  text: string
  name: string
  date?: string
  platform?: string
  business?: string
  image?: string
  stars?: number
}

export function TestimonialCard({
  text,
  name,
  date,
  platform = "Google",
  business,
  image,
  stars = 5,
}: TestimonialCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [imageError, setImageError] = useState(false)

  // Generate a consistent avatar color based on name
  const getAvatarColor = (name: string) => {
    const colors = [
      "bg-blue-100 text-blue-600",
      "bg-green-100 text-green-600",
      "bg-purple-100 text-purple-600",
      "bg-yellow-100 text-yellow-600",
      "bg-red-100 text-red-600",
      "bg-indigo-100 text-indigo-600",
      "bg-pink-100 text-pink-600",
      "bg-teal-100 text-teal-600",
    ]

    // Simple hash function to get a consistent index
    const hash = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)
    return colors[hash % colors.length]
  }

  const avatarColor = getAvatarColor(name)
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase()

  // Truncate text for card display
  const truncatedText = text.length > 200 ? text.substring(0, 200) + "..." : text

  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
        {/* Profile image at top */}
        <div className="flex justify-center mb-4">
          {image && !imageError ? (
            <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-gray-200">
              <Image
                src={image || "/placeholder.svg"}
                alt={`${name}'s profile`}
                width={64}
                height={64}
                className="h-full w-full object-cover"
                onError={() => setImageError(true)}
              />
            </div>
          ) : (
            <div
              className={`h-16 w-16 rounded-full overflow-hidden ${avatarColor} flex items-center justify-center text-xl font-bold border-2 border-gray-200`}
            >
              {initials}
            </div>
          )}
        </div>

        {/* Stars */}
        <div className="flex justify-center mb-3">
          {[...Array(stars)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        {/* Testimonial text */}
        <div className="flex-grow">
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">{truncatedText}</p>

          {text.length > 200 && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-purple-600 hover:text-purple-800 text-sm font-medium"
            >
              Read more
            </button>
          )}
        </div>

        {/* Name and business */}
        <div className="mt-4 pt-3 border-t border-gray-100">
          <p className="font-semibold text-gray-800">{name}</p>
          <p className="text-xs text-gray-500">{business || platform}</p>
        </div>
      </div>

      {/* Modal for full testimonial */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="p-2">
          <div className="flex items-center mb-4">
            {image && !imageError ? (
              <div className="mr-4 h-16 w-16 rounded-full overflow-hidden">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${name}'s profile`}
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                  onError={() => setImageError(true)}
                />
              </div>
            ) : (
              <div
                className={`mr-4 h-16 w-16 rounded-full overflow-hidden ${avatarColor} flex items-center justify-center text-xl font-bold`}
              >
                {initials}
              </div>
            )}
            <div>
              <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
              <p className="text-sm text-gray-500">{business || platform}</p>
            </div>
          </div>

          <div className="flex mb-4">
            {[...Array(stars)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          <p className="text-gray-700 leading-relaxed">{text}</p>
        </div>
      </Modal>
    </>
  )
}
