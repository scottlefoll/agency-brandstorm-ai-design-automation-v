import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { CTAButton } from "@/components/cta-button"
import type { Metadata } from "next"
import { ServiceImageAnimation } from "@/components/service-image-animation"

export const metadata: Metadata = {
  title: "Reputation Management - Brandstorm AI",
  description:
    "Protect and enhance your brand's online reputation with our comprehensive reputation management services.",
}

export default function ReputationManagementPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <ServiceImageAnimation />
      <div className="flex-1 bg-gray-50 pt-32">
        <div className="container max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-purple-800 mb-4 hero-title">Reputation Management</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto hero-subtitle">
              Build, protect, and enhance your brand's online reputation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="hero-description">
              <h2 className="text-2xl font-bold text-purple-700 mb-4">Your Reputation Is Your Most Valuable Asset</h2>
              <p className="text-lg mb-6">
                In today's digital world, your online reputation can make or break your business. Potential customers
                research your brand online before making purchasing decisions, and what they find significantly impacts
                their perception and trust. Our reputation management services help you take control of your online
                narrative, ensuring that when people search for your business, they find positive, accurate information
                that builds confidence in your brand. We implement proactive strategies to build a strong reputation
                while addressing any existing negative content that may be harming your business.
              </p>
              <p className="text-lg mb-6">
                Our comprehensive approach to reputation management combines monitoring, content creation, review
                management, and strategic outreach. We begin with a thorough audit of your current online reputation,
                identifying strengths to leverage and areas that need improvement. Our team monitors mentions of your
                brand across the web, including review sites, social media, news outlets, and forums, allowing us to
                respond quickly to any potential issues. We develop positive content that showcases your expertise and
                values, helping it rank prominently in search results. Additionally, we implement strategies to generate
                positive reviews while professionally addressing any negative feedback. The result is a strong,
                resilient online reputation that builds trust with your audience and supports your business growth.
              </p>
              <CTAButton source="Reputation Management Page" className="mt-4">
                Protect Your Brand Reputation
              </CTAButton>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Services10-Reputation-nTOqWZQJWSh9LTwWAZnBseyzrGyeEJ.webp"
                alt="Shield with green checkmark representing reputation protection and brand trust"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-contain service-image"
              />
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">Our Reputation Management Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center feature-card">
                <div className="bg-purple-100 rounded-full p-4 inline-flex mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-purple-700"
                  >
                    <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Reputation Monitoring</h3>
                <p>
                  Continuous monitoring of your brand mentions across the web, allowing for quick response to potential
                  reputation threats.
                </p>
              </div>
              <div className="text-center feature-card">
                <div className="bg-purple-100 rounded-full p-4 inline-flex mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-purple-700"
                  >
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Content Strategy</h3>
                <p>
                  Development of positive, authoritative content that ranks well in search results and shapes the
                  narrative around your brand.
                </p>
              </div>
              <div className="text-center feature-card">
                <div className="bg-purple-100 rounded-full p-4 inline-flex mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-purple-700"
                  >
                    <path d="M17 14v6m-3-3h6M6 9V3m3 3H3M6 21v-6m3 3H3M21 9V3m-3 3h6"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Crisis Management</h3>
                <p>
                  Strategic response planning and execution to address negative publicity or online criticism with
                  professionalism and transparency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
