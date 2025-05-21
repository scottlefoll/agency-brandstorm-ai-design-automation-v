import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { CTAButton } from "@/components/cta-button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "CRM - Brandstorm AI",
  description: "Streamline your customer relationships with our powerful CRM solutions designed for business growth.",
}

export default function CRMPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <div className="flex-1 bg-gray-50 pt-32">
        <div className="container max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-purple-800 mb-4">CRM Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your customer relationships into your greatest business asset
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1 flex justify-center">
              <Image
                src="/placeholder.svg?key=41rvw"
                alt="CRM system dashboard with customer relationship data"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-bold text-purple-700 mb-4">Centralize Your Customer Intelligence</h2>
              <p className="text-lg mb-6">
                In today's competitive business landscape, effectively managing customer relationships is critical to
                sustainable growth. Our CRM solutions provide a centralized platform for tracking all customer
                interactions, managing sales pipelines, and nurturing leads through the buyer's journey. By
                consolidating customer data from multiple touchpoints—including website visits, email interactions,
                social media engagement, and direct communications—our CRM systems give you a comprehensive view of each
                customer's history and preferences, enabling personalized service that builds loyalty and drives
                revenue.
              </p>
              <p className="text-lg mb-6">
                We don't just provide CRM software; we deliver complete CRM solutions tailored to your specific business
                needs. Our team works closely with you to understand your sales processes, customer journey, and
                business goals before configuring a CRM system that aligns perfectly with your operations. From
                implementation and data migration to team training and ongoing support, we ensure your CRM becomes a
                valuable tool that your team actually uses. With powerful automation capabilities, intuitive interfaces,
                and actionable reporting, our CRM solutions streamline workflows, eliminate manual tasks, and provide
                the insights you need to make data-driven decisions.
              </p>
              <CTAButton source="CRM Page" className="mt-4">
                Optimize Your Customer Relationships
              </CTAButton>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">Key CRM Features</h2>
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
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Contact Management</h3>
                <p>
                  Maintain comprehensive customer profiles with complete interaction history, preferences, and
                  communication logs in one accessible location.
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
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Sales Pipeline Management</h3>
                <p>
                  Visualize and optimize your sales process with customizable pipelines that track leads from initial
                  contact through to closed deals.
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
                    <path d="m8 6 4-4 4 4"></path>
                    <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"></path>
                    <path d="m20 22-5-5"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Marketing Automation</h3>
                <p>
                  Create personalized, automated marketing workflows that nurture leads, trigger timely follow-ups, and
                  deliver the right message at the right time.
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
