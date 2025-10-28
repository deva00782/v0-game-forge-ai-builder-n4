"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Build } from "@/lib/mock-data"
import { Download, Share2 } from "lucide-react"

interface BuildDisplayProps {
  build: Build
}

export function BuildDisplay({ build }: BuildDisplayProps) {
  const categoryLabels: Record<string, string> = {
    cpu: "Processor",
    gpu: "Graphics Card",
    ram: "Memory",
    storage: "Storage",
    psu: "Power Supply",
    case: "Case",
    cooler: "CPU Cooler",
  }

  return (
    <div className="space-y-6">
      {/* Build Summary */}
      <Card className="bg-gradient-to-br from-primary/20 to-accent/20 border-primary/30 p-8 space-y-4">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Total Budget</p>
            <p className="text-3xl font-bold">${build.totalPrice}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Performance Score</p>
            <p className="text-3xl font-bold">{build.performanceScore}/10</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Optimization</p>
            <p className="text-3xl font-bold">{build.description}</p>
          </div>
        </div>
      </Card>

      {/* Components */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">Recommended Components</h3>
        <div className="grid gap-4">
          {build.components.map((component) => (
            <Card
              key={component.id}
              className="bg-card/50 border-primary/20 hover:border-primary/50 transition p-6 space-y-4"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground font-medium">{categoryLabels[component.category]}</p>
                  <h4 className="text-lg font-semibold">{component.name}</h4>
                </div>
                <div className="text-right space-y-1">
                  <p className="text-2xl font-bold text-primary">${component.price}</p>
                  <p className="text-xs text-muted-foreground">Performance: {component.performance}/10</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2 border-t border-border/50">
                {Object.entries(component.specs).map(([key, value]) => (
                  <div key={key} className="space-y-1">
                    <p className="text-xs text-muted-foreground capitalize">{key}</p>
                    <p className="text-sm font-medium">{value}</p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-4">
        <Button className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
          <Download className="w-4 h-4 mr-2" />
          Save Build
        </Button>
        <Button variant="outline" className="flex-1 border-primary/50 hover:bg-primary/10 bg-transparent">
          <Share2 className="w-4 h-4 mr-2" />
          Share
        </Button>
      </div>
    </div>
  )
}
