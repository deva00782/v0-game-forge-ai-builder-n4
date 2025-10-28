"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LaptopFilters } from "@/components/laptop-filters"
import { LaptopCard } from "@/components/laptop-card"
import { LaptopDetail } from "@/components/laptop-detail"
import { laptops } from "@/lib/laptop-data"
import type { Laptop } from "@/lib/laptop-data"
import { ArrowLeft, LaptopIcon } from "lucide-react"

export default function LaptopAdvisorPage() {
  const [budgetRange, setBudgetRange] = useState<[number, number]>([500, 2500])
  const [performanceTier, setPerformanceTier] = useState("all")
  const [selectedUseCase, setSelectedUseCase] = useState("All")
  const [selectedLaptop, setSelectedLaptop] = useState<Laptop | null>(null)

  const filteredLaptops = laptops.filter((laptop) => {
    const inBudget = laptop.price >= budgetRange[0] && laptop.price <= budgetRange[1]
    const matchesTier = performanceTier === "all" || laptop.performanceTier === performanceTier
    const matchesUseCase = selectedUseCase === "All" || laptop.bestFor.includes(selectedUseCase)

    return inBudget && matchesTier && matchesUseCase
  })

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back</span>
          </Link>
          <div className="flex items-center gap-2">
            <LaptopIcon className="w-5 h-5 text-secondary" />
            <span className="font-semibold">Laptop Advisor</span>
          </div>
          <div className="w-12" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <div className="mb-12 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Gaming Laptop Advisor</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find your perfect gaming laptop. Filter by budget, performance tier, and gaming preferences.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters */}
          <div className="lg:col-span-1">
            <LaptopFilters
              budgetRange={budgetRange}
              onBudgetChange={setBudgetRange}
              performanceTier={performanceTier}
              onPerformanceTierChange={setPerformanceTier}
              selectedUseCase={selectedUseCase}
              onUseCaseChange={setSelectedUseCase}
            />
          </div>

          {/* Laptops Grid */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <p className="text-sm text-muted-foreground">
                Showing {filteredLaptops.length} of {laptops.length} laptops
              </p>
            </div>

            {filteredLaptops.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredLaptops.map((laptop) => (
                  <LaptopCard key={laptop.id} laptop={laptop} onSelect={setSelectedLaptop} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 space-y-4">
                <p className="text-lg text-muted-foreground">No laptops match your filters</p>
                <Button
                  onClick={() => {
                    setBudgetRange([500, 2500])
                    setPerformanceTier("all")
                    setSelectedUseCase("All")
                  }}
                  variant="outline"
                  className="border-primary/50 hover:bg-primary/10 bg-transparent"
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedLaptop && <LaptopDetail laptop={selectedLaptop} onClose={() => setSelectedLaptop(null)} />}
    </main>
  )
}
