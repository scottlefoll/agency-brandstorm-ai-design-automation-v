"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { X } from "lucide-react"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  title?: string
}

export function Modal({ isOpen, onClose, children, title }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden" // Prevent scrolling when modal is open
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "" // Restore scrolling when modal is closed
    }
  }, [isOpen, onClose])

  // Close when clicking outside the modal
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose()
    }
  }

  if (!isOpen) return null

  const ModalContent = () => (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-4"
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-xl max-w-md w-full relative p-6 max-h-[90vh] overflow-auto mt-[-15vh]"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <X className="h-6 w-6" />
        </button>

        {title && <h3 className="text-xl font-bold mb-4">{title}</h3>}
        {children}
      </div>
    </div>
  )

  // Use createPortal to render the modal at the document body level
  return createPortal(<ModalContent />, document.body)
}
