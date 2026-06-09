import type { Metadata } from 'next'
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, ChevronRight, Globe, Smartphone, Palette, TrendingUp, Linkedin, Facebook } from "lucide-react"
import { UtilityBar } from "@/components/utility-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: 'Services | Pixelnest Web & App Development Agency',
  description: 'Web development, mobile apps, UI/UX design, and SEO services for small businesses in Durban and across South Africa.',
}

const services = [
  {
    id: "web-development",
    icon: Globe,
    title: "Web Development",
    image: "/images/service-web.png",
    description: "We build fast, modern, mobile-friendly websites using the latest technologies. Whether you need a simple 5-page business site or a complex e-commerce store, we deliver quality work on time and on budget.",
    features: ["Mobile Responsive", "Fast Loading", "SEO Ready", "Easy to Update"],
    price: "Starting from R2,500",
    reverse: false,
  },
  {
    id: "mobile-apps",
    icon: Smartphone,
    title: "Mobile App Development",
    image: "/images/service-mobile.png",
    description: "We develop Android and iOS apps that help your business serve customers better. From booking apps to delivery apps, we bring your idea to life.",
    features: ["Android & iOS", "User Friendly", "Offline Support", "Push Notifications"],
    price: "Starting from R8,000",
    reverse: true,
  },
  {
    id: "ui-ux-design",
    icon: Palette,
    title: "UI/UX Design",
    image: "/images/service-design.png",
    description: "Good design is good business. We create clean, intuitive interfaces that make your users happy and keep them coming back.",
    features: ["Wireframing", "Prototyping", "User Testing", "Brand Identity"],
    price: "Starting from R1,500",
    reverse: false,
  },
  {
    id: "seo-marketing",
    icon: TrendingUp,
    title: "SEO & Digital Marketing",
    image: "/images/service-seo.png",
    description: "Get found on Google. We help your business rank higher in search results and reach more customers online through SEO and digital marketing strategies.",
    features: ["Google Ranking", "Social Media", "Content Strategy", "Analytics"],
    price: "Starting from R1,000/month",
    reverse: true,
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <UtilityBar />
      <Navbar />

      {/* Hero Section - Background Image */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        {/* Background Image */}
        <Image
          src="/digital-technology-coding-programmer-and-cyber-security-software-development-javascript-on-virtual-screen-internet-of-things-iot-photo.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-white/70 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            Everything you need to build your online presence and grow your business
          </p>
        </div>
      </section>

      {/* Services Detailed Sections - KPMG-style full-bleed blue blocks */}
      {services.map((service) => (
        <section
          key={service.id}
          id={service.id}
          className="relative bg-primary overflow-hidden"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[420px] lg:min-h-[500px]">
              {/* Left: Text content */}
              <div className="flex flex-col justify-center py-16 lg:py-20 pr-0 lg:pr-12 relative z-10">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
                  <Link href="/" className="hover:text-white transition-colors">Home</Link>
                  <ChevronRight className="h-3.5 w-3.5" />
                  <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                  <ChevronRight className="h-3.5 w-3.5" />
                  <span className="text-white">{service.title}</span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  {service.title}
                </h2>

                <p className="mt-5 text-white/80 leading-relaxed max-w-xl">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 max-w-md">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-white/90 text-sm">
                      <Check className="h-4 w-4 text-white flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-lg font-semibold text-white">
                  {service.price}
                </p>

                {/* Share icons */}
                <div className="mt-8 flex items-center gap-4">
                  <span className="text-white/70 text-sm">Share</span>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Right: Image with left-edge fade into blue */}
              <div className="relative hidden lg:block">
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-primary to-transparent z-10" />
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground text-balance">
            Not sure what you need? Let&apos;s talk.
          </h2>
          <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">
            Every business is different. Contact us and we will help you find the right solution for your needs and budget.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-background text-primary px-8 py-4 rounded-lg font-semibold hover:bg-background/90 transition-colors mt-8"
          >
            Contact Us
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
