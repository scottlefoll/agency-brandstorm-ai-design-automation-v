"use client"

import { useState } from "react"
import { Star, CheckCircle } from "lucide-react"
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

  return (
    <>
      <div className="bg-white rounded-xl shadow-md p-4 h-[260px] w-full max-w-[180px] mx-auto flex flex-col">
        {/* Centered stars */}
        <div className="flex mb-2 justify-center">
          {[...Array(stars)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        {/* Always 3 lines of text */}
        <p className="text-gray-800 text-sm font-medium mb-1 text-center line-clamp-3">{text}</p>

        {/* "Read more" on the 4th line */}
        <div className="text-center mb-1">
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-blue-500 hover:text-blue-700 font-medium text-sm"
          >
            Read more
          </button>
        </div>

        {/* Reduced space between "Read more" and avatar */}
        <div className="mt-2 flex flex-col items-center">
          {/* Centered avatar above name */}
          {image && !imageError ? (
            <div className="mb-2 h-10 w-10 rounded-full overflow-hidden">
              <Image
                src={image || "/placeholder.svg"}
                alt={`${name}'s profile`}
                width={40}
                height={40}
                className="h-full w-full object-cover"
                onError={() => setImageError(true)}
              />
            </div>
          ) : (
            <div
              className={`mb-2 h-10 w-10 rounded-full overflow-hidden ${avatarColor} flex items-center justify-center`}
            >
              {initials}
            </div>
          )}

          <div className="text-center">
            <div className="flex items-center justify-center">
              <p className="font-semibold text-gray-800 text-sm">{name}</p>
              <CheckCircle className="h-4 w-4 ml-1 text-blue-500 fill-white" />
            </div>
            <p className="text-xs text-gray-500">
              {business ? (
                business
              ) : (
                <>
                  {date} on{" "}
                  {platform === "Google" ? (
                    <span className="text-blue-500 font-medium">
                      G<span className="text-red-500">o</span>
                      <span className="text-yellow-500">o</span>g<span className="text-blue-500">l</span>
                      <span className="text-green-500">e</span>
                    </span>
                  ) : (
                    platform
                  )}
                </>
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Modal rendered at document body level */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div>
          <div className="flex mb-4 justify-center">
            {[...Array(stars)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          <p className="text-gray-800 text-lg font-medium mb-6">{text}</p>

          <div className="flex flex-col items-center">
            {image && !imageError ? (
              <div className="mb-2 h-12 w-12 rounded-full overflow-hidden">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${name}'s profile`}
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                  onError={() => setImageError(true)}
                />
              </div>
            ) : (
              <div
                className={`mb-2 h-12 w-12 rounded-full overflow-hidden ${avatarColor} flex items-center justify-center text-lg font-medium`}
              >
                {initials}
              </div>
            )}

            <div className="text-center">
              <div className="flex items-center justify-center">
                <p className="font-semibold text-gray-800">{name}</p>
                <CheckCircle className="h-4 w-4 ml-1 text-blue-500 fill-white" />
              </div>
              <p className="text-sm text-gray-500">
                {business ? (
                  business
                ) : (
                  <>
                    {date} on{" "}
                    {platform === "Google" ? (
                      <span className="text-blue-500 font-medium">
                        G<span className="text-red-500">o</span>
                        <span className="text-yellow-500">o</span>g<span className="text-blue-500">l</span>
                        <span className="text-green-500">e</span>
                      </span>
                    ) : (
                      platform
                    )}
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}
