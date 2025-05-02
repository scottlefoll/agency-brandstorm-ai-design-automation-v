import Image from "next/image"
import { Button } from "@/components/ui/button"

export function CaseStudySection() {
  const caseStudies = [
    {
      title: "Plumbing Company",
      image: "/placeholder.svg?height=300&width=500",
      results: "127% increase in leads",
    },
    {
      title: "Law Firm",
      image: "/placeholder.svg?height=300&width=500",
      results: "85% increase in conversions",
    },
    {
      title: "Roofing Company",
      image: "/placeholder.svg?height=300&width=500",
      results: "10X ROI on marketing spend",
    },
  ]

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-800">CASE STUDY</h2>
          <p className="text-lg max-w-3xl mx-auto">
            See how we've helped businesses like yours dominate their local markets
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src={
                  index === 0
                    ? "/images/case-study-plumbing.png"
                    : index === 1
                      ? "/images/case-study-law.png"
                      : "/images/case-study-roofing.png"
                }
                alt={study.title}
                width={500}
                height={300}
                className="w-full aspect-video object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{study.title}</h3>
                <p className="text-purple-700 font-semibold">{study.results}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            asChild
          >
            <a href="/case-study">VIEW ALL CASE STUDIES</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
