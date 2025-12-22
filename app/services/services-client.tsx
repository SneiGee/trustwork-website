"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { CheckCircle2 } from "lucide-react"

const serviceCategories = [
  {
    title: "Capacity Building and Training",
    description: "Professional development and institutional strengthening programs",
    benefits: [
      "Customized training modules tailored to client needs",
      "Hands-on workshops and practical skill development",
      "Course content and training material development",
      "Workforce development and HR capacity building",
    ],
  },
  {
    title: "Research and Development (R&D)",
    description: "Evidence-based research and innovative solutions",
    benefits: [
      "Organizational effectiveness and impact reviews",
      "Socio-economic surveys and data analysis",
      "Participatory research methodologies",
      "Policy analysis and strategic recommendations",
    ],
  },
  {
    title: "Planning Advisory Services (PAS)",
    description: "Strategic planning and development solutions",
    benefits: [
      "Development strategic planning",
      "Business strategy formulation",
      "Project planning and management",
      "Monitoring and evaluation frameworks",
    ],
  },
  {
    title: "Management Consulting Services",
    description: "Organizational optimization and performance improvement",
    benefits: [
      "Institutional capacity building",
      "Performance management systems",
      "Organizational assessment and restructuring",
      "Strategic reviews and best value analysis",
    ],
  },
  {
    title: "Software Development & IT Engineering",
    description: "Technology solutions and digital transformation",
    benefits: [
      "Custom software development",
      "System integration services",
      "IT infrastructure planning",
      "Digital transformation initiatives",
    ],
  },
  {
    title: "Tourism Consulting Services",
    description: "Tourism development and economic advisory",
    benefits: [
      "Tourism development strategies",
      "Destination planning",
      "Product development consultation",
      "Market analysis and positioning",
    ],
  },
]

export function ServicesClient() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative w-screen left-1/2 right-1/2 -mx-[50vw] h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/schneider-tech-inc/image/upload/v1765889109/about-us2.52767783_toaecb.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Services</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Comprehensive consulting and development solutions across multiple sectors and geographies
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCategories.map((service, index) => (
              <ScrollReveal key={index} animation="slide-up" delay={index * 100}>
                <div className="p-8 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold text-primary mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>

                  <div className="space-y-3">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Approach</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollReveal animation="slide-right">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-primary">Consultancy Methodology</h3>
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  Our consultancy approach is primarily participatory and interactive, utilizing hands-on, process
                  consulting methods. We believe in:
                </p>
                <ul className="space-y-3">
                  {[
                    "Understanding your unique challenges",
                    "Collaborative problem solving",
                    "Evidence-based recommendations",
                    "Sustainable solutions implementation",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slide-left">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-primary">Training Methodology</h3>
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  We adopt participatory training methodology suitable for adult learning:
                </p>
                <ul className="space-y-3">
                  {[
                    "Needs-based assessment",
                    "Participant-centered discussions",
                    "Practical case studies",
                    "Interactive role-plays",
                    "Tailor-made content",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Specialized Services</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Agricultural Development",
                description: "Trade and economic advisory services focused on agricultural sector growth",
              },
              {
                title: "Investment Advisory",
                description: "Financial advisory and investment planning for organizational growth",
              },
              {
                title: "Policy Services",
                description: "Policy formulation, strategic education and communication services",
              },
              {
                title: "Procurement Advisory",
                description: "Strategic procurement and supply chain management solutions",
              },
              {
                title: "Corporate Governance",
                description: "Enterprise development and governance structure optimization",
              },
              {
                title: "Natural Resources",
                description: "Utilization and support services for sustainable resource management",
              },
            ].map((service, idx) => (
              <ScrollReveal key={idx} animation="slide-up" delay={idx * 100}>
                <div className="p-6 bg-card border border-border rounded-lg">
                  <h4 className="text-lg font-semibold text-primary mb-2">{service.title}</h4>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal animation="slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          </ScrollReveal>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Contact our team to discuss how we can support your organization's strategic objectives.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
