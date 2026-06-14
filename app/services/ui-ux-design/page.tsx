import type { Metadata } from 'next'
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, ChevronRight, Palette, Eye, Figma, MousePointer, Layers, Accessibility, PenTool } from "lucide-react"
import { UtilityBar } from "@/components/utility-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export const metadata: Metadata = {
  title: 'UI/UX Design | Pixelnest',
  description: 'Beautiful, usable interfaces and brand identity for South African businesses. Starting from R1,500.',
}

const features = [
  { icon: Eye, title: "Visual Design", desc: "Stunning interfaces that reflect your brand personality." },
  { icon: MousePointer, title: "User Flows", desc: "Intuitive paths that guide users to action." },
  { icon: Figma, title: "Prototyping", desc: "Clickable mockups you can test before building." },
  { icon: Layers, title: "Design Systems", desc: "Reusable components for consistent scaling." },
  { icon: Accessibility, title: "Accessible", desc: "Inclusive design that works for everyone." },
  { icon: PenTool, title: "Brand Identity", desc: "Logos, colors, and typography that tell your story." },
]

const process = [
  { step: "01", title: "Research", desc: "We study your users, competitors, and goals." },
  { step: "02", title: "Wireframe", desc: "We sketch the structure and flow of every screen." },
  { step: "03", title: "Visual Design", desc: "We apply colors, fonts, and polish to bring it to life." },
  { step: "04", title: "Handoff", desc: "We deliver assets and specs for developers to build pixel-perfect." },
]

export default function UIUXDesignPage() {
  return (
    <main className="min-h-screen">
      <UtilityBar />
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 lg:py-28 min-h-[420px] flex items-center">
        <Image src="/03fbe728c82c77c0eb6e455db704438d.jpg" alt="UI/UX Design" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003380]/90 via-[#003380]/75 to-[#003380]/50" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">UI/UX Design</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">UI/UX Design</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">Beautiful interfaces that users love. Every pixel crafted with purpose.</p>
          <div className="mt-8 flex items-center gap-4">
            <span className="text-xl font-bold text-white">From R1,500</span>
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
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6"><Palette className="h-4 w-4" /> Overview</span>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">Design that converts</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">A great design does not just look good — it works. We design interfaces that guide users naturally, reduce friction, and increase conversions. From wireframes to final polish, we design with your business goals in mind.</p>
                <div className="space-y-4">
                  {["User-centered design process", "Figma prototypes for quick feedback", "Consistent brand across all screens", "Accessibility compliance built in"].map((item) => (
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
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-3xl blur-2xl" />
                <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl">
                  <Image src="/bd0bbf74f1f7f49b75fdda9a54b11c4b.jpg" alt="UI Design mockup" width={600} height={450} className="object-cover w-full" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[url('/03fbe728c82c77c0eb6e455db704438d.jpg')] bg-cover bg-center opacity-[0.04]" />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-secondary/20 to-secondary/40" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 text-emerald-600 text-sm font-semibold rounded-full mb-4"><Check className="h-4 w-4" /> What You Get</span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">End-to-end design</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 100}>
                <div className="group bg-background rounded-2xl p-8 border border-border/50 hover:shadow-xl transition-all duration-500 h-full">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-amber-500/20">
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
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">A structured design process that delivers results.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Design Showcase</h2>
              <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Interfaces, wireframes, and prototypes from our design projects.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-background border border-border">
              <Image src="/47b471e189019ad50225a68efc7f9242.jpg" alt="Design showcase 1" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-background border border-border">
              <Image src="/6c05dc40db0d4652c958cfbeba516eb6.jpg" alt="Design showcase 2" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-background border border-border">
              <Image src="/0aad5f51d6a38df636ad8acfc99a5139.jpg" alt="Design showcase 3" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary py-20">
        <div className="absolute inset-0 bg-[url('/03fbe728c82c77c0eb6e455db704438d.jpg')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-blue-800/90" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">Ready to stand out?</h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">Let us design an experience your users will remember.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-colors mt-8 shadow-xl">
            Get a Free Quote <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
