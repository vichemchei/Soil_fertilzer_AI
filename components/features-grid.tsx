"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, Zap, Shield, TrendingUp, Lock, Award } from "lucide-react"

const features = [
  {
    icon: Upload,
    title: "Easy Data Upload",
    description: "Upload soil test data via CSV, JSON, or capture photos directly from your phone.",
  },
  {
    icon: Zap,
    title: "AI Recommendations",
    description: "Get instant fertilizer recommendations powered by machine learning models.",
  },
  {
    icon: Shield,
    title: "Blockchain Verified",
    description: "All recommendations are recorded on Sui blockchain for transparency and trust.",
  },
  {
    icon: TrendingUp,
    title: "Track Progress",
    description: "Monitor your soil health improvements over time with detailed analytics.",
  },
  {
    icon: Lock,
    title: "Privacy Protected",
    description: "Your personal data stays private. Only verification hashes are stored on-chain.",
  },
  {
    icon: Award,
    title: "Earn Rewards",
    description: "Receive FARM tokens for each verified soil report and recommendation.",
  },
]

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-20 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Powerful Features for Farmers</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to make data-driven decisions about your soil and crops.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="border border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
