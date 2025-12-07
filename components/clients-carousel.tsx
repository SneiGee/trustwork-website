"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const clients = [
  { id: 1, name: "World Bank", logo: "WB" },
  { id: 2, name: "European Union", logo: "EU" },
  { id: 3, name: "Ministry of Finance", logo: "MF" },
  { id: 4, name: "ILO", logo: "ILO" },
  { id: 5, name: "SSNIT", logo: "SSNIT" },
  { id: 6, name: "NBSSI", logo: "NBSSI" },
  { id: 7, name: "AGI", logo: "AGI" },
  { id: 8, name: "African Foundation", logo: "AF" },
]

export function ClientsCarousel() {
  const [current, setCurrent] = useState(0)
  const itemsPerView = 4

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % (clients.length - itemsPerView + 1))
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const next = () => {
    setCurrent((prev) => (prev + 1) % (clients.length - itemsPerView + 1))
  }

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? clients.length - itemsPerView : prev - 1))
  }

  return (
    <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          {/* Previous Button */}
          <button
            onClick={prev}
            className="flex-shrink-0 p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Previous clients"
          >
            <ChevronLeft size={20} className="text-primary" />
          </button>

          {/* Clients Grid */}
          <div className="flex-1 overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-500"
              style={{
                transform: `translateX(-${current * (100 / itemsPerView)}%)`,
              }}
            >
              {clients.map((client) => (
                <div
                  key={client.id}
                  className="flex-shrink-0 w-1/4 aspect-square flex items-center justify-center bg-background border border-border rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">{client.logo}</div>
                    <p className="text-xs text-muted-foreground text-balance">{client.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={next}
            className="flex-shrink-0 p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Next clients"
          >
            <ChevronRight size={20} className="text-primary" />
          </button>
        </div>
      </div>
    </div>
  )
}
