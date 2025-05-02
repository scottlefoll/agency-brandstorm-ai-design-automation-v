"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, ChevronDown } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { CTAButton } from "@/components/cta-button"
import { useMobile } from "@/hooks/use-mobile"

const navItems = [
  { name: "System", href: "/system" },
  { name: "Reviews", href: "/reviews" },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "AI Employees", href: "/services/ai-employees" },
      { name: "Google Business Profile", href: "/services/google-business-profile" },
      { name: "Google Maps Ranking", href: "/services/google-maps-ranking" },
      { name: "Sales Automation", href: "/services/sales-automation" },
      { name: "Search Box Optimization", href: "/services/search-box-optimization" },
      { name: "Web Design", href: "/services/web-design" },
    ],
  },
  { name: "Case Study", href: "/case-study" },
]

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Track scroll position to adjust header appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Render different buttons based on device type
  const renderCallButton = () => {
    if (isMobile) {
      // Mobile: Use tel: link for direct calling
      return (
        <a
          href="tel:18883832473"
          className="flex flex-col items-center justify-center gap-0.5 bg-purple-800 hover:bg-purple-900 text-white rounded-md shadow-sm"
          style={{
            paddingTop: "0.625rem",
            paddingBottom: "0.625rem",
            paddingLeft: "1.875rem",
            paddingRight: "1.875rem",
          }}
        >
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span className="font-semibold">CALL US</span>
          </div>
          <span className="text-xs">1-888-383-2473</span>
        </a>
      )
    } else {
      // Desktop: Use CTAButton for callback request
      return (
        <CTAButton
          className="flex flex-col items-center justify-center gap-0.5 bg-purple-800 hover:bg-purple-900 text-white rounded-md shadow-sm"
          style={{
            paddingTop: "1.875rem",
            paddingBottom: "1.875rem",
            paddingLeft: "1.875rem",
            paddingRight: "1.875rem",
          }}
          source="Header - Get a Callback"
        >
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span className="font-semibold">GET A DEMO CALL</span>
          </div>
          <span className="text-xs">from our AI Assistant</span>
        </CTAButton>
      )
    }
  }

  return (
    <header
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-white/40 backdrop-blur-sm"
      }`}
    >
      <div className="container px-4 flex items-center justify-between" style={{ height: "134px" }}>
        <Link href="/" className="flex items-center">
          <Image
            src="/images/brandstorm-logo.png"
            alt="BRANDSTORM.AI Logo"
            width={275}
            height={75}
            className="w-auto"
            style={{ height: "65px" }}
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
          {navItems.map((item) => (
            <div key={item.name} className="relative" ref={item.dropdown ? dropdownRef : undefined}>
              {item.dropdown ? (
                <div className="group relative">
                  <Link
                    href={item.href}
                    className="flex items-center font-semibold text-gray-700 hover:text-gray-900 px-4"
                    style={{ fontSize: "1.035rem" }}
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Link>
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white/90 backdrop-blur-md rounded-md shadow-lg z-50 border border-gray-100 hidden group-hover:block">
                    <div className="py-1">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-2 font-semibold text-gray-700 hover:bg-gray-100/80"
                          style={{ fontSize: "1.035rem" }}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="font-semibold text-gray-700 hover:text-gray-900 px-4"
                  style={{ fontSize: "1.035rem" }}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden md:block">{renderCallButton()}</div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md border-t border-gray-100">
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <div key={item.name} className="flex flex-col">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      className="flex items-center justify-between font-semibold text-gray-700 hover:text-gray-900 py-2"
                      style={{ fontSize: "1.035rem" }} /* Increased by 15% from 0.9rem (text-sm) */
                    >
                      {item.name}
                      <ChevronDown className={`h-4 w-4 transition-transform`} />
                    </button>
                    {/* {activeDropdown === item.name && ( */}
                    <div className="ml-4 mt-2 flex flex-col gap-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="font-semibold text-gray-600 hover:text-gray-900 py-1"
                          style={{ fontSize: "1.035rem" }} /* Increased by 15% from 0.9rem (text-sm) */
                          onClick={() => {
                            setIsMenuOpen(false)
                          }}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                    {/* )} */}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="font-semibold text-gray-700 hover:text-gray-900 py-2"
                    style={{ fontSize: "1.035rem" }} /* Increased by 15% from 0.9rem (text-sm) */
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-2">{renderCallButton()}</div>
          </div>
        </div>
      )}
    </header>
  )
}
