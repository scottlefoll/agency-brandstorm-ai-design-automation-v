import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { CTAButton } from "@/components/cta-button"
import type { Metadata } from "next"
import { ServiceImageAnimation } from "@/components/service-image-animation"

export const metadata: Metadata = {
  title: "Ad Management - Brandstorm AI",
  description: "Maximize your advertising ROI with our comprehensive ad management services across multiple platforms.",
}

export default function AdManagementPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50">
      <NavBar />
      <ServiceImageAnimation />
      <div className="flex-1 pt-32">
        <div className="container max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-purple-800 mb-4 hero-title">Ad Management</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto hero-subtitle">
              Strategic advertising management that delivers measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="hero-description">
              <h2 className="text-2xl font-bold text-purple-700 mb-4">Maximize Your Advertising ROI</h2>
              <p className="text-lg mb-6">
                In today's competitive digital landscape, effective ad management is crucial for businesses looking to
                maximize their return on investment. Our comprehensive ad management services take the complexity out of
                digital advertising, allowing you to focus on what you do best—running your business. We handle
                everything from campaign strategy and creative development to ongoing optimization and performance
                reporting.
              </p>
              <p className="text-lg mb-6">
                Our team of certified advertising specialists has extensive experience across all major platforms,
                including Google Ads, Facebook, Instagram, LinkedIn, and more. We use data-driven strategies to ensure
                your ads are shown to the right audience at the right time, maximizing conversions while minimizing
                wasted ad spend. With continuous monitoring and optimization, we ensure your campaigns consistently
                deliver results that impact your bottom line.
              </p>
              <CTAButton
                source="Ad Management Page"
                className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 mt-4"
              >
                Get Started With Ad Management
              </CTAButton>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/services/ad-management.webp"
                alt="Ad management dashboard showing campaign performance across multiple platforms"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-contain service-image"
              />
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">Our Ad Management Approach</h2>
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
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Strategic Planning</h3>
                <p>
                  We develop customized advertising strategies aligned with your business goals, target audience, and
                  budget constraints.
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
                    <path d="m12 14 4-4"></path>
                    <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Continuous Optimization</h3>
                <p>
                  Our team constantly monitors campaign performance, making data-driven adjustments to improve results
                  and reduce costs.
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
                <h3 className="font-bold text-lg mb-2">Transparent Reporting</h3>
                <p>
                  Receive clear, comprehensive reports that demonstrate the real impact of your advertising campaigns on
                  your business.
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
