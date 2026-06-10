import type { Metadata } from 'next'
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronRight, Heart, DollarSign, Users, Search, Palette, Code, Rocket, Mail, Linkedin } from "lucide-react"
import { UtilityBar } from "@/components/utility-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: 'About Pixelnest | Web & App Development Agency in Durban',
  description: 'Learn about Pixelnest, a Durban-based web and app development agency helping small businesses across South Africa grow online.',
}

const values = [
  {
    icon: Heart,
    title: "Quality Work",
    description: "We take pride in delivering work that we would be proud to show anyone",
  },
  {
    icon: DollarSign,
    title: "Honest Pricing",
    description: "No hidden fees, no surprises. We tell you exactly what it costs upfront",
  },
  {
    icon: Users,
    title: "Client First",
    description: "Your success is our success. We are invested in helping you grow",
  },
]

const process = [
  {
    icon: Search,
    step: "01",
    title: "Discover",
    description: "We learn about your business, goals, and target audience",
  },
  {
    icon: Palette,
    step: "02",
    title: "Design",
    description: "We create mockups and prototypes for your approval",
  },
  {
    icon: Code,
    step: "03",
    title: "Build",
    description: "We develop your solution using modern technologies",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch",
    description: "We deploy and provide training and support",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <UtilityBar />
      <Navbar />

      {/* Hero Section - Full-bleed with left blue gradient */}
      <section className="relative min-h-[420px] lg:min-h-[480px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/Nano Banana 2 - Web DevelopmentA clean_ modern workspace with a large ultrawide monitor displaying a.png"
          alt="Our workspace"
          fill
          className="object-cover"
          priority
        />
        {/* Blue gradient overlay on left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#003380]/90 via-[#003380]/60 to-transparent" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              About Pixelnest
            </h1>
            <p className="mt-5 text-lg text-white/85 leading-relaxed max-w-xl">
              A new agency with fresh ideas and genuine dedication. We craft digital experiences that help businesses grow.
            </p>
          </div>
        </div>

        {/* Bottom breadcrumb */}
        <div className="absolute bottom-0 inset-x-0 z-10 bg-white/10 backdrop-blur-sm border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-white">About</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-navigation */}
      <div className="bg-white border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4 text-sm mb-4">
            <span className="font-bold text-foreground text-base">About us</span>
            <Link href="/about" className="text-primary hover:underline inline-flex items-center gap-1">
              See all <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <Link href="/about/story" className="text-foreground hover:text-primary transition-colors py-2 border-t-2 border-transparent hover:border-primary font-medium text-sm">
              Our Story
            </Link>
            <Link href="/about/values" className="text-foreground hover:text-primary transition-colors py-2 border-t-2 border-transparent hover:border-primary font-medium text-sm">
              Our Values
            </Link>
            <Link href="/about/team" className="text-foreground hover:text-primary transition-colors py-2 border-t-2 border-transparent hover:border-primary font-medium text-sm">
              Our Team
            </Link>
            <Link href="/about/approach" className="text-foreground hover:text-primary transition-colors py-2 border-t-2 border-transparent hover:border-primary font-medium text-sm">
              Our Approach
            </Link>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section id="our-story" className="py-20 bg-background scroll-mt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Pixelnest was founded in Durban, South Africa with one mission — to help small and medium businesses get online and grow. We are a new agency but we bring fresh ideas, modern skills, and genuine dedication to every project we take on. We believe that every business deserves a quality online presence, regardless of size or budget.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values - KPMG-style card grid */}
      <section id="our-values" className="py-20 bg-secondary scroll-mt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Values</h2>
            <p className="mt-3 text-muted-foreground max-w-xl">
              The foundation of everything we do, every action we take, and every achievement we celebrate.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Quality Work",
                desc: "We take pride in delivering work that we would be proud to show anyone. No shortcuts, no compromises.",
                color: "bg-primary",
                link: "/services",
              },
              {
                title: "Honest Pricing",
                desc: "No hidden fees, no surprises. We tell you exactly what it costs upfront and stick to it.",
                color: "bg-emerald-500",
                link: "/contact",
              },
              {
                title: "Client First",
                desc: "Your success is our success. We are invested in helping you grow and achieve your goals.",
                color: "bg-amber-500",
                link: "/portfolio",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="group bg-background border border-border/50 hover:shadow-lg transition-all duration-300"
              >
                {/* Colored left border accent */}
                <div className="flex h-full">
                  <div className={`w-1.5 ${card.color} flex-shrink-0`} />
                  <div className="p-8 flex flex-col">
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                      {card.desc}
                    </p>
                    <Link
                      href={card.link}
                      className="inline-flex items-center gap-2 text-primary text-sm font-semibold mt-6 hover:gap-3 transition-all"
                    >
                      Discover more
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team - KPMG-style circular photo grid */}
      <section id="our-team" className="py-20 bg-background scroll-mt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Meet the Team</h2>
            <p className="mt-3 text-muted-foreground">The people behind Pixelnest</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-5xl mx-auto">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-36 h-36 mb-5">
                <div className="absolute inset-0 rounded-full bg-secondary ring-1 ring-border" />
                <Image
                  src="/IMG-20260605-WA0020.jpg"
                  alt="Nqobani Ntuli"
                  fill
                  className="object-cover rounded-full p-1.5"
                />
              </div>
              <h3 className="text-lg font-bold text-foreground">Nqobani Ntuli</h3>
              <p className="text-sm text-primary font-medium mt-0.5">Founder & Developer</p>
              <p className="text-xs text-muted-foreground mt-0.5">Pixelnest in South Africa</p>
              <div className="flex items-center gap-3 mt-4">
                <a
                  href="mailto:info@pixelnest.co.za"
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  aria-label="Email Nqobani Ntuli"
                >
                  <Mail className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-36 h-36 mb-5">
                <div className="absolute inset-0 rounded-full bg-secondary ring-1 ring-border" />
                <Image
                  src="/IMG-20260608-WA0024.jpg"
                  alt="Amahle Chamane"
                  fill
                  className="object-cover rounded-full p-1.5"
                />
              </div>
              <h3 className="text-lg font-bold text-foreground">Amahle Chamane</h3>
              <p className="text-sm text-primary font-medium mt-0.5">Director</p>
              <p className="text-xs text-muted-foreground mt-0.5">Pixelnest in South Africa</p>
              <div className="flex items-center gap-3 mt-4">
                <a
                  href="mailto:info@pixelnest.co.za"
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  aria-label="Email Amahle Chamane"
                >
                  <Mail className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach - Premium timeline */}
      <section id="our-approach" className="py-24 bg-gradient-to-b from-secondary to-background scroll-mt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              How We Work
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">Our Approach</h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
              A proven process that takes your idea from concept to live product
            </p>
          </div>

          {/* Desktop horizontal connector line */}
          <div className="hidden lg:block relative max-w-5xl mx-auto mb-0">
            <div className="absolute top-[2.25rem] left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 max-w-6xl mx-auto">
            {process.map((step, index) => (
              <div key={step.title} className="group relative">
                {/* Step number + icon */}
                <div className="relative flex flex-col items-center text-center">
                  {/* Number circle */}
                  <div className="relative w-16 h-16 mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-600 rounded-full shadow-lg shadow-primary/20 group-hover:shadow-primary/30 group-hover:scale-110 transition-all duration-500" />
                    <div className="absolute inset-0.5 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                    {/* Outer glow ring */}
                    <div className="absolute -inset-2 rounded-full border border-primary/10 group-hover:border-primary/30 group-hover:scale-110 transition-all duration-500" />
                  </div>

                  {/* Icon box */}
                  <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                    <step.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>

                  {/* Description card */}
                  <div className="bg-background/80 backdrop-blur-sm border border-border/50 p-6 rounded-xl mt-3 group-hover:shadow-lg group-hover:shadow-primary/5 group-hover:-translate-y-1 transition-all duration-500">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Vertical connector (mobile only, between cards) */}
                {index < process.length - 1 && (
                  <div className="flex lg:hidden justify-center py-4">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-primary/30 to-primary/10" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Durban */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Proudly Durban. Proudly South African.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We are proud to be based in Durban, KwaZulu-Natal. We understand the local business landscape and are committed to supporting our community. By choosing Pixelnest, you are supporting a local business while getting world-class digital solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We work with businesses across Durban, KwaZulu-Natal, and all of South Africa. Whether you are a restaurant in Umhlanga, a retailer in the CBD, or a startup in Ballito, we are here to help you succeed online.
              </p>
            </div>
            <div className="bg-primary/5 rounded-2xl p-8 text-center">
              <div className="text-6xl font-bold text-primary mb-2">031</div>
              <p className="text-xl font-semibold text-foreground">Durban Area Code</p>
              <p className="text-muted-foreground mt-2">Local support for local businesses</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground text-balance">
            Ready to work with us?
          </h2>
          <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">
            Let&apos;s discuss your project and see how we can help your business grow.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-background text-primary px-8 py-4 rounded-lg font-semibold hover:bg-background/90 transition-colors mt-8"
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
