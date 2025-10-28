"use client"

import { Card } from "@/components/ui/card"
import type { Fact } from "@/lib/facts-data"
import { Share2 } from "lucide-react"

interface FactCardProps {
  fact: Fact
  index: number
}

const categoryColors: Record<string, string> = {
  gaming: "from-blue-500 to-cyan-500",
  hardware: "from-purple-500 to-pink-500",
  performance: "from-orange-500 to-red-500",
  history: "from-green-500 to-emerald-500",
}

const categoryLabels: Record<string, string> = {
  gaming: "Gaming",
  hardware: "Hardware",
  performance: "Performance",
  history: "History",
}

export function FactCard({ fact, index }: FactCardProps) {
  return (
    <Card
      className="bg-card/50 border-primary/20 hover:border-primary/50 transition overflow-hidden group"
      style={{
        animation: `slideIn 0.5s ease-out ${index * 0.1}s both`,
      }}
    >
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Header with category */}
      <div className={`bg-gradient-to-r ${categoryColors[fact.category]} p-4 text-white`}>
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3">
            <span className="text-3xl">{fact.icon}</span>
            <div>
              <p className="text-xs font-medium opacity-90">{categoryLabels[fact.category]}</p>
              <h3 className="text-lg font-bold">{fact.title}</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <p className="text-muted-foreground leading-relaxed">{fact.description}</p>

        {/* Share Button */}
        <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition opacity-0 group-hover:opacity-100">
          <Share2 className="w-4 h-4" />
          Share Fact
        </button>
      </div>
    </Card>
  )
}
