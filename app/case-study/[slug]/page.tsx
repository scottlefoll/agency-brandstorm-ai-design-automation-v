import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { CTAButton } from "@/components/cta-button"
import type { Metadata, ResolvingMetadata } from "next"

// Expanded case study data with more details
const caseStudiesData = [
  {
    id: 1,
    title: "Burton's Grill & Bar",
    services: ["SEO"],
    results: ["$100K/mo SEO Revenues", "28 Search Phrases on 1st Page"],
    image: "/images/case-studies/1-burtons.webp",
    slug: "burtons-grill",
    industry: "Restaurant",
    clientOverview:
      "Burton's Grill & Bar is a growing restaurant chain specializing in contemporary American cuisine. With 16 locations across eight states, the brand is committed to accommodating a range of dietary needs, offering both gluten-free and vegetarian menu options. Burton's is open daily for lunch and dinner and has earned a loyal customer base in each of its local markets.",
    challenge:
      "Despite having a strong physical presence and loyal clientele, Burton's Grill & Bar faced a competitive local search landscape. The brand wanted to:",
    challengePoints: [
      "Improve local visibility across multiple locations",
      "Capture high-intent traffic from potential diners searching for specific dietary options (e.g., gluten-free or vegetarian)",
      "Drive consistent, measurable revenue growth through organic search",
    ],
    strategy:
      "We engaged with Burton's Grill & Bar on a Pay-Per-Result basis, focusing on high-ROI keyword targets. Over a 6-year partnership, we:",
    strategyPoints: [
      "Conducted local SEO audits across all restaurant locations",
      "Built out optimized location-specific landing pages",
      'Targeted niche, high-volume keywords related to cuisine and dietary preferences (e.g., "American cuisine Hingham MA", "gluten free Hingham MA", "vegetarian restaurants Hingham MA")',
      "Implemented technical and on-page SEO improvements to ensure long-term performance",
    ],
    detailedResults: [
      "283 high-volume local keywords now rank on Page 1 of Google",
      "Location-specific keywords generated increased foot traffic and reservations",
      "SEO-driven visibility contributed to approximately $100,000/month in in-store revenue for the Hingham, MA location alone",
    ],
    conclusion:
      "Burton's Grill & Bar continues to dominate local search results in its markets, thanks to a long-term, performance-based SEO strategy. By aligning their online presence with what real customers are searching for, we helped translate digital visibility into real-world revenue.",
  },
  {
    id: 2,
    title: "JJ's Best",
    services: ["SEO"],
    results: ["26 Search Phrases on 1st Page", "7 Years Working Together"],
    image: "/images/case-studies/2-jjs.webp",
    slug: "jjs-best",
    industry: "Automotive",
    clientOverview:
      "J.J. BEST BANC & CO. is the oldest and largest classic and collector car lender in the United States. With a legacy of financing tens of thousands of vehicles, their portfolio includes everything from antiques and exotics to hot rods, muscle cars, kit cars, as well as specialty vehicles like boats and aircraft. Their trusted reputation has made them the go-to lender for enthusiasts and collectors nationwide.",
    challenge:
      "Despite their established presence in the niche financing market, J.J. Best needed to expand their digital footprint and capture more high-intent traffic from prospective borrowers searching online. They were looking to:",
    challengePoints: [
      "Improve organic visibility for competitive, high-volume search terms",
      "Drive qualified leads through SEO without upfront risk",
      "Scale their online reach while maintaining authority in a specialized industry",
    ],
    strategy:
      "We launched a Pay-Per-Result SEO campaign tailored to dominate classic and collector car financing searches. Over a 7-year partnership, our team:",
    strategyPoints: [
      "Conducted competitive keyword research to identify high-value, buyer-intent search terms",
      "Optimized key website pages and created content that aligned with what car collectors were actively searching for",
      "Built authority backlinks to enhance domain trust",
      "Focused on long-tail and high-volume terms that directly tied to loan and financing intent",
    ],
    keyPhrasesRanked: "We achieved Page 1 rankings for 26 high-volume search terms, including:",
    keyPhrasesList: [
      "classic car financing",
      "collector car loans",
      "old car loans",
      "financing antique cars",
      "classic auto financing",
    ],
    keyPhrasesNote:
      "One of these core phrases alone carries a potential business value of over $9 million per month in loan origination volume.",
    detailedResults: [
      "26 high-volume keywords ranking on Page 1 of Google",
      "Significant increase in inbound leads for high-value loan requests",
      "Sustained online authority and dominance in the classic auto financing niche",
      "Millions of dollars in monthly business potential driven through organic search",
    ],
    conclusion:
      "By investing in a performance-driven SEO strategy, J.J. BEST BANC & CO. secured long-term visibility in a highly competitive niche. Our continued collaboration has helped them capture and convert qualified traffic, reinforcing their position as the nation's leader in classic car lending.",
  },
  {
    id: 3,
    title: "128 Plumbing",
    services: ["PPC", "SEO"],
    results: ["74 Search Phrases on 1st Page", "11 Years Working Together"],
    image: "/images/case-studies/3-128-plumbing.webp",
    slug: "128-plumbing",
    industry: "Home Services",
    clientOverview:
      "128 Plumbing, Heating, Cooling & Electric has been a staple in the North Shore area for over 27 years, known for delivering unmatched quality, efficiency, and reliability in home services. They have earned a reputation as the region's most trusted provider of plumbing, electrical, heating, and air conditioning services. Their customer-first approach and dedication to walking clients through every step of a job set them apart in a competitive market.",
    challenge:
      "Despite their strong local reputation, 128 Plumbing needed to translate that success into digital dominance. With increasing competition in the home services space, they aimed to:",
    challengePoints: [
      "Increase visibility for service-related search terms in high-converting local markets",
      "Drive qualified leads through SEO without paying upfront",
      "Maximize ROI from both organic and paid marketing efforts",
    ],
    strategy:
      "We launched a Pay-Per-Result SEO campaign, combined with strategic paid advertising, to position 128 Plumbing at the top of local search results. Over an 11-year partnership, we focused on:",
    strategyPoints: [
      "Optimizing web pages and Google Business Profiles for local service terms",
      "Creating localized content targeting city-specific keywords",
      "Improving conversion rates by reinforcing trust and service reliability",
      "Integrating SEO efforts with high-performing paid advertising campaigns",
    ],
    keyPhrasesRanked: "128 Plumbing currently ranks on Page 1 of Google for 74 high-volume search phrases, including:",
    keyPhrasesList: ["Plumber in Wakefield MA", "HVAC repair North Shore", "Electrician in Reading MA"],
    keyPhrasesNote:
      'For example, for just the single keyword "Plumber in Wakefield MA", they appear in 4 of the top 18 organic and map results, generating approximately $27,000 in potential new business per month.',
    detailedResults: [
      "#1 Local Ranking: Now recognized as the leading-ranked HVAC company in the Northeast",
      "74 Keywords on Page 1: Sustained visibility across the region's most competitive service searches",
      "Ongoing Paid Ad Success: High ROI from combined SEO + paid strategy",
      "Year-over-Year Growth: Consistent increase in revenue and job volume",
    ],
    conclusion:
      "128 Plumbing's long-term investment in performance-based digital marketing has positioned them as the undisputed leader in their market. With top-tier visibility, an integrated SEO and PPC strategy, and a decade-plus partnership, their online presence now matches their real-world reputation for excellence.",
  },
  {
    id: 4,
    title: "AIRE Ancient Baths",
    services: ["Website Accessibility"],
    results: ["$50K saved in fines", "Boosted market reach"],
    image: "/images/case-studies/4-aire.webp",
    slug: "aire-ancient-baths",
    industry: "Wellness & Spa",
    challenge:
      "AIRE Ancient Baths faced potential legal issues due to their website not being ADA compliant. They needed to make their website accessible to users with disabilities while maintaining their luxury brand aesthetic.",
    solution:
      "We conducted a comprehensive accessibility audit and implemented WCAG 2.1 AA compliance measures. Our solution included adding proper alt text, ensuring keyboard navigation, improving color contrast, and implementing ARIA attributes while preserving their distinctive visual identity.",
    detailedResults: [
      "Saved $50K in potential ADA non-compliance fines",
      "Boosted market reach by making services accessible to all users",
      "Improved overall user experience and site performance",
      "Achieved 100% WCAG 2.1 AA compliance",
    ],
    testimonial: {
      quote:
        "Brandstorm AI transformed our website into an accessible experience for all users without compromising our unique aesthetic. They saved us from potential legal issues while actually improving our overall user experience.",
      author: "Digital Director, AIRE Ancient Baths",
    },
  },
  {
    id: 5,
    title: "Tiffany Knupp Insurance Agency",
    services: ["Conversational Texting", "Conversion Rate Optimization"],
    results: ["300% Increased Sales", "98% Open Rate"],
    image: "/images/case-studies/5-tiffany.webp",
    slug: "tiffany-knupp-insurance",
    industry: "Insurance",
    challenge:
      "Tiffany Knupp Insurance Agency was struggling with low response rates from traditional communication channels. They needed a more effective way to engage with prospects and convert them into customers.",
    solution:
      "We implemented a conversational texting strategy combined with comprehensive conversion rate optimization. Our approach included automated SMS workflows, personalized messaging, A/B testing, and optimized landing pages designed to convert insurance leads.",
    detailedResults: [
      "Achieved a 300% increase in sales conversion",
      "Maintained a 98% open rate on text messages",
      "Reduced response time from hours to minutes",
      "Implemented an omnichannel communication strategy",
    ],
    testimonial: {
      quote:
        "The conversational texting strategy completely transformed our business. We're seeing open rates we never thought possible, and our sales have tripled since implementing Brandstorm AI's recommendations.",
      author: "Tiffany Knupp, Agency Owner",
    },
  },
  {
    id: 6,
    title: "Bridge City Limo",
    services: ["Conversion Rate Optimization", "Online Reputation Management"],
    results: ["400% Revenue Growth", "85+ additional reviews"],
    image: "/images/case-studies/6-bridge.webp",
    slug: "bridge-city-limo",
    industry: "Transportation",
    challenge:
      "Bridge City Limo was struggling with a low website conversion rate and needed to improve their online reputation to stand out in a competitive luxury transportation market.",
    solution:
      "We implemented a comprehensive conversion rate optimization strategy and reputation management system. Our approach included redesigning key landing pages, streamlining the booking process, implementing a review generation campaign, and actively managing online reviews across multiple platforms.",
    detailedResults: [
      "Achieved 400% revenue growth through improved conversions",
      "Generated 85+ additional positive reviews across platforms",
      "Increased average star rating from 3.6 to 4.8",
      "Improved website conversion rate from 1.2% to 5.8%",
    ],
    testimonial: {
      quote:
        "The results speak for themselves - 400% revenue growth and a completely transformed online reputation. Brandstorm AI's strategies have positioned us as the premier luxury transportation service in our market.",
      author: "CEO, Bridge City Limo",
    },
  },
  {
    id: 7,
    title: "BMW San Francisco",
    services: ["Email Marketing"],
    results: ["11.87% Open Rate", "1.32% Click-through-rate"],
    image: "/images/case-studies/7-bmw.webp",
    slug: "bmw-san-francisco",
    industry: "Automotive",
    challenge:
      "BMW San Francisco needed to improve engagement with their customer database and drive more showroom visits and test drives through email marketing.",
    solution:
      "We developed a sophisticated email marketing strategy with segmented campaigns, personalized content, and automated workflows. Our approach included creating model-specific content, service reminders, exclusive event invitations, and targeted offers based on customer behavior and preferences.",
    detailedResults: [
      "Achieved 11.87% open rate (industry average: 8%)",
      "Maintained 1.32% click-through rate (industry average: 0.6%)",
      "Increased showroom visits by 27% through email campaigns",
      "Implemented automated service reminder system with 22% conversion rate",
    ],
    testimonial: {
      quote:
        "Brandstorm AI's email marketing strategy has significantly improved our customer engagement. The open rates and click-through rates consistently exceed industry benchmarks, and we're seeing a direct impact on showroom visits and service appointments.",
      author: "Marketing Manager, BMW San Francisco",
    },
  },
  {
    id: 8,
    title: "Throwback Vault",
    services: ["Facebook Ads", "Instagram Ads", "Social Media"],
    results: ["427% ROI", "365K+ Reach"],
    image: "/images/case-studies/8-vault.webp",
    slug: "throwback-vault",
    industry: "Retail",
    challenge:
      "Throwback Vault, a vintage apparel retailer, needed to increase brand awareness and drive online sales through social media channels.",
    solution:
      "We developed an integrated social media strategy combining organic content, Facebook Ads, and Instagram Ads. Our approach included creating engaging lifestyle content, implementing retargeting campaigns, developing lookalike audiences, and optimizing ad creative and targeting based on performance data.",
    detailedResults: [
      "Achieved 427% return on ad spend",
      "Reached over 365,000 potential customers",
      "Increased social media following by 215%",
      "Generated 42% of total online revenue through social channels",
    ],
    testimonial: {
      quote:
        "The social media strategy developed by Brandstorm AI has transformed our business. We're seeing an incredible 427% ROI on our ad spend, and our brand reach has exploded to over 365,000 potential customers.",
      author: "Founder, Throwback Vault",
    },
  },
  {
    id: 9,
    title: "Xero Shoes",
    services: ["CRO", "Pay Per Revenue", "PPC"],
    results: ["$50K increased sales", "6X ROI"],
    image: "/images/case-studies/9-xero.webp",
    slug: "xero-shoes",
    industry: "Retail",
    challenge:
      "Xero Shoes needed to optimize their digital advertising spend and improve their website conversion rate to increase online sales of their minimalist footwear.",
    solution:
      "We implemented a comprehensive strategy combining conversion rate optimization, pay-per-revenue advertising, and targeted PPC campaigns. Our approach included redesigning product pages, implementing A/B testing, optimizing the checkout process, and developing performance-based advertising campaigns.",
    detailedResults: [
      "Generated $50,000 in increased monthly sales",
      "Achieved 6X return on investment",
      "Improved website conversion rate by 87%",
      "Reduced cost per acquisition by 42%",
    ],
    testimonial: {
      quote:
        "Working with Brandstorm AI has been a game-changer for our e-commerce business. Their data-driven approach to CRO and digital advertising has resulted in a significant increase in sales and an impressive 6X ROI.",
      author: "Marketing Director, Xero Shoes",
    },
  },
]

