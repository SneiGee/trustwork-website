import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">TRUSTWORK</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Management, research and development consulting solutions across Africa.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Capacity Building
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Research & Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Management Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/training-courses"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Training Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/project-finance-africa"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Project Finance Africa
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/expertise"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Our Expertise
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-sm text-primary-foreground/80 mb-2">Accra, Ghana</p>
            <p className="text-sm text-primary-foreground/80">Email: info@trustworkconsulting.com</p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 space-y-2">
          <p className="text-sm text-primary-foreground/80 text-center">
            &copy; {currentYear} TRUSTWORK Consulting Limited. All rights reserved.
          </p>

          <p className="text-sm text-primary-foreground/60 text-center">
            Powered by <span className="font-semibold text-primary-foreground uppercase">
              <Link href="https://linkedin.com/in/michael-schneider-708b49121/" target="_blank" >Michael Schneider</Link>
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
