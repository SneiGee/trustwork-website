import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <>
      <Navigation />

      <div className="min-h-screen bg-background">
        <section className="relative bg-gradient-to-br from-primary to-primary/80 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">Terms & Conditions</h1>
              <p className="text-lg text-primary-foreground/90">
                Please read these terms and conditions carefully before using our services
              </p>
            </div>
          </div>
        </section>

        <div className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Welcome to TRUSTWORK Consulting Limited. These terms and conditions outline the rules and regulations
                  for the use of our services and website.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing this website and engaging our services, we assume you accept these terms and conditions.
                  Do not continue to use TRUSTWORK Consulting Limited's website or services if you do not agree to all
                  of the terms and conditions stated on this page.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Services</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  TRUSTWORK Consulting Limited provides management, research and development consulting services,
                  including but not limited to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 ml-4">
                  <li>Capacity building and training courses</li>
                  <li>Management consulting</li>
                  <li>Research and development services</li>
                  <li>Strategic planning and implementation</li>
                  <li>Monitoring and evaluation services</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Training Courses</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  All training courses are subject to the following terms:
                </p>
                <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 ml-4">
                  <li>Course fees are determined based on location, date, and number of participants</li>
                  <li>Venue and date arrangements are subject to mutual agreement between TRUSTWORK and the client</li>
                  <li>Minimum participant requirements may apply for certain courses</li>
                  <li>Course materials and content are proprietary to TRUSTWORK Consulting Limited</li>
                  <li>Cancellation and refund policies will be specified in individual training agreements</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All training materials, methodologies, reports, and deliverables created by TRUSTWORK Consulting
                  Limited remain the intellectual property of the company unless otherwise specified in a written
                  agreement. Clients are granted a license to use materials for internal purposes only.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Confidentiality</h2>
                <p className="text-muted-foreground leading-relaxed">
                  TRUSTWORK Consulting Limited respects the confidentiality of all client information. We commit to
                  maintaining the confidentiality of all proprietary and sensitive information shared during the course
                  of our engagement, unless required by law to disclose.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Payment terms for services and training courses will be specified in individual contracts and
                  agreements. Generally:
                </p>
                <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 ml-4">
                  <li>Payment terms and schedules will be agreed upon before service commencement</li>
                  <li>Invoices are payable within the timeframe specified in the agreement</li>
                  <li>Late payment may result in service suspension or additional fees</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  TRUSTWORK Consulting Limited shall not be liable for any indirect, incidental, special, consequential,
                  or punitive damages resulting from your use of our services or inability to use our services, even if
                  we have been advised of the possibility of such damages.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Modifications</h2>
                <p className="text-muted-foreground leading-relaxed">
                  TRUSTWORK Consulting Limited reserves the right to modify these terms and conditions at any time.
                  Changes will be effective immediately upon posting to the website. Continued use of our services after
                  changes constitutes acceptance of the modified terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws of Ghana, and you
                  irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about these Terms & Conditions, please contact us:
                </p>
                <div className="bg-muted/50 border border-border rounded-lg p-6">
                  <p className="text-foreground font-semibold mb-2">TRUSTWORK Consulting Limited</p>
                  <p className="text-muted-foreground">Accra, Ghana</p>
                  <p className="text-muted-foreground">Email: info@trustworkconsulting.com</p>
                </div>
              </section>

              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">Last Updated: December 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
