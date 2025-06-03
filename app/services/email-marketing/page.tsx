import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import Image from "next/image"
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
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-purple-800 mb-4">Email Marketing</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Personalized email campaigns that nurture relationships and drive revenue
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-bold text-purple-700 mb-4">The Power of Direct Communication</h2>
              <p className="text-lg mb-6">
                Despite the rise of numerous digital marketing channels, email remains one of the most effective ways to
                reach your audience directly. Our email marketing services leverage this powerful channel to build
                meaningful relationships with your customers, nurture leads, and drive conversions. We create
                personalized email campaigns that deliver the right message to the right person at the right time,
                resulting in higher engagement rates and a stronger return on investment. From welcome sequences and
                promotional campaigns to abandoned cart recovery and customer retention strategies, our email marketing
                solutions are designed to support your business goals at every stage of the customer journey.
              </p>
              <p className="text-lg mb-6">
                Our approach to email marketing combines creative design, compelling copywriting, and data-driven
                strategy. We begin by understanding your audience segments and creating targeted content that resonates
                with their specific needs and interests. Our team designs visually appealing, mobile-responsive email
                templates that reflect your brand identity while optimizing for conversions. We implement advanced
                segmentation, personalization, and automation to ensure your messages are relevant and timely. Most
                importantly, we continuously analyze campaign performance, conduct A/B testing, and refine our approach
                based on real data, ensuring your email marketing program becomes more effective over time.
              </p>
              <CTAButton
                source="Email Marketing Page"
                className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 mt-4"
              >
                Launch Effective Email Campaigns
              </CTAButton>
            </div>
            <div className="flex justify-center">
              <Image
                src="/email-marketing-analytics-responsive.png"
                alt="Email marketing campaign dashboard with performance metrics"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">Our Email Marketing Services</h2>
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
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Campaign Creation</h3>
                <p>
                  Strategic email campaigns with compelling copy, eye-catching design, and clear calls-to-action that
                  drive engagement and conversions.
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
                    <path d="M17 6.1H3"></path>
                    <path d="M21 12.1H3"></path>
                    <path d="M15.1 18H3"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">List Segmentation</h3>
                <p>
                  Advanced audience segmentation that ensures your messages reach the right people with content tailored
                  to their specific interests and behaviors.
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
                    <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                    <circle cx="12" cy="12" r="10"></circle>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Personalization</h3>
                <p>
                  Dynamic content and personalization strategies that create relevant, one-to-one communications that
                  resonate with each recipient.
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
