import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { CTAButton } from "@/components/cta-button"
import type { Metadata } from "next"
import { ServiceImageAnimation } from "@/components/service-image-animation"

export const metadata: Metadata = {
  title: "Content Marketing - Brandstorm AI",
  description: "Drive engagement and establish authority with strategic content that converts visitors into customers.",
}

export default function ContentMarketingPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50">
      <NavBar />
      <ServiceImageAnimation />
      <div className="flex-1 pt-32">
        <div className="container max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-purple-800 mb-4 hero-title">Content Marketing</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto hero-subtitle">
              Compelling content that attracts, engages, and converts your ideal audience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="hero-description">
              <h2 className="text-2xl font-bold text-purple-700 mb-4">Content That Drives Results</h2>
              <p className="text-lg mb-6">
                Content marketing is the cornerstone of modern digital strategy, providing value to your audience while
                establishing your brand as an authority in your industry. Our content marketing services focus on
                creating high-quality, strategic content that resonates with your target audience at every stage of the
                buyer's journey. From attention-grabbing blog posts and engaging social media content to comprehensive
                guides and case studies, we develop content that not only attracts visitors but converts them into loyal
                customers.
              </p>
              <p className="text-lg mb-6">
                Our approach to content marketing is data-driven and results-focused. We begin with thorough research to
                understand your audience's needs, pain points, and search behavior. This informs our content strategy,
                ensuring every piece we create serves a specific purpose in your marketing funnel. Our team of
                experienced writers, editors, and strategists work together to produce content that is not only engaging
                and valuable but also optimized for search engines and designed to drive specific business outcomes.
                With consistent measurement and refinement, we continuously improve your content performance over time.
              </p>
              <CTAButton
                source="Content Marketing Page"
                className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 mt-4"
              >
                Start Your Content Strategy
              </CTAButton>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/services/content-marketing.webp"
                alt="Content marketing team collaborating on strategy and content creation"
                width={600}
                height={400}
                className="rounded-lg shadow-lg service-image"
              />
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">Our Content Marketing Services</h2>
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
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Blog Content Creation</h3>
                <p>
                  Engaging, SEO-optimized blog posts that establish your authority, drive organic traffic, and nurture
                  leads through your sales funnel.
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
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Social Media Content</h3>
                <p>
                  Platform-specific content that engages your audience, builds community, and drives traffic to your
                  website and landing pages.
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
                    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
                    <path d="M18 14h-8"></path>
                    <path d="M15 18h-5"></path>
                    <path d="M10 6h8v4h-8V6Z"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Premium Content</h3>
                <p>
                  High-value ebooks, whitepapers, and guides that generate leads, demonstrate expertise, and move
                  prospects through your sales pipeline.
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
