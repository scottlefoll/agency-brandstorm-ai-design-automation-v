"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      question: "How long does it take to see results?",
      answer:
        "Most clients begin seeing measurable results within 30-60 days. However, the full impact of our strategies typically becomes apparent after 90 days as Google and other platforms fully index and recognize the optimizations we've implemented.",
    },
    {
      question: "Do you work with businesses outside of the US?",
      answer:
        "Yes, we work with businesses globally, though our primary focus is on English-speaking markets. Our strategies are adaptable to different regions and local search algorithms.",
    },
    {
      question: "What types of businesses do you work with?",
      answer:
        "We specialize in working with local service businesses such as home services (plumbing, HVAC, roofing, etc.), professional services (law firms, accountants, consultants), healthcare providers, and retail businesses with physical locations.",
    },
    {
      question: "How much do your services cost?",
      answer:
        "Our service packages are customized based on your business needs, market competitiveness, and growth goals. We offer different tiers of service starting at $1,500/month. We're happy to provide a detailed quote after our initial strategy call.",
    },
    {
      question: "Do you require long-term contracts?",
      answer:
        "We typically recommend a minimum 6-month commitment to fully implement our strategies and see meaningful results. However, we offer month-to-month options after the initial period with a 30-day notice for cancellation.",
    },
    {
      question: "What makes Brand Builder AI different from other marketing agencies?",
      answer:
        "Unlike traditional agencies, we focus exclusively on local business dominance with a proven system that integrates branding, web design, Google optimization, and AI automation. Our approach is data-driven, and we provide transparent reporting on all key metrics.",
    },
  ]

  return (
    <section className="w-full py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about working with Brand Builder AI
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-lg">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-700">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
