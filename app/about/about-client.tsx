"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Award, Globe, Users } from "lucide-react"

export function AboutPageClient() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative w-screen left-1/2 right-1/2 -mx-[50vw] h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/schneider-tech-inc/image/upload/v1765889040/2024-10-18-14_10_04-The-Skys-the-Limit-with-These-12-Aviation-Jobs_w3ynfs.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">About TRUSTWORK Consulting Limited</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Leading management, research and development consulting with nearly two decades of impact across Africa
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="slide-right">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary">Our Story</h2>
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  Founded in 2005, TRUSTWORK is a management, research and development-driven consulting company with a
                  growing footprint across Africa. We are committed to providing innovative services and solutions to
                  government, private, and non-governmental sector clients.
                </p>
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  Our focus is on empowering institutions through the development of innovative research, integrated
                  management solutions, and promoting best practices. We deliver effective solutions grounded in
                  evidence-based research and deep industry expertise.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Chaired and managed by Prof. Emmanuel Jediael Ophir (Ph.D.) and a team of well-qualified and
                  experienced professionals, we bring a unique blend of development, operational, and strategic
                  management skills.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slide-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 bg-primary text-primary-foreground rounded-lg text-center">
                  <div className="text-4xl font-bold mb-2">19+</div>
                  <p className="text-sm">Years in Business</p>
                </div>
                <div className="p-8 bg-accent text-accent-foreground rounded-lg text-center">
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <p className="text-sm">Projects Delivered</p>
                </div>
                <div className="p-8 bg-primary text-primary-foreground rounded-lg text-center">
                  <div className="text-4xl font-bold mb-2">34</div>
                  <p className="text-sm">Expert Staff</p>
                </div>
                <div className="p-8 bg-accent text-accent-foreground rounded-lg text-center">
                  <div className="text-4xl font-bold mb-2">100+</div>
                  <p className="text-sm">Partner Network</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Vision and Values */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="slide-up">
            <h2 className="text-3xl font-bold text-center mb-12">Our Vision & Values</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Our Vision",
                description:
                  "To develop empowering and mutually beneficial partnerships through listening, learning and responding, contributing to sustainable solutions and the realization of strategic objectives.",
              },
              {
                icon: Award,
                title: "Quality Focus",
                description:
                  "Our core values guarantee innovative and cost-effective research and consulting solutions with emphasis on quality, backed by local experience and international expertise.",
              },
              {
                icon: Users,
                title: "Social Responsibility",
                description:
                  "Committed to hiring diverse staff, creating inclusive workplaces, and providing skills development for our team and broader community transformation.",
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <ScrollReveal key={index} animation="slide-up" delay={index * 100}>
                  <div className="p-8 bg-background border border-border rounded-lg">
                    <Icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-foreground/80 leading-relaxed">{item.description}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service Concept */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade">
            <h2 className="text-3xl font-bold mb-6">Our Service Concept</h2>

            <div className="bg-card border border-border rounded-lg p-8">
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                <span className="font-semibold text-foreground">"We Listen, Learn and Respond"</span>
              </p>

              <p className="text-foreground/80 leading-relaxed mb-4">
                By offering professional and specialized management, research and development services, we contribute to
                the creation of sustainable solutions for our clients and the realization of their strategic objectives.
              </p>

              <p className="text-foreground/80 leading-relaxed">
                <span className="font-semibold text-foreground">We grow as our customers flourish.</span> Our commitment
                to understanding client needs, combining rigorous research methodology with practical implementation,
                ensures that every solution we deliver creates lasting value.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Legal Status */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Legal Status & Registration</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Company Details</h3>
              <div className="space-y-3 text-foreground/80">
                <p>
                  <span className="font-semibold text-foreground">Legal Name:</span> TRUSTWORK Consulting Limited
                </p>
                <p>
                  <span className="font-semibold text-foreground">Status:</span> Limited Liability Company
                </p>
                <p>
                  <span className="font-semibold text-foreground">Jurisdiction:</span> Ghana
                </p>
                <p>
                  <span className="font-semibold text-foreground">Established:</span> 2005
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Registration Numbers</h3>
              <div className="space-y-3 text-foreground/80">
                <p>
                  <span className="font-semibold text-foreground">Company Reg:</span> CA – 79,352 / CS077162018
                </p>
                <p>
                  <span className="font-semibold text-foreground">Tax ID (TIN):</span> 524V068526 / C0004578562
                </p>
                <p>
                  <span className="font-semibold text-foreground">VAT/NHIL:</span> Registered Member
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="slide-up">
            <h2 className="text-3xl font-bold text-center mb-12">What Sets Us Apart</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Evidence-based research methodology",
              "Participatory and interactive approach",
              "Customized solutions for unique challenges",
              "Strong institutional partnerships",
              "Diverse and experienced team",
              "Pan-African expertise and networks",
              "Focus on sustainable development",
              "Client-centric service delivery",
            ].map((value, idx) => (
              <ScrollReveal key={idx} animation="slide-left" delay={idx * 50}>
                <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="font-medium text-foreground">{value}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner With TRUSTWORK</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's work together to achieve your strategic objectives and create sustainable solutions for your
            organization.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
