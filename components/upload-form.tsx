"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Upload, Camera, FileUp, Loader2 } from "lucide-react"

export default function UploadForm() {
  const [uploadMethod, setUploadMethod] = useState<"file" | "camera" | "manual">("file")
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    temperature: "",
    humidity: "",
    moisture: "",
    cropType: "",
  })

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setIsLoading(true)
      // Simulate file processing
      setTimeout(() => {
        setIsLoading(false)
        alert("File uploaded successfully! Processing your data...")
      }, 2000)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      alert("Data submitted! Generating recommendation...")
    }, 2000)
  }

  return (
    <div className="space-y-6">
      {/* Upload Method Selector */}
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { id: "file", label: "Upload File", icon: FileUp },
          { id: "camera", label: "Take Photo", icon: Camera },
          { id: "manual", label: "Manual Entry", icon: Upload },
        ].map((method) => (
          <button
            key={method.id}
            onClick={() => setUploadMethod(method.id as any)}
            className={`p-4 rounded-lg border-2 transition-all ${
              uploadMethod === method.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
            }`}
          >
            <method.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
            <p className="font-medium text-sm">{method.label}</p>
          </button>
        ))}
      </div>

      {/* File Upload */}
      {uploadMethod === "file" && (
        <Card>
          <CardHeader>
            <CardTitle>Upload Soil Data File</CardTitle>
            <CardDescription>Drag and drop your CSV or JSON file, or click to browse</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
              <input type="file" accept=".csv,.json" onChange={handleFileUpload} className="hidden" id="file-upload" />
              <label htmlFor="file-upload" className="cursor-pointer">
                <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <p className="font-medium text-foreground mb-1">Drop your file here</p>
                <p className="text-sm text-muted-foreground">or click to select CSV/JSON</p>
              </label>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Camera Capture */}
      {uploadMethod === "camera" && (
        <Card>
          <CardHeader>
            <CardTitle>Capture Leaf Photo</CardTitle>
            <CardDescription>Take a clear photo of your plant leaves for analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted rounded-lg p-8 text-center">
              <Camera className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <Button className="mt-4">Open Camera</Button>
              <p className="text-sm text-muted-foreground mt-4">
                Ensure good lighting and clear visibility of the leaves
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Manual Entry */}
      {uploadMethod === "manual" && (
        <Card>
          <CardHeader>
            <CardTitle>Enter Soil Data Manually</CardTitle>
            <CardDescription>Input your soil test results directly</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium mb-2">Nitrogen (N) ppm</label>
                  <Input
                    type="number"
                    name="nitrogen"
                    value={formData.nitrogen}
                    onChange={handleInputChange}
                    placeholder="e.g., 45"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phosphorus (P) ppm</label>
                  <Input
                    type="number"
                    name="phosphorus"
                    value={formData.phosphorus}
                    onChange={handleInputChange}
                    placeholder="e.g., 20"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Potassium (K) ppm</label>
                  <Input
                    type="number"
                    name="potassium"
                    value={formData.potassium}
                    onChange={handleInputChange}
                    placeholder="e.g., 150"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Temperature (°C)</label>
                  <Input
                    type="number"
                    name="temperature"
                    value={formData.temperature}
                    onChange={handleInputChange}
                    placeholder="e.g., 25"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Humidity (%)</label>
                  <Input
                    type="number"
                    name="humidity"
                    value={formData.humidity}
                    onChange={handleInputChange}
                    placeholder="e.g., 65"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Soil Moisture (%)</label>
                  <Input
                    type="number"
                    name="moisture"
                    value={formData.moisture}
                    onChange={handleInputChange}
                    placeholder="e.g., 30"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Crop Type</label>
                <select
                  name="cropType"
                  value={formData.cropType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                  required
                >
                  <option value="">Select a crop</option>
                  <option value="wheat">Wheat</option>
                  <option value="corn">Corn</option>
                  <option value="rice">Rice</option>
                  <option value="soybean">Soybean</option>
                  <option value="cotton">Cotton</option>
                  <option value="sugarcane">Sugarcane</option>
                </select>
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Get Recommendation"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
