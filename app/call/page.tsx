"use client"

import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Phone } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function CallPage() {
  const router = useRouter()
  const isMobile = useMobile()

  // Automatically redirect back to home page after 5 seconds
  useEffect(() => {
    // If on mobile, try to initiate a call
    if (isMobile) {
      window.location.href = "tel:18883832473"
    }

    const timer = setTimeout(() => {
      router.push("/")
    }, 5000)

    return () => clearTimeout(timer)
  }, [router, isMobile])

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
            <h1 className="text-2xl font-bold text-purple-800 mb-4">
              {isMobile ? "Calling Brandstorm AI now" : "Request a Callback"}
            </h1>
            <p className="text-xl text-gray-600 mb-4">1-888-383-2473</p>
            <p className="text-sm text-gray-500">
              {isMobile
                ? "Initiating call..."
                : "We'll call you back shortly. Please fill out the form to schedule your callback."}
            </p>
            <p className="text-sm text-gray-500 mt-4">Redirecting to home page in 5 seconds...</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
