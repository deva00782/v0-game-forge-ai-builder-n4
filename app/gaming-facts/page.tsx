"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FactCard } from "@/components/fact-card"
import { FactsFilter } from "@/components/facts-filter"
import { facts } from "@/lib/facts-data"
import { ArrowLeft, BookOpen, Lightbulb } from "lucide-react"

export default function GamingFactsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredFacts = selectedCategory === "all" ? facts : facts.filter((f) => f.category === selectedCategory)

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
            <BookOpen className="w-5 h-5 text-accent" />
            <span className="font-semibold">Gaming Facts Zone</span>
          </div>
          <div className="w-12" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <div className="mb-12 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Lightbulb className="w-8 h-8 text-accent" />
            <h1 className="text-4xl md:text-5xl font-bold">Gaming Facts Zone</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover fascinating facts about gaming, hardware, performance, and the history of PC gaming.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filter */}
          <div className="lg:col-span-1">
            <FactsFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
          </div>

          {/* Facts Grid */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <p className="text-sm text-muted-foreground">
                Showing {filteredFacts.length} of {facts.length} facts
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {filteredFacts.map((fact, index) => (
                <FactCard key={fact.id} fact={fact} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center space-y-6 p-8 rounded-lg border border-primary/20 bg-gradient-to-br from-primary/10 to-accent/10">
          <h2 className="text-2xl font-bold">Ready to Build Your Gaming PC?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Use what you've learned to make an informed decision about your next gaming setup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ai-builder">
              <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                Try AI Builder
              </Button>
            </Link>
            <Link href="/manual-builder">
              <Button variant="outline" className="border-primary/50 hover:bg-primary/10 bg-transparent">
                Manual Builder
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
