import type { Metadata } from 'next'
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronRight, Heart, DollarSign, Users } from "lucide-react"
import { UtilityBar } from "@/components/utility-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: 'Our Values | Pixelnest',
  description: 'The foundation of everything we do at Pixelnest — quality work, honest pricing, and putting clients first.',
}

const values = [
  {
    icon: Heart,
    title: "Quality Work",
    description: "We take pride in delivering work that we would be proud to show anyone. No shortcuts, no compromises. Every pixel, every line of code, every interaction is crafted with care.",
    color: "from-blue-500 to-blue-600",
    accent: "bg-blue-500",
  },
  {
    icon: DollarSign,
    title: "Honest Pricing",
    description: "No hidden fees, no surprises. We tell you exactly what it costs upfront and stick to it. Our quotes are detailed and transparent so you can plan with confidence.",
    color: "from-emerald-500 to-emerald-600",
    accent: "bg-emerald-500",
  },
  {
    icon: Users,
    title: "Client First",
    description: "Your success is our success. We are invested in helping you grow and achieve your goals. We do not just build projects — we build long-term partnerships.",
    color: "from-amber-500 to-amber-600",
    accent: "bg-amber-500",
  },
]

export default function ValuesPage() {
  return (
    <main className="min-h-screen">
      <UtilityBar />
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-16 lg:py-20 min-h-[360px] flex items-center">
        <Image
          src="/221911e521f752260dfa32c2665c7258.jpg"
          alt="Our Values"
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
            <span className="text-white">Our Values</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Our Values
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            The foundation of everything we do, every action we take, and every achievement we celebrate.
          </p>
        </div>
      </section>

      {/* Values Cards */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="group bg-white rounded-2xl p-10 border border-border/50 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center shadow-lg mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
                <div className={`mt-8 h-0.5 w-16 ${value.accent} rounded-full group-hover:w-full transition-all duration-500`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">
            Work with a team that shares your values
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            We believe in doing things the right way. Let us show you what that means for your project.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-colors mt-8"
          >
            Start a Project
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
