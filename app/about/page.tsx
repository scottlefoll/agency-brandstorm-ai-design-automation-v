import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Brandstorm AI",
  description: "Learn about Brandstorm AI and our mission to help businesses dominate their local markets.",
}

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />

      {/* Hero Section - Significantly increased margin-top to mt-32 (8rem) to ensure no header overlap */}
      <section className="bg-purple-700 py-16 md:py-24 mt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Brandstorm AI</h1>
            <p className="text-xl text-purple-100 mb-8">
              Revolutionizing how local businesses grow through AI-powered marketing solutions
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-800 mb-8 text-center">Our Story</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
              <div className="md:w-1/2">
                <Image
                  src="/images/office-collaboration.webp"
                  alt="Brandstorm AI team collaboration"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-gray-700 mb-4">
                  Founded on the concept of bringing digital success to small businesses, Brandstorm AI emerged from a
                  simple observation: local businesses were struggling to compete in an increasingly digital marketplace
                  dominated by large corporations with massive marketing budgets.
                </p>
                <p className="text-gray-700 mb-4">
                  Our founder saw an opportunity to level the playing field by creating AI-powered marketing solutions
                  specifically designed for local businesses.
                </p>
                <p className="text-gray-700">
                  Today, we've helped over 500 local businesses across the United States transform their digital
                  presence and achieve sustainable growth through our innovative platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-purple-800 mb-6">Our Mission</h2>
                <p className="text-gray-700 mb-4">
                  To empower local businesses with enterprise-level marketing capabilities through accessible, AI-driven
                  solutions that drive real growth and foster community connections.
                </p>
                <p className="text-gray-700">
                  We believe that thriving local businesses create stronger communities, and our mission is to ensure
                  they have the digital tools needed to succeed in today's marketplace.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-purple-800 mb-6">Our Values</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-purple-100 p-2 rounded-full mr-4 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-purple-600"
                      >
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Innovation</h3>
                      <p className="text-gray-700">
                        We constantly push the boundaries of what's possible with AI and marketing technology.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-purple-100 p-2 rounded-full mr-4 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-purple-600"
                      >
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Integrity</h3>
                      <p className="text-gray-700">
                        We believe in transparent, ethical practices and measurable results for our clients.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-purple-100 p-2 rounded-full mr-4 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-purple-600"
                      >
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Community</h3>
                      <p className="text-gray-700">
                        We're passionate about helping local businesses thrive and strengthen their communities.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-purple-200">Businesses Helped</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">48</div>
                <div className="text-purple-200">States Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">35+</div>
                <div className="text-purple-200">Team Members</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">4.9</div>
                <div className="text-purple-200">Client Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
