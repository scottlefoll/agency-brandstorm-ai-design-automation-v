import type { Metadata } from "next"
import CaseStudyClientPage from "./CaseStudyClientPage"

export const metadata: Metadata = {
  title: "Case Studies - Brandstorm AI",
  description: "Explore our success stories and see how we've helped businesses achieve remarkable growth.",
}

export default function CaseStudyPage() {
  return <CaseStudyClientPage />
}
