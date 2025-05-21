import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { CTAButton } from "@/components/cta-button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Review Management - Brandstorm AI",
  description: "Generate, monitor, and leverage customer reviews to build trust and improve your business reputation.",
}

export default function ReviewManagementPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <div className="flex-1 bg-gray-50 pt-32">
        <div className="container max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-purple-800 mb-4">Review Management</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Harness the power of customer feedback to grow your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1 flex justify-center">
              <Image
                src="/placeholder-99mk2.png"
                alt="Review management dashboard showing positive customer feedback"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-contain"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-bold text-purple-700 mb-4">Turn Customer Feedback Into Growth</h2>
              <p className="text-lg mb-6">
                Customer reviews have become one of the most influential factors in purchasing decisions. Studies show
                that 93% of consumers say online reviews impact their buying choices, and 91% trust online reviews as
                much as personal recommendations. Our review management services help you harness this powerful form of
                social proof to build trust, improve your online reputation, and drive more business. We implement
                strategic systems to generate a steady stream of positive reviews while providing tools to monitor,
                respond to, and leverage customer feedback across all major review platforms.
              </p>
              <p className="text-lg mb-6">
                Our comprehensive approach to review management goes beyond simply collecting reviews. We develop
                customized strategies to encourage satisfied customers to share their experiences, making the review
                process as simple and frictionless as possible. Our team monitors reviews across all relevant platforms,
                providing professional response templates and guidance to ensure every review—positive or
                negative—receives an appropriate, timely response. We also help you leverage your best reviews in your
                marketing materials, website, and social media to maximize their impact. Additionally, we analyze review
                data to identify trends and insights that can help improve your products, services, and customer
                experience, turning feedback into actionable business intelligence.
              </p>
              <CTAButton source="Review Management Page" className="mt-4">
                Boost Your Online Reviews
              </CTAButton>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">Our Review Management Approach</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
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
                    <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
                    <path d="M10 2c1 .5 2 2 2 5"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Review Generation</h3>
                <p>
                  Strategic systems and campaigns to encourage satisfied customers to leave positive reviews on your
                  most important platforms.
                </p>
              </div>
              <div className="text-center">
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
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Response Management</h3>
                <p>
                  Professional, timely responses to all reviews that demonstrate your commitment to customer
                  satisfaction and service excellence.
                </p>
              </div>
              <div className="text-center">
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
                <h3 className="font-bold text-lg mb-2">Review Analytics</h3>
                <p>
                  Comprehensive analysis of review data to identify trends, improvement opportunities, and competitive
                  insights for your business.
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
