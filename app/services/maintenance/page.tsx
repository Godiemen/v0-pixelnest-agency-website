import type { Metadata } from 'next'
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, ChevronRight, Wrench, Shield, Database, Clock, Bug, RefreshCw, Headphones } from "lucide-react"
import { UtilityBar } from "@/components/utility-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export const metadata: Metadata = {
  title: 'Maintenance & Support | Pixelnest',
  description: 'Ongoing website maintenance, security updates, and support for South African businesses. Starting from R500/month.',
}

const features = [
  { icon: Shield, title: "Security Updates", desc: "Patches and hardening to keep hackers out." },
  { icon: Database, title: "Daily Backups", desc: "Your data is safe and restorable in minutes." },
  { icon: Clock, title: "Uptime Monitoring", desc: "We watch your site 24/7 and act if it goes down." },
  { icon: Bug, title: "Bug Fixes", desc: "Broken links, errors, and issues fixed fast." },
  { icon: RefreshCw, title: "Content Updates", desc: "Text, images, and pages updated on request." },
  { icon: Headphones, title: "24/7 Support", desc: "Reach us by WhatsApp or email anytime." },
]

const process = [
  { step: "01", title: "Onboard", desc: "We audit your current site and set up monitoring tools." },
  { step: "02", title: "Secure", desc: "We apply all pending updates, backups, and fixes." },
  { step: "03", title: "Monitor", desc: "We keep an eye on performance, uptime, and threats." },
  { step: "04", title: "Improve", desc: "We suggest and implement optimizations each month." },
]

export default function MaintenancePage() {
  return (
    <main className="min-h-screen">
      <UtilityBar />
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 lg:py-28 min-h-[420px] flex items-center">
        <Image src="/00f78c9ddfcc7b44aaaf8902c2e14ec5.jpg" alt="Maintenance" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003380]/90 via-[#003380]/75 to-[#003380]/50" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">Maintenance</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Maintenance & Support</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">Your website is never done. We keep it fast, secure, and up-to-date so you can focus on your business.</p>
          <div className="mt-8 flex items-center gap-4">
            <span className="text-xl font-bold text-white">From R500/mo</span>
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
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6"><Wrench className="h-4 w-4" /> Overview</span>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">Sleep easy, we have got it</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">Websites break, plugins go out of date, and hackers never sleep. Our maintenance plans handle all of it — security patches, backups, updates, and fixes — so you never have to worry about your site going down.</p>
                <div className="space-y-4">
                  {["Monthly security patches and updates", "Daily off-site backups you can restore from", "Performance monitoring and speed fixes", "Unlimited small content changes"].map((item) => (
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
                <div className="absolute -inset-4 bg-gradient-to-r from-slate-500/20 to-slate-700/20 rounded-3xl blur-2xl" />
                <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl">
                  <Image src="/21b99ee5189f671905b80207b33572d9.jpg" alt="Support team" width={600} height={450} className="object-cover w-full" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[url('/00f78c9ddfcc7b44aaaf8902c2e14ec5.jpg')] bg-cover bg-center opacity-[0.04]" />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-secondary/20 to-secondary/40" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 text-emerald-600 text-sm font-semibold rounded-full mb-4"><Check className="h-4 w-4" /> What You Get</span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">All-inclusive care</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 100}>
                <div className="group bg-background rounded-2xl p-8 border border-border/50 hover:shadow-xl transition-all duration-500 h-full">
                  <div className="w-14 h-14 bg-gradient-to-br from-slate-500 to-slate-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-slate-500/20">
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
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Set it and forget it — we handle the rest.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Support Showcase</h2>
              <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Sample visuals demonstrating our maintenance and support capabilities.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-background border border-border">
              <Image src="/c9f4ec8c8d4d043b45e132ce93d1196e.jpg" alt="Support showcase 1" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-background border border-border">
              <Image src="/05b7d8e3b6d6ba3400575827244e089c.jpg" alt="Support showcase 2" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-background border border-border">
              <Image src="/a5d8f5fe0a334ba09e921048dc4290b7.jpg" alt="Support showcase 3" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary py-20">
        <div className="absolute inset-0 bg-[url('/d44d7ea98202bb7ce62d84b9bf1bf6f4.jpg')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-blue-800/90" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">Stop worrying about your website.</h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">Let us handle the tech. You focus on running your business.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-colors mt-8 shadow-xl">
            Get a Free Quote <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
