import { ArrowRight } from "lucide-react"

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Strategy Call",
      description:
        "We start with a deep dive into your business goals, target audience, and current marketing efforts to identify opportunities.",
    },
    {
      number: "02",
      title: "Custom Plan",
      description:
        "Based on our analysis, we create a tailored strategy designed specifically for your business and local market.",
    },
    {
      number: "03",
      title: "Implementation",
      description:
        "Our team executes the plan with precision, handling everything from web design to Google optimization.",
    },
    {
      number: "04",
      title: "Growth & Scaling",
      description: "As results come in, we continuously refine the strategy to maximize your ROI and market dominance.",
    },
  ]

  return (
    <section className="w-full py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Proven Process</h2>
          <p className="text-xl max-w-3xl mx-auto">
            A systematic approach that consistently delivers results for our clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm h-full">
                <div className="text-4xl font-bold text-blue-400 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-200">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-8 w-8 text-blue-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
