import type { Metadata } from 'next'
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronRight, MapPin, Target, TrendingUp, Zap, Globe, Award, Check } from "lucide-react"
import { UtilityBar } from "@/components/utility-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export const metadata: Metadata = {
  title: 'Our Story | Pixelnest',
  description: 'Learn how Pixelnest was founded in Durban, South Africa to help small businesses grow online.',
}

const milestones = [
  {
    year: "2026",
    title: "The Spark",
    desc: "Identified a gap in affordable, quality digital services for South African SMEs.",
    icon: Zap,
    color: "from-amber-500 to-orange-500",
  },
  {
    year: "2026",
    title: "Pixelnest Born",
    desc: "Founded in Durban with a mission to make professional web design accessible.",
    icon: Globe,
    color: "from-primary to-blue-600",
  },
  {
    year: "2026",
    title: "First Projects",
    desc: "Delivered our first websites and apps, proving quality does not need a big budget.",
    icon: Check,
    color: "from-emerald-500 to-teal-500",
  },
  {
    year: "2026",
    title: "Growing Impact",
    desc: "Expanding across KwaZulu-Natal and building partnerships with local businesses.",
    icon: TrendingUp,
    color: "from-violet-500 to-purple-500",
  },
]

export default function StoryPage() {
  return (
    <main className="min-h-screen">
      <UtilityBar />
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 lg:py-28 min-h-[420px] flex items-center">
        <Image
          src="/55698b8307dcbf43f44952cac2160eeb.jpg"
          alt="Our Story"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003380]/90 via-[#003380]/75 to-[#003380]/50" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">Our Story</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Our Story
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            How Pixelnest was born from a simple belief — every business deserves a quality online presence.
          </p>
        </div>
      </section>

      {/* Founded in Durban */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6">
                  <MapPin className="h-4 w-4" />
                  The Beginning
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
                  Founded in Durban, built for South Africa
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Pixelnest was founded in Durban, South Africa with one mission — to help small and medium businesses get online and grow. We are a new agency but we bring fresh ideas, modern skills, and genuine dedication to every project we take on.
                </p>
                <div className="space-y-4">
                  {[
                    "Deep understanding of the South African market",
                    "Affordable pricing without compromising quality",
                    "Personal relationships with every client",
                    "Fast turnaround times for growing businesses",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
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
                  <Image
                    src="/Nano Banana 2 - Web DevelopmentA clean_ modern workspace with a large ultrawide monitor displaying a.png"
                    alt="Pixelnest workspace in Durban"
                    width={600}
                    height={450}
                    className="object-cover w-full"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl border border-border p-5 max-w-[220px]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-4 w-4 text-emerald-600" />
                    </div>
                    <span className="text-xs text-muted-foreground font-medium">Client Growth</span>
                  </div>
                  <div className="text-2xl font-bold text-foreground">100%</div>
                  <div className="text-xs text-muted-foreground mt-1">Satisfaction rate</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Durban & Mission */}
      <section className="py-24 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="group relative bg-background rounded-2xl p-8 border border-border/50 hover:shadow-xl transition-all duration-500 h-full">
                <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-primary to-blue-600 rounded-r-full" />
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Why Durban?</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We are proud to be based in Durban, KwaZulu-Natal. We understand the local business landscape, speak the language of our clients, and are committed to supporting our community.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Durban", "Umhlanga", "Ballito", "Pinetown"].map((city) => (
                    <span key={city} className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-foreground border border-border">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="group relative bg-background rounded-2xl p-8 border border-border/50 hover:shadow-xl transition-all duration-500 h-full">
                <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-r-full" />
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We believe that every business deserves a quality online presence, regardless of size or budget. Good design should not be a luxury — it should be a tool for growth.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Accessibility", "Quality", "Growth", "Innovation"].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-foreground border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Serving SA */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="relative order-2 lg:order-1">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-2xl" />
                <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl">
                  <Image
                    src="/Nano Banana 2 - Web DevelopmentA clean_ modern workspace with a large ultrawide monitor displaying a.png"
                    alt="Serving South Africa"
                    width={600}
                    height={450}
                    className="object-cover w-full"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl border border-border p-5 max-w-[220px]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Globe className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-xs text-muted-foreground font-medium">Coverage</span>
                  </div>
                  <div className="text-2xl font-bold text-foreground">All 9</div>
                  <div className="text-xs text-muted-foreground mt-1">Provinces reachable</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="order-1 lg:order-2">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 text-emerald-600 text-sm font-semibold rounded-full mb-6">
                  <Globe className="h-4 w-4" />
                  Nationwide Reach
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
                  Serving all of South Africa
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  We work with businesses across Durban, KwaZulu-Natal, and all of South Africa. Whether you are a restaurant in Umhlanga, a retailer in the CBD, or a startup in Ballito, we are here to help you succeed online.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "KwaZulu-Natal", desc: "Our home base" },
                    { label: "Gauteng", desc: "Johannesburg & Pretoria" },
                    { label: "Western Cape", desc: "Cape Town region" },
                    { label: "Remote", desc: "Anywhere with internet" },
                  ].map((loc) => (
                    <div key={loc.label} className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 border border-border/50">
                      <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-foreground text-sm">{loc.label}</div>
                        <div className="text-xs text-muted-foreground">{loc.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24 bg-secondary/30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/10 text-amber-600 text-sm font-semibold rounded-full mb-4">
                <Award className="h-4 w-4" />
                Our Journey
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                Milestones that matter
              </h2>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary to-primary/30 hidden sm:block" />

            <div className="space-y-12">
              {milestones.map((m, i) => (
                <ScrollReveal key={m.title} delay={i * 120}>
                  <div className={`flex flex-col sm:flex-row items-start gap-8 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                    <div className={`flex-1 ${i % 2 === 0 ? 'sm:text-right' : 'sm:text-left'}`}>
                      <div className={`bg-background rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-lg transition-shadow ${i % 2 === 0 ? 'sm:ml-auto' : 'sm:mr-auto'} max-w-md`}>
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-3">
                          {m.year}
                        </span>
                        <h3 className="text-xl font-bold text-foreground mb-2">{m.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
                      </div>
                    </div>

                    <div className="relative flex items-center justify-center">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${m.color} flex items-center justify-center shadow-lg z-10 flex-shrink-0`}>
                        <m.icon className="h-7 w-7 text-white" />
                      </div>
                    </div>

                    <div className="flex-1 hidden sm:block" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary py-20">
        <div className="absolute inset-0 bg-[url('/Nano%20Banana%202%20-%20Web%20DevelopmentA%20clean_%20modern%20workspace%20with%20a%20large%20ultrawide%20monitor%20displaying%20a.png')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-blue-800/90" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
            Be part of our story
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Let us build something great together. Your project could be our next success story.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-colors mt-8 shadow-xl"
          >
            Get in Touch
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
