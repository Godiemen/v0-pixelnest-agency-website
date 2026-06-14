"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronRight, ExternalLink, Layout, Palette, Globe } from "lucide-react"
import { UtilityBar } from "@/components/utility-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { cn } from "@/lib/utils"

const categories = ["All", "Websites", "Design"]

const categoryIcons: Record<string, typeof Globe> = {
  Websites: Globe,
  Design: Palette,
}

const projects = [
  {
    image: "/Nano Banana 2 - Web DevelopmentA clean_ modern workspace with a large ultrawide monitor displaying a.png",
    title: "E-Commerce Platform",
    category: "Websites",
    description: "A modern online store with product catalog, shopping cart, secure checkout, and payment integration.",
    tag: "Sample Project",
    href: "/portfolio/ecommerce",
    features: ["Product Catalog", "Payment Gateway", "Admin Dashboard"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    image: "/Nano Banana 2 - A friendly_customer support_representative wearing a headset_ smiling warmly_at a mo.png",
    title: "Corporate Website",
    category: "Websites",
    description: "A professional company website with service pages, team section, contact forms, and mobile responsiveness.",
    tag: "Sample Project",
    href: "/portfolio/corporate",
    features: ["Service Pages", "Team Section", "Contact Forms"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    image: "/digital-technology-coding-programmer-and-cyber-security-software-development-javascript-on-virtual-screen-internet-of-things-iot-photo.jpg",
    title: "Real Estate Platform",
    category: "Websites",
    description: "A property listing website with advanced search, filtering, agent profiles, and lead capture.",
    tag: "Sample Project",
    href: "/portfolio/corporate",
    features: ["Property Search", "Agent Profiles", "Lead Capture"],
    color: "from-violet-500 to-purple-500",
  },
  {
    image: "/Nano Banana 2 - Abstract digital_visualization of global connectivity _ glowing blue_and white nodes.png",
    title: "Landing Page",
    category: "Design",
    description: "A high-converting landing page with lead capture forms, social proof, and strong call-to-action sections.",
    tag: "Sample Project",
    href: "/portfolio/landing",
    features: ["Lead Forms", "Social Proof", "A/B Ready"],
    color: "from-amber-500 to-orange-500",
  },
  {
    image: "/Nano Banana 2 - Web DevelopmentA clean_ modern workspace with a large ultrawide monitor displaying a.png",
    title: "Booking Website",
    category: "Websites",
    description: "An appointment booking site with calendar integration, automated confirmations, and client management.",
    tag: "Sample Project",
    href: "/portfolio/corporate",
    features: ["Calendar Sync", "Auto Confirm", "Client Portal"],
    color: "from-rose-500 to-pink-500",
  },
]

const stats = [
  { label: "Sample Projects", value: "5+" },
  { label: "Industries", value: "4+" },
  { label: "Technologies", value: "10+" },
  { label: "Platforms", value: "3" },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((project) => project.category === activeCategory)

  return (
    <main className="min-h-screen">
      <UtilityBar />
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 lg:py-28 min-h-[420px] flex items-center">
        <Image
          src="/Nano Banana 2 - Web DevelopmentA clean_ modern workspace with a large ultrawide monitor displaying a.png"
          alt="Portfolio"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003380]/90 via-[#003380]/75 to-[#003380]/50" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">Sample Projects</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            What We Can Build
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            As a new agency, these sample projects show the quality and range of work we deliver. Your project could be next.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-20 -mt-12 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="bg-white rounded-2xl shadow-xl border border-border/50 p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Filter Tabs */}
      <section className="pt-16 pb-8 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => {
                const Icon = categoryIcons[category] || Layout
                const isActive = activeCategory === category
                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={cn(
                      "flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300",
                      isActive
                        ? "bg-primary text-white shadow-lg shadow-primary/25"
                        : "bg-secondary text-foreground hover:bg-secondary/80 border border-border"
                    )}
                  >
                    {category !== "All" && <Icon className="h-4 w-4" />}
                    {category}
                  </button>
                )
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 100}>
                <Link
                  href={project.href}
                  className="group block bg-background rounded-2xl overflow-hidden border border-border/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1 h-full"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-semibold bg-white/95 text-foreground px-3 py-1 rounded-full shadow-sm">
                        {project.tag}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <div className={cn("w-10 h-10 rounded-full bg-gradient-to-br flex items-center justify-center shadow-lg", project.color)}>
                        <ExternalLink className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    {/* Feature pills */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.features.map((feat) => (
                        <span
                          key={feat}
                          className="text-[11px] font-medium bg-secondary text-muted-foreground px-2.5 py-1 rounded-md border border-border/50"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all">
                      View Details
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary py-20 mt-16">
        <div className="absolute inset-0 bg-[url('/Nano%20Banana%202%20-%20Web%20DevelopmentA%20clean_%20modern%20workspace%20with%20a%20large%20ultrawide%20monitor%20displaying%20a.png')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-blue-800/90" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
            Be our first real client
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            We are ready to put the same effort and quality into your project. Early clients get our full attention and competitive pricing.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-colors mt-8 shadow-xl"
          >
            Get a Free Quote
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
