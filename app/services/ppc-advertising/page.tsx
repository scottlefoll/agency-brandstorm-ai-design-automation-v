import { NavBar } from "@/components/nav-bar"
import Image from "next/image"
import { CTAButton } from "@/components/cta-button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "PPC Advertising - Brandstorm AI",
  description:
    "Maximize your ROI with targeted pay-per-click campaigns that deliver immediate results and qualified leads.",
}

export default function PPCAdvertisingPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <div className="flex-1 bg-gray-50 pt-32">
        <div className="container max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-purple-800 mb-4">PPC Advertising</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Targeted pay-per-click campaigns that deliver immediate results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1 flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600&query=PPC advertising dashboard with campaign performance metrics and ROI"
                alt="PPC advertising campaign dashboard with performance metrics"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
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
                <h3 className="font-bold text-lg mb-2">Search Advertising</h3>
                <p>
                  Strategic keyword-based campaigns that capture high-intent traffic from users actively searching for
                  your products or services.
                </p>
              </div>
              <div className="text-center">\
