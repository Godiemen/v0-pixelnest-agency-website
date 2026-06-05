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
    image: "/images/portfolio-1.png",
    title: "RetailHub E-Commerce",
    category: "Websites",
    description: "Sample e-commerce platform concept with product catalog and checkout flow",
    tag: "Concept Design",
  },
  {
    image: "/images/portfolio-2.png",
    title: "MediBook Healthcare",
    category: "Websites",
    description: "Sample healthcare website with appointment booking functionality",
    tag: "Sample Project",
  },
  {
    image: "/images/portfolio-3.png",
    title: "QuickBite Delivery",
    category: "Apps",
    description: "Food delivery app concept for local restaurants",
    tag: "Concept Design",
  },
  {
    image: "/images/portfolio-4.png",
    title: "PropertyPro Listings",
    category: "Websites",
    description: "Real estate listing platform concept with search and filtering",
    tag: "Sample Project",
  },
  {
    image: "/images/portfolio-5.png",
    title: "FitLife Gym",
    category: "Design",
    description: "Fitness website design concept with membership management",
    tag: "Concept Design",
  },
  {
    image: "/images/portfolio-6.png",
    title: "HopeFoundation NGO",
    category: "Websites",
    description: "Non-profit website concept with donation integration",
    tag: "Sample Project",
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

      {/* Hero Section - Dark */}
      <section className="bg-foreground py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-background/60 text-sm mb-6">
            <Link href="/" className="hover:text-background transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-background">Portfolio</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background">
            Our Work
          </h1>
          <p className="mt-4 text-lg text-background/70 max-w-2xl">
            Here are some of our early projects — more coming soon as we continue to grow
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
              <div
                key={project.title}
                className="group bg-secondary rounded-xl overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2"
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
                  <button className="inline-flex items-center gap-1 mt-4 text-primary font-medium text-sm group-hover:gap-2 transition-all">
                    View Details <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground text-balance">
            Working on something exciting? Be our next project.
          </h2>
          <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">
            We are always looking for interesting projects to work on. Tell us about yours and let&apos;s create something amazing together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-background text-primary px-8 py-4 rounded-lg font-semibold hover:bg-background/90 transition-colors mt-8"
          >
            Get a Quote
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
