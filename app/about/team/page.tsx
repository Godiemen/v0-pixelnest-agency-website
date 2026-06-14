import type { Metadata } from 'next'
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronRight, Mail, Linkedin } from "lucide-react"
import { UtilityBar } from "@/components/utility-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: 'Meet the Team | Pixelnest',
  description: 'Meet the people behind Pixelnest — a passionate team dedicated to helping South African businesses grow online.',
}

const team = [
  {
    name: "Nqobani Ntuli",
    role: "Founder & Developer",
    location: "Pixelnest in South Africa",
    image: "/IMG-20260605-WA0020.jpg",
    email: "nqobani@pixelnest.co.za",
    linkedin: "https://www.linkedin.com/in/nqobani-ntuli-2b47442ab",
  },
  {
    name: "Amahle Chamane",
    role: "Director",
    location: "Pixelnest in South Africa",
    image: "/IMG-20260608-WA0024.jpg",
    email: "amahle@pixelnest.co.za",
    linkedin: "https://www.linkedin.com/in/zanele-chamane-a06866354",
  },
]

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      <UtilityBar />
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-16 lg:py-20 min-h-[360px] flex items-center">
        <Image
          src="/03cdccfd4419ec3b76801cdcd2c7f3ae.jpg"
          alt="Meet the Team"
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
            <span className="text-white">Meet the Team</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Meet the Team
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            The passionate people behind Pixelnest who are dedicated to helping your business succeed online.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              The People
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              Who we are
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-border/40 hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary font-semibold mt-0.5">{member.role}</p>
                  <div className="flex items-center gap-2 mt-4">
                    <a
                      href={`mailto:${member.email}`}
                      className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary/90 transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href={member.linkedin || "#"}
                      target={member.linkedin ? "_blank" : undefined}
                      rel={member.linkedin ? "noopener noreferrer" : undefined}
                      className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary/90 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">
            Want to join the team?
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            We are always looking for talented people who share our passion for great digital work.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-colors mt-8"
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
