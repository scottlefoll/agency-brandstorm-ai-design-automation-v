import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { AnimatedHero } from "@/components/animated-hero"
import { AnimatedImage } from "@/components/animated-image"
import { FeatureCardsCascade } from "@/components/feature-cards-cascade"
import { CTAButton } from "@/components/cta-button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SEO Services - Brandstorm AI",
  description:
    "Climb the search engine rankings with our comprehensive SEO strategies tailored to your business goals.",
}

export default function SEOServicesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50">
      <NavBar />
      <div className="flex-1 pt-32">
        <div className="container max-w-6xl mx-auto px-4 py-12">
          <AnimatedHero
            title="SEO Services"
            subtitle="Dominate search results and drive organic traffic to your website"
          />

          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Why SEO Matters</h2>
                  <p className="text-gray-700 mb-4">
                    In today's digital landscape, SEO is more critical than ever. It's the key to unlocking sustainable
                    growth and establishing a strong online presence.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Our SEO services are designed to help you achieve top rankings, increase organic traffic, and
                    convert visitors into loyal customers.
                  </p>
                  <CTAButton className="cta-button">Get a Free SEO Audit</CTAButton>
                </div>
                <div>
                  <AnimatedImage
                    src="/placeholder.svg?height=300&width=500&text=SEO+Strategy"
                    alt="SEO Strategy"
                    width={500}
                    height={300}
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-8">Our SEO Approach</h2>
              <FeatureCardsCascade
                cards={[
                  {
                    title: "Keyword Research",
                    description:
                      "Comprehensive keyword analysis to identify the most valuable search terms for your business.",
                  },
                  {
                    title: "On-Page Optimization",
                    description:
                      "Optimize your website content, meta tags, and structure for better search engine visibility.",
                  },
                  {
                    title: "Link Building",
                    description:
                      "Strategic link building campaigns to improve your domain authority and search rankings.",
                  },
                ]}
              />
            </div>
          </section>

          <section className="py-12">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
              <p className="text-gray-700 mb-8">
                Contact us today to learn more about our SEO services and how we can help you achieve your business
                goals.
              </p>
              <CTAButton className="cta-button">Request a Consultation</CTAButton>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
