// Mock data for gaming components and recommendations

export interface Component {
  id: string
  name: string
  category: "cpu" | "gpu" | "ram" | "storage" | "psu" | "case" | "cooler"
  price: number
  specs: Record<string, string>
  performance: number // 1-10 scale
}

export interface Build {
  id: string
  name: string
  budget: number
  components: Component[]
  totalPrice: number
  performanceScore: number
  description: string
}

export const components: Component[] = [
  // CPUs
  {
    id: "cpu-1",
    name: "Intel Core i5-14600K",
    category: "cpu",
    price: 289,
    specs: { cores: "14 cores", threads: "20 threads", tdp: "125W" },
    performance: 7,
  },
  {
    id: "cpu-2",
    name: "Intel Core i7-14700K",
    category: "cpu",
    price: 419,
    specs: { cores: "20 cores", threads: "28 threads", tdp: "125W" },
    performance: 9,
  },
  {
    id: "cpu-3",
    name: "AMD Ryzen 5 7600X",
    category: "cpu",
    price: 249,
    specs: { cores: "6 cores", threads: "12 threads", tdp: "105W" },
    performance: 6,
  },
  {
    id: "cpu-4",
    name: "AMD Ryzen 7 7700X",
    category: "cpu",
    price: 349,
    specs: { cores: "8 cores", threads: "16 threads", tdp: "105W" },
    performance: 8,
  },

  // GPUs
  {
    id: "gpu-1",
    name: "NVIDIA RTX 4060",
    category: "gpu",
    price: 299,
    specs: { vram: "8GB GDDR6", memory: "128-bit", tdp: "70W" },
    performance: 6,
  },
  {
    id: "gpu-2",
    name: "NVIDIA RTX 4070",
    category: "gpu",
    price: 599,
    specs: { vram: "12GB GDDR6X", memory: "192-bit", tdp: "200W" },
    performance: 8,
  },
  {
    id: "gpu-3",
    name: "NVIDIA RTX 4090",
    category: "gpu",
    price: 1599,
    specs: { vram: "24GB GDDR6X", memory: "384-bit", tdp: "450W" },
    performance: 10,
  },
  {
    id: "gpu-4",
    name: "AMD RX 7700 XT",
    category: "gpu",
    price: 399,
    specs: { vram: "12GB GDDR6", memory: "192-bit", tdp: "250W" },
    performance: 7,
  },

  // RAM
  {
    id: "ram-1",
    name: "Corsair Vengeance 16GB DDR5",
    category: "ram",
    price: 79,
    specs: { capacity: "16GB", speed: "5600MHz", type: "DDR5" },
    performance: 7,
  },
  {
    id: "ram-2",
    name: "G.Skill Trident Z5 32GB DDR5",
    category: "ram",
    price: 149,
    specs: { capacity: "32GB", speed: "6000MHz", type: "DDR5" },
    performance: 9,
  },

  // Storage
  {
    id: "storage-1",
    name: "Samsung 870 QVO 1TB SSD",
    category: "storage",
    price: 89,
    specs: { capacity: "1TB", type: "SATA SSD", speed: "560MB/s" },
    performance: 6,
  },
  {
    id: "storage-2",
    name: "Samsung 990 Pro 2TB NVMe",
    category: "storage",
    price: 199,
    specs: { capacity: "2TB", type: "NVMe M.2", speed: "7100MB/s" },
    performance: 9,
  },

  // PSU
  {
    id: "psu-1",
    name: "Corsair RM750x 750W",
    category: "psu",
    price: 99,
    specs: { wattage: "750W", efficiency: "80+ Gold", modular: "Fully" },
    performance: 8,
  },
  {
    id: "psu-2",
    name: "EVGA SuperNOVA 1000W",
    category: "psu",
    price: 179,
    specs: { wattage: "1000W", efficiency: "80+ Gold", modular: "Fully" },
    performance: 9,
  },

  // Cases
  {
    id: "case-1",
    name: "NZXT H510 Flow",
    category: "case",
    price: 89,
    specs: { formFactor: "ATX", airflow: "Good", rgb: "Yes" },
    performance: 7,
  },
  {
    id: "case-2",
    name: "Corsair 5000T RGB",
    category: "case",
    price: 299,
    specs: { formFactor: "ATX", airflow: "Excellent", rgb: "Yes" },
    performance: 9,
  },

  // Coolers
  {
    id: "cooler-1",
    name: "Noctua NH-D15",
    category: "cooler",
    price: 99,
    specs: { type: "Air", tdp: "250W", noise: "Low" },
    performance: 8,
  },
  {
    id: "cooler-2",
    name: "NZXT Kraken X73",
    category: "cooler",
    price: 199,
    specs: { type: "Liquid AIO", tdp: "350W", noise: "Very Low" },
    performance: 9,
  },
]

export function generateAIBuild(budget: number, games: string[], resolution: string, fps: number): Build {
  // Simple AI logic based on budget and requirements
  let cpu, gpu, ram, storage, psu, cooler, pcCase

  if (budget < 800) {
    // Budget build
    cpu = components.find((c) => c.id === "cpu-3")!
    gpu = components.find((c) => c.id === "gpu-1")!
    ram = components.find((c) => c.id === "ram-1")!
    storage = components.find((c) => c.id === "storage-1")!
    psu = components.find((c) => c.id === "psu-1")!
    cooler = components.find((c) => c.id === "cooler-1")!
    pcCase = components.find((c) => c.id === "case-1")!
  } else if (budget < 1500) {
    // Mid-range build
    cpu = components.find((c) => c.id === "cpu-1")!
    gpu = components.find((c) => c.id === "gpu-2")!
    ram = components.find((c) => c.id === "ram-1")!
    storage = components.find((c) => c.id === "storage-2")!
    psu = components.find((c) => c.id === "psu-1")!
    cooler = components.find((c) => c.id === "cooler-1")!
    pcCase = components.find((c) => c.id === "case-1")!
  } else if (budget < 2500) {
    // High-end build
    cpu = components.find((c) => c.id === "cpu-2")!
    gpu = components.find((c) => c.id === "gpu-2")!
    ram = components.find((c) => c.id === "ram-2")!
    storage = components.find((c) => c.id === "storage-2")!
    psu = components.find((c) => c.id === "psu-2")!
    cooler = components.find((c) => c.id === "cooler-2")!
    pcCase = components.find((c) => c.id === "case-2")!
  } else {
    // Ultra high-end build
    cpu = components.find((c) => c.id === "cpu-2")!
    gpu = components.find((c) => c.id === "gpu-3")!
    ram = components.find((c) => c.id === "ram-2")!
    storage = components.find((c) => c.id === "storage-2")!
    psu = components.find((c) => c.id === "psu-2")!
    cooler = components.find((c) => c.id === "cooler-2")!
    pcCase = components.find((c) => c.id === "case-2")!
  }

  const buildComponents = [cpu, gpu, ram, storage, psu, cooler, pcCase]
  const totalPrice = buildComponents.reduce((sum, c) => sum + c.price, 0)
  const performanceScore = Math.round(
    buildComponents.reduce((sum, c) => sum + c.performance, 0) / buildComponents.length,
  )

  return {
    id: `build-${Date.now()}`,
    name: `AI Recommended Build - $${budget}`,
    budget,
    components: buildComponents,
    totalPrice,
    performanceScore,
    description: `Optimized for ${games.join(", ")} at ${resolution} ${fps}fps`,
  }
}
