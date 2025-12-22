import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { DollarSign, TrendingUp, Globe, Target, CheckCircle2, Building2 } from "lucide-react"

export const metadata = {
  title: "Project Finance Africa (PFA) - TRUSTWORK Consulting Limited",
  description: "Project financing and transactional advisory services for sustainable development across Africa.",
}

export default function ProjectFinanceAfricaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Background Image and Overlay */}
      <section className="relative w-screen left-1/2 right-1/2 -mx-[50vw] h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/african-infrastructure-development-skyline-investm.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-accent/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Project Finance Africa</h1>
          <p className="text-2xl md:text-3xl font-semibold text-white/95 mb-4">
            Development and Project Financing Technical Solutions
          </p>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Building capacity for African institutions to access international investment funds for sustainable
            development
          </p>
        </div>
      </section>

      {/* Objective Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-10 h-10 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Our Objective</h2>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 mb-8">
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                The objective is to build the capacity of African institutions both in the public and private sectors
                strategically to access international investment funds for economically viable projects across the
                African countries, and trade for sustainable development.
              </p>

              <p className="text-lg text-foreground/90 leading-relaxed">
                The service is to support the Governments of Africa through international financing, trade and
                investments technical advisory solutions. This will help in strengthening the public and private sector
                institutions to use trade, investment, finance and technology as vehicles for inclusive and sustainable
                development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Key Focus Areas</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-background border border-border rounded-lg hover:shadow-lg transition-shadow">
              <DollarSign className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">International Financing</h3>
              <p className="text-foreground/80 leading-relaxed">
                Access to international investment funds and financial instruments for viable projects across Africa
              </p>
            </div>

            <div className="p-8 bg-background border border-border rounded-lg hover:shadow-lg transition-shadow">
              <TrendingUp className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Trade Advisory</h3>
              <p className="text-foreground/80 leading-relaxed">
                Technical advisory for international trade enhancement and economic growth strategies
              </p>
            </div>

            <div className="p-8 bg-background border border-border rounded-lg hover:shadow-lg transition-shadow">
              <Globe className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Investment Solutions</h3>
              <p className="text-foreground/80 leading-relaxed">
                Strategic investment planning and Foreign Direct Investment (FDI) facilitation
              </p>
            </div>

            <div className="p-8 bg-background border border-border rounded-lg hover:shadow-lg transition-shadow">
              <Building2 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Institutional Capacity</h3>
              <p className="text-foreground/80 leading-relaxed">
                Building capacity in public and private sector institutions for effective resource mobilization
              </p>
            </div>

            <div className="p-8 bg-background border border-border rounded-lg hover:shadow-lg transition-shadow">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Project Development</h3>
              <p className="text-foreground/80 leading-relaxed">
                Technical support for developing economically viable projects that attract international funding
              </p>
            </div>

            <div className="p-8 bg-background border border-border rounded-lg hover:shadow-lg transition-shadow">
              <CheckCircle2 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Sustainable Development</h3>
              <p className="text-foreground/80 leading-relaxed">
                Focus on inclusive and sustainable development outcomes for African economies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Foreign Direct Investment Opportunities</h2>
          <p className="text-lg text-foreground/80 mb-12 max-w-3xl">
            The Project Financing and Transactional Advisory Services focus on the real opportunities that are emerging
            for Foreign Direct Investments (FDIs) across the sectors of the economy:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Manufacturing",
              "Electricity and Utilities",
              "Telecommunications",
              "IT and Fintech",
              "Oil and Gas",
              "Healthcare",
              "Agriculture",
              "Education",
              "Housing and Construction",
              "Transportation",
              "Tourism",
              "Retail and Entertainment",
              "Natural Resources",
              "Infrastructure Development",
              "Renewable Energy",
            ].map((sector, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="font-medium text-foreground">{sector}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Purpose and Impact */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Purpose</h2>
            <p className="text-xl text-primary-foreground/95 leading-relaxed mb-8">
              To contribute to Africa's effort towards achieving economic growth and sustainable development for the
              benefit of the continent and the people of Africa.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-primary-foreground/10 backdrop-blur-sm rounded-lg">
                <div className="text-3xl font-bold mb-2">15+</div>
                <p className="text-sm text-primary-foreground/90">Sectors Covered</p>
              </div>
              <div className="p-6 bg-primary-foreground/10 backdrop-blur-sm rounded-lg">
                <div className="text-3xl font-bold mb-2">Pan-African</div>
                <p className="text-sm text-primary-foreground/90">Geographic Reach</p>
              </div>
              <div className="p-6 bg-primary-foreground/10 backdrop-blur-sm rounded-lg">
                <div className="text-3xl font-bold mb-2">Sustainable</div>
                <p className="text-sm text-primary-foreground/90">Development Focus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Advisory Services We Provide</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-card border border-border rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-6">Technical Advisory</h3>
              <ul className="space-y-4">
                {[
                  "Project feasibility assessment",
                  "Financial structuring and modeling",
                  "Risk analysis and mitigation",
                  "Investment documentation preparation",
                  "Due diligence support",
                  "Regulatory compliance guidance",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-card border border-border rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-6">Capacity Building</h3>
              <ul className="space-y-4">
                {[
                  "Project finance training programs",
                  "Investment proposal development",
                  "Institutional strengthening",
                  "Financial management systems",
                  "Stakeholder engagement strategies",
                  "Sustainable development frameworks",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent text-accent-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner With Us for African Development</h2>
          <p className="text-lg text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's work together to unlock international investment opportunities and drive sustainable economic growth
            across Africa.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors shadow-lg"
          >
            Get Started Today
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
