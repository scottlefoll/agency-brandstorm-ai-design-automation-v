import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { CTAButton } from "@/components/cta-button"
import type { Metadata } from "next"
import { ServiceImageAnimation } from "@/components/service-image-animation"

export const metadata: Metadata = {
  title: "SEO - Brandstorm AI",
  description:
    "Climb the search engine rankings with our comprehensive SEO strategies tailored to your business goals.",
}

export default function SEOPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50">
      <NavBar />
      <ServiceImageAnimation />
      <div className="flex-1 pt-32">
        <div className="container max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-purple-800 mb-4 hero-title">Search Engine Optimization</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto hero-subtitle">
              Drive sustainable organic traffic that converts into customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="hero-description">
              <h2 className="text-2xl font-bold text-purple-700 mb-4">Climb the Rankings, Grow Your Business</h2>
              <p className="text-lg mb-6">
                Search Engine Optimization (SEO) remains one of the most powerful digital marketing strategies,
                delivering sustainable, long-term results that continue to generate returns long after the initial
                investment. Our comprehensive SEO services help your business achieve higher rankings in search engine
                results for the keywords and phrases your potential customers are using. Unlike paid advertising that
                stops delivering results when you stop paying, SEO builds a foundation of organic visibility that
                continues to grow over time. By improving your search engine rankings, we help you drive more qualified
                traffic to your website, increase brand awareness, and generate leads and sales at a lower cost per
                acquisition than many other marketing channels.
              </p>
              <p className="text-lg mb-6">
                Our approach to SEO combines technical expertise, content strategy, and off-page optimization to deliver
                results that align with your business goals. We begin with a comprehensive audit of your website and
                current search presence, identifying opportunities and challenges. Our team then develops a customized
                SEO strategy that addresses technical issues, on-page optimization, content development, and link
                building. We focus on creating a seamless user experience that satisfies both search engines and human
                visitors. With transparent reporting and regular strategy refinements based on performance data, we
                ensure your SEO campaign continuously improves and adapts to changes in search algorithms and market
                conditions. Our goal is not just to improve your rankings, but to drive meaningful business results
                through targeted organic traffic.
              </p>
              <CTAButton
                source="SEO Page"
                className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 mt-4"
              >
                Boost Your Search Rankings
              </CTAButton>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Services14-SEO-BI7hz6hotsvOS5GYXu5ROtpcJQDg7s.webp"
                alt="Rocket launching through colorful data charts representing SEO growth and website optimization"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-contain service-image"
              />
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">Our SEO Services</h2>
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
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">On-Page SEO</h3>
                <p>
                  Comprehensive optimization of your website content, meta data, and structure to improve relevance and
                  rankings for target keywords.
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
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Link Building</h3>
                <p>
                  Strategic acquisition of high-quality backlinks from authoritative websites to boost your domain
                  authority and search rankings.
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
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Technical SEO</h3>
                <p>
                  Optimization of your website's technical elements including site speed, mobile-friendliness, and
                  crawlability to improve search performance.
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
