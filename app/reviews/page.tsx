import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { TestimonialGrid } from "@/components/testimonial-grid"
import { CTAButton } from "@/components/cta-button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Reviews - Brandstorm AI",
  description: "See what our clients are saying about our services and results.",
}

export default function ReviewsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50">
      <NavBar />
      <div className="flex-1 py-16 pt-36">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mb-8 text-center">Client Success Stories</h1>

          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-lg text-gray-700 mb-6">
              At Brandstorm AI, an Umbrella Local agency, we take pride in delivering exceptional results for our
              clients. Our agency has helped businesses across various industries improve their online presence,
              increase customer engagement, and drive revenue growth through our comprehensive digital marketing
              solutions.
            </p>

            <p className="text-lg text-gray-700 mb-6">
              Don't just take our word for it—hear directly from our clients about their experiences working with
              Brandstorm AI. These testimonials reflect our commitment to excellence, transparency, and delivering
              measurable results that help businesses thrive in today's competitive digital landscape.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">What Our Clients Are Saying</h2>

            <TestimonialGrid className="mb-8" />
          </div>

          <div className="text-center">
            <p className="text-xl text-gray-700 mb-4">Ready to experience these results for your business?</p>
            <CTAButton
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200"
              source="Reviews Page - Get Started Today"
            >
              Get Started Today
            </CTAButton>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
