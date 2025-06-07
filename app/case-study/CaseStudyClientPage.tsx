"use client"

import { useEffect, useRef, useState } from "react"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { CTAButton } from "@/components/cta-button"
import { CaseStudyCard } from "@/components/case-study-card"

// Case study data with factual information
const caseStudies = [
  {
    id: 1,
    title: "Burton's Grill & Bar",
    services: ["SEO"],
    results: ["$100K/mo SEO Revenues", "28 Search Phrases on 1st Page"],
    image: "/images/case-studies/1-burtons.webp",
    slug: "burtons-grill",
  },
  {
    id: 2,
    title: "JJ's Best",
    services: ["SEO"],
    results: ["26 Search Phrases on 1st Page", "7 Years Working Together"],
    image: "/images/case-studies/2-jjs.webp",
    slug: "jjs-best",
  },
  {
    id: 3,
    title: "128 Plumbing",
    services: ["PPC", "SEO"],
    results: ["74 Search Phrases on 1st Page", "11 Years Working Together"],
    image: "/images/case-studies/3-128-plumbing.webp",
    slug: "128-plumbing",
  },
  {
    id: 4,
    title: "AIRE Ancient Baths",
    services: ["Website Accessibility"],
    results: ["$50K saved in fines", "Boosted market reach"],
    image: "/images/case-studies/4-aire.webp",
    slug: "aire-ancient-baths",
  },
  {
    id: 5,
    title: "Tiffany Knupp Insurance Agency",
    services: ["Conversational Texting", "Conversion Rate Optimization"],
    results: ["300% Increased Sales", "98% Open Rate"],
    image: "/images/case-studies/5-tiffany.webp",
    slug: "tiffany-knupp-insurance",
  },
  {
    id: 6,
    title: "Bridge City Limo",
    services: ["Conversion Rate Optimization", "Online Reputation Management"],
    results: ["400% Revenue Growth", "85+ additional reviews"],
    image: "/images/case-studies/6-bridge.webp",
    slug: "bridge-city-limo",
  },
  {
    id: 7,
    title: "BMW San Francisco",
    services: ["Email Marketing"],
    results: ["11.87% Open Rate", "1.32% Click-through-rate"],
    image: "/images/case-studies/7-bmw.webp",
    slug: "bmw-san-francisco",
  },
  {
    id: 8,
    title: "Throwback Vault",
    services: ["Facebook Ads", "Instagram Ads", "Social Media"],
    results: ["427% ROI", "365K+ Reach"],
    image: "/images/case-studies/8-vault.webp",
    slug: "throwback-vault",
  },
  {
    id: 9,
    title: "Xero Shoes",
    services: ["CRO", "Pay Per Revenue", "PPC"],
    results: ["$50K increased sales", "6X ROI"],
    image: "/images/case-studies/9-xero.webp",
    slug: "xero-shoes",
  },
]

export default function CaseStudyClientPage() {
  const [typingComplete, setTypingComplete] = useState(false)
  const [introVisible, setIntroVisible] = useState(false)
  const introRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Set typing complete after animation duration
    const timer = setTimeout(() => {
      setTypingComplete(true)
    }, 3200)

    // Set up intersection observer for intro text
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntroVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (introRef.current) {
      observer.observe(introRef.current)
    }

    return () => {
      clearTimeout(timer)
      if (introRef.current) {
        observer.unobserve(introRef.current)
      }
    }
  }, [])

  return (
    <main className="flex min-h-screen flex-col bg-gray-50">
      <NavBar />
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="container max-w-7xl mx-auto px-4 pt-24 mt-16">
          <h1
            className={`text-4xl font-bold text-purple-800 mb-6 text-center typing-effect ${typingComplete ? "complete" : ""}`}
          >
            Case Studies
          </h1>
          <div ref={introRef} className="text-lg text-gray-600 space-y-4 text-center max-w-4xl mx-auto mb-16">
            <p
              className={`font-medium text-xl mb-4 text-fade-in ${introVisible ? "animate" : ""}`}
              style={{ transitionDelay: "200ms" }}
            >
              Partner with Brandstorm AI and Watch Your Business Thrive
            </p>

            <p className={`text-fade-in ${introVisible ? "animate" : ""}`} style={{ transitionDelay: "400ms" }}>
              At Brandstorm AI, we don't just offer marketing services — we deliver intelligent, results-driven
              solutions tailored to your business goals. When you work with us, you gain a dedicated partner who takes
              the guesswork out of marketing and handles every aspect of your digital growth.
            </p>

            <p className={`text-fade-in ${introVisible ? "animate" : ""}`} style={{ transitionDelay: "600ms" }}>
              Whether you need Smart Web design, AI-powered automation, high-impact local SEO, targeted social media
              management, strategic email marketing, or any other modern marketing solution, we've got you covered from
              end to end.
            </p>

            <p className={`text-fade-in ${introVisible ? "animate" : ""}`} style={{ transitionDelay: "800ms" }}>
              Our team blends creativity with cutting-edge technology to elevate your brand, attract qualified leads,
              and boost your ROI. Explore our portfolio to see how we've helped businesses like yours achieve measurable
              success.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {caseStudies.map((study, index) => (
              <CaseStudyCard
                key={study.id}
                title={study.title}
                services={study.services}
                results={study.results}
                image={study.image}
                slug={study.slug}
                index={index}
              />
            ))}
          </div>

          <div
            className={`max-w-4xl mx-auto text-center mt-16 mb-8 text-fade-in ${introVisible ? "animate" : ""}`}
            style={{ transitionDelay: "1000ms" }}
          >
            <h2 className="text-3xl font-bold text-purple-700 mb-6">Proven Results for Businesses Like Yours</h2>
            <p className="text-lg text-gray-600">
              Discover how our tailored marketing strategies have helped businesses across various industries achieve
              significant growth, increased visibility, and higher conversion rates.
            </p>
          </div>

          <div
            className={`text-center mt-12 mb-16 text-fade-in ${introVisible ? "animate" : ""}`}
            style={{ transitionDelay: "1200ms" }}
          >
            <CTAButton
              className="px-8 py-4 bg-purple-800 hover:bg-purple-900 text-white text-lg font-semibold rounded-md shadow-lg transition-all hover:shadow-xl"
              source="Case Studies Page"
            >
              Schedule Your Free Strategy Session
            </CTAButton>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
