"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, ChevronDown, Menu, X } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { CTAButton } from "@/components/cta-button"
import { useMobile } from "@/hooks/use-mobile"

const navItems = [
  { name: "System", href: "/system" },
  { name: "Reviews", href: "/reviews" },
  {
    name: "Services",
    dropdown: [
      { name: "Ad Management", href: "/services/ad-management" },
      { name: "AI Employees", href: "/services/ai-employees" },
      { name: "Analytics & Reporting", href: "/services/analytics-reporting" },
      { name: "Content Marketing", href: "/services/content-marketing" },
      { name: "CRM", href: "/services/crm" },
      { name: "Email Marketing", href: "/services/email-marketing" },
      { name: "Google Business Profile", href: "/services/google-business-profile" },
      { name: "Google Maps Ranking", href: "/services/google-maps-ranking" },
      { name: "PPC Advertising", href: "/services/ppc-advertising" },
      { name: "Reputation Management", href: "/services/reputation-management" },
      { name: "Review Management", href: "/services/review-management" },
      { name: "Sales Automation", href: "/services/sales-automation" },
      { name: "Search Box Optimization", href: "/services/search-box-optimization" },
      { name: "SEO", href: "/services/seo" },
      { name: "Social Media Management", href: "/services/social-media-management" },
      { name: "Social Media Marketing", href: "/services/social-media-marketing" },
      { name: "Web Design", href: "/services/web-design" },
    ],
  },
  { name: "Case Studies", href: "/case-study" },
]

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()

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

  // Close mobile menu when clicking on links
  const closeMobileMenu = () => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }

  // Toggle dropdown for mobile
  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  // Render different buttons based on device type
  const renderCallButton = () => {
    if (isMobile) {
      return (
        <a
          href="tel:18883832473"
          className="flex flex-col items-center justify-center gap-1 bg-purple-800 hover:bg-purple-900 text-white rounded-md shadow-sm px-4 py-3 w-full"
        >
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span className="font-semibold text-sm">CALL US</span>
          </div>
          <span className="text-xs">1-888-383-2473</span>
        </a>
      )
    } else {
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
          disableBounce={true}
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
      className={`w-full fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-white/40 backdrop-blur-sm"
      }`}
    >
      <div className="container px-4 flex items-center justify-between" style={{ height: "134px" }}>
        {/* Logo Section */}
        <Link href="/" className="flex flex-col items-center relative">
          <Image
            src="/images/brandstorm-logo.png"
            alt="BRANDSTORM.AI Logo"
            width={275}
            height={75}
            className="w-auto h-12 md:h-16"
            priority
          />
          <div className="flex items-center mt-1 md:mt-2 w-full">
            <div className="h-px w-6 md:w-10 bg-gradient-to-r from-transparent to-gray-400"></div>
            <span className="font-semibold text-gray-700 px-2 md:px-3 text-center text-xs md:text-sm whitespace-nowrap">
              An Umbrella Local agency
            </span>
            <div className="h-px w-6 md:w-10 bg-gradient-to-l from-transparent to-gray-400"></div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2"
          style={{ marginLeft: "5%" }}
        >
          {navItems.map((item) => (
            <div key={item.name} className="relative" ref={item.dropdown ? dropdownRef : undefined}>
              {item.dropdown ? (
                <div className="group relative">
                  <button
                    className="flex items-center font-semibold text-gray-700 hover:text-gray-900 px-4 py-2 bg-transparent"
                    style={{ fontSize: "1.035rem" }}
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div className="absolute h-4 w-full top-full left-0"></div>
                  <div className="absolute top-full left-0 mt-0 w-64 bg-white/90 backdrop-blur-md rounded-md shadow-lg z-30 border border-gray-100 hidden group-hover:block">
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

        {/* Desktop CTA Button */}
        <div className="hidden md:block">{renderCallButton()}</div>

        {/* Mobile Hamburger Menu */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100/50 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg">
          <div className="container px-4 py-4 max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <div key={item.name} className="flex flex-col">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center justify-between font-semibold text-gray-700 hover:text-gray-900 py-3 px-2 rounded-md hover:bg-gray-100/50 transition-colors"
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="ml-4 mt-2 space-y-2 border-l-2 border-purple-200 pl-4">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block font-medium text-gray-600 hover:text-purple-700 py-2 px-2 rounded-md hover:bg-purple-50 transition-colors"
                              onClick={closeMobileMenu}
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
                      className="font-semibold text-gray-700 hover:text-gray-900 py-3 px-2 rounded-md hover:bg-gray-100/50 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile CTA Button */}
              <div className="mt-4 pt-4 border-t border-gray-200">{renderCallButton()}</div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
