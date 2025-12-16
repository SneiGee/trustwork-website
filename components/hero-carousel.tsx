"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "Strategic Management Solutions",
    subtitle: "Empowering organizations through innovative consulting and development services",
    image: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1765889037/business-strategy-formulation_loyups.jpg",
    cta: "Learn Our Approach",
  },
  {
    id: 2,
    title: "Research & Development Excellence",
    subtitle: "Evidence-based solutions grounded in comprehensive research and analysis",
    image: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1765889037/iStock-665394574_ftln0h.jpg",
    cta: "Explore Services",
  },
  {
    id: 3,
    title: "Institutional Capacity Building",
    subtitle: "Building stronger organizations through training, development, and strategic planning",
    image: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1765889037/peopleimages_24_ptm1qa.jpg",
    cta: "Discover Solutions",
  },
]

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)

  useEffect(() => {
    if (!isAutoplay) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoplay])

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
    setIsAutoplay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoplay(false)
  }

  return (
    <div className="relative w-screen h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${slide.image}')`,
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-balance">{slide.title}</h2>
            <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl text-pretty">{slide.subtitle}</p>
            <button className="px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg transition-colors">
              {slide.cta}
            </button>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/20 hover:bg-white/40 text-white rounded-full transition-colors backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/20 hover:bg-white/40 text-white rounded-full transition-colors backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index)
              setIsAutoplay(false)
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
