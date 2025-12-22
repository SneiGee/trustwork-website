"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/expertise", label: "Our Expertise" },
    { href: "/project-finance-africa", label: "Project F Africa" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="TRUSTWORK Logo" width={60} height={60} className="object-contain" />
            <span className="hidden sm:inline text-2xl font-bold text-primary">TRUSTWORK</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            <Link href="/training-courses">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-md hover:shadow-lg transition-all">
                <GraduationCap className="w-4 h-4 mr-2" />
                Training Courses
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-foreground hover:bg-muted hover:text-primary rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/training-courses" className="block mx-2" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                <GraduationCap className="w-4 h-4 mr-2" />
                Training Courses
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
