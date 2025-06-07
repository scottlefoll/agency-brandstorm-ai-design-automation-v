import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { CTAButton } from "@/components/cta-button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Analytics & Reporting - Brandstorm AI",
  description:
    "Gain actionable insights from comprehensive data analysis and reporting to optimize your marketing strategy.",
}

export default function AnalyticsReportingPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50">
      <NavBar />
      <div className="flex-1 pt-32">
        <div className="container max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-purple-800 mb-4">Analytics & Reporting</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform data into actionable business intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1 flex justify-center">
              <Image
                src="/images/services/analytics-reporting.webp"
                alt="Comprehensive analytics dashboard with business metrics and data visualization"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-bold text-purple-700 mb-4">Data-Driven Decision Making</h2>
              <p className="text-lg mb-6">
                In today's digital landscape, businesses generate vast amounts of data across multiple channels and
                platforms. Our Analytics & Reporting services transform this raw data into clear, actionable insights
                that drive strategic decision-making. We go beyond basic metrics to uncover meaningful patterns and
                trends, helping you understand not just what is happening in your business, but why it's happening and
                what you should do about it. Our comprehensive approach integrates data from all your marketing
                channels, customer interactions, and business operations to provide a holistic view of your performance.
              </p>
              <p className="text-lg mb-6">
                Our team of data analysts and visualization experts create custom dashboards and reports tailored to
                your specific business goals and KPIs. We focus on presenting complex data in intuitive, accessible
                formats that make it easy to identify opportunities and challenges. With regular reporting cycles and
                real-time monitoring capabilities, you'll always have your finger on the pulse of your business
                performance. More importantly, our analysts provide context and recommendations with every report,
                ensuring you understand exactly how to leverage the insights to improve your marketing strategy and
                business outcomes.
              </p>
              <CTAButton
                source="Analytics & Reporting Page"
                className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 mt-4"
              >
                Unlock Your Data Potential
              </CTAButton>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">Our Analytics Capabilities</h2>
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
                    <path d="M3 3v18h18"></path>
                    <path d="m19 9-5 5-4-4-3 3"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Performance Tracking</h3>
                <p>
                  Monitor all your marketing channels and campaigns in one place with comprehensive performance metrics
                  and ROI analysis.
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
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Customer Insights</h3>
                <p>
                  Gain deep understanding of your customer behavior, preferences, and journey to optimize your marketing
                  and product strategies.
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
                    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                    <path d="M3 3v5h5"></path>
                    <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
                    <path d="M16 16h5v5"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Predictive Analysis</h3>
                <p>
                  Leverage advanced AI and machine learning to forecast trends, anticipate market changes, and make
                  proactive business decisions.
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
