"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
    alt: "Modern tech office with people working",
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80",
    alt: "Diverse team collaborating around a laptop",
  },
  {
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&q=80",
    alt: "Developer coding on multiple screens",
  },
  {
    src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&q=80",
    alt: "Business meeting in a modern office",
  },
  {
    src: "https://images.unsplash.com/photo-1577948000111-9c970dfe3743?w=1920&q=80",
    alt: "Durban city skyline at night",
  },
  {
    src: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1920&q=80",
    alt: "Woman working on UI design on computer",
  },
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80",
    alt: "Team standing in a bright modern workspace",
  },
  {
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80",
    alt: "Close up of code on a screen",
  },
  {
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1920&q=80",
    alt: "South African business people in a meeting",
  },
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80",
    alt: "Modern office building exterior",
  },
]

export function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 10000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden">
      {/* Background Slideshow */}
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Blue Overlay */}
          <div className="absolute inset-0 bg-primary/75" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-1.png"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-2.png"
                  alt="Developer coding"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-3.png"
                  alt="Team brainstorming"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-4.png"
                  alt="Presentation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/30 text-white rounded-full backdrop-blur-sm transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/30 text-white rounded-full backdrop-blur-sm transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
