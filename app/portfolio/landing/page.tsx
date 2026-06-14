import type { Metadata } from 'next'
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronRight, Target, FormInput, Zap, BarChart3, Clock, Mail, Check, Globe as GlobeIcon, FileCode, Palette, Database, Cloud, TrendingUp } from "lucide-react"
import { UtilityBar } from "@/components/utility-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: 'Landing Page | Pixelnest Sample Project',
  description: 'A high-converting landing page with lead capture forms and call-to-action sections built by Pixelnest.',
}

const features = [
  {
    icon: Target,
    title: "Conversion Focused",
    description: "Every element is designed to guide visitors toward a single action — sign up, buy, or contact you.",
    color: "from-blue-500 to-blue-600",
    accent: "bg-blue-500",
    number: "01",
  },
  {
    icon: FormInput,
    title: "Lead Capture Forms",
    description: "Smart forms with validation, auto-fill, and CRM integration so no lead slips through the cracks.",
    color: "from-emerald-500 to-emerald-600",
    accent: "bg-emerald-500",
    number: "02",
  },
  {
    icon: Zap,
    title: "A/B Testing Ready",
    description: "Built-in split testing support so you can test headlines, buttons, and layouts to find what converts best.",
    color: "from-amber-500 to-amber-600",
    accent: "bg-amber-500",
    number: "03",
  },
  {
    icon: BarChart3,
    title: "Analytics Integration",
    description: "Google Analytics, Meta Pixel, and conversion tracking pre-configured so you know what is working.",
    color: "from-violet-500 to-violet-600",
    accent: "bg-violet-500",
    number: "04",
  },
  {
    icon: Clock,
    title: "Fast Load Speed",
    description: "Sub-2-second load times with lazy loading, image optimization, and minimal JavaScript for instant engagement.",
    color: "from-rose-500 to-rose-600",
    accent: "bg-rose-500",
    number: "05",
  },
  {
    icon: Mail,
    title: "Email Automation",
    description: "Connect to Mailchimp, Resend, or any ESP. Welcome sequences and follow-ups triggered automatically.",
    color: "from-cyan-500 to-cyan-600",
    accent: "bg-cyan-500",
    number: "06",
  },
]

const techStack = [
  { name: "Next.js", description: "Blazing fast static pages", icon: GlobeIcon, color: "from-slate-700 to-slate-900" },
  { name: "TypeScript", description: "Bulletproof code quality", icon: FileCode, color: "from-blue-500 to-blue-700" },
  { name: "Tailwind CSS", description: "Rapid landing page styling", icon: Palette, color: "from-cyan-500 to-cyan-700" },
  { name: "Framer Motion", description: "Smooth scroll animations", icon: Zap, color: "from-purple-500 to-purple-700" },
  { name: "Vercel", description: "Edge deployment worldwide", icon: Cloud, color: "from-gray-800 to-black" },
  { name: "Zod", description: "Form validation & safety", icon: Check, color: "from-emerald-500 to-emerald-700" },
]

const stats = [
  { value: "12.4%", label: "Avg. Conversion Rate" },
  { value: "1.8s", label: "Time to Interactive" },
  { value: "3x", label: "ROAS Improvement" },
]

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <UtilityBar />
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-16 lg:py-20 min-h-[360px] flex items-center">
        <Image
          src="/b7f8c6cce2c8a28d1b88105c7743b480.jpg"
          alt="Landing Page"
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
            <span className="text-white">Landing Page</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            High-Converting Landing Page
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            A focused, single-purpose page designed to turn visitors into leads and leads into customers.
          </p>
        </div>
      </section>

      {/* Why It Matters - Premium SaaS */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6">
                <Target className="h-4 w-4" />
                Why it matters
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
                One page. One goal. More leads.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                A landing page is the most efficient way to convert paid traffic into revenue. No distractions, no extra clicks — just a clear path from interest to action.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "Remove distractions that kill conversions",
                  "Test different offers quickly and cheaply",
                  "Capture leads before they bounce forever",
                  "Scale what works, kill what doesn't",
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
                Build your landing page
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl">
                <Image
                  src="/fa2c78864fa179272856403f487954b8.jpg"
                  alt="Landing Page"
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
                  <span className="text-xs text-muted-foreground font-medium">Conversion Lift</span>
                </div>
                <div className="text-2xl font-bold text-foreground">+340%</div>
                <div className="text-xs text-muted-foreground mt-1">Vs. generic website</div>
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
              Every tool you need to capture, track, and convert leads into paying customers.
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
        <div className="absolute inset-0 bg-[url('/13f1cfec181e91733eb10abaa487deaa.jpg')] opacity-10 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/80" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold rounded-full mb-6">
                <Zap className="h-4 w-4 text-amber-400" />
                Conversion-ready stack
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                Built to convert
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Every tool is chosen for speed, tracking accuracy, and reliability. When you are paying for traffic, every millisecond and every pixel matters.
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
                  src="/e31643e34bf2c452ba673eec134f1ba2.jpg"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-background border border-border">
              <Image src="/277807077925bcd8de26ac004e6e7600.jpg" alt="Landing page mockup 1" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-background border border-border">
              <Image src="/de5583c172d0c550f79b2f226a7656b7.jpg" alt="Landing page mockup 2" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-background border border-border">
              <Image src="/d858ede23b1a2e154fc37edb66b4a875.jpg" alt="Landing page mockup 3" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-background border border-border">
              <Image src="/46c891e0565c033d0f3f21e79b49ce1d.jpg" alt="Landing page mockup 4" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">
            Need a landing page that converts?
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            We design landing pages focused on one thing — getting you more leads, signups, or sales.
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
