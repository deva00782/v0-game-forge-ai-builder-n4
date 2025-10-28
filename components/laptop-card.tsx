"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Laptop } from "@/lib/laptop-data"
import { Star, Zap } from "lucide-react"

interface LaptopCardProps {
  laptop: Laptop
  onSelect: (laptop: Laptop) => void
}

const tierColors: Record<string, string> = {
  budget: "from-blue-500 to-cyan-500",
  "mid-range": "from-purple-500 to-pink-500",
  "high-end": "from-orange-500 to-red-500",
  ultra: "from-yellow-500 to-orange-500",
}

export function LaptopCard({ laptop, onSelect }: LaptopCardProps) {
  return (
    <Card className="bg-card/50 border-primary/20 hover:border-primary/50 transition overflow-hidden group cursor-pointer">
      {/* Header with tier badge */}
      <div className={`bg-gradient-to-r ${tierColors[laptop.performanceTier]} p-4 text-white`}>
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium opacity-90">{laptop.brand}</p>
            <h3 className="text-xl font-bold">{laptop.name}</h3>
          </div>
          <div className="flex items-center gap-1 bg-black/20 px-2 py-1 rounded">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-semibold">{laptop.rating}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold">${laptop.price}</span>
          <span className="text-sm text-muted-foreground">USD</span>
        </div>

        {/* Key Specs */}
        <div className="grid grid-cols-2 gap-3 py-4 border-y border-border/50">
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">CPU</p>
            <p className="text-sm font-medium">{laptop.specs.cpu}</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">GPU</p>
            <p className="text-sm font-medium">{laptop.specs.gpu}</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">RAM</p>
            <p className="text-sm font-medium">{laptop.specs.ram}</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Display</p>
            <p className="text-sm font-medium">{laptop.specs.display}</p>
          </div>
        </div>

        {/* Best For Tags */}
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground">Best For</p>
          <div className="flex flex-wrap gap-2">
            {laptop.bestFor.map((useCase) => (
              <span key={useCase} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                {useCase}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <Button
          onClick={() => onSelect(laptop)}
          className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 mt-4"
        >
          <Zap className="w-4 h-4 mr-2" />
          View Details
        </Button>
      </div>
    </Card>
  )
}
