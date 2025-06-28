import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { AnimatedHero } from "@/components/animated-hero"
import { AnimatedImage } from "@/components/animated-image"
import { FeatureCardsCascade } from "@/components/feature-cards-cascade"
import { CTAButton } from "@/components/cta-button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Email Marketing - Brandstorm AI",
  description:
    "Build lasting customer relationships with personalized email campaigns that drive conversions and loyalty.",
}

export default function EmailMarketingPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50">
      <NavBar />
      <div className="flex-1 pt-32">
        <div className="container max-w-6xl mx-auto px-4 py-12">
          <AnimatedHero
            title="Email Marketing"
            subtitle="Build lasting relationships and drive conversions through strategic email campaigns"
          />

          <section className="py-12">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-semibold mb-6">Why Email Marketing?</h2>
              <p className="text-gray-700 leading-relaxed">
                Email marketing is a powerful tool for connecting with your audience, nurturing leads, and driving
                sales. It allows you to deliver personalized messages directly to your customers' inboxes, building
                brand loyalty and increasing engagement.
              </p>
            </div>
          </section>

          <section className="py-12 bg-gray-100">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Reach a Wider Audience</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Connect with potential customers and expand your reach through targeted email campaigns.
                  </p>
                  <CTAButton className="cta-button mt-4">Learn More</CTAButton>
                </div>
                <div>
                  <AnimatedImage
                    src="/placeholder.svg?height=300&width=500&text=Email+Audience"
                    alt="Reach a Wider Audience"
                    width={500}
                    height={300}
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="py-12">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <AnimatedImage
                    src="/placeholder.svg?height=300&width=500&text=Personalized+Campaigns"
                    alt="Personalized Campaigns"
                    width={500}
                    height={300}
                    className="rounded-lg shadow-md"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Personalized Campaigns</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Craft personalized email campaigns that resonate with your audience and drive higher engagement.
                  </p>
                  <CTAButton className="cta-button mt-4">Get Started</CTAButton>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 bg-gray-100">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Track and Optimize</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Monitor your email marketing performance and optimize your campaigns for maximum results.
                  </p>
                  <CTAButton className="cta-button mt-4">View Analytics</CTAButton>
                </div>
                <div>
                  <AnimatedImage
                    src="/placeholder.svg?height=300&width=500&text=Email+Analytics"
                    alt="Track and Optimize"
                    width={500}
                    height={300}
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="py-12">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-semibold mb-6">Ready to Get Started?</h2>
              <p className="text-gray-700 leading-relaxed">
                Let us help you create effective email marketing campaigns that drive results.
              </p>
              <CTAButton className="cta-button mt-4">Contact Us</CTAButton>
            </div>
          </section>

          <FeatureCardsCascade
            cards={[
              {
                title: "Personalized Campaigns",
                description:
                  "Create targeted email campaigns that speak directly to your audience's needs and interests.",
              },
              {
                title: "Automated Workflows",
                description:
                  "Set up automated email sequences that nurture leads and guide customers through their journey.",
              },
              {
                title: "Performance Analytics",
                description:
                  "Track open rates, click-through rates, and conversions to optimize your email marketing strategy.",
              },
            ]}
            className="container mx-auto py-12"
          />
        </div>
      </div>
      <Footer />
    </main>
  )
}
