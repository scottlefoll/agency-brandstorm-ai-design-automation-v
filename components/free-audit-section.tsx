"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { sendContactEmail } from "@/lib/actions"

export function FreeAuditSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        company: formData.website,
        ctaSource: "Free Digital Marketing Audit",
      })

      // Always show success in the v0 environment
      setIsSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          website: "",
        })
        setIsSubmitted(false)
      }, 3000)
    } catch (error) {
      console.error("Error submitting form:", error)
      setError("An unexpected error occurred. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="w-full py-12">
      <div className="container">
        <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-lg p-8 text-white">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Get your FREE Website Audit</h2>
            <p className="text-lg">Check your ranking and conversion score, and lead your local market.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && <div className="bg-red-900/50 text-white p-3 rounded-md text-sm">{error}</div>}

                <div>
                  <Label htmlFor="audit-name" className="text-white">
                    Name
                  </Label>
                  <Input
                    id="audit-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder-white/50"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="audit-email" className="text-white">
                    Email
                  </Label>
                  <Input
                    id="audit-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder-white/50"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="audit-phone" className="text-white">
                    Phone
                  </Label>
                  <Input
                    id="audit-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder-white/50"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="audit-website" className="text-white">
                    Website
                  </Label>
                  <Input
                    id="audit-website"
                    name="website"
                    type="url"
                    value={formData.website}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder-white/50"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "GET MY FREE AUDIT"}
                </Button>
              </form>
            ) : (
              <div className="flex items-center justify-center">
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <div className="text-center">
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
                    <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                    <p>Your audit request has been received. We'll be in touch shortly.</p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex items-center justify-center">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm max-w-md">
                <h3 className="font-bold text-xl mb-4">What You'll Get:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold">✓</span>
                    <span>Complete analysis of your online presence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold">✓</span>
                    <span>Competitor comparison</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold">✓</span>
                    <span>Actionable recommendations to improve rankings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold">✓</span>
                    <span>Growth opportunities specific to your business</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold">✓</span>
                    <span>30-minute strategy call with our experts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
