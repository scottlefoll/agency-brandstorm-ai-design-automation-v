"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { X } from "lucide-react"
import { sendContactEmail } from "@/lib/actions"
import { Checkbox } from "@/components/ui/checkbox"

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
  const [transactionalConsent, setTransactionalConsent] = useState(false)
  const [marketingConsent, setMarketingConsent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate required checkboxes
    if (!transactionalConsent || !marketingConsent) {
      setError("Please check both consent boxes to proceed.")
      return
    }

    setIsSubmitting(true)
    setError(null)

    try {
      // Simplified form submission
      await sendContactEmail({
        ...formData,
        transactionalConsent,
        marketingConsent,
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
        setTransactionalConsent(false)
        setMarketingConsent(false)
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
    <>
      {/* Backdrop */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 50000,
          width: "100vw",
          height: "100vh",
        }}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        style={{
          position: "fixed",
          top: "200px",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
          width: "90%",
          maxWidth: "500px",
          zIndex: 50001,
          maxHeight: "calc(100vh - 250px)",
          overflow: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            color: "#6b7280",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "4px",
            zIndex: 1000001,
          }}
          aria-label="Close"
        >
          <X className="h-6 w-6" />
        </button>

        <div style={{ padding: "24px" }}>
          {!isSubmitted ? (
            <>
              <div style={{ textAlign: "center", marginBottom: "24px" }}>
                <h3 style={{ fontSize: "24px", fontWeight: "bold", color: "#7e22ce", marginBottom: "8px" }}>
                  Let's Grow Your Business
                </h3>
                <p style={{ color: "#6b7280" }}>Fill out the form below and we'll be in touch shortly</p>
              </div>

              {error && (
                <div
                  style={{
                    backgroundColor: "#fef2f2",
                    color: "#dc2626",
                    padding: "12px",
                    borderRadius: "6px",
                    marginBottom: "16px",
                    fontSize: "14px",
                  }}
                >
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <input type="hidden" name="ctaSource" value={ctaSource} />

                <div>
                  <Label htmlFor="name" className="text-gray-700 font-medium block mb-1">
                    Full Name <span className="text-red-500">*</span>
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
                    Email Address <span className="text-red-500">*</span>
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
                    Phone Number <span className="text-red-500">*</span>
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
                    Company Name <span className="text-red-500">*</span>
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

                {/* Transactional Consent Checkbox */}
                <div className="flex items-start space-x-2 mt-2">
                  <Checkbox
                    id="transactional-consent"
                    checked={transactionalConsent}
                    onCheckedChange={(checked) => setTransactionalConsent(checked as boolean)}
                    className="mt-1"
                    required
                  />
                  <Label htmlFor="transactional-consent" className="text-xs text-gray-600 font-normal cursor-pointer">
                    <span className="text-red-500">*</span> By checking this box, I consent to receive transactional,
                    non-marketing text messages related to my account from Scott LeFoll, dba Wirestorm Digital and dba
                    Brandstorm AI. These messages may include appointment reminders, order confirmations, and account
                    notifications. Message frequency may vary. Message & Data rates may apply. Reply HELP for help or
                    STOP to opt-out. Brandstorm AI.
                  </Label>
                </div>

                {/* Marketing Consent Checkbox */}
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="marketing-consent"
                    checked={marketingConsent}
                    onCheckedChange={(checked) => setMarketingConsent(checked as boolean)}
                    className="mt-1"
                    required
                  />
                  <Label htmlFor="marketing-consent" className="text-xs text-gray-600 font-normal cursor-pointer">
                    <span className="text-red-500">*</span> By checking this box, I consent to receive marketing and
                    promotional messages, from Scott LeFoll, dba Wirestorm Digital and dba Brandstorm AI. Message
                    frequency may vary. Message & Data rates may apply. Reply HELP for help or STOP to opt-out.
                    Brandstorm AI.
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white mt-4"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </form>
            </>
          ) : (
            <div style={{ textAlign: "center", padding: "32px 0" }}>
              <div
                style={{
                  backgroundColor: "#f0fdf4",
                  color: "#16a34a",
                  borderRadius: "9999px",
                  padding: "12px",
                  display: "inline-flex",
                  marginBottom: "16px",
                }}
              >
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
              <h3 style={{ fontSize: "24px", fontWeight: "bold", color: "#1f2937", marginBottom: "8px" }}>
                Thank You!
              </h3>
              <p style={{ color: "#6b7280" }}>Your submission has been received. We'll be in touch shortly.</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
