import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Award, Globe, Users } from "lucide-react"

export const metadata = {
  title: "About Us - TRUSTWORK Consulting Limited",
  description:
    "Learn about TRUSTWORK Consulting Limited, a leading management and development consulting firm in Africa since 2005.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About TRUSTWORK Consulting Limited</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl">
            Leading management, research and development consulting with nearly two decades of impact across Africa
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
                Chaired and managed by Prof. Emmanuel Jediael Ophir (Ph.D.) and a team of well-qualified and experienced
                professionals, we bring a unique blend of development, operational, and strategic management skills.
              </p>
            </div>

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
          </div>
        </div>
      </section>

      {/* Vision and Values */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Vision & Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-background border border-border rounded-lg">
              <Globe className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
              <p className="text-foreground/80 leading-relaxed">
                To develop empowering and mutually beneficial partnerships through listening, learning and responding,
                contributing to sustainable solutions and the realization of strategic objectives.
              </p>
            </div>

            <div className="p-8 bg-background border border-border rounded-lg">
              <Award className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Quality Focus</h3>
              <p className="text-foreground/80 leading-relaxed">
                Our core values guarantee innovative and cost-effective research and consulting solutions with emphasis
                on quality, backed by local experience and international expertise.
              </p>
            </div>

            <div className="p-8 bg-background border border-border rounded-lg">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Social Responsibility</h3>
              <p className="text-foreground/80 leading-relaxed">
                Committed to hiring diverse staff, creating inclusive workplaces, and providing skills development for
                our team and broader community transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Concept */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <h2 className="text-3xl font-bold text-center mb-12">What Sets Us Apart</h2>

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
              <div key={idx} className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="font-medium text-foreground">{value}</p>
              </div>
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
