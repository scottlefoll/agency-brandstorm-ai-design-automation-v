import Image from "next/image"
import Link from "next/link"

interface CaseStudyCardProps {
  title: string
  services: string[]
  results: string[]
  image: string
  slug: string
}

export function CaseStudyCard({ title, services, results, image, slug }: CaseStudyCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl">
      <div className="relative h-48 w-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>

        <div className="mb-4">
          {services.map((service, index) => (
            <span
              key={index}
              className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded mr-2 mb-2"
            >
              {service}
            </span>
          ))}
        </div>

        <ul className="mb-4 text-gray-700">
          {results.map((result, index) => (
            <li key={index} className="mb-1 flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <span>{result}</span>
            </li>
          ))}
        </ul>

        <Link
          href={`/case-study/${slug}`}
          className="inline-block w-full text-center bg-purple-700 hover:bg-purple-800 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Read Full Case Study
        </Link>
      </div>
    </div>
  )
}
