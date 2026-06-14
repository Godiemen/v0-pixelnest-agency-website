import type { Metadata } from 'next'
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, ChevronRight, Globe, Zap, Shield, Smartphone, Search, Clock } from "lucide-react"
import { UtilityBar } from "@/components/utility-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: 'Website Development | Pixelnest',
  description: 'Fast, modern, mobile-friendly websites for South African businesses. Starting from R2,500.',
}

const features = [
  { icon: Smartphone, title: "Mobile Responsive", desc: "Looks perfect on every device, from phones to desktops." },
  { icon: Zap, title: "Fast Loading", desc: "Optimized for speed so visitors never bounce." },
  { icon: Search, title: "SEO Ready", desc: "Built to rank on Google from day one." },
  { icon: Shield, title: "SSL Security", desc: "HTTPS encryption included on every site." },
  { icon: Clock, title: "Quick Turnaround", desc: "Launch in days, not months." },
  { icon: Globe, title: "Custom Design", desc: "Unique look tailored to your brand." },
]

const process = [
  { step: "01", title: "Discovery", desc: "We learn about your business, goals, and target audience." },
  { step: "02", title: "Design", desc: "We create a visual mockup for your approval." },
  { step: "03", title: "Development", desc: "We build your site with clean, modern code." },
  { step: "04", title: "Launch", desc: "We deploy, test, and hand over your new site." },
]

export default function WebsiteDevelopmentPage() {
  return (
    <main className="min-h-screen">
      <UtilityBar />
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 lg:py-28 min-h-[420px] flex items-center">
        <Image src="/videoframe_3779.png" alt="Website Development" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003380]/90 via-[#003380]/75 to-[#003380]/50" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">Website Development</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Website Development</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">Fast, modern, mobile-friendly websites that turn visitors into customers. Built for South African businesses.</p>
          <div className="mt-8 flex items-center gap-4">
            <span className="text-xl font-bold text-white">From R2,500</span>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors">
              Get a Quote <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6"><Globe className="h-4 w-4" /> Overview</span>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">Your digital storefront</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">Your website is often the first impression customers have of your business. We build sites that load fast, look professional, and guide visitors toward action — whether that is calling you, buying a product, or filling out a form.</p>
                <div className="space-y-4">
                  {["Custom design tailored to your brand", "Built with Next.js for speed and SEO", "Mobile-first responsive layout", "Easy to update without a developer"].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"><Check className="h-4 w-4 text-primary" /></div>
                      <span className="text-foreground font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl" />
                <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl">
                  <Image src="/d2d46c0a55af91c07290128f1ac99d76.jpg" alt="Website mockup" width={600} height={450} className="object-cover w-full" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[url('/d2d46c0a55af91c07290128f1ac99d76.jpg')] bg-cover bg-center opacity-[0.04]" />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-secondary/20 to-secondary/40" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 text-emerald-600 text-sm font-semibold rounded-full mb-4"><Check className="h-4 w-4" /> What You Get</span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">Everything included</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 100}>
                <div className="group bg-background rounded-2xl p-8 border border-border/50 hover:shadow-xl transition-all duration-500 h-full">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                    <f.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{f.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">How it works</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">From first call to live site — a simple 4-step process.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <ScrollReveal key={p.step} delay={i * 100}>
                <div className="relative bg-secondary/50 rounded-2xl p-8 border border-border/50 h-full">
                  <span className="text-5xl font-bold text-primary/10 absolute top-4 right-4">{p.step}</span>
                  <h3 className="text-xl font-bold text-foreground mb-3 relative z-10">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed relative z-10">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Website Showcase</h2>
              <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Screenshots and mockups from our web projects.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-background border border-border">
              <Image src="/909a1d81bd9718d154e653dd8c7aef9c.jpg" alt="Website showcase 1" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-background border border-border">
              <Image src="/21cca8f4c9f962614ce8841837e7a9f6.jpg" alt="Website showcase 2" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-background border border-border">
              <Image src="/11087cb6712716f3e388d3b883c323ee.jpg" alt="Website showcase 3" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary py-20">
        <div className="absolute inset-0 bg-[url('/videoframe_3779.png')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-blue-800/90" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">Ready for a new website?</h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">Let us build something fast, beautiful, and built to grow your business.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-colors mt-8 shadow-xl">
            Get a Free Quote <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
