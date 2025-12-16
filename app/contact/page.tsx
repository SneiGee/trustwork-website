"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitStatus("success")
      setFormData({ name: "", email: "", phone: "", company: "", subject: "", message: "" })
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } catch {
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: "Accra, Ghana",
      description: "Our main office is located in Accra, Ghana",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@trustworkconsulting.com",
      description: "Contact us via email for inquiries",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+233 20 577 7970 / +233 55 833 4770",
      description: "Contact our office for phone consultations",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl">
            Get in touch with our team to discuss your consulting needs and strategic objectives
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <div
                  key={index}
                  className="p-8 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow"
                >
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                  <p className="font-bold text-primary mb-2">{info.details}</p>
                  <p className="text-muted-foreground text-sm">{info.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-muted py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-2">Send us a Message</h2>
            <p className="text-muted-foreground mb-8">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Phone and Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                    placeholder="+233 XXX XXX XXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">Company/Organization</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">Subject *</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="capacity-building">Capacity Building & Training</option>
                  <option value="research">Research & Development</option>
                  <option value="management">Management Consulting</option>
                  <option value="planning">Planning Advisory Services</option>
                  <option value="software">Software Development & IT</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              {/* Submit Status */}
              {submitStatus === "success" && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-medium">Thank you! Your message has been sent successfully.</p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 font-medium">There was an error sending your message. Please try again.</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              <p className="text-xs text-muted-foreground text-center">* Required fields</p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: "What is your typical project timeline?",
                a: "Project timelines vary based on scope and complexity. We typically provide customized estimates after an initial consultation.",
              },
              {
                q: "Do you work with international organizations?",
                a: "Yes, we have extensive experience working with World Bank, EU, ILO, and other international organizations.",
              },
              {
                q: "Can you customize training programs?",
                a: "Absolutely. We specialize in tailored training programs based on comprehensive needs assessment.",
              },
              {
                q: "What sectors do you serve?",
                a: "We serve government, private sector, NGO, and development sectors across multiple industries.",
              },
              {
                q: "Do you provide post-implementation support?",
                a: "Yes, we provide ongoing support and monitoring to ensure successful implementation and sustainability.",
              },
              {
                q: "How can we get started?",
                a: "Contact us using the form above or reach out directly. We'll schedule an initial consultation to understand your needs.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="p-6 bg-muted border border-border rounded-lg">
                <h4 className="font-semibold text-primary mb-3">{faq.q}</h4>
                <p className="text-foreground/80 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
