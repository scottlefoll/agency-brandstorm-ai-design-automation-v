import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { CTAButton } from "@/components/cta-button"
import { ServiceImageAnimation } from "@/components/service-image-animation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SEO Services - Brandstorm AI",
  description:
    "Climb the search engine rankings with our comprehensive SEO strategies tailored to your business goals.",
}

export default function SEOServicesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50">
      <NavBar />
      <ServiceImageAnimation />
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold text-purple-800 mb-4 hero-title">SEO Services</h1>
          <p className="text-xl text-gray-600 mb-8 hero-subtitle">Service page coming soon</p>
          <CTAButton
            source="SEO Services Page"
            className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Get Started Today
          </CTAButton>
        </div>
      </div>
      <Footer />
    </main>
  )
}
