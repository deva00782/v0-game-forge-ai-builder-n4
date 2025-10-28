"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Zap, Cpu } from "lucide-react"

export function BuilderSwitch() {
  const pathname = usePathname()
  const isAIBuilder = pathname === "/ai-builder"
  const isManualBuilder = pathname === "/manual-builder"

  return (
    <div className="flex items-center gap-2 bg-background/40 backdrop-blur-sm rounded-lg p-1 border border-border/50">
      <Link
        href="/ai-builder"
        className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
          isAIBuilder
            ? "bg-primary/20 text-primary border border-primary/30"
            : "text-muted-foreground hover:text-foreground hover:bg-background/50"
        }`}
      >
        <Zap className="w-4 h-4" />
        <span className="text-sm font-medium">AI Builder</span>
      </Link>
      <Link
        href="/manual-builder"
        className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
          isManualBuilder
            ? "bg-secondary/20 text-secondary border border-secondary/30"
            : "text-muted-foreground hover:text-foreground hover:bg-background/50"
        }`}
      >
        <Cpu className="w-4 h-4" />
        <span className="text-sm font-medium">Manual Builder</span>
      </Link>
    </div>
  )
}