// Get case study by slug
const getCaseStudyBySlug = (slug: string) => {
  return caseStudiesData.find((study) => study.slug === slug)
}

// Get related case studies (same industry or services)
const getRelatedCaseStudies = (currentStudy: (typeof caseStudiesData)[0], limit = 3) => {
  return caseStudiesData
    .filter(
      (study) =>
        study.id !== currentStudy.id &&
        (study.industry === currentStudy.industry ||
          study.services.some((service) => currentStudy.services.includes(service))),
    )
    .slice(0, limit)
}

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const study = getCaseStudyBySlug(params.slug)

  if (!study) {
    return {
      title: "Case Study Not Found",
      description: "The requested case study could not be found.",
    }
  }

  return {
    title: `${study.title} Case Study - Brandstorm AI`,
    description: `Learn how we helped ${study.title} achieve ${study.results[0]} through our ${study.services.join(", ")} services.`,
  }
}

export default function CaseStudyPage({ params }: Props) {
  const study = getCaseStudyBySlug(params.slug)

  if (!study) {
    notFound()
  }

  const relatedStudies = getRelatedCaseStudies(study)

  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />

      {/* Empty spacer div to push content below fixed header */}
      <div className="h-24 md:h-28 lg:h-32"></div>

      {/* Hero Section */}
      <div className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh] mt-8">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" priority />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-end pb-12">
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-2 mb-4">
              {study.services.map((service, index) => (
                <span key={index} className="bg-purple-600 text-white px-3 py-1 text-sm font-medium rounded-full">
                  {service}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{study.title}</h1>
            <p className="text-xl text-white/90">
              {study.industry} • {study.results.join(" • ")}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {study.slug === "burtons-grill" || study.slug === "jjs-best" || study.slug === "128-plumbing" ? (
              <>
                {/* Client Overview Section */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Client Overview</h2>
                  <p className="text-lg text-gray-700">{study.clientOverview}</p>
                </div>

                {/* Challenge Section */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
                  <p className="text-lg text-gray-700 mb-4">{study.challenge}</p>
                  <ul className="space-y-2">
                    {study.challengePoints?.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-purple-600 mr-2 mt-1.5">•</span>
                        <span className="text-lg text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Strategy Section */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Strategy</h2>
                  <p className="text-lg text-gray-700 mb-4">{study.strategy}</p>
                  <ul className="space-y-2">
                    {study.strategyPoints?.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-purple-600 mr-2 mt-1.5">•</span>
                        <span className="text-lg text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Phrases Ranked Section - For JJ's Best and 128 Plumbing */}
                {(study.slug === "jjs-best" || study.slug === "128-plumbing") && study.keyPhrasesRanked && (
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      {study.slug === "jjs-best" ? "Key Phrases Ranked" : "Key Rankings Achieved"}
                    </h2>
                    <p className="text-lg text-gray-700 mb-4">{study.keyPhrasesRanked}</p>
                    <ul className="space-y-2 mb-4">
                      {study.keyPhrasesList?.map((phrase, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-purple-600 mr-2 mt-1.5">•</span>
                          <span className="text-lg text-gray-700">{phrase}</span>
                        </li>
                      ))}
                    </ul>
                    {study.keyPhrasesNote && (
                      <p className="text-lg text-gray-700 mt-4 italic">{study.keyPhrasesNote}</p>
                    )}
                  </div>
                )}

                {/* Results Section */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Results</h2>
                  {study.slug === "128-plumbing" || study.slug === "jjs-best" ? (
                    <ul className="space-y-4 mb-6">
                      {study.detailedResults?.map((result, index) => (
                        <li
                          key={index}
                          className="flex items-start bg-green-50 p-4 rounded-lg border-l-4 border-green-500"
                        >
                          <span className="text-green-600 mr-3 text-xl">✅</span>
                          <span className="text-lg font-medium text-gray-800">{result}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <>
                      <p className="text-lg text-gray-700 mb-4">Our SEO efforts produced measurable impact:</p>
                      <ul className="space-y-2 mb-6">
                        {study.detailedResults?.map((result, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-purple-600 mr-2 mt-1.5">•</span>
                            <span className="text-lg text-gray-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>

                {/* Conclusion Section */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
                  <p className="text-lg text-gray-700">{study.conclusion}</p>
                </div>
              </>
            ) : (
              <>
                {/* Challenge Section for other case studies */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
                  <p className="text-lg text-gray-700">{study.challenge}</p>
                </div>

                {/* Solution Section for other case studies */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Solution</h2>
                  <p className="text-lg text-gray-700">{study.solution}</p>
                </div>

                {/* Results Section for other case studies */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Results</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {study.detailedResults?.map((result, index) => (
                      <div key={index} className="bg-purple-50 p-6 rounded-lg">
                        <p className="text-lg font-medium text-purple-900">{result}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Testimonial Section */}
            {study.testimonial && (
              <div className="mb-16 bg-gray-50 p-8 rounded-xl border border-gray-100">
                <div className="flex flex-col items-center text-center">
                  <svg className="w-12 h-12 text-purple-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <blockquote className="text-xl italic text-gray-800 mb-4">"{study.testimonial.quote}"</blockquote>
                  <p className="text-gray-600 font-medium">{study.testimonial.author}</p>
                </div>
              </div>
            )}

            {/* CTA Section */}
            <div className="bg-purple-800 text-white p-8 rounded-xl text-center mb-16">
              <h2 className="text-2xl font-bold mb-4">Ready to achieve similar results?</h2>
              <p className="text-lg mb-6">
                Let's discuss how we can help your business grow with our proven digital marketing strategies.
              </p>
              <CTAButton
                className="bg-white text-purple-800 hover:bg-gray-100 px-8 py-3 rounded-md font-semibold text-lg"
                source={`Case Study - ${study.title}`}
              >
                Schedule Your Free Strategy Session
              </CTAButton>
            </div>
          </div>
        </div>
      </div>

      {/* Related Case Studies */}
      {relatedStudies.length > 0 && (
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Related Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {relatedStudies.map((relatedStudy) => (
                <div key={relatedStudy.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-48 w-full">
                    <Image
                      src={relatedStudy.image || "/placeholder.svg"}
                      alt={relatedStudy.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{relatedStudy.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {relatedStudy.services.map((service, index) => (
                        <span
                          key={index}
                          className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 line-clamp-2">{relatedStudy.results.join(" • ")}</p>
                    <Link
                      href={`/case-study/${relatedStudy.slug}`}
                      className="inline-block w-full text-center bg-purple-700 hover:bg-purple-800 text-white font-medium py-2 px-4 rounded transition-colors"
                    >
                      View Case Study
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
