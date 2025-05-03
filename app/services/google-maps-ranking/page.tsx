import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Google Maps Ranking - Brandstorm AI",
  description: "Dominate the local map pack and be the first business customers see when searching in your area.",
}

export default function GoogleMapsRankingPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold text-purple-800 mb-4">Google Maps Ranking</h1>
          <p className="text-xl text-gray-600">Service page coming soon</p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
