import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import Image from "next/image"
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
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-purple-800 mb-4">Google Business Profile</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dominate local search and attract more nearby customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1 flex justify-center">
              <Image
                src="/google-business-profile.png"
                alt="Optimized Google Business Profile with customer reviews"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-bold text-purple-700 mb-4">Your Digital Storefront</h2>
              <p className="text-lg mb-6">
                Your Google Business Profile (formerly Google My Business) is often the first impression potential
                customers have of your business. When local customers search for products or services you offer, a
                well-optimized Google Business Profile can be the difference between gaining a new customer or losing
                them to a competitor. Our Google Business Profile optimization services ensure your business stands out
                in local search results, Google Maps, and the local pack, driving more foot traffic, phone calls, and
                website visits from high-intent local customers who are actively looking for what you offer.
              </p>
              <p className="text-lg mb-6">
                Our comprehensive approach to Google Business Profile management goes beyond basic setup. We implement
                advanced optimization strategies based on local SEO best practices and Google's latest algorithms. Our
                team ensures your profile is complete with accurate business information, compelling descriptions,
                high-quality photos, and appropriate category selections. We also implement a review generation strategy
                to build social proof, respond professionally to customer reviews, and regularly post updates to keep
                your profile active and engaging. With ongoing monitoring and performance analysis, we continuously
                refine your profile to maximize visibility and conversion rates.
              </p>
              <CTAButton
                source="Google Business Profile Page"
                className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 mt-4"
              >
                Optimize Your Google Presence
              </CTAButton>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">Key Optimization Strategies</h2>
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
                <h3 className="font-bold text-lg mb-2">Profile Optimization</h3>
                <p>
                  Complete profile setup with keyword-rich descriptions, accurate business information, and strategic
                  category selection to maximize visibility.
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
                <h3 className="font-bold text-lg mb-2">Review Management</h3>
                <p>
                  Strategic review generation and professional response management to build trust and improve your local
                  search ranking.
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
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Visual Content</h3>
                <p>
                  High-quality photos and videos that showcase your business, products, and services to attract
                  attention and drive customer engagement.
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
