"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronRight } from "lucide-react"
import { UtilityBar } from "@/components/utility-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const categories = ["All", "Websites", "Apps", "Design"]

const projects = [
  {
    image: "/Nano Banana 2 - Web DevelopmentA clean_ modern workspace with a large ultrawide monitor displaying a.png",
    title: "E-Commerce Website",
    category: "Websites",
    description: "A modern online store with product catalog, shopping cart, and secure checkout.",
    tag: "Sample Project",
    href: "/portfolio/ecommerce",
  },
  {
    image: "/Nano Banana 2 - A friendly_customer support_representative wearing a headset_ smiling warmly_at a mo.png",
    title: "Business Website",
    category: "Websites",
    description: "A professional company website with contact forms, service pages, and mobile responsiveness.",
    tag: "Sample Project",
    href: "/portfolio/corporate",
  },
  {
    image: "/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpeg",
    title: "Delivery App",
    category: "Apps",
    description: "A mobile app for order tracking, real-time notifications, and seamless payments.",
    tag: "Sample Project",
    href: "/portfolio/mobile-app",
  },
  {
    image: "/digital-technology-coding-programmer-and-cyber-security-software-development-javascript-on-virtual-screen-internet-of-things-iot-photo.jpg",
    title: "Real Estate Platform",
    category: "Websites",
    description: "A property listing website with search, filtering, and agent contact features.",
    tag: "Sample Project",
    href: "/portfolio/corporate",
  },
  {
    image: "/Nano Banana 2 - Abstract digital_visualization of global connectivity _ glowing blue_and white nodes.png",
    title: "Dashboard UI Design",
    category: "Design",
    description: "A clean analytics dashboard with data visualizations and intuitive navigation.",
    tag: "Sample Project",
    href: "/portfolio/landing",
  },
  {
    image: "/Nano Banana 2 - Web DevelopmentA clean_ modern workspace with a large ultrawide monitor displaying a.png",
    title: "Booking Website",
    category: "Websites",
    description: "An appointment booking site with calendar integration and automated confirmations.",
    tag: "Sample Project",
    href: "/portfolio/corporate",
  },
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

      {/* Hero Section - KPMG style full blue with image */}
      <section className="relative bg-primary overflow-hidden py-16 lg:py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

      {/* Filter Tabs */}
      <section className="py-8 bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className="group bg-secondary rounded-xl overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 block"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-medium bg-background/90 text-foreground px-2 py-1 rounded">
                      {project.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-primary">{project.category}</span>
                  <h3 className="text-xl font-semibold text-foreground mt-1">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mt-2">{project.description}</p>
                  <span className="inline-flex items-center gap-1 mt-4 text-primary font-medium text-sm group-hover:gap-2 transition-all">
                    View Details <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">
            Be our first real client. Let&apos;s build something great.
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            We are ready to put the same effort and quality into your project. Early clients get our full attention and competitive pricing.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-colors mt-8"
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
