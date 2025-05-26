import { Input } from "@/components/ui/input"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - Brandstorm AI",
  description: "Read the latest insights and tips on digital marketing, branding, and business growth.",
}

const blogPosts = [
  {
    id: 1,
    title: "How AI is Revolutionizing Local Business Marketing",
    slug: "ai-revolutionizing-local-business-marketing",
    excerpt:
      "Discover how artificial intelligence is transforming the way local businesses approach marketing and customer acquisition.",
    date: "May 18, 2023",
    author: "Alex Johnson",
    authorImage: "/images/team/alex-johnson.png",
    image: "/images/blog/ai-marketing-revolution.png",
    content: `
      <p>In today's rapidly evolving digital landscape, local businesses face unprecedented challenges and opportunities. The rise of artificial intelligence (AI) has introduced powerful new tools that are leveling the playing field, allowing small and medium-sized local businesses to compete with larger corporations.</p>
      
      <h2>The AI Marketing Revolution</h2>
      
      <p>AI is transforming local business marketing in several key ways:</p>
      
      <ul>
        <li><strong>Hyper-personalization:</strong> AI analyzes customer data to deliver highly personalized marketing messages that resonate with individual preferences and behaviors.</li>
        <li><strong>Predictive analytics:</strong> Advanced algorithms can predict customer needs and behaviors, allowing businesses to proactively address market demands.</li>
        <li><strong>Automated optimization:</strong> AI continuously tests and refines marketing campaigns, ensuring maximum ROI without constant manual intervention.</li>
        <li><strong>Local search dominance:</strong> AI-powered tools help businesses optimize their presence for local searches, capturing high-intent customers in their area.</li>
      </ul>
      
      <h2>Real-World Applications</h2>
      
      <p>Local businesses across various industries are already leveraging AI to transform their marketing efforts:</p>
      
      <p><strong>Case Study: Downtown Bistro</strong></p>
      
      <p>A family-owned restaurant implemented AI-driven customer segmentation and personalized email marketing, resulting in a 34% increase in repeat customers and a 28% boost in average order value.</p>
      
      <p><strong>Case Study: Neighborhood Plumbing Services</strong></p>
      
      <p>By utilizing AI-powered local search optimization and review management, this small plumbing company saw a 156% increase in Google Business Profile views and a 43% increase in direct calls from search.</p>
      
      <h2>Getting Started with AI Marketing</h2>
      
      <p>For local businesses looking to harness the power of AI in their marketing efforts, here are some practical steps to get started:</p>
      
      <ol>
        <li>Audit your current digital presence and identify key areas for improvement</li>
        <li>Start with one AI-powered solution that addresses your most pressing marketing challenge</li>
        <li>Collect and organize your customer data to fuel AI-driven insights</li>
        <li>Partner with experts who understand both AI technology and local business needs</li>
      </ol>
      
      <p>The future of local business marketing is here, and it's powered by AI. Those who embrace these technologies now will gain a significant competitive advantage in their local markets.</p>
    `,
  },
  {
    id: 2,
    title: "5 Proven Strategies to Boost Your Google Maps Ranking",
    slug: "boost-google-maps-ranking-strategies",
    excerpt:
      "Learn the most effective techniques to improve your business visibility on Google Maps and attract more local customers.",
    date: "April 3, 2023",
    author: "Maria Rodriguez",
    authorImage: "/images/team/maria-rodriguez.png",
    image: "/images/blog/google-maps-ranking.png",
    content: `
      <p>For local businesses, appearing prominently in Google Maps isn't just beneficial—it's essential. With 86% of consumers using Google Maps to find local businesses, your ranking can directly impact your foot traffic and revenue.</p>
      
      <h2>Why Google Maps Ranking Matters</h2>
      
      <p>When potential customers search for products or services "near me" or in a specific location, Google Maps displays a select few businesses in the coveted "Local Pack." These businesses receive significantly more visibility, clicks, and ultimately, customers.</p>
      
      <p>Here are five proven strategies to boost your Google Maps ranking and capture more local customers:</p>
      
      <h2>1. Optimize Your Google Business Profile</h2>
      
      <p>Your Google Business Profile (formerly Google My Business) is the foundation of your Google Maps presence. To optimize it:</p>
      
      <ul>
        <li>Ensure complete and accurate business information (name, address, phone number)</li>
        <li>Choose the most relevant primary and secondary categories</li>
        <li>Add high-quality photos of your business, products, and services</li>
        <li>Write a compelling business description with relevant keywords</li>
        <li>Add your products or services with descriptions and pricing</li>
      </ul>
      
      <h2>2. Generate and Manage Reviews</h2>
      
      <p>Reviews are critical for both ranking and conversion. Implement these tactics:</p>
      
      <ul>
        <li>Create a systematic process for requesting reviews from satisfied customers</li>
        <li>Respond to all reviews—both positive and negative—promptly and professionally</li>
        <li>Address customer concerns mentioned in negative reviews</li>
        <li>Incorporate keywords naturally in your review responses</li>
      </ul>
      
      <h2>3. Build Local Citations</h2>
      
      <p>Citations are mentions of your business name, address, and phone number (NAP) across the web. To improve your citation profile:</p>
      
      <ul>
        <li>Ensure NAP consistency across all platforms</li>
        <li>List your business on relevant directories (Yelp, Yellow Pages, industry-specific directories)</li>
        <li>Create and optimize social media profiles</li>
        <li>Get listed on local chamber of commerce and community websites</li>
      </ul>
      
      <h2>4. Implement Local SEO Best Practices</h2>
      
      <p>Your website plays a crucial role in your Maps ranking:</p>
      
      <ul>
        <li>Create location-specific pages if you serve multiple areas</li>
        <li>Include your NAP information in a visible location on every page</li>
        <li>Embed a Google Map on your contact page</li>
        <li>Optimize for mobile users</li>
        <li>Improve page loading speed</li>
      </ul>
      
      <h2>5. Engage With the Local Community</h2>
      
      <p>Google increasingly values businesses that are active in their communities:</p>
      
      <ul>
        <li>Participate in local events and promote them on your Google Business Profile</li>
        <li>Create content about local topics and news</li>
        <li>Build relationships with other local businesses for potential partnerships</li>
        <li>Support local causes and organizations</li>
      </ul>
      
      <p>Implementing these strategies consistently will improve your Google Maps ranking over time, bringing more local customers to your business. Remember that Google Maps optimization is not a one-time effort but an ongoing process that requires regular attention and updates.</p>
    `,
  },
  {
    id: 3,
    title: "The Ultimate Guide to Managing and Improving Your Online Reviews",
    slug: "ultimate-guide-managing-improving-online-reviews",
    excerpt:
      "Master the art of online reputation management with our comprehensive guide to handling customer reviews across all platforms.",
    date: "March 12, 2023",
    author: "David Chen",
    authorImage: "/images/team/david-chen.png",
    image: "/images/blog/online-reviews-management.png",
    content: `
      <p>In today's digital-first consumer landscape, online reviews can make or break a local business. Studies show that 93% of consumers say online reviews impact their purchasing decisions, and 91% trust online reviews as much as personal recommendations.</p>
      
      <h2>The Impact of Online Reviews</h2>
      
      <p>Online reviews affect your business in multiple ways:</p>
      
      <ul>
        <li><strong>Consumer Trust:</strong> Positive reviews build credibility and trust with potential customers</li>
        <li><strong>Search Visibility:</strong> Reviews influence your rankings in both Google Search and Maps</li>
        <li><strong>Conversion Rates:</strong> Businesses with positive reviews enjoy higher conversion rates</li>
        <li><strong>Customer Insights:</strong> Reviews provide valuable feedback for business improvement</li>
      </ul>
      
      <h2>Creating a Review Management Strategy</h2>
      
      <p>An effective review management strategy includes these key components:</p>
      
      <h3>1. Monitor Reviews Across All Platforms</h3>
      
      <p>Set up a system to track reviews on:</p>
      
      <ul>
        <li>Google Business Profile</li>
        <li>Yelp</li>
        <li>Facebook</li>
        <li>Industry-specific platforms (TripAdvisor, Healthgrades, Avvo, etc.)</li>
        <li>Better Business Bureau</li>
      </ul>
      
      <p>Use review management software to centralize monitoring and response efforts.</p>
      
      <h3>2. Respond to Every Review</h3>
      
      <p><strong>For Positive Reviews:</strong></p>
      
      <ul>
        <li>Thank the customer personally</li>
        <li>Reinforce the positive aspects they mentioned</li>
        <li>Invite them back</li>
        <li>Keep responses concise and genuine</li>
      </ul>
      
      <p><strong>For Negative Reviews:</strong></p>
      
      <ul>
        <li>Respond promptly (within 24-48 hours)</li>
        <li>Apologize for their negative experience</li>
        <li>Take responsibility without making excuses</li>
        <li>Offer to make it right</li>
        <li>Move the conversation offline when appropriate</li>
        <li>Follow up after resolution</li>
      </ul>
      
      <h3>3. Generate More Positive Reviews</h3>
      
      <p>Implement these tactics to increase your review volume:</p>
      
      <ul>
        <li>Create a simple review request email template</li>
        <li>Send review requests at the right moment (after a positive interaction)</li>
        <li>Use text message requests for higher response rates</li>
        <li>Train staff to ask for reviews at appropriate times</li>
        <li>Make the review process as simple as possible</li>
        <li>Consider review generation software to automate the process</li>
      </ul>
      
      <h3>4. Leverage Reviews in Your Marketing</h3>
      
      <p>Put your positive reviews to work:</p>
      
      <ul>
        <li>Feature testimonials on your website</li>
        <li>Share positive reviews on social media</li>
        <li>Include reviews in email marketing campaigns</li>
        <li>Create case studies from detailed positive reviews</li>
        <li>Use review snippets in advertising materials</li>
      </ul>
      
      <h2>Handling Review Challenges</h2>
      
      <h3>Dealing with Fake Reviews</h3>
      
      <p>If you suspect a review is fake or violates platform guidelines:</p>
      
      <ol>
        <li>Flag or report the review to the platform</li>
        <li>Provide evidence of why you believe it violates terms</li>
        <li>Still respond professionally while the review is under review</li>
        <li>Never engage in arguments with reviewers</li>
      </ol>
      
      <h3>Improving After Negative Reviews</h3>
      
      <p>Use negative feedback constructively:</p>
      
      <ol>
        <li>Identify patterns in criticism</li>
        <li>Implement operational changes to address valid concerns</li>
        <li>Train staff based on feedback</li>
        <li>Follow up with dissatisfied customers after making improvements</li>
      </ol>
      
      <p>Remember that online reputation management is an ongoing process. By consistently monitoring, responding to, and generating reviews, you'll build a positive online presence that attracts new customers and retains existing ones.</p>
    `,
  },
]

