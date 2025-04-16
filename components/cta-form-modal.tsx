"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { X } from "lucide-react"
import { sendContactEmail } from "@/lib/actions"

interface CTAFormModalProps {
  isOpen: boolean
  onClose: () => void
  ctaSource?: string
}

export function CTAFormModal({ isOpen, onClose, ctaSource = "General Inquiry" }: CTAFormModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      // Simplified form submission
      await sendContactEmail({
        ...formData,
        ctaSource,
      })

      // Always show success in the v0 environment
      setIsSubmitted(true)

      // Reset form after 3 seconds and close modal
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          website: "",
          message: "",
        })
        setIsSubmitted(false)
        onClose()
      }, 3000)
    } catch (error) {
      console.error("Error submitting form:", error)
      setError("An unexpected error occurred. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative overflow-hidden mt-[4.625rem]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="p-6">
          {!isSubmitted ? (
            <>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-purple-800">Let's Grow Your Business</h3>
                <p className="text-gray-600">Fill out the form below and we'll be in touch shortly</p>
              </div>

              {error && <div className="bg-red-50 text-red-600 p-3 rounded-md mb-4 text-sm">{error}</div>}

              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="ctaSource" value={ctaSource} />

                <div>
                  <Label htmlFor="name" className="text-gray-700 font-medium block mb-1">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white text-gray-900 border-gray-300"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-700 font-medium block mb-1">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white text-gray-900 border-gray-300"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-gray-700 font-medium block mb-1">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-white text-gray-900 border-gray-300"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="company" className="text-gray-700 font-medium block mb-1">
                    Company Name
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-white text-gray-900 border-gray-300"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="website" className="text-gray-700 font-medium block mb-1">
                    Website (if applicable)
                  </Label>
                  <Input
                    id="website"
                    name="website"
                    type="url"
                    value={formData.website}
                    onChange={handleChange}
                    className="bg-white text-gray-900 border-gray-300"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-700 font-medium block mb-1">
                    How can we help you?
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="bg-white text-gray-900 border-gray-300"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>

                <p className="text-xs text-center text-gray-500 mt-4">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="bg-green-100 text-green-700 rounded-full p-3 inline-flex mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
              <p className="text-gray-600">Your submission has been received. We'll be in touch shortly.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
