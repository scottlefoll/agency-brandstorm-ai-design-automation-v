import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { CTAButton } from "@/components/cta-button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Social Media Management - Brandstorm AI",
  description:
    "Let our experts handle your social media presence with strategic content creation, scheduling, and engagement.",
}

export default function SocialMediaManagementPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <div className="flex-1 bg-gray-50 pt-32">
        <div className="container max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-purple-800 mb-4">Social Media Management</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build a powerful brand presence across all major social platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1 flex justify-center">
              <Image
                src="/images/ai-assistant-demo.png"
                alt="Social media management dashboard with content calendar and engagement metrics"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-contain"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-bold text-purple-700 mb-4">Consistent, Strategic Social Presence</h2>
              <p className="text-lg mb-6">
                Maintaining an effective social media presence requires consistent effort, strategic planning, and
                platform-specific expertise. Our Social Media Management services take the burden off your team,
                providing comprehensive management of your social media accounts across all major platforms. We handle
                everything from content creation and scheduling to community engagement and performance analysis. Our
                team stays up-to-date with the latest platform changes, algorithm updates, and best practices, ensuring
                your social media strategy remains effective in the ever-evolving social landscape. By outsourcing your
                social media management to our experts, you can maintain a professional, engaging presence without
                diverting internal resources from your core business activities.
              </p>
              <p className="text-lg mb-6">
                Our approach to social media management begins with developing a customized strategy aligned with your
                business goals and target audience. We create a content calendar that balances promotional content with
                value-added posts that educate, entertain, and engage your followers. Our team produces high-quality
                content including graphics, videos, and copy tailored to each platform's unique requirements and
                audience expectations. We actively manage your community by responding to comments, messages, and
                mentions in a timely, professional manner that reflects your brand voice. Additionally, we provide
                regular reporting on key metrics and insights, helping you understand the impact of your social media
                efforts and informing ongoing strategy refinements. With our comprehensive management services, your
                social media presence becomes a valuable asset that builds brand awareness, engages your audience, and
                drives business results.
              </p>
              <CTAButton source="Social Media Management Page" className="mt-4">
                Elevate Your Social Presence
              </CTAButton>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">Our Management Services</h2>
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
                <h3 className="font-bold text-lg mb-2">Content Creation</h3>
                <p>
                  Professional development of platform-specific content including graphics, videos, and copy that
                  resonates with your target audience.
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
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Community Engagement</h3>
                <p>
                  Timely, professional responses to comments, messages, and mentions that build relationships and foster
                  community around your brand.
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
                <h3 className="font-bold text-lg mb-2">Strategic Planning</h3>
                <p>
                  Development of comprehensive content calendars and posting schedules that maintain consistency while
                  aligning with your marketing goals.
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