export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />

      {/* Hero Section */}
      <section className="bg-purple-700 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Blog</h1>
            <p className="text-xl text-purple-100 mb-8">Insights, strategies, and tips to help your business grow</p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 gap-12">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 h-64 md:h-auto relative">
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    </div>
                    <div className="md:w-2/3 p-6 md:p-8">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 relative rounded-full overflow-hidden mr-3">
                          <Image
                            src={post.authorImage || "/placeholder.svg"}
                            alt={post.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <span className="text-sm text-gray-600">{post.author}</span>
                          <span className="text-sm text-gray-400 mx-2">•</span>
                          <span className="text-sm text-gray-600">{post.date}</span>
                        </div>
                      </div>

                      <h2 className="text-2xl font-bold text-purple-800 mb-3">
                        <Link href={`/blog/${post.slug}`} className="hover:text-purple-600 transition duration-300">
                          {post.title}
                        </Link>
                      </h2>

                      <p className="text-gray-600 mb-6">{post.excerpt}</p>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition duration-300"
                      >
                        Read More
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
                          className="ml-2"
                        >
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button className="bg-white border border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold py-3 px-6 rounded-md transition duration-300">
                Load More Articles
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-purple-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-purple-100 mb-8">
              Get the latest marketing insights and strategies delivered to your inbox monthly.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input type="email" placeholder="Your email address" className="flex-grow" required />
              <button
                type="submit"
                className="bg-white text-purple-700 hover:bg-gray-100 font-semibold py-2 px-6 rounded-md transition duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
