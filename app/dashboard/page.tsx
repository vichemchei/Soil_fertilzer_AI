"use client"

import Navigation from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { CheckCircle2, Clock, TrendingUp } from "lucide-react"

const recentReports = [
  {
    id: 1,
    date: "2024-10-20",
    crop: "Wheat",
    status: "verified",
    recommendation: "NPK 20-10-10",
    txHash: "0x7f3a...b2c1",
    tokensEarned: 50,
  },
  {
    id: 2,
    date: "2024-10-18",
    crop: "Corn",
    status: "verified",
    recommendation: "NPK 25-15-15",
    txHash: "0x4e2b...a9d3",
    tokensEarned: 50,
  },
  {
    id: 3,
    date: "2024-10-15",
    crop: "Rice",
    status: "pending",
    recommendation: "NPK 18-8-8",
    txHash: "Pending...",
    tokensEarned: 0,
  },
]

const soilTrendData = [
  { month: "Jun", nitrogen: 40, phosphorus: 24, potassium: 24 },
  { month: "Jul", nitrogen: 45, phosphorus: 26, potassium: 28 },
  { month: "Aug", nitrogen: 50, phosphorus: 28, potassium: 32 },
  { month: "Sep", nitrogen: 48, phosphorus: 30, potassium: 35 },
  { month: "Oct", nitrogen: 55, phosphorus: 32, potassium: 38 },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Your Dashboard</h1>
          <p className="text-lg text-muted-foreground">Track your soil health and blockchain verification status</p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">24</p>
              <p className="text-xs text-muted-foreground mt-1">+3 this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Verified</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">23</p>
              <p className="text-xs text-muted-foreground mt-1">95.8% success rate</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">FARM Tokens</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-accent">1,150</p>
              <p className="text-xs text-muted-foreground mt-1">+50 earned today</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Wallet</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm font-mono text-foreground truncate">0x7f3a...b2c1</p>
              <Button variant="outline" size="sm" className="mt-2 w-full bg-transparent">
                Connect Wallet
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid gap-6 lg:grid-cols-2 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Soil Nutrient Trends</CardTitle>
              <CardDescription>NPK levels over the past 5 months</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={soilTrendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                  <XAxis stroke="var(--color-muted-foreground)" />
                  <YAxis stroke="var(--color-muted-foreground)" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="nitrogen" stroke="var(--color-chart-1)" strokeWidth={2} />
                  <Line type="monotone" dataKey="phosphorus" stroke="var(--color-chart-2)" strokeWidth={2} />
                  <Line type="monotone" dataKey="potassium" stroke="var(--color-chart-3)" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Verification Status</CardTitle>
              <CardDescription>Blockchain transaction status</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <div className="flex-1">
                  <p className="font-medium text-sm">Verified Reports</p>
                  <p className="text-xs text-muted-foreground">23 on Sui blockchain</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-yellow-500" />
                <div className="flex-1">
                  <p className="font-medium text-sm">Pending Verification</p>
                  <p className="text-xs text-muted-foreground">1 awaiting confirmation</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp className="h-5 w-5 text-blue-500" />
                <div className="flex-1">
                  <p className="font-medium text-sm">Average Time</p>
                  <p className="text-xs text-muted-foreground">~2 minutes per verification</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Reports */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Reports</CardTitle>
            <CardDescription>Your latest soil analysis submissions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Date</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Crop</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Recommendation</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Tx Hash</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Tokens</th>
                  </tr>
                </thead>
                <tbody>
                  {recentReports.map((report) => (
                    <tr key={report.id} className="border-b border-border hover:bg-muted/50">
                      <td className="py-3 px-4">{report.date}</td>
                      <td className="py-3 px-4 font-medium">{report.crop}</td>
                      <td className="py-3 px-4">{report.recommendation}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                            report.status === "verified"
                              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                              : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                          }`}
                        >
                          {report.status === "verified" ? (
                            <CheckCircle2 className="h-3 w-3" />
                          ) : (
                            <Clock className="h-3 w-3" />
                          )}
                          {report.status === "verified" ? "Verified" : "Pending"}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-mono text-xs">{report.txHash}</td>
                      <td className="py-3 px-4 font-medium text-primary">{report.tokensEarned}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
