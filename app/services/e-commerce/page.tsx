import type { Metadata } from 'next'
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, ChevronRight, ShoppingCart, CreditCard, Truck, BarChart3, Shield, Users, Package } from "lucide-react"
import { UtilityBar } from "@/components/utility-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export const metadata: Metadata = {
  title: 'E-Commerce Solutions | Pixelnest',
  description: 'Online stores with secure payments for South African businesses. Starting from R5,000.',
}

const features = [
  { icon: CreditCard, title: "Secure Payments", desc: "Accept card, EFT, and instant EFT via trusted gateways." },
  { icon: Package, title: "Inventory Mgmt", desc: "Track stock, variants, and orders in real time." },
  { icon: Truck, title: "Order Tracking", desc: "Customers see shipping status from checkout to door." },
  { icon: BarChart3, title: "Sales Analytics", desc: "Know what sells, when, and to whom." },
  { icon: Shield, title: "SSL & Security", desc: "Encrypted checkout and fraud protection." },
  { icon: Users, title: "Customer Accounts", desc: "Wishlists, order history, and saved addresses." },
]

const process = [
  { step: "01", title: "Plan", desc: "We map out your product catalog, categories, and checkout flow." },
  { step: "02", title: "Design", desc: "We design a store that builds trust and drives purchases." },
  { step: "03", title: "Integrate", desc: "We connect payments, shipping, and inventory systems." },
  { step: "04", title: "Launch", desc: "We test thoroughly and go live with training included." },
]

export default function EcommercePage() {
  return (
    <main className="min-h-screen">
      <UtilityBar />
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 lg:py-28 min-h-[420px] flex items-center">
        <Image src="/72f263964ad7d25c06b4f5d52f771919.jpg" alt="E-Commerce" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003380]/90 via-[#003380]/75 to-[#003380]/50" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">E-Commerce</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">E-Commerce Solutions</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">Turn browsers into buyers with a secure, fast, and beautiful online store.</p>
          <div className="mt-8 flex items-center gap-4">
            <span className="text-xl font-bold text-white">From R5,000</span>
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
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6"><ShoppingCart className="h-4 w-4" /> Overview</span>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">Sell while you sleep</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">South African consumers shop online more than ever. We build e-commerce stores that make buying easy — from browsing to checkout to delivery tracking. Your store is open 24/7, even when you are not.</p>
                <div className="space-y-4">
                  {["Works with PayFast, Paystack, and Stripe", "Mobile-first checkout experience", "Automated invoicing and email confirmations", "Admin dashboard to manage everything"].map((item) => (
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
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-2xl" />
                <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl">
                  <Image src="/P2Hpl.jpg" alt="E-commerce mockup" width={600} height={450} className="object-cover w-full" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[url('/72f263964ad7d25c06b4f5d52f771919.jpg')] bg-cover bg-center opacity-[0.04]" />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-secondary/20 to-secondary/40" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 text-emerald-600 text-sm font-semibold rounded-full mb-4"><Check className="h-4 w-4" /> What You Get</span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">Store-ready features</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 100}>
                <div className="group bg-background rounded-2xl p-8 border border-border/50 hover:shadow-xl transition-all duration-500 h-full">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20">
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
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">From catalog to checkout — a smooth launch process.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Store Showcase</h2>
              <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Screenshots from our e-commerce builds.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-background border border-border">
              <Image src="/Nano Banana 2 - Professional UIUX mockup of a modern e-commerce website displayed on a sleek ultrawi.png" alt="Store showcase 1" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-background border border-border">
              <Image src="/fPm1t.jpg" alt="Store showcase 2" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-background border border-border">
              <Image src="/whWZy.jpg" alt="Store showcase 3" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary py-20">
        <div className="absolute inset-0 bg-[url('/72f263964ad7d25c06b4f5d52f771919.jpg')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-blue-800/90" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">Ready to sell online?</h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">Let us build a store that turns visitors into loyal customers.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-colors mt-8 shadow-xl">
            Get a Free Quote <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
