import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { CTAButton } from "@/components/cta-button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Employees - Brandstorm AI",
  description:
    "Leverage cutting-edge AI technology to handle repetitive tasks, customer inquiries, and lead qualification 24/7.",
}

export default function AIEmployeesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <div className="flex-1 bg-gray-50 pt-32">
        <div className="container max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-purple-800 mb-4">AI Employees</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">The future of business automation is here</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-bold text-purple-700 mb-4">Your Tireless Digital Workforce</h2>
              <p className="text-lg mb-6">
                AI Employees represent the cutting edge of business automation, providing your company with intelligent
                digital workers that operate 24/7 without breaks, vacations, or sick days. These sophisticated AI
                systems can handle a wide range of tasks that traditionally required human intervention, from customer
                service and lead qualification to data entry and appointment scheduling. By implementing AI Employees,
                you free your human team to focus on high-value activities that require creativity, empathy, and
                strategic thinking.
              </p>
              <p className="text-lg mb-6">
                Our AI Employees are custom-trained on your business processes, products, services, and brand voice,
                ensuring they represent your company accurately and effectively. Unlike generic chatbots, our AI
                solutions continuously learn and improve from interactions, becoming more valuable over time. With
                advanced natural language processing capabilities, they can understand context, detect sentiment, and
                provide personalized responses that feel genuinely human. The result is consistent, high-quality service
                delivery that scales with your business needs without proportionally increasing your operational costs.
              </p>
              <CTAButton source="AI Employees Page" className="mt-4">
                Deploy Your AI Workforce
              </CTAButton>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?key=r20jb"
                alt="AI Employee digital interface"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">Key Benefits of AI Employees</h2>
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
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">24/7 Availability</h3>
                <p>
                  Your AI Employees work around the clock, ensuring no customer inquiry goes unanswered and no lead goes
                  unqualified, regardless of time zone or holidays.
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
                <h3 className="font-bold text-lg mb-2">Scalable Operations</h3>
                <p>
                  Easily scale your customer service and sales operations up or down without the traditional hiring,
                  training, and management challenges.
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
                    <path d="M12 2v4"></path>
                    <path d="M12 18v4"></path>
                    <path d="M4.93 4.93l2.83 2.83"></path>
                    <path d="M16.24 16.24l2.83 2.83"></path>
                    <path d="M2 12h4"></path>
                    <path d="M18 12h4"></path>
                    <path d="M4.93 19.07l2.83-2.83"></path>
                    <path d="M16.24 7.76l2.83-2.83"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Consistent Performance</h3>
                <p>
                  Eliminate human variability and ensure every customer interaction meets your quality standards with AI
                  that never has a bad day.
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
