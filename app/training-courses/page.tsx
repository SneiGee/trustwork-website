import { GraduationCap, Users, Award, BookOpen, Target, Lightbulb } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function TrainingCoursesPage() {
  const courseCategories = [
    {
      category: "Management and Leadership Development",
      icon: Target,
      courses: [
        {
          title: "Performance Improvement for Executives –PIE (Management and Leadership Development Training Program)",
          days: 5,
        },
        { title: "Emotional Intelligence: Achieving Leadership Success", days: 5 },
        { title: "Leadership Skills: Transformational Leadership Experience", days: 5 },
        { title: "Motivational Leadership and Building Successful Teams", days: 5 },
        { title: "Leadership Skills: Success through Teamwork", days: 5 },
        { title: "Effective Leadership in Management and Administration", days: 5 },
        { title: "Building Analytical Skills for Effective Corporate Decision Making", days: 3 },
        { title: "Results-Based Management (Managing for Results)", days: 5 },
        { title: "Strategy Implementation and Performance Management (SIPM)", days: 5 },
        { title: "The Practice of Strategic Management –TPSM", days: 5 },
        { title: "Control Functions of Management", days: 3 },
        { title: "Effective Supervisory Skills for Directors / Managers & Senior Officers", days: 3 },
        { title: "Strategic Communication Skills", days: 3 },
        { title: "Change Management –The Profession of Managing Change", days: 5 },
        { title: "Change Management in Practice -CMIP", days: 5 },
        { title: "Effective Coordination and Team Building Skills", days: 3 },
        { title: "Operational Risk Management -ORM", days: 3 },
        { title: "Strategic Public Relations and Protocol Management", days: 5 },
        { title: "Effective Public – Private Partnerships", days: 5 },
        { title: "Effective Office Management and Administration", days: 5 },
      ],
    },
    {
      category: "Budgeting, Finance and Accounting",
      icon: BookOpen,
      courses: [
        { title: "Financial Reporting and Analysis", days: 3 },
        { title: "Public Financial Management -PFM", days: 5 },
        { title: "Funds Management and Performance Budgeting", days: 3 },
        { title: "Finance and Accounting for Non-Financial Managers / Directors & Senior Officers", days: 3 },
        { title: "Computerized Accounting Systems and Applications", days: 5 },
        { title: "Financial Management", days: 5 },
        { title: "Cash Flow Preparation and Analysis", days: 3 },
        { title: "Control Measures in Accounting and Financial Practice", days: 3 },
        { title: "Auditing and ARIC Framework", days: 5 },
        { title: "Budgeting (The Framework: Preparation, Processes and Analysis)", days: 5 },
        { title: "Effective Revenue Mobilization and Management", days: 5 },
        { title: "Strategic Infrastructure Financing and Management", days: 5 },
      ],
    },
    {
      category: "Procurement",
      icon: Award,
      courses: [
        { title: "Procurement Administration Process - Generating Value from Procurement", days: 5 },
        { title: "Procurement Time Management", days: 3 },
        { title: "Operations Management for Procurement Professionals", days: 5 },
        { title: "Tender Evaluation Process –Improving the Process", days: 3 },
        { title: "Effective Contract Management", days: 3 },
        { title: "Public Sector Supply Chain Management", days: 5 },
        { title: "Effective Tendering and Supplier Relationship Management", days: 3 },
        { title: "Warehouse and Inventory Management", days: 3 },
        { title: "Developing A World-Class Procurement Strategy", days: 5 },
        { title: "Procurement and Contract Management", days: 5 },
      ],
    },
    {
      category: "Project Management",
      icon: Lightbulb,
      courses: [
        { title: "Project Feasibility Studies (PFS)", days: 5 },
        { title: "Project Management: Skills for Success", days: 5 },
        { title: "Project Planning and Budgeting", days: 3 },
        { title: "The Logical Framework Approach (LFA) -Objective- Oriented Planning", days: 3 },
        { title: "Project Planning, Monitoring and Evaluation (PPM&E)", days: 5 },
        { title: "Complex Project Management (CPM)", days: 5 },
        { title: "Project Leadership: Building High Performance Team", days: 5 },
        { title: "Project Time and Cost Management", days: 5 },
        { title: "Executive Project Management (EPM)", days: 3 },
        { title: "Project Auditing and Value for Money Analysis", days: 3 },
      ],
    },
    {
      category: "Business Strategies and Enterprise Development",
      icon: Users,
      courses: [
        { title: "Understanding Value Chain's Role in Enterprise Development", days: 5 },
        { title: "Business Strategic Planning", days: 5 },
        { title: "MSMEs Development and Management", days: 10 },
        { title: "Enterprise Development Strategies", days: 5 },
        { title: "Innovative Strategies for Financing MSMEs", days: 5 },
        { title: "Innovative Strategies for Developing Industries", days: 5 },
      ],
    },
    {
      category: "Policy Analysis, Planning, Monitoring and Evaluation",
      icon: GraduationCap,
      courses: [
        { title: "Policy Analysis and Planning", days: 5 },
        { title: "Building Analytical Skills for Effective Policy Making", days: 5 },
        { title: "Participatory Planning and Management", days: 5 },
        { title: "Participatory Monitoring and Evaluation (PM&E)", days: 5 },
        { title: "The Logical Framework Approach (LFA)", days: 3 },
        { title: "Functional Integration of Population and Development Variables", days: 10 },
        { title: "Functional Integrated Urban Planning", days: 5 },
        { title: "Effective Urban Development Management Strategies", days: 5 },
        { title: "Effective Sanitation Planning and Management", days: 5 },
        { title: "Data Collection and Analysis", days: 5 },
        { title: "Policy Planning, Monitoring and Evaluation (PPM&E)", days: 10 },
        { title: "Results-Based Monitoring and Evaluation (RBM&E)", days: 5 },
      ],
    },
  ]

  const features = [
    {
      icon: GraduationCap,
      title: "Expert Trainers",
      description: "Highly qualified consultants with practical experience from across the world",
    },
    {
      icon: Users,
      title: "Participatory Learning",
      description: "Interactive presentations, case studies, and hands-on group work",
    },
    {
      icon: Award,
      title: "Practical Experience",
      description: "Training grounded in contemporary industry best practices",
    },
    {
      icon: Target,
      title: "Customized Solutions",
      description: "Tailor-made courses adapted to address your specific needs",
    },
  ]

  return (
    <>
      <Navigation />

      <div className="min-h-screen">
        {/* Full-Width Hero Section with Background */}
        <section className="relative w-screen left-1/2 right-1/2 -mx-[50vw] h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://res.cloudinary.com/schneider-tech-inc/image/upload/v1765889109/about-us2.52767783_toaecb.png"
              alt="Training Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 text-balance">
              Portfolio of Training Courses
            </h1>
            <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-4 max-w-3xl mx-auto text-balance">
              Sharing Innovations, Best Practices, Knowledge and Expertise for Sustainable Growth and Development
            </p>
            <p className="text-lg text-primary-foreground/80 font-medium mb-8">Making Skills Work for All</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#courses"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all shadow-lg hover:shadow-xl"
              >
                Explore Courses
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-foreground text-primary font-semibold rounded-lg hover:bg-primary-foreground/90 transition-all shadow-lg hover:shadow-xl"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Building Capacity for Results-Based Planning, Resource Convergence, Implementation, Management,
                Monitoring and Evaluation
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                TRUSTWORK Consulting Limited conducts innovative capacity building workshops (training courses) in
                different parts of Africa with the aim of sharing international best practices, experience and expertise
                for sustainable growth at the organizational/company and national level.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg text-card-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Choose TRUSTWORK */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                What Makes TRUSTWORK Courses a Superior Choice?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Practical applied methodology with proven results",
                "Extensive bank of experienced trainers/consultants",
                "Small groups to ensure one-to-one guidance",
                "Up-to-the-minute thinking on management and development techniques",
                "Balanced mix of industry expertise, experience and practical learning",
                "Learner-centered training",
                "Excellent cost / quality ratio",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-background border border-border rounded-lg p-4 hover:shadow-md transition-all"
                >
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-accent-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Course Categories */}
        <section id="courses" className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Comprehensive Training Portfolio</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Choose from our extensive range of professional development courses designed to enhance your team's
                skills and drive organizational success
              </p>
            </div>

            <div className="space-y-8">
              {courseCategories.map((category, catIndex) => {
                const Icon = category.icon
                return (
                  <div key={catIndex} className="bg-card border border-border rounded-xl overflow-hidden">
                    <div className="bg-primary/5 border-b border-border px-6 py-4 flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{category.category}</h3>
                      <span className="ml-auto text-sm text-muted-foreground">{category.courses.length} Courses</span>
                    </div>
                    <div className="p-6">
                      <div className="grid grid-cols-1 gap-3">
                        {category.courses.map((course, courseIndex) => (
                          <div
                            key={courseIndex}
                            className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-muted/50 transition-colors group"
                          >
                            <div className="flex items-center gap-3 flex-1">
                              <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                              <p className="text-foreground group-hover:text-primary transition-colors leading-relaxed">
                                {course.title}
                              </p>
                            </div>
                            <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full flex-shrink-0 ml-4">
                              {course.days} {course.days === 1 ? "Day" : "Days"}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Additional Course Categories Info */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Additional Training Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Construction and Works Sector",
                "Client Relationship and Marketing",
                "Good Governance and Participatory Development",
                "Rural Entrepreneurship and Local Economic Development",
                "Tourism Marketing and Development",
                "Gender and Development",
                "Food Security and Agricultural Development",
                "Disaster Management and Risk Reduction",
                "Climate Change and Environment",
                "Training of Trainers Programs",
              ].map((area, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <BookOpen className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{area}</h3>
                  <p className="text-sm text-muted-foreground">Specialized courses available on request</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Customized Training Solutions */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
                <div className="text-primary-foreground">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-6">Customized Training Solutions</h2>
                  <p className="text-lg text-primary-foreground/90 leading-relaxed mb-6">
                    Over the years, TRUSTWORK has consolidated its relationships with numerous key clients by assisting
                    them in delivering in-house and tailor-made training courses.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          className="w-4 h-4 text-accent-foreground"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-primary-foreground/90 leading-relaxed">
                        Cost-effective in-house training programs
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          className="w-4 h-4 text-accent-foreground"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-primary-foreground/90 leading-relaxed">
                        Courses adapted to your specific needs
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          className="w-4 h-4 text-accent-foreground"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-primary-foreground/90 leading-relaxed">
                        Pre- and post-assessments of capabilities
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-8">
                    <h3 className="text-2xl font-bold text-primary-foreground mb-4">Ready to Get Started?</h3>
                    <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                      Contact us today to discuss your training needs and how we can help build your team's capacity for
                      success.
                    </p>
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto"
                    >
                      Contact Us Today
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Training Methodology */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Training Methodology</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="text-4xl font-bold text-primary mb-4">01</div>
                <h3 className="text-xl font-bold text-foreground mb-3">Theoretical Framework</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive presentation of concepts, models, and best practices from international experts
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="text-4xl font-bold text-primary mb-4">02</div>
                <h3 className="text-xl font-bold text-foreground mb-3">Practical Application</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Hands-on exercises, case studies, and group work to apply learned concepts to real-world scenarios
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="text-4xl font-bold text-primary mb-4">03</div>
                <h3 className="text-xl font-bold text-foreground mb-3">Knowledge Transfer</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Actionable takeaways and implementation plans to ensure lasting impact beyond the training room
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Invest in Your Team's Professional Development
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of organizations across Africa that have transformed their operations through our training
              programs. Contact us to design a custom training solution for your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
              >
                Request a Quote
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-muted text-foreground font-semibold rounded-lg hover:bg-muted/80 transition-all"
              >
                View All Services
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}
