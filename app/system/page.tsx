import type { Metadata } from "next"
import SystemPageClient from "./SystemPageClient"

export const metadata: Metadata = {
  title: "System - Brandstorm AI",
  description: "Learn about our proprietary system for business growth and market domination.",
}

export default function SystemPage() {
  return <SystemPageClient />
}
