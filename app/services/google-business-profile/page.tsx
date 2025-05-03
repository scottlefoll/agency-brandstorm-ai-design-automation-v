import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Google Business Profile - Brandstorm AI",
  description:
    "Maximize your local visibility with a fully optimized Google Business Profile that attracts more customers.",
}

export default function GoogleBusinessProfilePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold text-purple-800 mb-4">Google Business Profile</h1>
          <p className="text-xl text-gray-600">Service page coming soon</p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
