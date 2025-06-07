"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { CTAFormModal } from "@/components/cta-form-modal"

interface CTAButtonProps {
  children: React.ReactNode
  className?: string
  source?: string
  style?: React.CSSProperties
  enhanced?: boolean
}

function CTAButton({ children, className, source = "General Inquiry", style, enhanced = false }: CTAButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isAnimated, setIsAnimated] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    // Check if this button is in the header/nav
    if (buttonRef.current) {
      const isInHeader = buttonRef.current.closest("header") || buttonRef.current.closest("nav")
      if (!isInHeader) {
        setIsAnimated(true)
      }
    }
  }, [])

  const enhancedClass = enhanced ? "cta-enhanced" : ""

  return (
    <>
      <Button
        ref={buttonRef}
        className={`bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white ${isAnimated ? "corner-bounce" : ""} ${enhancedClass} ${className}`}
        onClick={() => setIsModalOpen(true)}
        style={style}
      >
        {children}
      </Button>

      <CTAFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} ctaSource={source} />
    </>
  )
}

// Export both as default and named export for compatibility
export default CTAButton
export { CTAButton }
