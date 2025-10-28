"use client"

import { useState } from "react"
import { components } from "@/lib/mock-data"
import type { Component } from "@/lib/mock-data"
import { ChevronDown, Check } from "lucide-react"

interface ComponentSelectorProps {
  category: "cpu" | "gpu" | "ram" | "storage" | "psu" | "case" | "cooler"
  selectedComponent: Component | null
  onSelect: (component: Component) => void
}

const categoryLabels: Record<string, string> = {
  cpu: "Processor",
  gpu: "Graphics Card",
  ram: "Memory",
  storage: "Storage",
  psu: "Power Supply",
  case: "Case",
  cooler: "CPU Cooler",
}

export function ComponentSelector({ category, selectedComponent, onSelect }: ComponentSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const categoryComponents = components.filter((c) => c.category === category)

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">{categoryLabels[category]}</label>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-3 rounded-lg border border-border/50 bg-card/50 hover:border-primary/50 transition text-left flex items-center justify-between"
        >
          <span className={selectedComponent ? "text-foreground" : "text-muted-foreground"}>
            {selectedComponent ? selectedComponent.name : `Select ${categoryLabels[category]}`}
          </span>
          <ChevronDown className={`w-4 h-4 transition ${isOpen ? "rotate-180" : ""}`} />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border/50 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
            {categoryComponents.map((component) => (
              <button
                key={component.id}
                onClick={() => {
                  onSelect(component)
                  setIsOpen(false)
                }}
                className="w-full p-3 hover:bg-primary/10 transition text-left border-b border-border/50 last:border-b-0 flex items-center justify-between group"
              >
                <div className="flex-1">
                  <p className="font-medium group-hover:text-primary transition">{component.name}</p>
                  <p className="text-xs text-muted-foreground">${component.price}</p>
                </div>
                {selectedComponent?.id === component.id && <Check className="w-4 h-4 text-primary" />}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
