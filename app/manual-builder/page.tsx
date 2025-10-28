"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BuilderSwitch } from "@/components/builder-switch"
import { ManualBuilderForm } from "@/components/manual-builder-form"
import { BuildDisplay } from "@/components/build-display"
import type { Component } from "@/lib/mock-data"
import { ArrowLeft } from "lucide-react"

export default function ManualBuilderPage() {
  const [completedBuild, setCompletedBuild] = useState<Component[] | null>(null)

  const handleBuildComplete = (components: Component[]) => {
    setCompletedBuild(components)
  }

  const totalPrice = completedBuild?.reduce((sum, c) => sum + c.price, 0) || 0
  const performanceScore = completedBuild
    ? Math.round(completedBuild.reduce((sum, c) => sum + c.performance, 0) / completedBuild.length)
    : 0

  const buildObject = completedBuild
    ? {
        id: `manual-build-${Date.now()}`,
        name: "Custom Manual Build",
        budget: totalPrice,
        components: completedBuild,
        totalPrice,
        performanceScore,
        description: "Handpicked components for your perfect build",
      }
    : null

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back</span>
          </Link>
          <BuilderSwitch />
          <div className="w-12" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!completedBuild ? (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Manual PC Builder</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Take full control and select each component yourself. Get real-time compatibility checking and pricing
                updates.
              </p>
            </div>

            <ManualBuilderForm onBuildComplete={handleBuildComplete} />
          </div>
        ) : (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h1 className="text-4xl font-bold">Your Custom Build</h1>
              <Button
                onClick={() => setCompletedBuild(null)}
                variant="outline"
                className="border-secondary/50 hover:bg-secondary/10 bg-transparent"
              >
                Edit Build
              </Button>
            </div>

            {buildObject && <BuildDisplay build={buildObject} />}
          </div>
        )}
      </div>
    </main>
  )
}
