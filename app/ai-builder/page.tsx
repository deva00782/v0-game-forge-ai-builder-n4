"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BuilderSwitch } from "@/components/builder-switch"
import { AIBuilderForm } from "@/components/ai-builder-form"
import { BuildDisplay } from "@/components/build-display"
import type { Build } from "@/lib/mock-data"
import { ArrowLeft } from "lucide-react"

export default function AIBuilderPage() {
  const [generatedBuild, setGeneratedBuild] = useState<Build | null>(null)

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
        {!generatedBuild ? (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">AI-Powered PC Builder</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Answer a few questions about your gaming needs and budget. Our AI will recommend the perfect components
                for your build.
              </p>
            </div>

            <AIBuilderForm onBuildGenerated={setGeneratedBuild} />
          </div>
        ) : (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h1 className="text-4xl font-bold">Your AI-Recommended Build</h1>
              <Button
                onClick={() => setGeneratedBuild(null)}
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 bg-transparent"
              >
                Start Over
              </Button>
            </div>

            <BuildDisplay build={generatedBuild} />
          </div>
        )}
      </div>
    </main>
  )
}
