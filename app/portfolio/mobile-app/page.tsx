import type { Metadata } from 'next'
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronRight, Smartphone, MapPin, Bell, CreditCard, Shield, Zap, Check, Globe, FileCode, Palette, Database, Cloud, TrendingUp } from "lucide-react"
import { UtilityBar } from "@/components/utility-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: 'Mobile Delivery App | Pixelnest Sample Project',
  description: 'A demo mobile delivery app with order tracking, push notifications, and seamless payments built by Pixelnest.',
}

const features = [
  {
    icon: MapPin,
    title: "Real-Time Tracking",
    description: "GPS-powered live tracking so customers always know exactly where their order is and when it will arrive.",
    color: "from-blue-500 to-blue-600",
    accent: "bg-blue-500",
    number: "01",
  },
  {
    icon: Bell,
    title: "Push Notifications",
    description: "Instant alerts for order confirmations, dispatch updates, and delivery completion with rich media support.",
    color: "from-emerald-500 to-emerald-600",
    accent: "bg-emerald-500",
    number: "02",
  },
  {
    icon: CreditCard,
    title: "In-App Payments",
    description: "One-tap checkout with saved cards, Apple Pay, Google Pay, and EFT options for maximum convenience.",
    color: "from-amber-500 to-amber-600",
    accent: "bg-amber-500",
    number: "03",
  },
  {
    icon: Shield,
    title: "Driver Verification",
    description: "Background-checked drivers with ID verification, rating systems, and safety protocols for peace of mind.",
    color: "from-violet-500 to-violet-600",
    accent: "bg-violet-500",
    number: "04",
  },
  {
    icon: Smartphone,
    title: "Cross-Platform",
    description: "Built for both iOS and Android from a single codebase. Consistent experience across all devices.",
    color: "from-rose-500 to-rose-600",
    accent: "bg-rose-500",
    number: "05",
  },
  {
    icon: Zap,
    title: "Offline Mode",
    description: "Drivers can manage deliveries even with poor signal. Data syncs automatically when connection returns.",
    color: "from-cyan-500 to-cyan-600",
    accent: "bg-cyan-500",
    number: "06",
  },
]

const techStack = [
  { name: "React Native", description: "One codebase, both platforms", icon: Smartphone, color: "from-blue-500 to-blue-700" },
  { name: "TypeScript", description: "Type-safe mobile development", icon: FileCode, color: "from-blue-500 to-blue-700" },
  { name: "Firebase", description: "Real-time data & push alerts", icon: Cloud, color: "from-amber-500 to-amber-700" },
  { name: "Stripe", description: "In-app payment processing", icon: CreditCard, color: "from-purple-500 to-purple-700" },
  { name: "Mapbox", description: "Custom maps & navigation", icon: MapPin, color: "from-emerald-500 to-emerald-700" },
  { name: "Expo", description: "Rapid build & deployment", icon: Zap, color: "from-gray-800 to-black" },
]

const stats = [
  { value: "4.8★", label: "App Store Rating" },
  { value: "<3s", label: "Average Load Time" },
  { value: "99.9%", label: "Uptime SLA" },
]

export default function MobileAppPage() {
  return (
    <main className="min-h-screen">
      <UtilityBar />
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-16 lg:py-20 min-h-[360px] flex items-center">
        <Image
          src="/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpeg"
          alt="Mobile Delivery App"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003380]/90 via-[#003380]/75 to-[#003380]/50" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/portfolio" className="hover:text-white transition-colors">Our Work</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">Mobile Delivery App</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Mobile Delivery App
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            A complete on-demand delivery experience — from order placement to real-time tracking and doorstep arrival.
          </p>
        </div>
      </section>

      {/* Why It Matters - Premium SaaS */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6">
                <Smartphone className="h-4 w-4" />
                Why it matters
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
                Your business in every pocket
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                South Africans spend over 5 hours a day on their phones. A mobile app puts your business directly in your customer&apos;s hand — faster than any website.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "Push notifications bring customers back instantly",
                  "GPS tracking builds trust and reduces support calls",
                  "One-tap ordering increases repeat purchases",
                  "Offline mode keeps drivers productive anywhere",
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
                Build your app
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl">
                <Image
                  src="/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpeg"
                  alt="Mobile Delivery App"
                  width={600}
                  height={450}
                  className="object-cover w-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl border border-border p-5 max-w-[200px]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">User Retention</span>
                </div>
                <div className="text-2xl font-bold text-foreground">3.2x Higher</div>
                <div className="text-xs text-muted-foreground mt-1">Than mobile websites</div>
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
              Everything you need to launch and run a delivery business from your phone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group relative bg-white rounded-2xl p-8 border border-border/50 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1.5 transition-all duration-500"
              >
                <div className={`absolute top-0 left-8 right-8 h-1 ${feature.accent} rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
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
                <div className={`mt-6 h-0.5 w-12 ${feature.accent} rounded-full group-hover:w-full transition-all duration-500`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack - SaaS Premium */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0f172a] to-slate-900" />
        <div className="absolute inset-0 bg-[url('/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpeg')] opacity-10 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/80" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold rounded-full mb-6">
                <Zap className="h-4 w-4 text-amber-400" />
                Mobile-first stack
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                Built for mobile
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                We use cross-platform technology so you launch on iOS and Android simultaneously without doubling your budget.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpeg"
                  alt="Technology stack"
                  width={600}
                  height={450}
                  className="object-cover w-full"
                />
              </div>
            </div>
          </div>

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

      {/* Image Gallery */}
      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Project Gallery</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Screenshots and mockups from the project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-background border border-border">
              <Image src="/Nano Banana 2 - Abstract digital_visualization of global connectivity _ glowing blue_and white nodes.png" alt="App mockup 1" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-background border border-border">
              <Image src="/fPm1t.jpg" alt="App mockup 2" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-background border border-border">
              <Image src="/whWZy.jpg" alt="App mockup 3" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">
            Want an app like this?
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            We can build a custom delivery app for your business. From restaurants to couriers to grocery stores.
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
