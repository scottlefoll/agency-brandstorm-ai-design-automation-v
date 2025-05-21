import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { CTAButton } from "@/components/cta-button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sales Automation - Brandstorm AI",
  description:
    "Streamline your sales process with automated systems that nurture leads and close deals while you focus on growth.",
}

export default function SalesAutomationPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <div className="flex-1 bg-gray-50 pt-32">
        <div className="container max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-purple-800 mb-4">Sales Automation</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Close more deals with less effort through intelligent automation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-bold text-purple-700 mb-4">Transform Your Sales Process</h2>
              <p className="text-lg mb-6">
                Sales automation is revolutionizing how businesses convert leads into customers, allowing sales teams to
                focus on high-value activities while routine tasks are handled automatically. Our sales automation
                services help you implement intelligent systems that streamline your entire sales process—from lead
                capture and qualification to nurturing, follow-up, and closing. By automating repetitive tasks like data
                entry, follow-up emails, appointment scheduling, and proposal generation, your team can dedicate more
                time to building relationships and addressing the specific needs of prospects. The result is a more
                efficient sales operation that consistently moves leads through your pipeline while providing a better
                experience for potential customers.
              </p>
              <p className="text-lg mb-6">
                Our approach to sales automation combines cutting-edge technology with proven sales methodologies. We
                begin by analyzing your current sales process, identifying bottlenecks and opportunities for automation.
                Our team then designs and implements customized automation workflows that align with your specific sales
                strategy and business goals. We integrate your CRM, email marketing platform, and other tools to create
                a seamless system that tracks leads throughout the buyer's journey. With advanced features like lead
                scoring, behavioral triggers, and personalized communication sequences, our automation solutions ensure
                the right message reaches the right prospect at the right time. We also provide comprehensive analytics
                and reporting, giving you clear visibility into your sales pipeline and the impact of your automation
                efforts.
              </p>
              <CTAButton source="Sales Automation Page" className="mt-4">
                Automate Your Sales Process
              </CTAButton>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://kzmkrynjajuohimr860n.lite.vusercontent.net/placeholder.svg?key=r20jb"
                alt="Sales automation workflow showing lead nurturing sequence"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-contain"
              />
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">Key Automation Features</h2>
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
                <h3 className="font-bold text-lg mb-2">Lead Qualification</h3>
                <p>
                  Automated scoring and qualification systems that identify your most promising leads and prioritize
                  them for your sales team.
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
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Follow-up Sequences</h3>
                <p>
                  Personalized, multi-touch communication sequences that nurture leads through your sales funnel with
                  the right content at the right time.
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
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Proposal Automation</h3>
                <p>
                  Streamlined proposal and quote generation that creates professional, personalized documents in minutes
                  instead of hours.
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
