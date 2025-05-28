import type { Metadata } from "next"
import ReviewsPageClient from "./ReviewsPageClient"

export const metadata: Metadata = {
  title: "Reviews - Brandstorm AI",
  description: "See what our clients are saying about our services and results.",
}

export default function ReviewsPage() {
  return <ReviewsPageClient />
}
