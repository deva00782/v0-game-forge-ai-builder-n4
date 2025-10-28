"use client"

import { Card } from "@/components/ui/card"

interface FactsFilterProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export function FactsFilter({ selectedCategory, onCategoryChange }: FactsFilterProps) {
  const categories = [
    { id: "all", label: "All Facts" },
    { id: "gaming", label: "Gaming" },
    { id: "hardware", label: "Hardware" },
    { id: "performance", label: "Performance" },
    { id: "history", label: "History" },
  ]

  return (
    <Card className="bg-card/50 border-primary/20 p-6 space-y-4">
      <h3 className="font-semibold">Filter by Category</h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`w-full p-3 rounded-lg border-2 transition text-sm font-medium ${
              selectedCategory === category.id
                ? "border-primary bg-primary/20 text-foreground"
                : "border-border/50 bg-card/50 text-muted-foreground hover:border-primary/50"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </Card>
  )
}
