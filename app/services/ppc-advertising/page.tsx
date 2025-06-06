import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { AnimatedHero } from "@/components/animated-hero"
import { AnimatedImage } from "@/components/animated-image"
import { FeatureCardsCascade } from "@/components/feature-cards-cascade"
import { CTAButton } from "@/components/cta-button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "PPC Advertising - Brandstorm AI",
  description:
    "Maximize your ROI with targeted pay-per-click campaigns that deliver immediate results and qualified leads.",
}

export default function PPCAdvertisingPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50">
      <NavBar />
      <div className="flex-1 pt-32">
        <div className="container max-w-6xl mx-auto px-4 py-12">
          <AnimatedHero
            title="PPC Advertising"
            subtitle="Drive immediate results with strategic pay-per-click campaigns"
          />

          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-semibold mb-4">Maximize Your ROI with Expert PPC Management</h2>
                  <p className="text-gray-700 mb-6">
                    Our data-driven approach ensures your PPC campaigns are optimized for maximum return on investment.
                    We handle everything from keyword research to ad copywriting and bid management.
                  </p>
                  <ul className="list-none pl-0 mb-6">
                    <li className="flex items-center mb-2">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Targeted Keyword Research
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Compelling Ad Copywriting
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Continuous Monitoring & Optimization
                    </li>
                  </ul>
                  <CTAButton className="cta-button">Get a Free PPC Audit</CTAButton>
                </div>
                <div>
                  <AnimatedImage
                    src="/ppc-dashboard.png"
                    alt="PPC Dashboard"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-semibold text-center mb-8">Why Choose Our PPC Services?</h2>
              <FeatureCardsCascade
                cards={[
                  {
                    title: "Expert Campaign Management",
                    description:
                      "Our certified PPC specialists manage your campaigns with precision and expertise to maximize your ROI.",
                  },
                  {
                    title: "Advanced Targeting",
                    description:
                      "Reach your ideal customers with sophisticated targeting options across all major advertising platforms.",
                  },
                  {
                    title: "Transparent Reporting",
                    description:
                      "Get detailed insights into your campaign performance with clear, actionable reporting and analytics.",
                  },
                ]}
              />
            </div>
          </section>

          <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-semibold mb-8">Ready to Transform Your Online Advertising?</h2>
              <p className="text-gray-700 mb-8">
                Contact us today to learn how our PPC services can drive more qualified leads and sales to your
                business.
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
