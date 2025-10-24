"use client"
import Navigation from "@/components/navigation"
import UploadForm from "@/components/upload-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function UploadPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Upload Soil Data</h1>
          <p className="text-lg text-muted-foreground">
            Share your soil test results to get personalized fertilizer recommendations
          </p>
        </div>

        <UploadForm />

        <div className="grid gap-6 md:grid-cols-2 mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Supported Formats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>• CSV files with soil parameters</p>
              <p>• JSON formatted soil data</p>
              <p>• Leaf/plant photos for analysis</p>
              <p>• Manual data entry form</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Required Data</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>• Nitrogen (N) level</p>
              <p>• Phosphorus (P) level</p>
              <p>• Potassium (K) level</p>
              <p>• Temperature & Humidity</p>
              <p>• Crop type</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
