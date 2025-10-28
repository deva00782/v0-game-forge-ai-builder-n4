import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Zap, Cpu, Laptop, BookOpen } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center hover-lift">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              GameForge AI
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition">
              Features
            </Link>
            <Link href="#builders" className="text-sm text-muted-foreground hover:text-foreground transition">
              Builders
            </Link>
            <Link href="#facts" className="text-sm text-muted-foreground hover:text-foreground transition">
              Gaming Facts
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20 pointer-events-none animate-pulse" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 slide-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-balance">
                Build Your Perfect
                <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Gaming PC
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
                Let AI recommend the perfect components for your budget and gaming goals, or build manually with expert
                guidance.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link href="/ai-builder">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 glow-primary hover-lift"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  AI Builder
                </Button>
              </Link>
              <Link href="/manual-builder">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-primary/50 hover:bg-primary/10 bg-transparent hover-lift"
                >
                  <Cpu className="w-5 h-5 mr-2" />
                  Manual Builder
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose GameForge?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "AI-Powered Recommendations",
                description: "Get personalized PC builds based on your budget, games, and performance goals.",
              },
              {
                icon: Cpu,
                title: "Component Compatibility",
                description: "Real-time compatibility checking ensures all components work together perfectly.",
              },
              {
                icon: BookOpen,
                title: "Gaming Knowledge",
                description: "Learn gaming facts, tech specs, and optimization tips while building.",
              },
            ].map((feature, i) => (
              <Card
                key={i}
                className="bg-card/50 border-primary/20 hover:border-primary/50 transition p-6 space-y-4 hover-lift"
                style={{ animation: `slideInUp 0.5s ease-out ${i * 0.1}s both` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Builders Section */}
      <section id="builders" className="py-20 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Choose Your Path</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* AI Builder Card */}
            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/30 hover:border-primary/60 transition p-8 space-y-6 hover-lift">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <Zap className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">AI Builder</h3>
                <p className="text-muted-foreground">
                  Answer a few questions about your gaming needs and budget. Our AI will recommend the perfect
                  components.
                </p>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Budget-based recommendations</li>
                <li>✓ Game-specific optimization</li>
                <li>✓ Performance predictions</li>
                <li>✓ Instant component matching</li>
              </ul>
              <Link href="/ai-builder" className="block">
                <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                  Start AI Builder
                </Button>
              </Link>
            </Card>

            {/* Manual Builder Card */}
            <Card className="bg-gradient-to-br from-card to-card/50 border-secondary/30 hover:border-secondary/60 transition p-8 space-y-6 hover-lift">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center">
                <Cpu className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Manual Builder</h3>
                <p className="text-muted-foreground">
                  Take full control and select components yourself. Get real-time compatibility checks and pricing.
                </p>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Full component control</li>
                <li>✓ Live compatibility checking</li>
                <li>✓ Price comparison</li>
                <li>✓ Expert recommendations</li>
              </ul>
              <Link href="/manual-builder" className="block">
                <Button variant="outline" className="w-full border-secondary/50 hover:bg-secondary/10 bg-transparent">
                  Start Manual Builder
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Laptop Advisor Section */}
      <section className="py-20 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Looking for a Gaming Laptop?</h2>
              <p className="text-lg text-muted-foreground">
                Can't build a PC? Explore our curated selection of gaming laptops with detailed specs and
                recommendations.
              </p>
              <Link href="/laptop-advisor">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 hover-lift"
                >
                  <Laptop className="w-5 h-5 mr-2" />
                  Explore Laptops
                </Button>
              </Link>
            </div>
            <Card className="bg-card/50 border-secondary/20 p-8 space-y-4 hover-lift">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
                <Laptop className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Gaming Laptop Advisor</h3>
              <p className="text-muted-foreground">
                Filter by budget, performance tier, and gaming preferences to find your ideal laptop.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Gaming Facts Section */}
      <section id="facts" className="py-20 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Gaming Facts Zone</h2>
            <p className="text-lg text-muted-foreground">Learn interesting facts about gaming and PC hardware</p>
          </div>
          <Link href="/gaming-facts">
            <Button
              size="lg"
              variant="outline"
              className="mx-auto block border-accent/50 hover:bg-accent/10 bg-transparent hover-lift"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Explore Gaming Facts
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold">GameForge AI</span>
            </div>
            <p className="text-sm text-muted-foreground">Build your perfect gaming PC with AI assistance</p>
            <p className="text-xs text-muted-foreground">© 2025 GameForge AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
