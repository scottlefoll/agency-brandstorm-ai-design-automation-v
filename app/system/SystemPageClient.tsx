"use client"

import type React from "react"

import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { CTAButton } from "@/components/cta-button"
import { useEffect, useRef, useState } from "react"

export default function SystemPageClient() {
  const [heroTextVisible, setHeroTextVisible] = useState(false)
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])
  const heroRef = useRef<HTMLDivElement>(null)
  const step1Ref = useRef<HTMLDivElement>(null)
  const step2Ref = useRef<HTMLDivElement>(null)
  const step3Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Hero text reveal animation
    const heroObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setHeroTextVisible(true), 300)
          }
        })
      },
      { threshold: 0.3 },
    )

    if (heroRef.current) {
      heroObserver.observe(heroRef.current)
    }

    // Step reveal animations
    const stepObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepNumber = Number.parseInt(entry.target.getAttribute("data-step") || "0")
            setVisibleSteps((prev) => {
              if (!prev.includes(stepNumber)) {
                return [...prev, stepNumber].sort()
              }
              return prev
            })
          }
        })
      },
      { threshold: 0.2 },
    )

    const stepRefs = [step1Ref, step2Ref, step3Ref]
    stepRefs.forEach((ref) => {
      if (ref.current) {
        stepObserver.observe(ref.current)
      }
    })

    return () => {
      heroObserver.disconnect()
      stepObserver.disconnect()
    }
  }, [])

  const AnimatedText = ({ text, visible, delay = 0 }: { text: string; visible: boolean; delay?: number }) => {
    const words = text.split(" ")
    return (
      <span className="inline-block">
        {words.map((word, index) => (
          <span
            key={index}
            className={`inline-block transition-all duration-700 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{
              transitionDelay: `${delay + index * 100}ms`,
            }}
          >
            {word}&nbsp;
          </span>
        ))}
      </span>
    )
  }

  const StepContainer = ({
    stepNumber,
    children,
    className = "",
  }: {
    stepNumber: number
    children: React.ReactNode
    className?: string
  }) => {
    const isVisible = visibleSteps.includes(stepNumber)
    const delay = visibleSteps.indexOf(stepNumber) * 200

    return (
      <div
        className={`transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        } ${className}`}
        style={{
          transitionDelay: `${delay}ms`,
        }}
      >
        {children}
      </div>
    )
  }

  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Fixed header */}
      <NavBar />

      {/* White spacer that exactly matches the NavBar height */}
      <div className="h-[134px]"></div>

      {/* Main Hero Section */}
      <section className="bg-gradient-to-b from-purple-900 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2" ref={heroRef}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <AnimatedText text="Turn Your Business Into an Automated Revenue Engine" visible={heroTextVisible} />
              </h1>
              <div
                className={`transition-all duration-700 ease-out ${
                  heroTextVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "800ms" }}
              >
                <p className="text-xl mb-8">
                  <strong>
                    Brandstorm AI CRM empowers you to attract, engage, and convert more customers—automatically.
                  </strong>{" "}
                  Get all the tools you need to streamline operations and grow your business on autopilot.
                </p>
              </div>
              <div
                className={`transition-all duration-700 ease-out ${
                  heroTextVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "1000ms" }}
              >
                <CTAButton variant="secondary" className="bg-white text-purple-800 hover:bg-gray-100">
                  Get Started Today
                </CTAButton>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div
                className={`relative w-full h-[300px] md:h-[400px] transition-all duration-1000 ease-out ${
                  heroTextVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <Image
                  src="/images/crm/1-crm.webp"
                  alt="BrandStorm AI tablet - Automated Revenue Engine"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrate Sales and Marketing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-6">
                Seamlessly Integrate Sales and Marketing
              </h2>
              <p className="text-lg mb-8">
                Ignoring the value of a CRM can cost you sales and damage customer relationships.{" "}
                <strong>
                  Brandstorm AI CRM solves this by unifying your sales and marketing workflows into one smart,
                  easy-to-use platform.
                </strong>{" "}
                The result? Lower operational costs and significantly improved sales performance.
              </p>
              <CTAButton variant="primary">Request a Demo</CTAButton>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative w-full h-[300px] md:h-[400px]">
                <Image
                  src="/images/crm/2-crm.webp"
                  alt="Analytics dashboard - Integrated Sales and Marketing Platform"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-12 text-center">📈 How It Works</h2>

          {/* Step 1 */}
          <div ref={step1Ref} data-step="1" className="mb-16">
            <StepContainer stepNumber={1}>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl md:text-3xl font-bold text-purple-700 mb-4">STEP 1: Capture</h3>
                  <p className="text-lg mb-6">
                    Don't let valuable leads slip through the cracks. We help you{" "}
                    <strong>capture every opportunity</strong> so you can start building relationships and converting
                    leads into customers.
                  </p>
                  <CTAButton variant="primary">Activate Lead Capture</CTAButton>
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0">
                  <div className="relative w-full h-[250px] md:h-[300px]">
                    <Image
                      src="/images/crm/3-crm.webp"
                      alt="Lead capture funnel with tree visualization"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </StepContainer>
          </div>

          {/* Step 2 */}
          <div ref={step2Ref} data-step="2" className="mb-16">
            <StepContainer stepNumber={2}>
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl md:text-3xl font-bold text-purple-700 mb-4">STEP 2: Nurture</h3>
                  <p className="text-lg mb-6">
                    Reach your prospects wherever they are—<strong>social media, email, text, voicemail, chat.</strong>{" "}
                    Automated follow-ups ensure your business responds within minutes, and nurture sequences keep you
                    top of mind.
                  </p>
                  <CTAButton variant="primary">Build Nurture Campaigns</CTAButton>
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0">
                  <div className="relative w-full h-[250px] md:h-[300px]">
                    <Image
                      src="/images/crm/4-crm.webp"
                      alt="Business team with growth plant overlay"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </StepContainer>
          </div>

          {/* Step 3 */}
          <div ref={step3Ref} data-step="3">
            <StepContainer stepNumber={3}>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl md:text-3xl font-bold text-purple-700 mb-4">STEP 3: Close</h3>
                  <p className="text-lg mb-6">
                    <strong>Track every lead's journey</strong> and focus your efforts on those ready to buy. When
                    they're ready, collect payments directly through the CRM—no friction, no delay.
                  </p>
                  <CTAButton variant="primary">Explore Closing Tools</CTAButton>
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0">
                  <div className="relative w-full h-[250px] md:h-[300px]">
                    <Image
                      src="/images/crm/5-crm.webp"
                      alt="3D pathway with dollar signs leading to success"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </StepContainer>
          </div>
        </div>
      </section>

      {/* Ready to Grow Section */}
      <section className="py-16 bg-gradient-to-b from-purple-800 to-purple-900 text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow?</h2>
              <p className="text-xl mb-6">
                <strong>We make scaling your business simple.</strong> Book a free strategy call, and we'll help
                identify areas for growth, streamline your systems, and map out the next steps.
              </p>
              <div className="bg-white/10 p-6 rounded-lg mb-8">
                <p className="text-lg italic">
                  🎯{" "}
                  <strong>
                    No pressure. No hard sell. Just expert advice—whether you choose to work with us or not.
                  </strong>
                </p>
              </div>
              <CTAButton variant="secondary" className="bg-white text-purple-900 hover:bg-gray-100">
                Schedule Free Strategy Call
              </CTAButton>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative w-full h-[300px] md:h-[400px]">
                <Image
                  src="/images/crm/6-crm.webp"
                  alt="Unlock Your Sales Potential - cityscape with golden pathway"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
