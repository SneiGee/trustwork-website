"use client"

import { Navigation } from "@/components/navigation"
import { HeroCarousel } from "@/components/hero-carousel"
import { ClientsCarousel } from "@/components/clients-carousel"
import { ShowcaseSection } from "@/components/showcase-section"
import { Footer } from "@/components/footer"
import { ArrowRight, Briefcase, TrendingUp, Users } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const features = [
    {
      icon: Users,
      title: "Capacity Building",
      description: "Professional training and institutional development programs tailored to your needs.",
    },
    {
      icon: Briefcase,
      title: "Strategic Consulting",
      description: "Expert advisory services in management, planning, and organizational excellence.",
    },
    {
      icon: TrendingUp,
      title: "Research Driven",
      description: "Evidence-based solutions grounded in comprehensive analysis and best practices.",
    },
  ]

  const services = [
    "Capacity Building and Training",
    "Research and Development (R&D)",
    "Planning Advisory Services",
    "Management Consulting",
    "Software Development & IT Engineering",
    "Corporate Governance & Enterprise Development",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Carousel Section - Full Width */}
      <section>
        <HeroCarousel />
      </section>

      {/* Quick Stats Section */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">19+</div>
              <p className="text-sm text-primary-foreground/80">Years of Excellence</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-sm text-primary-foreground/80">Successful Projects</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">34+</div>
              <p className="text-sm text-primary-foreground/80">Expert Staff</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <p className="text-sm text-primary-foreground/80">Consulting Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose TRUSTWORK</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="p-8 bg-card border border-border rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Consulting Services</h2>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                TRUSTWORK delivers integrated management, research and development solutions across multiple sectors and
                geographies. Our approach combines professional expertise with deep industry knowledge.
              </p>

              <ul className="space-y-3 mb-8">
                {services.slice(0, 3).map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{service}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/services"
                className="inline-block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Explore All Services
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {services.slice(0, 4).map((service, index) => (
                <div key={index} className="p-6 bg-background border border-border rounded-lg">
                  <p className="font-semibold text-sm text-primary mb-2">Service</p>
                  <p className="text-sm text-foreground/80">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section - Full Width */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Trusted by Industry Leaders</h2>
        </div>
        <ClientsCarousel />
      </section>

      <ShowcaseSection />

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Organization?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let us help you achieve your strategic objectives through professional consulting and development services.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
