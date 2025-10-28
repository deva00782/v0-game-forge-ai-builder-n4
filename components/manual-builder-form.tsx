"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ComponentSelector } from "@/components/component-selector"
import type { Component } from "@/lib/mock-data"
import { AlertCircle, CheckCircle } from "lucide-react"

interface ManualBuilderFormProps {
  onBuildComplete: (components: Component[]) => void
}

export function ManualBuilderForm({ onBuildComplete }: ManualBuilderFormProps) {
  const [selectedComponents, setSelectedComponents] = useState<Record<string, Component | null>>({
    cpu: null,
    gpu: null,
    ram: null,
    storage: null,
    psu: null,
    case: null,
    cooler: null,
  })

  const categories: Array<"cpu" | "gpu" | "ram" | "storage" | "psu" | "case" | "cooler"> = [
    "cpu",
    "gpu",
    "ram",
    "storage",
    "psu",
    "case",
    "cooler",
  ]

  const handleComponentSelect = (category: string, component: Component) => {
    setSelectedComponents((prev) => ({
      ...prev,
      [category]: component,
    }))
  }

  const totalPrice = Object.values(selectedComponents).reduce((sum, comp) => sum + (comp?.price || 0), 0)
  const performanceScore = Math.round(
    Object.values(selectedComponents).reduce((sum, comp) => sum + (comp?.performance || 0), 0) / 7,
  )
  const isComplete = Object.values(selectedComponents).every((comp) => comp !== null)

  // Simple compatibility check
  const hasCompatibilityIssues = () => {
    const psuWattage = selectedComponents.psu?.specs.wattage
    const cpuTdp = selectedComponents.cpu?.specs.tdp
    const gpuTdp = selectedComponents.gpu?.specs.tdp

    if (psuWattage && cpuTdp && gpuTdp) {
      const requiredWattage = Number.parseInt(cpuTdp) + Number.parseInt(gpuTdp) + 100
      const availableWattage = Number.parseInt(psuWattage)
      return requiredWattage > availableWattage
    }
    return false
  }

  return (
    <div className="space-y-8">
      {/* Component Selection Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {categories.map((category) => (
          <ComponentSelector
            key={category}
            category={category}
            selectedComponent={selectedComponents[category]}
            onSelect={(component) => handleComponentSelect(category, component)}
          />
        ))}
      </div>

      {/* Build Summary */}
      <Card className="bg-gradient-to-br from-primary/20 to-accent/20 border-primary/30 p-6 space-y-4">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Total Price</p>
            <p className="text-3xl font-bold">${totalPrice}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Performance Score</p>
            <p className="text-3xl font-bold">{performanceScore}/10</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Components Selected</p>
            <p className="text-3xl font-bold">{Object.values(selectedComponents).filter((c) => c !== null).length}/7</p>
          </div>
        </div>
      </Card>

      {/* Compatibility Warning */}
      {hasCompatibilityIssues() && (
        <Card className="bg-destructive/10 border-destructive/30 p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-destructive">Power Supply Warning</p>
            <p className="text-sm text-destructive/80">
              Your PSU may not have enough wattage for this build. Consider upgrading.
            </p>
          </div>
        </Card>
      )}

      {/* Compatibility Check */}
      {isComplete && !hasCompatibilityIssues() && (
        <Card className="bg-green-500/10 border-green-500/30 p-4 flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-green-500">All Components Compatible</p>
            <p className="text-sm text-green-500/80">Your build is ready to go!</p>
          </div>
        </Card>
      )}

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Button
          onClick={() => onBuildComplete(Object.values(selectedComponents).filter((c) => c !== null) as Component[])}
          disabled={!isComplete}
          className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 disabled:opacity-50"
        >
          Review Build
        </Button>
      </div>
    </div>
  )
}
