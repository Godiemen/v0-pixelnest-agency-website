import type { Metadata } from 'next'
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronRight, ShoppingCart, CreditCard, BarChart3, Shield, Smartphone, Check, Globe, FileCode, Palette, Database, Cloud, Zap, TrendingUp } from "lucide-react"
import { UtilityBar } from "@/components/utility-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: 'E-Commerce Platform | Pixelnest Sample Project',
  description: 'A demo e-commerce platform with product catalog, shopping cart, and secure payment integration built by Pixelnest.',
}

const features = [
  {
    icon: ShoppingCart,
    title: "Product Catalog",
    description: "Organize products by category with search, filters, and detailed product pages. Add unlimited products with images, variants, and pricing.",
    color: "from-blue-500 to-blue-600",
    accent: "bg-blue-500",
    number: "01",
  },
  {
    icon: CreditCard,
    title: "Secure Checkout",
    description: "Integrated payment gateways with PCI-compliant security for safe transactions. Support for cards, EFT, and mobile payments.",
    color: "from-emerald-500 to-emerald-600",
    accent: "bg-emerald-500",
    number: "02",
  },
  {
    icon: BarChart3,
    title: "Sales Analytics",
    description: "Track orders, revenue, and customer behavior with a real-time dashboard. Export reports and spot growth opportunities.",
    color: "from-amber-500 to-amber-600",
    accent: "bg-amber-500",
    number: "03",
  },
  {
    icon: Shield,
    title: "Order Management",
    description: "Admin tools to manage inventory, process orders, and handle shipping. Automated notifications keep customers updated.",
    color: "from-violet-500 to-violet-600",
    accent: "bg-violet-500",
    number: "04",
  },
  {
    icon: Smartphone,
    title: "Mobile Ready",
    description: "Fully responsive design that converts visitors into buyers on any device. Fast loading on slow networks and data-saving features.",
    color: "from-rose-500 to-rose-600",
    accent: "bg-rose-500",
    number: "05",
  },
  {
    icon: Check,
    title: "SEO Optimized",
    description: "Built-in SEO tools to help your store rank higher and attract more traffic. Structured data, sitemaps, and speed optimization.",
    color: "from-cyan-500 to-cyan-600",
    accent: "bg-cyan-500",
    number: "06",
  },
]

const techStack = [
  {
    name: "Next.js",
    description: "Server-side rendering for SEO and speed",
    icon: Globe,
    color: "from-slate-700 to-slate-900",
  },
  {
    name: "TypeScript",
    description: "Type-safe code with fewer bugs",
    icon: FileCode,
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "Tailwind CSS",
    description: "Rapid, consistent styling at scale",
    icon: Palette,
    color: "from-cyan-500 to-cyan-700",
  },
  {
    name: "Stripe",
    description: "Secure, global payment processing",
    icon: CreditCard,
    color: "from-purple-500 to-purple-700",
  },
  {
    name: "PostgreSQL",
    description: "Reliable, scalable data storage",
    icon: Database,
    color: "from-emerald-500 to-emerald-700",
  },
  {
    name: "Vercel",
    description: "Edge deployment with 99.99% uptime",
    icon: Cloud,
    color: "from-gray-800 to-black",
  },
]

const stats = [
  { value: "99.9%", label: "Uptime SLA" },
  { value: "<100ms", label: "Global Edge Response" },
  { value: "PCI-DSS", label: "Payment Compliant" },
]

export default function EcommercePage() {
  return (
    <main className="min-h-screen">
      <UtilityBar />
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-16 lg:py-20 min-h-[360px] flex items-center">
        {/* Background Image */}
        <Image
          src="/72f263964ad7d25c06b4f5d52f771919.jpg"
          alt="E-Commerce Platform"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#003380]/90 via-[#003380]/75 to-[#003380]/50" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/portfolio" className="hover:text-white transition-colors">Our Work</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">E-Commerce Platform</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            E-Commerce Platform
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            A modern online store with everything you need to sell products online — from catalog management to secure checkout.
          </p>
        </div>
      </section>

      {/* Why E-Commerce Matters - Premium SaaS */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6">
                <ShoppingCart className="h-4 w-4" />
                Why it matters
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
                Your store, open 24/7
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                South African consumers are shopping online more than ever. Businesses without an online store are leaving money on the table every single day.
              </p>

              {/* Benefits with checkmarks */}
              <div className="space-y-4 mb-10">
                {[
                  "Reach customers anywhere in South Africa",
                  "Accept payments 24/7 without staff costs",
                  "Compete with big retailers on equal footing",
                  "Track sales and grow with real data",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Start your store
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            {/* Right: Image with effects */}
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl">
                <Image
                  src="/P2Hpl.jpg"
                  alt="E-Commerce Platform mockup"
                  width={600}
                  height={450}
                  className="object-cover w-full"
                />
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl border border-border p-5 max-w-[200px]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">Revenue Growth</span>
                </div>
                <div className="text-2xl font-bold text-foreground">+147%</div>
                <div className="text-xs text-muted-foreground mt-1">Average first-year increase</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - Premium */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              Features
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              What is included
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to run an online store, built into one platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group relative bg-white rounded-2xl p-8 border border-border/50 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1.5 transition-all duration-500"
              >
                {/* Colored top accent bar */}
                <div className={`absolute top-0 left-8 right-8 h-1 ${feature.accent} rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Number + Icon row */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-5xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-500">
                    {feature.number}
                  </span>
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom accent line */}
                <div className={`mt-6 h-0.5 w-12 ${feature.accent} rounded-full group-hover:w-full transition-all duration-500`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack - SaaS Premium */}
      <section className="relative py-24 overflow-hidden">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0f172a] to-slate-900" />
        <div className="absolute inset-0 bg-[url('/7mHg9.jpg')] opacity-10 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/80" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold rounded-full mb-6">
                <Zap className="h-4 w-4 text-amber-400" />
                Enterprise-grade stack
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                Built for scale
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                We do not use proprietary tools that lock you in. Every piece of our stack is industry-standard, open, and built to grow with your business from day one to millions of users.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image with glow */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/7mHg9.jpg"
                  alt="Technology stack"
                  width={600}
                  height={450}
                  className="object-cover w-full"
                />
              </div>
            </div>
          </div>

          {/* Tech Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-white font-semibold text-sm mb-1">{tech.name}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery - Placeholders */}
      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Work Samples</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Visual examples of our design style and capabilities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-background border border-border">
              <Image
                src="/Nano Banana 2 - Professional UIUX mockup of a modern e-commerce website displayed on a sleek ultrawi.png"
                alt="E-Commerce website mockup"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-background border border-border">
              <Image
                src="/fPm1t.jpg"
                alt="E-Commerce project screenshot"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-background border border-border">
              <Image
                src="/whWZy.jpg"
                alt="E-Commerce project screenshot"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">
            Want a store like this?
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            We can build an e-commerce platform tailored to your products and budget. Let us discuss your project.
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
