"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, ChevronDown } from "lucide-react"
import { useState, useRef, useEffect } from "react"

const navItems = [
  { name: "System", href: "/system" },
  { name: "Reviews", href: "/reviews" },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "Google Business Profile", href: "/services/google-business-profile" },
      { name: "Google Maps Ranking", href: "/services/google-maps-ranking" },
      { name: "Web Design", href: "/services/web-design" },
      { name: "Sales Automation", href: "/services/sales-automation" },
      { name: "AI Employees", href: "/services/ai-employees" },
    ],
  },
  { name: "Case Study", href: "/case-study" },
]

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
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

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  return (
    <header
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-white/40 backdrop-blur-sm"
      }`}
    >
      <div className="container px-4 flex h-24 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/brandstorm-logo.png"
            alt="BRANDSTORM.AI Logo"
            width={220}
            height={60}
            className="h-14 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
          {navItems.map((item) => (
            <div key={item.name} className="relative" ref={item.dropdown ? dropdownRef : undefined}>
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 px-4"
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white/90 backdrop-blur-md rounded-md shadow-lg z-50 border border-gray-100">
                      <div className="py-1">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100/80"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <Link href={item.href} className="text-sm font-medium text-gray-700 hover:text-gray-900 px-4">
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <Link
          href="/call"
          className="hidden md:flex flex-col items-center justify-center gap-0.5 bg-purple-800 hover:bg-purple-900 text-white rounded-md p-2.5 shadow-sm"
        >
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>CALL US</span>
          </div>
          <span className="text-xs">1-888-383-2473</span>
        </Link>

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
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between text-sm font-medium text-gray-700 hover:text-gray-900 py-2"
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`}
                      />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="ml-4 mt-2 flex flex-col gap-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="text-sm text-gray-600 hover:text-gray-900 py-1"
                            onClick={() => {
                              setActiveDropdown(null)
                              setIsMenuOpen(false)
                            }}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-gray-700 hover:text-gray-900 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/call"
              className="flex items-center justify-center gap-2 bg-purple-800 hover:bg-purple-900 text-white rounded-md p-2.5 mt-2 shadow-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone className="h-4 w-4" />
              <div className="flex flex-col gap-0.5">
                <span>CALL US</span>
                <span className="text-xs">1-888-383-2473</span>
              </div>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
