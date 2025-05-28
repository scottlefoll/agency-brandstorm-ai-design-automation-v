import { NavBar } from "@/components/nav-bar"
import Image from "next/image"
import { CTAButton } from "@/components/cta-button"
import type { Metadata } from "next"
import { ServiceImageAnimation } from "@/components/service-image-animation"

export const metadata: Metadata = {
  title: "PPC Advertising - Brandstorm AI",
  description:
    "Maximize your ROI with targeted pay-per-click campaigns that deliver immediate results and qualified leads.",
}

export default function PPCAdvertisingPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <ServiceImageAnimation />
      <div className="flex-1 bg-gray-50 pt-32">
        <div className="container max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-purple-800 mb-4 hero-title">PPC Advertising</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto hero-subtitle">
              Targeted pay-per-click campaigns that deliver immediate results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1 flex justify-center">
              <Image
                src="/ppc-dashboard.png"
                alt="PPC advertising campaign dashboard with performance metrics"
                width={600}
                height={400}
                className="rounded-lg shadow-lg service-image"
              />
            </div>
            <div className="order-1 md:order-2 hero-description">
              <h2 className="text-2xl font-bold text-purple-700 mb-4">Immediate Visibility, Measurable Results</h2>
              <p className="text-lg mb-6">
                Pay-Per-Click (PPC) advertising offers immediate visibility and traffic for your business, allowing you
                to reach potential customers at the exact moment they're searching for your products or services. Unlike
                organic methods that take time to build momentum, PPC delivers instant results with the flexibility to
                adjust campaigns in real-time based on performance. Our PPC advertising services focus on creating
                highly targeted campaigns across platforms like Google Ads, Microsoft Advertising, and social media
                channels to maximize your return on investment. We develop strategies that put your ads in front of the
                right audience with compelling messaging that drives clicks, conversions, and revenue.
              </p>
              <p className="text-lg mb-6">
                Our approach to PPC is data-driven and results-focused. We begin with comprehensive keyword research and
                competitor analysis to identify the most valuable opportunities for your business. Our team creates
                compelling ad copy and landing pages designed to maximize conversion rates. We implement advanced
                targeting options including demographics, interests, behaviors, and remarketing to ensure your budget is
                spent efficiently. Most importantly, we provide transparent reporting and continuous optimization,
                constantly testing and refining campaigns to improve performance over time. With our expertise in bid
                management, ad scheduling, and conversion tracking, we ensure every dollar of your advertising budget
                works as hard as possible.
              </p>
              <CTAButton source="PPC Advertising Page" className="mt-4">
                Launch Your PPC Campaign
              </CTAButton>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">Our PPC Services</h2>
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
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Search Advertising</h3>
                <p>
                  Strategic keyword-based campaigns that capture high-intent traffic from users actively searching for
                  your products or services.
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
                    <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
                    <path d="M10 2c1 .5 2 2 2 5"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Display Advertising</h3>
                <p>
                  Visual ad campaigns that build brand awareness and retarget potential customers across thousands of
                  websites in the Google Display Network.
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
                    <path d="M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7H2Z"></path>
                    <path d="M6 8v4"></path>
                    <path d="M18 8v4"></path>
                    <path d="M12 8v6"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Social Media Advertising</h3>
                <p>
                  Targeted campaigns on platforms like Facebook, Instagram, and LinkedIn that leverage detailed audience
                  data to reach your ideal customers.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
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
                    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
                    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Remarketing</h3>
                <p>
                  Strategic campaigns that re-engage visitors who have previously interacted with your website,
                  increasing conversion rates and ROI.
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
                    <path d="M12 2v8"></path>
                    <path d="m4.93 10.93 1.41 1.41"></path>
                    <path d="M2 18h2"></path>
                    <path d="M20 18h2"></path>
                    <path d="m19.07 10.93-1.41 1.41"></path>
                    <path d="M22 22H2"></path>
                    <path d="m16 6-4 4-4-4"></path>
                    <path d="M16 18a4 4 0 0 0-8 0"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Shopping Ads</h3>
                <p>
                  Product-focused campaigns that showcase your inventory directly in search results, complete with
                  images, prices, and business information.
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
                    <path d="M3 3v18h18"></path>
                    <path d="m19 9-5 5-4-4-3 3"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Performance Tracking</h3>
                <p>
                  Comprehensive analytics and reporting that measure campaign performance, track conversions, and
                  provide actionable insights for optimization.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">Why Choose Our PPC Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-3 flex items-center">
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
                    className="h-6 w-6 text-green-500 mr-2"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Data-Driven Strategy
                </h3>
                <p className="ml-8">
                  We base every decision on comprehensive data analysis, ensuring your campaigns target the right
                  audience with the right message at the right time.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3 flex items-center">
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
                    className="h-6 w-6 text-green-500 mr-2"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Transparent Reporting
                </h3>
                <p className="ml-8">
                  We provide clear, detailed reports that show exactly how your campaigns are performing and the return
                  on your investment.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3 flex items-center">
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
                    className="h-6 w-6 text-green-500 mr-2"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Continuous Optimization
                </h3>
                <p className="ml-8">
                  We never set and forget. Our team constantly monitors, tests, and refines your campaigns to improve
                  performance and maximize ROI.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3 flex items-center">
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
                    className="h-6 w-6 text-green-500 mr-2"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Cross-Platform Expertise
                </h3>
                <p className="ml-8">
                  We have deep experience across all major PPC platforms, allowing us to create integrated campaigns
                  that reach your audience wherever they are.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-purple-700 mb-6">Ready to Boost Your Business with PPC?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Let's create a targeted PPC strategy that drives qualified traffic, increases conversions, and maximizes
              your return on investment.
            </p>
            <CTAButton source="PPC Advertising Page Bottom" className="mx-auto">
              Get Started Today
            </CTAButton>
          </div>
        </div>
      </div>
    </main>
  )
}
