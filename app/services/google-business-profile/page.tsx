import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { AnimatedHero } from "@/components/animated-hero"
import { AnimatedImage } from "@/components/animated-image"
import { FeatureCardsCascade } from "@/components/feature-cards-cascade"
import { CTAButton } from "@/components/cta-button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Google Business Profile - Brandstorm AI",
  description:
    "Maximize your local visibility with a fully optimized Google Business Profile that attracts more customers.",
}

export default function GoogleBusinessProfilePage() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50">
      <NavBar />
      <div className="flex-1 pt-32">
        <div className="container max-w-6xl mx-auto px-4 py-12">
          <AnimatedHero
            title="Google Business Profile"
            subtitle="Optimize your local presence and attract more customers"
          />

          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-semibold mb-4">Why Google Business Profile?</h2>
                  <p className="text-gray-700 mb-4">
                    A Google Business Profile helps you connect with customers across Google Search and Maps. Stand out
                    with a free Business Profile.
                  </p>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Increase visibility in local search results</li>
                    <li>Attract more customers to your business</li>
                    <li>Showcase your products and services</li>
                    <li>Share updates and promotions</li>
                    <li>Respond to customer reviews</li>
                  </ul>
                  <CTAButton className="cta-button mt-4">Get Started</CTAButton>
                </div>
                <div>
                  <AnimatedImage
                    src="/google-business-profile.png"
                    alt="Google Business Profile Dashboard"
                    width={500}
                    height={300}
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-semibold text-center mb-8">Key Features</h2>
              <FeatureCardsCascade
                cards={[
                  {
                    title: "Profile Optimization",
                    description:
                      "Complete profile setup with keyword-rich descriptions, accurate business information, and strategic category selection to maximize visibility.",
                  },
                  {
                    title: "Review Management",
                    description:
                      "Strategic review generation and professional response management to build trust and improve your local search ranking.",
                  },
                  {
                    title: "Visual Content",
                    description:
                      "High-quality photos and videos that showcase your business, products, and services to attract attention and drive customer engagement.",
                  },
                ]}
                className="max-w-6xl mx-auto"
              />
            </div>
          </section>

          <section className="py-12">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-semibold mb-4">Ready to get started?</h2>
              <p className="text-gray-700 mb-8">
                Let us help you optimize your Google Business Profile and attract more customers.
              </p>
              <CTAButton className="cta-button">Contact Us</CTAButton>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
