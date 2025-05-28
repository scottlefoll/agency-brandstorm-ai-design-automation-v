import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { CTAButton } from "@/components/cta-button"
import type { Metadata } from "next"
import { ServiceImageAnimation } from "@/components/service-image-animation"

export const metadata: Metadata = {
  title: "Social Media Marketing - Brandstorm AI",
  description:
    "Grow your brand presence and engagement across all major social media platforms with our expert strategies.",
}

export default function SocialMediaMarketingPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50">
      <NavBar />
      <ServiceImageAnimation />
      <div className="flex-1 pt-32">
        <div className="container max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-purple-800 mb-4 hero-title">Social Media Marketing</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto hero-subtitle">
              Drive growth through strategic social media campaigns
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="hero-description">
              <h2 className="text-2xl font-bold text-purple-700 mb-4">Harness the Power of Social Media</h2>
              <p className="text-lg mb-6">
                Social media has transformed from a simple communication channel into a powerful marketing platform that
                can drive brand awareness, engagement, and conversions. Our Social Media Marketing services help you
                leverage these platforms strategically to achieve specific business goals. Unlike basic social media
                management, our marketing approach focuses on developing and executing campaigns designed to generate
                measurable results—whether that's increasing website traffic, generating leads, driving sales, or
                building brand recognition. We combine creative content development with data-driven targeting and
                optimization to ensure your social media marketing efforts deliver a strong return on investment.
              </p>
              <p className="text-lg mb-6">
                Our comprehensive approach to social media marketing begins with understanding your business objectives,
                target audience, and competitive landscape. We develop platform-specific strategies that align with how
                your audience uses each social channel and what types of content perform best on each platform. Our team
                creates compelling campaign assets including graphics, videos, and copy designed to capture attention
                and drive action. We implement advanced targeting capabilities to reach the most valuable audience
                segments, and continuously optimize campaigns based on performance data. With transparent reporting and
                analysis, you'll always understand the impact of your social media marketing investment and how it
                contributes to your broader business goals.
              </p>
              <CTAButton
                source="Social Media Marketing Page"
                className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 mt-4"
              >
                Launch Your Social Media Strategy
              </CTAButton>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Services16-SMMarketing-DMx2mi3ukXNSurJzSeN5EUB37CGosU.webp"
                alt="Network of connected data nodes with spotlight representing strategic social media campaign growth"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-contain service-image"
              />
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">Our Marketing Strategies</h2>
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
                    <path d="M17 18a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12z"></path>
                    <path d="M12 8h.01"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Paid Social Campaigns</h3>
                <p>
                  Strategic advertising campaigns across major social platforms with advanced targeting to reach your
                  ideal customers and drive specific actions.
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
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Influencer Marketing</h3>
                <p>
                  Strategic partnerships with relevant influencers who can authentically promote your brand to their
                  engaged audiences.
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
                    <path d="M3 3v18h18"></path>
                    <path d="m19 9-5 5-4-4-3 3"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Performance Analysis</h3>
                <p>
                  Comprehensive tracking and analysis of campaign performance with actionable insights to continuously
                  improve your social media ROI.
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
