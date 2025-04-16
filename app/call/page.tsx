"use client"

import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Phone } from "lucide-react"

export default function CallPage() {
  const router = useRouter()

  // Automatically redirect back to home page after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/")
    }, 5000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 max-w-md">
          <div className="bg-purple-100 p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-6">
              <div className="bg-purple-800 text-white p-4 rounded-full">
                <Phone className="h-8 w-8" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-purple-800 mb-4">Calling Brandstorm AI now</h1>
            <p className="text-xl text-gray-600 mb-4">1-888-383-2473</p>
            <p className="text-sm text-gray-500">This is a demo page. No actual call is being placed.</p>
            <p className="text-sm text-gray-500 mt-4">Redirecting to home page in 5 seconds...</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
