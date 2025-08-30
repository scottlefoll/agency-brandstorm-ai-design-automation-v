"use client"

import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { CTAButton } from "@/components/cta-button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedHero } from "@/components/animated-hero"
import { AnimatedImage } from "@/components/animated-image"
import Image from "next/image"

export default function SystemPageClient() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Fixed header */}
      <NavBar />

      {/* White spacer that exactly matches the NavBar height */}
      <div className="h-[134px]"></div>

      {/* Hero Section */}
      <ScrollReveal>
        <section className="relative py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedHero>
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    Turn Your Business Into An
                    <span className="text-yellow-400 block">Automated Revenue Engine</span>
                  </h1>
                  <p className="text-xl text-purple-100 leading-relaxed">
                    <strong>
                      Brandstorm AI CRM empowers you to attract, engage, and convert more customers—automatically.
                    </strong>{" "}
                    Get all the tools you need to streamline operations and grow your business on autopilot.
                  </p>
                  <CTAButton
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
                    source="System Hero - Get Started"
                  >
                    Get Started Today
                  </CTAButton>
                </div>
              </AnimatedHero>
              <AnimatedImage delay={0.3}>
                <div className="relative">
                  <Image
                    src="/images/crm/1-crm.webp"
                    alt="BrandStorm AI tablet displaying automated revenue engine with network connections and growth visualization"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-2xl border-4 border-white/20 object-cover"
                  />
                </div>
              </AnimatedImage>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Integration Section */}
      <ScrollReveal>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedImage>
                <div className="relative">
                  <Image
                    src="/images/crm/2-crm.webp"
                    alt="BrandStorm AI tablet showing integrated sales and marketing analytics dashboard with network connections"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-xl border-2 border-gray-200 object-cover"
                  />
                </div>
              </AnimatedImage>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Seamlessly Integrate
                  <span className="text-purple-600 block">Sales & Marketing</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Ignoring the value of a CRM can cost you sales and damage customer relationships.{" "}
                  <strong>
                    Brandstorm AI CRM solves this by unifying your sales and marketing workflows into one smart,
                    easy-to-use platform.
                  </strong>{" "}
                  The result? Lower operational costs and significantly improved sales performance.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span>Unified customer data across all channels</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span>Real-time analytics and reporting</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span>Automated workflow optimization</span>
                  </li>
                </ul>
                <CTAButton
                  className="bg-purple-800 text-white hover:bg-purple-700 font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                  source="System Page - Sales Marketing Integration"
                >
                  Request a Demo
                </CTAButton>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Three-Step Process */}
      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">📈 How It Works</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Transform your business with our systematic approach to growth and automation
              </p>
            </div>

            <div className="space-y-20">
              {/* Step 1 - Capture */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                      1
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-purple-700">STEP 1: Capture</h3>
                  </div>
                  <p className="text-lg mb-6">
                    Don't let valuable leads slip through the cracks. We help you{" "}
                    <strong>capture every opportunity</strong> so you can start building relationships and converting
                    leads into customers.
                  </p>
                  <ul className="space-y-2 text-gray-700 mb-6">
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                      <span>Multi-channel lead generation</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                      <span>Smart lead scoring and qualification</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                      <span>Conversion-optimized landing pages</span>
                    </li>
                  </ul>
                  <CTAButton
                    className="bg-purple-700 text-white hover:bg-purple-600 font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                    source="System Page - Lead Capture"
                  >
                    Activate Lead Capture
                  </CTAButton>
                </div>
                <AnimatedImage delay={0.2}>
                  <div className="relative">
                    <Image
                      src="/images/crm/3-crm.webp"
                      alt="Lead capture funnel visualization with 3D leads flowing through a net toward a tree structure representing growth"
                      width={600}
                      height={400}
                      className="rounded-lg shadow-xl border-2 border-gray-200 object-cover"
                    />
                  </div>
                </AnimatedImage>
              </div>

              {/* Step 2 - Nurture */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <AnimatedImage delay={0.2}>
                  <div className="relative lg:order-1">
                    <Image
                      src="/images/crm/4-crm.webp"
                      alt="Professional business team collaborating in modern office with growth plant overlay symbolizing nurturing leads and business development"
                      width={600}
                      height={400}
                      className="rounded-lg shadow-xl border-2 border-gray-200 object-cover"
                    />
                  </div>
                </AnimatedImage>
                <div className="space-y-6 lg:order-2">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                      2
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-purple-700">STEP 2: Nurture</h3>
                  </div>
                  <p className="text-lg mb-6">
                    Reach your prospects wherever they are—<strong>social media, email, text, voicemail, chat.</strong>{" "}
                    Automated follow-ups ensure your business responds within minutes, and nurture sequences keep you
                    top of mind.
                  </p>
                  <ul className="space-y-2 text-gray-700 mb-6">
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                      <span>Automated email sequences</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                      <span>Personalized content delivery</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                      <span>Behavioral trigger campaigns</span>
                    </li>
                  </ul>
                  <CTAButton
                    className="bg-purple-700 text-white hover:bg-purple-600 font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                    source="System Page - Nurture Campaigns"
                  >
                    Build Nurture Campaigns
                  </CTAButton>
                </div>
              </div>

              {/* Step 3 - Close */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                      3
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-purple-700">STEP 3: Close</h3>
                  </div>
                  <p className="text-lg mb-6">
                    <strong>Track every lead's journey</strong> and focus your efforts on those ready to buy. When
                    they're ready, collect payments directly through the CRM—no friction, no delay.
                  </p>
                  <ul className="space-y-2 text-gray-700 mb-6">
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                      <span>Sales-ready lead identification</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                      <span>Automated sales processes</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                      <span>Revenue optimization strategies</span>
                    </li>
                  </ul>
                  <CTAButton
                    className="bg-purple-700 text-white hover:bg-purple-600 font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                    source="System Page - Closing Tools"
                  >
                    Explore Closing Tools
                  </CTAButton>
                </div>
                <AnimatedImage delay={0.2}>
                  <div className="relative">
                    <Image
                      src="/images/crm/5-crm.webp"
                      alt="3D golden pathway with dollar signs leading to an open door representing the sales closing process and success"
                      width={600}
                      height={400}
                      className="rounded-lg shadow-xl border-2 border-gray-200 object-cover"
                    />
                  </div>
                </AnimatedImage>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Results Section */}
      <ScrollReveal>
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Results Speak For Themselves</h2>
              <p className="text-lg text-purple-100 max-w-2xl mx-auto">
                Our system has helped thousands of businesses achieve unprecedented growth
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">300%</div>
                <div className="text-lg">Average Revenue Increase</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">85%</div>
                <div className="text-lg">Lead Conversion Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-lg">Automated Operations</div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Ready to Grow Section */}
      <ScrollReveal>
        <section className="py-20 bg-gradient-to-b from-purple-800 to-purple-900 text-white">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Ready to Unlock
                  <span className="text-yellow-400 block">Your Sales Potential?</span>
                </h2>
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
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span>Free strategy consultation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span>Custom implementation plan</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span>Ongoing support and optimization</span>
                  </div>
                </div>
                <CTAButton
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
                  source="System Page - Strategy Call"
                >
                  Schedule Free Strategy Call
                </CTAButton>
              </div>
              <AnimatedImage delay={0.3}>
                <div className="relative">
                  <Image
                    src="/images/crm/6-crm.webp"
                    alt="BrandStorm System cityscape with golden pathway containing email and security icons leading to unlocked sales potential"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-2xl border-4 border-white/20 object-cover"
                  />
                </div>
              </AnimatedImage>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </main>
  )
}
