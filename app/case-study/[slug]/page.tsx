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
    results: ["ADA Compliance", "Expanded Audience Reach"],
    image: "/images/case-studies/4-aire.webp",
    slug: "aire-ancient-baths",
    industry: "Wellness & Spa",
    clientOverview:
      "AIRE Ancient Baths is a globally renowned wellness brand offering luxurious, sensory-rich experiences across multiple international locations. Known for their signature thermal baths, massage therapies, and holistic treatments, AIRE blends ancient bathing traditions with modern relaxation techniques to deliver a one-of-a-kind rejuvenating experience.",
    challenge:
      "As AIRE continued to grow its digital presence, the company needed to ensure its website met modern accessibility standards. With nearly 20% of Americans living with some form of disability, the absence of accessible design limited reach, created potential usability issues, and risked non-compliance with federal accessibility laws, specifically the Americans with Disabilities Act (ADA).",
    solution:
      "AIRE partnered with Umbrella Local to implement a full-scale accessibility upgrade for its website. Our team delivered a seamless, affordable solution that aligned with ADA 2020 compliance requirements and WCAG 2.1 accessibility standards. This included:",
    strategyPoints: [
      "A comprehensive audit of the site's accessibility issues",
      "Remediation of all high-priority compliance gaps",
      "Deployment of accessibility tools and assistive technologies",
      "Ongoing monitoring and support to maintain compliance",
    ],
    detailedResults: [
      "ADA Compliance Achieved: Website brought into full compliance with U.S. accessibility regulations",
      "Expanded Audience Reach: Now accessible to the 61+ million Americans living with a disability",
      "Improved Conversion Rates: Easier site navigation led to measurable increases in engagement and bookings",
      "Legal Risk Mitigated: Reduced exposure to ADA-related lawsuits and penalties",
      "Enhanced Brand Reputation: Reinforced AIRE's commitment to inclusivity and customer care",
    ],
  },
  {
    id: 5,
    title: "The Knupp Agency – Farmers Insurance",
    services: ["Conversational Texting", "Business Communication"],
    results: ["3x Sales Growth", "99% Response Rate"],
    image: "/images/case-studies/5-tiffany.webp",
    slug: "tiffany-knupp-insurance",
    industry: "Insurance",
    clientOverview:
      "The Knupp Agency is a locally owned and operated Farmers Insurance branch based in Salisbury, Maryland. The agency provides comprehensive insurance solutions throughout Maryland and Virginia's Eastern Shore—covering homeowners, auto, life, boat, motorcycle, specialty lines, and commercial insurance products.",
    challenge:
      "Agency owner Tiffany Knupp was seeking a more effective and efficient way to enhance both client communication and internal sales operations. The traditional approach—relying heavily on phone calls and voicemails—was leading to missed connections, delayed follow-ups, and lost opportunities.",
    strategy: "Tiffany partnered with Umbrella Local to modernize communication at her agency. We:",
    strategyPoints: [
      "Text-enabled the agency's landline, allowing clients to send and receive messages directly",
      "Integrated a smart conversational texting platform to automate and personalize client communication",
      "Streamlined appointment reminders, payment alerts, and service follow-ups through SMS",
    ],
    detailedResults: [
      "3x Sales Growth: The agency tripled its sales volume within just a few months of implementing smart texting",
      "99% Response Rate: Nearly all client texts are responded to within hours—dramatically improving engagement",
      "Reduced No-Shows & Phone Tag: Fewer missed appointments and faster resolutions for client inquiries",
      "Faster Collections: On-time payments improved due to automated, friendly SMS reminders",
    ],
    testimonial: {
      quote:
        "There's no better form of communication than texting. Our clients respond almost instantly—and that's transformed our business.",
      author: "Tiffany Knupp, Owner, The Knupp Agency",
    },
    conclusion:
      "The implementation of conversational SMS not only streamlined operations for The Knupp Agency but also dramatically improved client responsiveness and sales performance. By embracing a smarter, faster way to communicate, the agency set a new standard for efficiency and customer engagement in the insurance space. Umbrella Local's solution proved to be a scalable, high-ROI investment that continues to pay dividends.",
    additionalImages: [
      {
        src: "/images/case-studies/tiffany-farmers.webp",
        alt: "Tiffany Knupp standing in front of Farmers Insurance sign",
        caption: "Tiffany Knupp, Owner of The Knupp Agency - Farmers Insurance",
      },
      {
        src: "/images/case-studies/texting-stats.webp",
        alt: "Texting statistics showing 98% open rate and generational preferences for business texting",
        caption: "Texting achieves a 98% open rate, with strong preference across all generations",
      },
    ],
  },
  {
    id: 6,
    title: "Bridge City Limo",
    services: ["Conversion Rate Optimization", "Online Reputation Management"],
    results: ["400% Revenue Growth", "85+ additional reviews"],
    image: "/images/case-studies/6-bridge.webp",
    slug: "bridge-city-limo",
    industry: "Transportation",
    clientOverview:
      "Bridge City Limos is a premier luxury transportation company based in Portland, Oregon. Specializing in party bus and limo rentals, they provide stylish, high-quality service for events such as wine tours, brewery crawls, sports outings, and bachelor/bachelorette parties. With a strong focus on customer satisfaction, the company has built its brand on reliability, professionalism, and upscale experiences.",
    challenge:
      "Bridge City Limos wanted to increase visibility, build trust with prospective clients, and generate more bookings. However, they faced challenges in standing out in a highly competitive local market—especially in terms of online reputation and reviews.",
    strategy:
      "To address this, Bridge City Limos partnered with Umbrella Local to implement a strategic Reputation Management Campaign. This included:",
    strategyPoints: [
      "Encouraging satisfied clients to leave reviews on key platforms",
      "Monitoring and managing review responses to build credibility",
      "Leveraging positive reviews in marketing collateral and SEO",
    ],
    keyPhrasesRanked: "This case study focused on reputation and revenue growth rather than keyword rankings.",
    detailedResults: [
      "400% Revenue Growth: Bridge City Limos saw a fourfold increase in revenue since implementation",
      "85+ Verified Reviews: Accumulated a steady stream of high-quality reviews, reinforcing social proof",
      "Increased Conversion Rates: Positive feedback helped convert more website visitors into paying clients",
      "Strengthened Brand Trust: Established a leading reputation in the Portland luxury transport market",
    ],
    conclusion:
      "By focusing on strategic reputation management, Bridge City Limos dramatically boosted its online credibility and bottom line. The consistent inflow of positive customer reviews became a key driver of trust and conversions. Umbrella Local's targeted review-generation and brand reputation services provided the lift needed to dominate a saturated market and accelerate long-term business growth.",
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
    clientOverview:
      "BMW of San Francisco is a premier full-service dealership serving the San Francisco Bay Area. In addition to new vehicle sales, they offer lease and financing options, high-quality pre-owned inventory, and certified repair and maintenance services. With a strong commitment to customer service and excellence, BMW San Francisco is a trusted destination for BMW owners and enthusiasts alike.",
    challenge:
      "BMW of San Francisco sought a targeted and cost-effective way to re-engage previous BMW owners and leasers in their area. The goal was to generate lease inquiries and showroom traffic for their seasonal New Year promotion—without wasting spend on unqualified leads.",
    strategy:
      "Umbrella Local utilized its proprietary 150 million+ opt-in consumer email list with over 700 advanced targeting parameters to deliver a hyper-specific campaign. We:",
    strategyPoints: [
      "Targeted BMW owners/leasers with aging vehicles in the dealership's service region",
      'Created a compelling "New Year, New Lease Specials" promotional email',
      "Focused on maximizing open rates and click-through rates to drive warm traffic",
    ],
    keyPhrasesRanked: "This campaign focused on targeted outreach and conversions, not search engine rankings.",
    detailedResults: [
      "11.87% open rate – far above industry average for automotive campaigns",
      "1.32% click-through rate, generating highly qualified dealership leads",
      "Increased showroom activity and lease inquiries during campaign period",
      "Optimized lead targeting using behavioral and ownership-based filters",
    ],
    conclusion:
      "By combining precision email targeting with a timely seasonal offer, BMW of San Francisco saw a strong response from qualified prospects. Umbrella Local's campaign not only delivered industry-leading engagement rates but also demonstrated the power of smart, data-driven promotion to generate measurable dealership results.",
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
    clientOverview:
      "Throwback Vault is a Toronto-based fashion brand specializing in curated vintage and streetwear apparel. Known for its wide variety of one-of-a-kind pieces, the company is dedicated to sourcing and delivering the trendiest, most unique styles for customers seeking distinctive fashion.",
    challenge:
      "In an era where organic reach on social media platforms has significantly declined, Throwback Vault needed a paid advertising strategy that could cut through the noise and drive both traffic and sales. Their objective was to increase visibility, site engagement, and return on ad spend through Meta's ad platforms.",
    strategy:
      "Throwback Vault partnered with Umbrella Local to launch a targeted Facebook and Instagram advertising campaign designed to:",
    strategyPoints: [
      "Drive highly qualified traffic to product landing pages",
      "Boost brand visibility and engagement with fashion-forward audiences",
      "Optimize for high return on investment through continuous A/B testing and audience refinement",
    ],
    keyPhrasesRanked: "This campaign focused on paid social ROI and engagement, not SEO rankings.",
    detailedResults: [
      "427% ROI on Meta advertising campaigns",
      "302,464 users reached across Facebook and Instagram",
      "365,391 total ad impressions generated",
      "7,292 landing page views driven from campaign traffic",
      "11,905 user interactions including likes, shares, and comments",
      "3.9% engagement rate, well above average for fashion retail",
    ],
    conclusion:
      "Umbrella Local's paid media strategy enabled Throwback Vault to thrive in a space where organic social visibility continues to decline. With a compelling creative approach and precision audience targeting, the campaign produced exceptional results in reach, engagement, and return on ad spend—firmly positioning Throwback Vault as a leader in the online vintage fashion space.",
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
    clientOverview:
      "Xero Shoes is a rapidly growing minimalist footwear brand founded by Steven Sashen (CEO) and Lena Phoenix (CFO). Known for creating lightweight, barefoot-style shoes for walking, running, and athletic performance, Xero Shoes gained national attention after appearing on ABC's Shark Tank. The brand has since earned accolades such as being named one of Business Insider's Top 5 Barefoot Shoes of 2018.",
    challenge:
      "With growing competition in the footwear industry, Xero Shoes needed a way to expand reach, boost sales, and drive traffic—without increasing upfront ad spend. They were seeking a performance-based model that would scale efficiently while minimizing financial risk.",
    strategy:
      "Umbrella Local launched a Pay Per Revenue Cash-Back Advertising Campaign, placing Xero Shoes' offers across hundreds of high-traffic websites and apps. Key components of the campaign included:",
    strategyPoints: [
      "Promoting a 15% cash-back incentive to attract motivated buyers",
      "Distributing offers on a broad network of partner platforms",
      "Structuring payments based strictly on actual sales performance",
    ],
    keyPhrasesRanked: "This campaign was focused on revenue and conversion outcomes, not SEO keyword rankings.",
    detailedResults: [
      "6X Return on Investment (ROI)",
      "$49,910 in revenue generated through pay-per-sale offers",
      "Zero upfront ad costs – only paid commissions on completed sales",
      "Ongoing campaign success, delivering steady monthly returns",
    ],
    conclusion:
      "By leveraging Umbrella Local's performance-based advertising model, Xero Shoes successfully scaled their customer acquisition strategy without spending on traditional ads. The campaign continues to perform, providing measurable ROI and revenue growth while positioning Xero Shoes for sustained market expansion.",
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
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <Image
          src={study.image || "/placeholder.svg"}
          alt={`${study.title} service vehicle - ${study.services.join(", ")} services`}
          fill
          className="object-cover object-center"
          priority
        />
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
                  {study.slug === "burtons-grill" || study.slug === "jjs-best" || study.slug === "128-plumbing" ? (
                    <ul className="space-y-1 mb-6">
                      {study.detailedResults?.map((result, index) => (
                        <li key={index} className="flex items-start p-2 rounded-lg">
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
            ) : study.slug === "aire-ancient-baths" ? (
              <>
                {/* About the Client Section for AIRE */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Client Overview</h2>
                  <p className="text-lg text-gray-700">{study.clientOverview}</p>
                </div>

                {/* Challenge Section for AIRE */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
                  <p className="text-lg text-gray-700">{study.challenge}</p>
                </div>

                {/* Solution Section for AIRE */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Strategy</h2>
                  <p className="text-lg text-gray-700 mb-4">
                    AIRE partnered with <strong>Umbrella Local</strong> to implement a full-scale accessibility upgrade
                    for its website. Our team delivered a seamless, affordable solution that aligned with{" "}
                    <strong>ADA 2020 compliance requirements</strong> and{" "}
                    <strong>WCAG 2.1 accessibility standards</strong>. This included:
                  </p>
                  <ul className="space-y-2">
                    {study.strategyPoints?.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-purple-600 mr-2 mt-1.5">•</span>
                        <span className="text-lg text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Results Section for AIRE */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Results</h2>
                  <ul className="space-y-1 mb-6">
                    {study.detailedResults?.map((result, index) => (
                      <li key={index} className="flex items-start p-2 rounded-lg">
                        <span className="text-green-600 mr-3 text-xl">✅</span>
                        <span className="text-lg font-medium text-gray-800">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : study.slug === "tiffany-knupp-insurance" ? (
              <>
                {/* Client Overview Section for Tiffany Knupp */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Client Overview</h2>
                  <p className="text-lg text-gray-700">{study.clientOverview}</p>
                </div>

                {/* Challenge Section for Tiffany Knupp */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
                  <p className="text-lg text-gray-700">{study.challenge}</p>
                </div>

                {/* Strategy Section for Tiffany Knupp */}
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

                {/* First Additional Image - Tiffany at Farmers */}
                <div className="mb-12">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="relative w-full h-[400px] mb-4">
                      <Image
                        src="/images/case-studies/tiffany-farmers.webp"
                        alt="Tiffany Knupp standing in front of Farmers Insurance sign"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-center text-gray-600 italic">
                      Tiffany Knupp, Owner of The Knupp Agency - Farmers Insurance
                    </p>
                  </div>
                </div>

                {/* Results Section for Tiffany Knupp */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Results</h2>
                  <ul className="space-y-1 mb-6">
                    {study.detailedResults?.map((result, index) => (
                      <li key={index} className="flex items-start p-2 rounded-lg">
                        <span className="text-green-600 mr-3 text-xl">✅</span>
                        <span className="text-lg font-medium text-gray-800">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Second Additional Image - Texting Stats */}
                <div className="mb-12">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="relative w-full h-[400px] mb-4">
                      <Image
                        src="/images/case-studies/texting-stats.webp"
                        alt="Texting statistics showing 98% open rate and generational preferences for business texting"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-center text-gray-600 italic">
                      Texting achieves a 98% open rate, with strong preference across all generations
                    </p>
                  </div>
                </div>

                {/* Testimonial Section for Tiffany Knupp */}
                <div className="mb-12 bg-gray-50 p-8 rounded-xl border border-gray-100">
                  <div className="flex flex-col items-center text-center">
                    <svg className="w-12 h-12 text-purple-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <blockquote className="text-xl italic text-gray-800 mb-4">"{study.testimonial?.quote}"</blockquote>
                    <p className="text-gray-600 font-medium">{study.testimonial?.author}</p>
                  </div>
                </div>

                {/* Conclusion Section for Tiffany Knupp */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
                  <p className="text-lg text-gray-700">{study.conclusion}</p>
                </div>
              </>
            ) : study.slug === "bridge-city-limo" ? (
              <>
                {/* Client Overview Section for Bridge City Limo */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Client Overview</h2>
                  <p className="text-lg text-gray-700">{study.clientOverview}</p>
                </div>

                {/* Challenge Section for Bridge City Limo */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
                  <p className="text-lg text-gray-700">{study.challenge}</p>
                </div>

                {/* Strategy Section for Bridge City Limo */}
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

                {/* Key Rankings Section for Bridge City Limo */}
                {study.keyPhrasesRanked && (
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Rankings Achieved</h2>
                    <p className="text-lg text-gray-700 italic">{study.keyPhrasesRanked}</p>
                  </div>
                )}

                {/* Results Section for Bridge City Limo */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Results</h2>
                  <ul className="space-y-1 mb-6">
                    {study.detailedResults?.map((result, index) => (
                      <li key={index} className="flex items-start p-2 rounded-lg">
                        <span className="text-green-600 mr-3 text-xl">✅</span>
                        <span className="text-lg font-medium text-gray-800">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Conclusion Section for Bridge City Limo */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
                  <p className="text-lg text-gray-700">{study.conclusion}</p>
                </div>
              </>
            ) : study.slug === "bmw-san-francisco" ? (
              <>
                {/* Client Overview Section for BMW */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Client Overview</h2>
                  <p className="text-lg text-gray-700">{study.clientOverview}</p>
                </div>

                {/* Challenge Section for BMW */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
                  <p className="text-lg text-gray-700">{study.challenge}</p>
                </div>

                {/* Strategy Section for BMW */}
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

                {/* Key Rankings Section for BMW */}
                {study.keyPhrasesRanked && (
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Rankings Achieved</h2>
                    <p className="text-lg text-gray-700 italic">{study.keyPhrasesRanked}</p>
                  </div>
                )}

                {/* Results Section for BMW */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Results</h2>
                  <ul className="space-y-1 mb-6">
                    {study.detailedResults?.map((result, index) => (
                      <li key={index} className="flex items-start p-2 rounded-lg">
                        <span className="text-green-600 mr-3 text-xl">✅</span>
                        <span className="text-lg font-medium text-gray-800">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Conclusion Section for BMW */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
                  <p className="text-lg text-gray-700">{study.conclusion}</p>
                </div>
              </>
            ) : study.slug === "throwback-vault" ? (
              <>
                {/* Client Overview Section for Throwback Vault */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Client Overview</h2>
                  <p className="text-lg text-gray-700">{study.clientOverview}</p>
                </div>

                {/* Challenge Section for Throwback Vault */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
                  <p className="text-lg text-gray-700">{study.challenge}</p>
                </div>

                {/* Strategy Section for Throwback Vault */}
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

                {/* Key Rankings Section for Throwback Vault */}
                {study.keyPhrasesRanked && (
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Rankings Achieved</h2>
                    <p className="text-lg text-gray-700 italic">{study.keyPhrasesRanked}</p>
                  </div>
                )}

                {/* Results Section for Throwback Vault */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Results</h2>
                  <ul className="space-y-1 mb-6">
                    {study.detailedResults?.map((result, index) => (
                      <li key={index} className="flex items-start p-2 rounded-lg">
                        <span className="text-green-600 mr-3 text-xl">✅</span>
                        <span className="text-lg font-medium text-gray-800">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Conclusion Section for Throwback Vault */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
                  <p className="text-lg text-gray-700">{study.conclusion}</p>
                </div>
              </>
            ) : study.slug === "xero-shoes" ? (
              <>
                {/* Client Overview Section for Xero Shoes */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Client Overview</h2>
                  <p className="text-lg text-gray-700">{study.clientOverview}</p>
                </div>

                {/* Challenge Section for Xero Shoes */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
                  <p className="text-lg text-gray-700">{study.challenge}</p>
                </div>

                {/* Strategy Section for Xero Shoes */}
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

                {/* Key Rankings Section for Xero Shoes */}
                {study.keyPhrasesRanked && (
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Rankings Achieved</h2>
                    <p className="text-lg text-gray-700 italic">{study.keyPhrasesRanked}</p>
                  </div>
                )}

                {/* Results Section for Xero Shoes */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Results</h2>
                  <ul className="space-y-1 mb-6">
                    {study.detailedResults?.map((result, index) => (
                      <li key={index} className="flex items-start p-2 rounded-lg">
                        <span className="text-green-600 mr-3 text-xl">✅</span>
                        <span className="text-lg font-medium text-gray-800">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Conclusion Section for Xero Shoes */}
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
            {study.testimonial && study.slug !== "tiffany-knupp-insurance" && (
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
                      alt={`${relatedStudy.title} - ${relatedStudy.services.join(", ")} case study`}
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
