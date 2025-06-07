import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { CTAButton } from "@/components/cta-button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Google Maps Ranking - Brandstorm AI",
  description: "Dominate the local map pack and be the first business customers see when searching in your area.",
}

export default function GoogleMapsRankingPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50">
      <NavBar />
      <div className="flex-1 pt-32">
        <div className="container max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-purple-800 mb-4">Google Maps Ranking</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be the first business customers see in local map results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-bold text-purple-700 mb-4">Dominate Local Map Results</h2>
              <p className="text-lg mb-6">
                When potential customers search for local businesses, the Google Maps results (often called the "local
                pack" or "map pack") are among the most prominent and clickable elements on the search results page.
                Ranking in the top positions of these map results can dramatically increase your visibility, foot
                traffic, and revenue. Our Google Maps Ranking service is designed to help your business claim these
                coveted top positions, ensuring you're the first choice when local customers are searching for products
                or services you offer. We implement proven strategies that align with Google's local ranking factors to
                boost your visibility in the areas that matter most to your business.
              </p>
              <p className="text-lg mb-6">
                Our approach to Google Maps ranking combines technical optimization, content strategy, and reputation
                management. We start with a comprehensive audit of your current local presence, identifying
                opportunities for improvement and developing a customized strategy. Our team ensures your Google
                Business Profile is fully optimized with accurate NAP (Name, Address, Phone) information, relevant
                categories, and compelling descriptions. We build consistent citations across the web, develop
                location-specific content, and implement a review generation strategy to build the signals Google looks
                for when determining map rankings. With ongoing monitoring and adjustments, we continuously work to
                improve and maintain your position in the local map pack.
              </p>
              <CTAButton
                source="Google Maps Ranking Page"
                className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 mt-4"
              >
                Boost Your Local Visibility
              </CTAButton>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Services8-GoogleMaps-zq0nbJeKnkqTX7kSdes8JvgV6WjgZM.webp"
                alt="3D Google Maps pin over miniature city showing local business visibility and map positioning"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">Our Ranking Strategies</h2>
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
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Local Citation Building</h3>
                <p>
                  Strategic creation of consistent business listings across authoritative directories to strengthen your
                  local search presence.
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
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Proximity Optimization</h3>
                <p>
                  Advanced techniques to optimize your business for location-based searches in your target service areas
                  and neighborhoods.
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
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Review Strategy</h3>
                <p>
                  Comprehensive review generation and management to build the social proof Google values for local
                  ranking factors.
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
