import type { Metadata } from 'next'
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, ChevronRight, Smartphone, Zap, Bell, Cloud, Lock, RefreshCw, Code2 } from "lucide-react"
import { UtilityBar } from "@/components/utility-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export const metadata: Metadata = {
  title: 'App Development | Pixelnest',
  description: 'Native Android and iOS apps for South African businesses. Starting from R8,000.',
}

const features = [
  { icon: Smartphone, title: "Cross-Platform", desc: "One codebase for both iOS and Android using React Native." },
  { icon: Zap, title: "Native Performance", desc: "Smooth animations and fast load times like a native app." },
  { icon: Bell, title: "Push Notifications", desc: "Keep users engaged with targeted messages." },
  { icon: Cloud, title: "Cloud Sync", desc: "Data stays in sync across all user devices." },
  { icon: Lock, title: "Secure", desc: "Encrypted data and secure authentication built in." },
  { icon: RefreshCw, title: "Offline Mode", desc: "Works even when the user has no internet." },
]

const process = [
  { step: "01", title: "Idea", desc: "We map out your app concept, features, and user flows." },
  { step: "02", title: "Design", desc: "We create interactive prototypes you can test on your phone." },
  { step: "03", title: "Build", desc: "We code your app with React Native and test on real devices." },
  { step: "04", title: "Launch", desc: "We publish to the App Store and Google Play for you." },
]

export default function AppDevelopmentPage() {
  return (
    <main className="min-h-screen">
      <UtilityBar />
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 lg:py-28 min-h-[420px] flex items-center">
        <Image src="/b4073ae822c46bc169e18a42f49bba08.jpg" alt="App Development" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003380]/90 via-[#003380]/75 to-[#003380]/50" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">App Development</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">App Development</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">Native Android and iOS apps that put your business in your customers pockets.</p>
          <div className="mt-8 flex items-center gap-4">
            <span className="text-xl font-bold text-white">From R8,000</span>
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
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6"><Smartphone className="h-4 w-4" /> Overview</span>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">Your business, in their pocket</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">Mobile apps create deeper customer relationships than websites alone. Whether you need a booking app, delivery tracker, or client portal — we build apps that users love to open.</p>
                <div className="space-y-4">
                  {["Published to App Store & Google Play", "Built with React Native for both platforms", "Push notifications to re-engage users", "Secure user authentication & data"].map((item) => (
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
                <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
                <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl">
                  <Image src="/146dc47b322c4034b2e6b7b9b4dffa1bugfytf.jpg" alt="App mockup" width={600} height={450} className="object-cover w-full" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 text-emerald-600 text-sm font-semibold rounded-full mb-4"><Check className="h-4 w-4" /> What You Get</span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">Built for mobile</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 100}>
                <div className="group bg-background rounded-2xl p-8 border border-border/50 hover:shadow-xl transition-all duration-500 h-full">
                  <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-violet-500/20">
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
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">From concept to app store — we handle everything.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">App Showcase</h2>
              <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Sample visuals demonstrating our app design capabilities.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-background border border-border">
              <Image src="/fe81bdf36afc13309edbb56bb2731d66.jpg" alt="App showcase 1" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-background border border-border">
              <Image src="/568f15301cb6ac6645529893e25fe0f3.jpg" alt="App showcase 2" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-background border border-border">
              <Image src="/3bc0c5e5cb3b8b85b448c7869823b35d.jpg" alt="App showcase 3" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary py-20">
        <div className="absolute inset-0 bg-[url('/12d960630b251204eb0decc4f40d4054.jpg')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-blue-800/90" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">Got an app idea?</h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">Let us turn it into a real product your customers can download.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-colors mt-8 shadow-xl">
            Get a Free Quote <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
