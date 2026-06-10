import type { Metadata } from 'next'
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronRight, Search, Palette, Code, Rocket } from "lucide-react"
import { UtilityBar } from "@/components/utility-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: 'Our Approach | Pixelnest',
  description: 'Our proven 4-step process takes your idea from concept to live product — Discover, Design, Build, Launch.',
}

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discover",
    description: "We learn about your business, goals, target audience, and competitors. This discovery phase ensures we build exactly what you need — nothing more, nothing less.",
  },
  {
    icon: Palette,
    step: "02",
    title: "Design",
    description: "We create mockups and prototypes for your approval. Every screen, every button, every interaction is designed with your brand and your users in mind.",
  },
  {
    icon: Code,
    step: "03",
    title: "Build",
    description: "We develop your solution using modern technologies. Clean, scalable code that performs well and is easy to maintain and extend in the future.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch",
    description: "We deploy and provide training and support. Your project goes live with monitoring, analytics, and a plan for continuous improvement.",
  },
]

export default function ApproachPage() {
  return (
    <main className="min-h-screen">
      <UtilityBar />
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-16 lg:py-20 min-h-[360px] flex items-center">
        <Image
          src="/digital-technology-coding-programmer-and-cyber-security-software-development-javascript-on-virtual-screen-internet-of-things-iot-photo.jpg"
          alt="Our Approach"
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
            <span className="text-white">Our Approach</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Our Approach
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            A proven process that takes your idea from concept to live product.
          </p>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-gradient-to-b from-secondary to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              How We Work
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              4 Steps to Launch
            </h2>
          </div>

          {/* Desktop connector */}
          <div className="hidden lg:block relative max-w-5xl mx-auto mb-0">
            <div className="absolute top-[2.25rem] left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.title} className="group relative">
                <div className="relative flex flex-col items-center text-center">
                  <div className="relative w-16 h-16 mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-600 rounded-full shadow-lg shadow-primary/20 group-hover:shadow-primary/30 group-hover:scale-110 transition-all duration-500" />
                    <div className="absolute inset-0.5 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                    <div className="absolute -inset-2 rounded-full border border-primary/10 group-hover:border-primary/30 group-hover:scale-110 transition-all duration-500" />
                  </div>

                  <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                    <step.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>

                  <div className="bg-background/80 backdrop-blur-sm border border-border/50 p-6 rounded-xl mt-3 group-hover:shadow-lg group-hover:shadow-primary/5 group-hover:-translate-y-1 transition-all duration-500">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="flex lg:hidden justify-center py-4">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-primary/30 to-primary/10" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">
            Ready to start your project?
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Let us walk you through our process and show you how we can bring your idea to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-colors mt-8"
          >
            Book a Discovery Call
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
