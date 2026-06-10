import type { Metadata } from 'next'
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronRight } from "lucide-react"
import { UtilityBar } from "@/components/utility-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: 'Our Story | Pixelnest',
  description: 'Learn how Pixelnest was founded in Durban, South Africa to help small businesses grow online.',
}

export default function StoryPage() {
  return (
    <main className="min-h-screen">
      <UtilityBar />
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-16 lg:py-20 min-h-[360px] flex items-center">
        <Image
          src="/Nano Banana 2 - Web DevelopmentA clean_ modern workspace with a large ultrawide monitor displaying a.png"
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

      {/* Story Content */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                The Beginning
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Founded in Durban, built for South Africa
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Pixelnest was founded in Durban, South Africa with one mission — to help small and medium businesses get online and grow. We are a new agency but we bring fresh ideas, modern skills, and genuine dedication to every project we take on.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-secondary rounded-2xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-3">Why Durban?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We are proud to be based in Durban, KwaZulu-Natal. We understand the local business landscape and are committed to supporting our community.
                </p>
              </div>
              <div className="bg-secondary rounded-2xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We believe that every business deserves a quality online presence, regardless of size or budget. Good design should not be a luxury.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Serving all of South Africa</h3>
              <p className="text-muted-foreground leading-relaxed">
                We work with businesses across Durban, KwaZulu-Natal, and all of South Africa. Whether you are a restaurant in Umhlanga, a retailer in the CBD, or a startup in Ballito, we are here to help you succeed online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">
            Be part of our story
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Let us build something great together. Your project could be our next success story.
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
