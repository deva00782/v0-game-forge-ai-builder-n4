"use client"

import { Card } from "@/components/ui/card"

interface LaptopFiltersProps {
  budgetRange: [number, number]
  onBudgetChange: (range: [number, number]) => void
  performanceTier: string
  onPerformanceTierChange: (tier: string) => void
  selectedUseCase: string
  onUseCaseChange: (useCase: string) => void
}

export function LaptopFilters({
  budgetRange,
  onBudgetChange,
  performanceTier,
  onPerformanceTierChange,
  selectedUseCase,
  onUseCaseChange,
}: LaptopFiltersProps) {
  const useCases = ["All", "Esports", "AAA Games", "Content Creation", "Streaming", "Productivity"]
  const tiers = ["all", "budget", "mid-range", "high-end", "ultra"]

  return (
    <Card className="bg-card/50 border-primary/20 p-6 space-y-6 sticky top-24">
      {/* Budget Filter */}
      <div className="space-y-3">
        <label className="text-sm font-medium">Budget Range</label>
        <div className="flex items-center justify-between text-sm">
          <span>${budgetRange[0]}</span>
          <span>${budgetRange[1]}</span>
        </div>
        <input
          type="range"
          min="500"
          max="2500"
          step="100"
          value={budgetRange[1]}
          onChange={(e) => onBudgetChange([budgetRange[0], Number(e.target.value)])}
          className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer accent-primary"
        />
      </div>

      {/* Performance Tier */}
      <div className="space-y-3">
        <label className="text-sm font-medium">Performance Tier</label>
        <div className="space-y-2">
          {tiers.map((tier) => (
            <button
              key={tier}
              onClick={() => onPerformanceTierChange(tier)}
              className={`w-full p-2 rounded-lg border-2 transition text-sm font-medium capitalize ${
                performanceTier === tier
                  ? "border-primary bg-primary/20 text-foreground"
                  : "border-border/50 bg-card/50 text-muted-foreground hover:border-primary/50"
              }`}
            >
              {tier === "all" ? "All Tiers" : tier}
            </button>
          ))}
        </div>
      </div>

      {/* Use Case */}
      <div className="space-y-3">
        <label className="text-sm font-medium">Best For</label>
        <div className="space-y-2">
          {useCases.map((useCase) => (
            <button
              key={useCase}
              onClick={() => onUseCaseChange(useCase)}
              className={`w-full p-2 rounded-lg border-2 transition text-sm font-medium ${
                selectedUseCase === useCase
                  ? "border-secondary bg-secondary/20 text-foreground"
                  : "border-border/50 bg-card/50 text-muted-foreground hover:border-secondary/50"
              }`}
            >
              {useCase}
            </button>
          ))}
        </div>
      </div>
    </Card>
  )
}
