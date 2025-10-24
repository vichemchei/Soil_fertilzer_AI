"use client"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import FeaturesGrid from "@/components/features-grid"
import CTASection from "@/components/cta-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturesGrid />
      <CTASection />
    </div>
  )
}
