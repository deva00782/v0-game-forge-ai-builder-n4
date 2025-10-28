export interface Fact {
  id: string
  title: string
  description: string
  category: "gaming" | "hardware" | "performance" | "history"
  icon: string
}

export const facts: Fact[] = [
  {
    id: "fact-1",
    title: "GPU Power Evolution",
    description:
      "The NVIDIA RTX 4090 has 16,384 CUDA cores and can perform over 1,400 trillion floating-point operations per second (TFLOPS).",
    category: "hardware",
    icon: "⚡",
  },
  {
    id: "fact-2",
    title: "Frame Rate Perception",
    description:
      "Most humans can perceive differences in frame rates up to about 240 FPS. Beyond that, improvements become harder to notice.",
    category: "performance",
    icon: "👁️",
  },
  {
    id: "fact-3",
    title: "Gaming Market Size",
    description:
      "The global gaming market is worth over $200 billion, making it larger than the movie and music industries combined.",
    category: "gaming",
    icon: "💰",
  },
  {
    id: "fact-4",
    title: "First Gaming PC",
    description:
      "The first gaming PC was the Altair 8800 in 1975, which could run simple games like Pong and cost $395.",
    category: "history",
    icon: "🖥️",
  },
  {
    id: "fact-5",
    title: "Ray Tracing Revolution",
    description:
      "Ray tracing simulates realistic light behavior, but requires 10x more processing power than traditional rendering.",
    category: "hardware",
    icon: "🌟",
  },
  {
    id: "fact-6",
    title: "CPU vs GPU",
    description:
      "While CPUs excel at sequential tasks, GPUs can perform thousands of calculations in parallel, making them ideal for gaming.",
    category: "performance",
    icon: "⚙️",
  },
  {
    id: "fact-7",
    title: "Esports Prize Pools",
    description:
      "The International 2023 (Dota 2) had a prize pool of $40 million, with the winning team taking home $18 million.",
    category: "gaming",
    icon: "🏆",
  },
  {
    id: "fact-8",
    title: "Memory Bandwidth",
    description:
      "Modern GPUs like the RTX 4090 have memory bandwidth of 1,008 GB/s, allowing them to access massive amounts of data instantly.",
    category: "hardware",
    icon: "💾",
  },
  {
    id: "fact-9",
    title: "Gaming Addiction",
    description:
      "The WHO recognizes 'Gaming Disorder' as a mental health condition, affecting about 3-4% of gamers worldwide.",
    category: "gaming",
    icon: "🎮",
  },
  {
    id: "fact-10",
    title: "First 3D Game",
    description:
      "Battlezone (1980) was one of the first 3D games, using vector graphics and running on arcade hardware.",
    category: "history",
    icon: "🎯",
  },
  {
    id: "fact-11",
    title: "Thermal Throttling",
    description:
      "When GPUs reach critical temperatures (usually 83°C+), they automatically reduce clock speeds to prevent damage.",
    category: "performance",
    icon: "🌡️",
  },
  {
    id: "fact-12",
    title: "Gaming Latency",
    description:
      "Professional esports players can detect input lag as low as 1-2ms. Most humans notice lag above 50ms.",
    category: "performance",
    icon: "⏱️",
  },
]
