import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Case Studies - Brandstorm AI",
  description: "Explore our success stories and see how we've helped businesses achieve remarkable growth.",
}

export default function CaseStudyPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold text-purple-800 mb-4">Case Study Page</h1>
          <p className="text-xl text-gray-600">Coming Soon</p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
