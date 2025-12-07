"use client"

import { Award, Zap, BarChart3 } from "lucide-react"

export function ShowcaseSection() {
  const showcases = [
    {
      id: 1,
      title: "Institutional Development",
      description: "Transforming organizational structures and processes for sustainable growth and efficiency.",
      icon: Award,
      highlight: "500+ Staff Trained",
    },
    {
      id: 2,
      title: "Strategic Innovation",
      description:
        "Leveraging technology and best practices to drive operational excellence and digital transformation.",
      icon: Zap,
      highlight: "30+ Solutions Deployed",
    },
    {
      id: 3,
      title: "Impact Analytics",
      description:
        "Data-driven insights and comprehensive monitoring for measurable results and continuous improvement.",
      icon: BarChart3,
      highlight: "50+ Projects Completed",
    },
  ]

  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=800&fit=crop')",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/85" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Impact & Expertise</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Delivering transformative consulting solutions across Africa's most dynamic sectors and organizations.
            </p>
          </div>

          {/* Showcase Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {showcases.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.id}
                  className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105"
                >
                  <div className="mb-6">
                    <Icon className="w-12 h-12 text-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/80 mb-6 leading-relaxed">{item.description}</p>

                  <div className="pt-6 border-t border-white/20">
                    <p className="text-accent font-semibold text-sm">{item.highlight}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
