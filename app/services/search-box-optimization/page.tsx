import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { CTAButton } from "@/components/cta-button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Search Box Optimization - Brandstorm AI",
  description: "Be the first business that appears when customers start typing in Google's search box.",
}

export default function SearchBoxOptimizationPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50">
      <NavBar />
      <div className="flex-1 pt-32">
        <div className="container max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-purple-800 mb-4">Search Box Optimization</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Capture high-intent customers before they finish typing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1 flex justify-center">
              <div className="bg-purple-700 p-8 rounded-lg shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Services13-SBO-JotyfH9zgLHct5xx3UgQQ7Mw7dBOsX.webp"
                  alt="Laptop showing Google search interface with autocomplete suggestions and customer attention messaging"
                  width={600}
                  height={400}
                  className="rounded-lg object-contain"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-bold text-purple-700 mb-4">Win the Race for Customer Attention</h2>
              <p className="text-lg mb-6">
                Search Box Optimization is an advanced strategy that focuses on influencing the autocomplete suggestions
                that appear as users type in search engines like Google. These suggestions have a powerful impact on
                search behavior, as many users select from these options rather than completing their own search query.
                By appearing in these autocomplete suggestions, your business can capture high-intent customers at the
                earliest stage of their search process, giving you a significant advantage over competitors. Our Search
                Box Optimization services help your business appear in these valuable suggestions for relevant keywords
                and phrases, driving more qualified traffic to your website and increasing your visibility in a way that
                few competitors are leveraging.
              </p>
              <p className="text-lg mb-6">
                Our approach to Search Box Optimization combines technical expertise with strategic content development
                and user behavior analysis. We begin by researching the current autocomplete landscape for your industry
                and identifying opportunities where your business can appear in suggestions. Our team then implements a
                multi-faceted strategy that includes targeted search volume generation, branded search campaigns,
                strategic content creation, and technical optimization. We monitor the results continuously, adjusting
                our approach as needed to ensure your business maintains its presence in these valuable autocomplete
                suggestions. By capturing potential customers at this critical early stage of their search journey, you
                can significantly increase your visibility, traffic, and conversions.
              </p>
              <CTAButton
                source="Search Box Optimization Page"
                className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 mt-4"
              >
                Dominate Search Suggestions
              </CTAButton>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">Our Optimization Strategies</h2>
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
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Keyword Research</h3>
                <p>
                  Comprehensive analysis to identify the most valuable search terms where your business should appear in
                  autocomplete suggestions.
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
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Content Strategy</h3>
                <p>
                  Strategic content development that reinforces the search terms and phrases you want to appear for in
                  autocomplete suggestions.
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
                <h3 className="font-bold text-lg mb-2">Performance Tracking</h3>
                <p>
                  Continuous monitoring and reporting on your presence in autocomplete suggestions and the resulting
                  traffic and conversions.
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
