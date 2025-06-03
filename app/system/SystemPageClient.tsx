"use client"

import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function SystemPageClient() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Fixed header */}
      <NavBar />

      {/* White spacer that exactly matches the NavBar height */}
      <div className="h-[134px]"></div>

      {/* Main Hero Section - now without mt-20 */}
      <section className="bg-gradient-to-b from-purple-900 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Turn Your Business Into an Automated Revenue Engine
              </h1>
              <p className="text-xl mb-8">
                <strong>
                  Brandstorm AI CRM empowers you to attract, engage, and convert more customers—automatically.
                </strong>{" "}
                Get all the tools you need to streamline operations and grow your business on autopilot.
              </p>
              <button
                className="bg-white text-purple-800 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                onClick={() => (window.location.href = "/contact")}
              >
                Get Started Today
              </button>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative w-full h-[300px] md:h-[400px]">
                <Image
                  src="https://kzmkrynjajuohimr860n.lite.vusercontent.net/placeholder.svg?key=r20jb"
                  alt="Automated Revenue Engine"
                  fill
                  className="rounded-lg shadow-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrate Sales and Marketing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-6">
                Seamlessly Integrate Sales and Marketing
              </h2>
              <p className="text-lg mb-8">
                Ignoring the value of a CRM can cost you sales and damage customer relationships.{" "}
                <strong>
                  Brandstorm AI CRM solves this by unifying your sales and marketing workflows into one smart,
                  easy-to-use platform.
                </strong>{" "}
                The result? Lower operational costs and significantly improved sales performance.
              </p>
              <button
                className="bg-purple-800 text-white hover:bg-purple-700 font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                onClick={() => (window.location.href = "/contact?topic=demo")}
              >
                Request a Demo
              </button>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative w-full h-[300px] md:h-[400px]">
                <Image
                  src="https://kzmkrynjajuohimr860n.lite.vusercontent.net/placeholder.svg?key=r20jb"
                  alt="Integrated Sales and Marketing Platform"
                  fill
                  className="rounded-lg shadow-xl object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-12 text-center">📈 How It Works</h2>

          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold text-purple-700 mb-4">STEP 1: Capture</h3>
              <p className="text-lg mb-6">
                Don't let valuable leads slip through the cracks. We help you <strong>capture every opportunity</strong>{" "}
                so you can start building relationships and converting leads into customers.
              </p>
              <button
                className="bg-purple-700 text-white hover:bg-purple-600 font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                onClick={() => (window.location.href = "/contact?topic=lead-capture")}
              >
                Activate Lead Capture
              </button>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative w-full h-[250px] md:h-[300px]">
                <Image
                  src="https://kzmkrynjajuohimr860n.lite.vusercontent.net/placeholder.svg?key=r20jb"
                  alt="Lead Capture System"
                  fill
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
            <div className="md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold text-purple-700 mb-4">STEP 2: Nurture</h3>
              <p className="text-lg mb-6">
                Reach your prospects wherever they are—<strong>social media, email, text, voicemail, chat.</strong>{" "}
                Automated follow-ups ensure your business responds within minutes, and nurture sequences keep you top of
                mind.
              </p>
              <button
                className="bg-purple-700 text-white hover:bg-purple-600 font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                onClick={() => (window.location.href = "/contact?topic=nurture-campaigns")}
              >
                Build Nurture Campaigns
              </button>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative w-full h-[250px] md:h-[300px]">
                <Image
                  src="https://kzmkrynjajuohimr860n.lite.vusercontent.net/placeholder.svg?key=r20jb"
                  alt="Lead Nurturing System"
                  fill
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold text-purple-700 mb-4">STEP 3: Close</h3>
              <p className="text-lg mb-6">
                <strong>Track every lead's journey</strong> and focus your efforts on those ready to buy. When they're
                ready, collect payments directly through the CRM—no friction, no delay.
              </p>
              <button
                className="bg-purple-700 text-white hover:bg-purple-600 font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                onClick={() => (window.location.href = "/contact?topic=closing-tools")}
              >
                Explore Closing Tools
              </button>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative w-full h-[250px] md:h-[300px]">
                <Image
                  src="https://kzmkrynjajuohimr860n.lite.vusercontent.net/placeholder.svg?key=r20jb"
                  alt="Sales Closing System"
                  fill
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Grow Section */}
      <section className="py-16 bg-gradient-to-b from-purple-800 to-purple-900 text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow?</h2>
              <p className="text-xl mb-6">
                <strong>We make scaling your business simple.</strong> Book a free strategy call, and we'll help
                identify areas for growth, streamline your systems, and map out the next steps.
              </p>
              <div className="bg-white/10 p-6 rounded-lg mb-8">
                <p className="text-lg italic">
                  🎯{" "}
                  <strong>
                    No pressure. No hard sell. Just expert advice—whether you choose to work with us or not.
                  </strong>
                </p>
              </div>
              <button
                className="bg-white text-purple-900 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                onClick={() => (window.location.href = "/contact?topic=strategy-call")}
              >
                Schedule Free Strategy Call
              </button>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative w-full h-[300px] md:h-[400px]">
                <Image
                  src="https://kzmkrynjajuohimr860n.lite.vusercontent.net/placeholder.svg?key=r20jb"
                  alt="Business Growth Strategy"
                  fill
                  className="rounded-lg shadow-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
