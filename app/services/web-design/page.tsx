import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { CTAButton } from "@/components/cta-button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Web Design - Brandstorm AI",
  description:
    "Custom-designed websites that convert visitors into customers with strategic layouts and compelling content.",
}

export default function WebDesignPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <div className="flex-1 bg-gray-50 pt-32">
        <div className="container max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-purple-800 mb-4">Web Design</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stunning, conversion-focused websites that drive business growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1 flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600&query=responsive web design mockup on multiple devices"
                alt="Responsive web design mockup on multiple devices"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-contain"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-bold text-purple-700 mb-4">Your Website Is Your Digital Storefront</h2>
              <p className="text-lg mb-6">
                Your website is often the first impression potential customers have of your business, and it needs to
                make an impact. Our web design services focus on creating stunning, functional websites that not only
                look great but are strategically designed to convert visitors into customers. We combine aesthetic
                appeal with user experience best practices, ensuring your site is both visually impressive and
                intuitively navigable. Our designs are built with your specific business goals in mind, whether that's
                generating leads, selling products, or providing information. The result is a website that serves as a
                powerful marketing tool, working 24/7 to represent your brand and drive business results.
              </p>
              <p className="text-lg mb-6">
                Our comprehensive web design process begins with understanding your business, target audience, and
                objectives. We conduct thorough research to inform our design decisions, ensuring the final product
                resonates with your ideal customers. Our team creates custom designs that reflect your brand identity
                while incorporating conversion-focused elements that guide visitors toward desired actions. We build
                fully responsive websites that provide an optimal experience across all devices, from desktop computers
                to smartphones. With a focus on performance, accessibility, and search engine optimization, we ensure
                your website not only looks great but functions flawlessly and ranks well in search results. After
                launch, we provide ongoing support and maintenance to keep your site secure, up-to-date, and performing
                at its best.
              </p>
              <CTAButton source="Web Design Page" className="mt-4">
                Create Your Dream Website
              </CTAButton>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">Our Design Approach</h2>
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
                <h3 className="font-bold text-lg mb-2">Custom Design</h3>
                <p>
                  Unique, tailored designs that reflect your brand identity and stand out from template-based websites
                  that look like everyone else's.
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
                    <path d="M17 8h1a4 4 0 1 1 0 8h-1"></path>
                    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path>
                    <line x1="6" y1="2" x2="6" y2="4"></line>
                    <line x1="10" y1="2" x2="10" y2="4"></line>
                    <line x1="14" y1="2" x2="14" y2="4"></line>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Conversion-Focused</h3>
                <p>
                  Strategic layouts and user flows designed to guide visitors toward specific actions that support your
                  business goals.
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
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Responsive Design</h3>
                <p>
                  Fully responsive websites that provide an optimal viewing and interaction experience across all
                  devices and screen sizes.
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
