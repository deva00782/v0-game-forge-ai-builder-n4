export interface Laptop {
  id: string
  name: string
  brand: string
  price: number
  specs: {
    cpu: string
    gpu: string
    ram: string
    storage: string
    display: string
    weight: string
    battery: string
  }
  performanceTier: "budget" | "mid-range" | "high-end" | "ultra"
  bestFor: string[]
  rating: number
}

export const laptops: Laptop[] = [
  {
    id: "laptop-1",
    name: "TUF Gaming A15",
    brand: "ASUS",
    price: 799,
    specs: {
      cpu: "Ryzen 5 7520U",
      gpu: "RTX 4050",
      ram: "16GB DDR5",
      storage: "512GB SSD",
      display: '15.6" 144Hz',
      weight: "2.1kg",
      battery: "8 hours",
    },
    performanceTier: "budget",
    bestFor: ["Esports", "Indie Games", "Streaming"],
    rating: 4.2,
  },
  {
    id: "laptop-2",
    name: "ROG Strix G16",
    brand: "ASUS",
    price: 1499,
    specs: {
      cpu: "Intel i7-13700H",
      gpu: "RTX 4070",
      ram: "32GB DDR5",
      storage: "1TB SSD",
      display: '16" 240Hz',
      weight: "2.6kg",
      battery: "6 hours",
    },
    performanceTier: "high-end",
    bestFor: ["AAA Games", "Content Creation", "Streaming"],
    rating: 4.7,
  },
  {
    id: "laptop-3",
    name: "Legion Pro 7",
    brand: "Lenovo",
    price: 1299,
    specs: {
      cpu: "Intel i7-13700H",
      gpu: "RTX 4060",
      ram: "16GB DDR5",
      storage: "512GB SSD",
      display: '16" 165Hz',
      weight: "2.5kg",
      battery: "7 hours",
    },
    performanceTier: "mid-range",
    bestFor: ["AAA Games", "Productivity", "Gaming"],
    rating: 4.5,
  },
  {
    id: "laptop-4",
    name: "Razer Blade 15",
    brand: "Razer",
    price: 1999,
    specs: {
      cpu: "Intel i9-13900HX",
      gpu: "RTX 4090",
      ram: "32GB DDR5",
      storage: "2TB SSD",
      display: '15.6" 360Hz',
      weight: "2.0kg",
      battery: "5 hours",
    },
    performanceTier: "ultra",
    bestFor: ["AAA Games", "Content Creation", "Professional Work"],
    rating: 4.8,
  },
  {
    id: "laptop-5",
    name: "MSI Katana 15",
    brand: "MSI",
    price: 899,
    specs: {
      cpu: "Ryzen 7 7735HS",
      gpu: "RTX 4050",
      ram: "16GB DDR5",
      storage: "512GB SSD",
      display: '15.6" 165Hz',
      weight: "2.25kg",
      battery: "7 hours",
    },
    performanceTier: "budget",
    bestFor: ["Esports", "Indie Games", "Casual Gaming"],
    rating: 4.3,
  },
  {
    id: "laptop-6",
    name: "Dell G15",
    brand: "Dell",
    price: 1099,
    specs: {
      cpu: "Intel i5-13450HX",
      gpu: "RTX 4060",
      ram: "16GB DDR5",
      storage: "512GB SSD",
      display: '15.6" 165Hz',
      weight: "2.45kg",
      battery: "6 hours",
    },
    performanceTier: "mid-range",
    bestFor: ["AAA Games", "Gaming", "Productivity"],
    rating: 4.4,
  },
  {
    id: "laptop-7",
    name: "ASUS Zephyrus G14",
    brand: "ASUS",
    price: 1799,
    specs: {
      cpu: "Intel i9-13900H",
      gpu: "RTX 4080",
      ram: "32GB DDR5",
      storage: "1TB SSD",
      display: '14" 120Hz OLED',
      weight: "1.6kg",
      battery: "8 hours",
    },
    performanceTier: "ultra",
    bestFor: ["AAA Games", "Content Creation", "Portability"],
    rating: 4.9,
  },
  {
    id: "laptop-8",
    name: "HP Omen 16",
    brand: "HP",
    price: 1399,
    specs: {
      cpu: "Intel i7-13700H",
      gpu: "RTX 4070",
      ram: "16GB DDR5",
      storage: "512GB SSD",
      display: '16" 165Hz',
      weight: "2.48kg",
      battery: "6 hours",
    },
    performanceTier: "high-end",
    bestFor: ["AAA Games", "Streaming", "Content Creation"],
    rating: 4.6,
  },
]
