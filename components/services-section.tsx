import { Check, Zap, Globe, Search, BarChart, Bot } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ServicesSection() {
  const services = [
    {
      icon: <Globe className="h-10 w-10 text-blue-500" />,
      title: "Web Design",
      description:
        "Custom-designed websites that convert visitors into customers with strategic layouts and compelling content.",
    },
    {
      icon: <Search className="h-10 w-10 text-blue-500" />,
      title: "Google Business Profile Optimization",
      description:
        "Maximize your local visibility with a fully optimized Google Business Profile that attracts more customers.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-blue-500" />,
      title: "Google Maps Ranking",
      description: "Dominate the local map pack and be the first business customers see when searching in your area.",
    },
    {
      icon: <Zap className="h-10 w-10 text-blue-500" />,
      title: "Sales Automation",
      description:
        "Streamline your sales process with automated systems that nurture leads and close deals while you focus on growth.",
    },
    {
      icon: <Bot className="h-10 w-10 text-blue-500" />,
      title: "AI Employees",
      description:
        "Leverage cutting-edge AI technology to handle repetitive tasks, customer inquiries, and lead qualification 24/7.",
    },
    {
      icon: <Check className="h-10 w-10 text-blue-500" />,
      title: "Brand Strategy",
      description:
        "Develop a powerful brand identity that resonates with your target audience and sets you apart from competitors.",
    },
  ]

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions designed to help local businesses dominate their market and achieve sustainable
            growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-blue-500 transition-all duration-300">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
