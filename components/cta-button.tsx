"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CTAFormModal } from "@/components/cta-form-modal"

interface CTAButtonProps {
  children: React.ReactNode
  className?: string
  source?: string
  style?: React.CSSProperties
  disableBounce?: boolean
}

export function CTAButton({
  children,
  className,
  source = "General Inquiry",
  style,
  disableBounce = false,
}: CTAButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const bounceClass = disableBounce ? "" : "cta-scroll-bounce"

  return (
    <>
      <Button
        className={`bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white cta-button-enhanced ${bounceClass} ${className}`}
        onClick={() => setIsModalOpen(true)}
        style={style}
      >
        {children}
      </Button>

      <CTAFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} ctaSource={source} />
    </>
  )
}
