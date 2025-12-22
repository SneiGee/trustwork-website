import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "Our Expertise - TRUSTWORK Consulting Limited",
  description: "Meet our team of expert consultants and specialists in management, research, and development services.",
}

const expertiseAreas = [
  {
    category: "Management Training & Development",
    specializations: [
      "Institutional capacity building",
      "Management and performance improvements",
      "Leadership development",
      "Workforce training and HR planning",
      "Competency-based HR systems",
    ],
  },
  {
    category: "Project Management",
    specializations: [
      "Project assessment and formulation",
      "Performance management",
      "Project monitoring and evaluation",
      "Risk management",
      "Project portfolio optimization",
    ],
  },
  {
    category: "Financial Management",
    specializations: [
      "Public and private sector financial systems",
      "Fiscal capacity analysis",
      "Financial auditing and reviews",
      "Fund management and budgeting",
      "Financial control mechanisms",
    ],
  },
  {
    category: "Strategic Planning & Governance",
    specializations: [
      "Strategic planning and alignment",
      "Governance structure optimization",
      "Policy analysis and formulation",
      "Organizational assessment",
      "Enterprise development",
    ],
  },
  {
    category: "Research & Analysis",
    specializations: [
      "Socio-economic surveys",
      "Organizational effectiveness reviews",
      "Impact assessments",
      "Monitoring and evaluation frameworks",
      "Participatory research methodologies",
    ],
  },
  {
    category: "Sectoral Advisory Services",
    specializations: [
      "Agricultural development",
      "Trade and economic advisory",
      "Tourism development",
      "Investment planning",
      "Supply chain management",
    ],
  },
]

export default function ExpertisePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative w-screen left-1/2 right-1/2 -mx-[50vw] h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/expert-professionals-consulting-team-africa.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Expertise</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Expert capabilities across management, research, development, and strategic consulting
          </p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Leadership</h2>

          <div className="p-8 bg-card border border-border rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-8">
              <div className="w-32 h-32 bg-primary rounded-lg flex items-center justify-center text-4xl font-bold text-primary-foreground">
                EO
              </div>
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-primary mb-2">Prof. Emmanuel Jediael Ophir (Ph.D.)</h3>
                <p className="text-lg font-semibold text-accent mb-3">Chairman & Managing Director</p>
                <p className="text-foreground/80 leading-relaxed">
                  Leading TRUSTWORK with extensive expertise in management consulting, organizational development, and
                  strategic planning. Brings a unique blend of academic rigor and practical consulting experience to
                  guide the firm's vision and strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Composition */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 bg-background border border-border rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">34+</div>
              <p className="font-semibold mb-2">In-House Staff</p>
              <p className="text-sm text-foreground/80">
                Well-qualified and experienced professionals with diverse backgrounds
              </p>
            </div>
            <div className="p-6 bg-background border border-border rounded-lg text-center">
              <div className="text-4xl font-bold text-accent mb-2">25+</div>
              <p className="font-semibold mb-2">Consultants</p>
              <p className="text-sm text-foreground/80">Specialized experts in various consulting domains</p>
            </div>
            <div className="p-6 bg-background border border-border rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <p className="font-semibold mb-2">External Partners</p>
              <p className="text-sm text-foreground/80">Pan-African and international consulting network</p>
            </div>
          </div>

          <div className="p-8 bg-background border border-border rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-primary">Staff Breakdown</h3>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-center justify-between p-3 bg-muted rounded">
                <span>Research Staff & Researchers</span>
                <span className="font-semibold text-primary">5+</span>
              </li>
              <li className="flex items-center justify-between p-3 bg-muted rounded">
                <span>Support Staff</span>
                <span className="font-semibold text-primary">4+</span>
              </li>
              <li className="flex items-center justify-between p-3 bg-muted rounded">
                <span>Core Consultants</span>
                <span className="font-semibold text-primary">25+</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Core Competencies</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertiseAreas.map((area, index) => (
              <div key={index} className="p-8 bg-card border border-border rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-6">{area.category}</h3>
                <ul className="space-y-3">
                  {area.specializations.map((spec, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Key Capabilities</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">What We Deliver</h3>
              <ul className="space-y-3">
                {[
                  "Organizational effectiveness reviews",
                  "Comprehensive training programs",
                  "Socio-economic research",
                  "Strategic policy development",
                  "MSME development solutions",
                  "HR capacity improvements",
                  "Financial management systems",
                  "Project performance assessments",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Our Approach</h3>
              <ul className="space-y-3">
                {[
                  "Participatory & interactive methods",
                  "Evidence-based solutions",
                  "Best practice integration",
                  "Stakeholder engagement",
                  "Hands-on implementation",
                  "Sustainability focus",
                  "Customized approaches",
                  "Continuous learning",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Geographic Presence */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Geographic Coverage</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-card border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-primary mb-4">Domestic Reach</h3>
              <p className="text-foreground/80 mb-4">
                Deep experience across Ghana working with government ministries, departments, local assemblies, and
                private sector organizations.
              </p>
              <p className="text-sm text-muted-foreground">
                Established relationships with key national institutions and strong local market knowledge.
              </p>
            </div>

            <div className="p-8 bg-card border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-primary mb-4">Pan-African Presence</h3>
              <p className="text-foreground/80 mb-4">
                Growing footprint across Africa with projects in Uganda, Kenya, South Africa, and partnerships with
                international organizations.
              </p>
              <p className="text-sm text-muted-foreground">
                International expertise combined with understanding of Africa's development context.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Leverage Our Expertise?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to help your organization achieve its strategic objectives.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg transition-colors"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
