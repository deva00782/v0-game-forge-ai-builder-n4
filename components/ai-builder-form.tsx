"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { generateAIBuild } from "@/lib/mock-data"
import type { Build } from "@/lib/mock-data"
import { Zap, ChevronRight } from "lucide-react"

interface AIBuilderFormProps {
  onBuildGenerated: (build: Build) => void
}

export function AIBuilderForm({ onBuildGenerated }: AIBuilderFormProps) {
  const [step, setStep] = useState(1)
  const [budget, setBudget] = useState(1000)
  const [selectedGames, setSelectedGames] = useState<string[]>([])
  const [resolution, setResolution] = useState("1440p")
  const [fps, setFps] = useState(60)
  const [isLoading, setIsLoading] = useState(false)

  const games = [
    "Cyberpunk 2077",
    "Starfield",
    "Black Myth: Wukong",
    "Dragon's Dogma 2",
    "Baldur's Gate 3",
    "Fortnite",
    "Valorant",
    "CS:GO",
  ]

  const handleGameToggle = (game: string) => {
    setSelectedGames((prev) => (prev.includes(game) ? prev.filter((g) => g !== game) : [...prev, game]))
  }

  const handleGenerateBuild = async () => {
    setIsLoading(true)
    // Simulate AI processing
    await new Promise((resolve) => setTimeout(resolve, 1500))
    const build = generateAIBuild(budget, selectedGames, resolution, fps)
    onBuildGenerated(build)
    setIsLoading(false)
  }

  return (
    <div className="space-y-8">
      {/* Step 1: Budget */}
      {step === 1 && (
        <Card className="bg-card/50 border-primary/20 p-8 space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">What's your budget?</h3>
            <p className="text-muted-foreground">We'll recommend components that fit your price range</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">${budget}</span>
              <span className="text-sm text-muted-foreground">
                {budget < 800 ? "Budget" : budget < 1500 ? "Mid-Range" : budget < 2500 ? "High-End" : "Ultra"}
              </span>
            </div>
            <input
              type="range"
              min="500"
              max="5000"
              step="100"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>$500</span>
              <span>$5000</span>
            </div>
          </div>

          <Button
            onClick={() => setStep(2)}
            className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
          >
            Next: Select Games
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </Card>
      )}

      {/* Step 2: Games */}
      {step === 2 && (
        <Card className="bg-card/50 border-primary/20 p-8 space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">What games do you play?</h3>
            <p className="text-muted-foreground">Select the games you want to optimize for</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {games.map((game) => (
              <button
                key={game}
                onClick={() => handleGameToggle(game)}
                className={`p-3 rounded-lg border-2 transition text-sm font-medium ${
                  selectedGames.includes(game)
                    ? "border-primary bg-primary/20 text-foreground"
                    : "border-border/50 bg-card/50 text-muted-foreground hover:border-primary/50"
                }`}
              >
                {game}
              </button>
            ))}
          </div>

          <div className="flex gap-3">
            <Button
              onClick={() => setStep(1)}
              variant="outline"
              className="flex-1 border-border/50 hover:bg-border/10 bg-transparent"
            >
              Back
            </Button>
            <Button
              onClick={() => setStep(3)}
              disabled={selectedGames.length === 0}
              className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 disabled:opacity-50"
            >
              Next: Display Settings
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Card>
      )}

      {/* Step 3: Display Settings */}
      {step === 3 && (
        <Card className="bg-card/50 border-primary/20 p-8 space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Display preferences</h3>
            <p className="text-muted-foreground">Choose your target resolution and frame rate</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <label className="text-sm font-medium">Resolution</label>
              <div className="space-y-2">
                {["1080p", "1440p", "4K"].map((res) => (
                  <button
                    key={res}
                    onClick={() => setResolution(res)}
                    className={`w-full p-3 rounded-lg border-2 transition text-sm font-medium ${
                      resolution === res
                        ? "border-primary bg-primary/20 text-foreground"
                        : "border-border/50 bg-card/50 text-muted-foreground hover:border-primary/50"
                    }`}
                  >
                    {res}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-medium">Target FPS</label>
              <div className="space-y-2">
                {[60, 120, 144, 240].map((f) => (
                  <button
                    key={f}
                    onClick={() => setFps(f)}
                    className={`w-full p-3 rounded-lg border-2 transition text-sm font-medium ${
                      fps === f
                        ? "border-primary bg-primary/20 text-foreground"
                        : "border-border/50 bg-card/50 text-muted-foreground hover:border-primary/50"
                    }`}
                  >
                    {f} FPS
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              onClick={() => setStep(2)}
              variant="outline"
              className="flex-1 border-border/50 hover:bg-border/10 bg-transparent"
            >
              Back
            </Button>
            <Button
              onClick={handleGenerateBuild}
              disabled={isLoading}
              className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <span className="animate-spin mr-2">⚡</span>
                  Generating Build...
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4 mr-2" />
                  Generate Build
                </>
              )}
            </Button>
          </div>
        </Card>
      )}
    </div>
  )
}
