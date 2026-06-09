"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSlideshow() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="/Multi-Shot_Video_-_Web_DevelopmentA_clean,_modern_workspace_with_a_large_ultrawide_monitor_displayin.mp4"
          type="video/mp4"
        />
      </video>


      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
            We Build Websites & Apps For Your Business
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-xl">
            Pixelnest is a Durban-based web and app development agency. We help small and medium businesses get online with quality websites, mobile apps, and digital solutions.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              Get a Free Quote
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              See Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
