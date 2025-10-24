"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sprout } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
              <Sprout className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Blockchain-Verified Agriculture</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Smart Fertilizer Recommendations for Modern Farmers
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl">
              Upload your soil data, get AI-powered fertilizer recommendations, and earn rewards through blockchain
              verification. Transparent, secure, and rewarding.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" asChild className="gap-2">
                <Link href="/upload">
                  Start Analyzing
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#how-it-works">Learn More</Link>
              </Button>
            </div>

            <div className="flex gap-8 pt-8 border-t border-border">
              <div>
                <p className="text-2xl font-bold text-primary">10K+</p>
                <p className="text-sm text-muted-foreground">Farmers Verified</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">$2.5M</p>
                <p className="text-sm text-muted-foreground">Rewards Distributed</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">98%</p>
                <p className="text-sm text-muted-foreground">Accuracy Rate</p>
              </div>
            </div>
          </div>

          <div className="relative h-96 sm:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 flex items-center justify-center">
            <div className="absolute inset-0 bg-[url('/soil-analysis-dashboard.jpg')] bg-cover bg-center opacity-50" />
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30">
                <Sprout className="h-10 w-10 text-primary" />
              </div>
              <p className="mt-4 text-sm font-medium text-muted-foreground">Soil Analysis Dashboard</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
