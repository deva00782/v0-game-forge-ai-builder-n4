"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Laptop } from "@/lib/laptop-data"
import { X, Star, Zap } from "lucide-react"

interface LaptopDetailProps {
  laptop: Laptop
  onClose: () => void
}

export function LaptopDetail({ laptop, onClose }: LaptopDetailProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="bg-card border-primary/30 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border/50 p-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">{laptop.brand}</p>
            <h2 className="text-2xl font-bold">{laptop.name}</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-primary/10 rounded-lg transition">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Price and Rating */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Price</p>
              <p className="text-4xl font-bold">${laptop.price}</p>
            </div>
            <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-lg">
              <Star className="w-5 h-5 fill-primary text-primary" />
              <span className="text-lg font-semibold">{laptop.rating}/5</span>
            </div>
          </div>

          {/* Full Specs */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Specifications</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {Object.entries(laptop.specs).map(([key, value]) => (
                <div key={key} className="bg-card/50 border border-border/50 p-4 rounded-lg space-y-1">
                  <p className="text-sm text-muted-foreground capitalize">{key}</p>
                  <p className="font-medium">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Tier */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Performance Tier</p>
            <div className="inline-block px-4 py-2 bg-primary/20 border border-primary/50 rounded-lg">
              <p className="font-semibold capitalize">{laptop.performanceTier}</p>
            </div>
          </div>

          {/* Best For */}
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">Best For</p>
            <div className="flex flex-wrap gap-2">
              {laptop.bestFor.map((useCase) => (
                <span
                  key={useCase}
                  className="px-3 py-1 bg-secondary/20 border border-secondary/50 rounded-full text-sm"
                >
                  {useCase}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
              <Zap className="w-4 h-4 mr-2" />
              Add to Comparison
            </Button>
            <Button
              onClick={onClose}
              variant="outline"
              className="flex-1 border-border/50 hover:bg-border/10 bg-transparent"
            >
              Close
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
