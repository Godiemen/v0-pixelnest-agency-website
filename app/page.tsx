import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Smartphone, Globe, Palette, Code, Zap, Users, BarChart3 } from "lucide-react"
import { UtilityBar } from "@/components/utility-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSlideshow } from "@/components/hero-slideshow"

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "We build fast, modern, mobile-friendly websites using the latest technologies. From simple business sites to complex e-commerce stores.",
    color: "bg-primary",
    href: "/services#web-development",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "We develop Android and iOS apps that help your business serve customers better. From booking apps to delivery apps.",
    color: "bg-emerald-500",
    href: "/services#mobile-apps",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Good design is good business. We create clean, intuitive interfaces that make your users happy and keep them coming back.",
    color: "bg-amber-500",
    href: "/services#ui-ux-design",
  },
]

const insights = [
  {
    image: "/Nano Banana 2 - Abstract digital_visualization of global connectivity _ glowing blue_and white nodes.png",
    title: "E-Commerce Platform",
    description: "A demo online store with product catalog, shopping cart, and payment integration.",
    href: "/portfolio/ecommerce",
  },
  {
    image: "/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpeg",
    title: "Mobile Delivery App",
    description: "A demo app concept with order tracking, push notifications, and payment screens.",
    href: "/portfolio/mobile-app",
  },
  {
    image: "/digital-technology-coding-programmer-and-cyber-security-software-development-javascript-on-virtual-screen-internet-of-things-iot-photo.jpg",
    title: "Corporate Website",
    description: "A demo company website with service pages, team section, and contact forms.",
    href: "/portfolio/corporate",
  },
  {
    image: "/Nano Banana 2 - A friendly_customer support_representative wearing a headset_ smiling warmly_at a mo.png",
    title: "Landing Page",
    description: "A demo landing page with lead capture forms and call-to-action sections.",
    href: "/portfolio/landing",
  },
]

const industries = [
  {
    icon: Code,
    title: "Technology",
    description: "We help tech startups and software companies build MVPs, landing pages, and scalable web applications.",
    color: "bg-primary",
  },
  {
    icon: Zap,
    title: "Energy & Utilities",
    description: "Digital solutions for renewable energy firms, utility providers, and sustainable technology companies.",
    color: "bg-emerald-500",
  },
  {
    icon: Users,
    title: "Professional Services",
    description: "Websites and apps for law firms, consultancies, accounting practices, and agencies.",
    color: "bg-amber-500",
  },
  {
    icon: BarChart3,
    title: "Retail & E-Commerce",
    description: "Online stores, booking platforms, and digital marketing for retail businesses of all sizes.",
    color: "bg-rose-500",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <UtilityBar />
      <Navbar />

      {/* Hero Section */}
      <HeroSlideshow />

      {/* Services that make the difference */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Services that make the difference</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border/50">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group relative bg-background p-8 border-b md:border-b-0 md:border-r border-border/50 last:border-r-0 hover:bg-secondary/50 transition-colors"
              >
                {/* Colored left border accent */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${service.color}`} />
                {/* Icon circle */}
                <div className={`w-12 h-12 ${service.color} rounded-full flex items-center justify-center mb-5`}>
                  <service.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Make the Difference - Full blue section with image */}
      <section className="relative bg-primary overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px]">
            {/* Left: Image with overlays */}
            <div className="relative hidden lg:block">
              {/* Dark overlay to subdue the image */}
              <div className="absolute inset-0 bg-primary/40 z-[5]" />
              {/* Wide gradient fade into blue */}
              <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-primary via-primary/80 to-transparent z-10" />
              <Image
                src="/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpeg"
                alt="Technology background"
                fill
                className="object-cover"
              />
            </div>
            {/* Right: Text */}
            <div className="flex flex-col justify-center py-16 lg:py-20 lg:pl-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                MAKE
                <br />
                THE
                <br />
                DIFFERENCE
              </h2>
              <p className="mt-6 text-white/80 leading-relaxed max-w-md">
                What sets us apart is not just what we do, it is how we do it. Being agile, more connected and standing at the forefront of technological change.
              </p>
              <p className="mt-4 text-white/80 leading-relaxed max-w-md">
                We deliver outcomes that are truly meaningful for our clients and communities. Empowering businesses to grow and succeed together.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors mt-8 w-fit"
              >
                Learn more
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Projects */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Sample Projects</h2>
            <p className="mt-3 text-muted-foreground max-w-xl">
              Projects we built to demonstrate our capabilities. Your project could look like this.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {insights.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group block bg-primary overflow-hidden hover:shadow-xl transition-all duration-500"
              >
                {/* Image top */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Blue content bottom */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white/90 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-white text-sm font-semibold group-hover:gap-3 transition-all">
                    Read more
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries / Sectors - White cards on image background */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <Image
          src="/Nano Banana 2 - ramatic close-up of a glowing_analytics dashboard on a laptop screen __bar graphs_tr.png"
          alt=""
          fill
          className="object-cover"
        />
        {/* Dark blue overlay for readability */}
        <div className="absolute inset-0 bg-primary/85" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Industries we serve</h2>
            <p className="mt-3 text-white/70 max-w-xl">
              Deep expertise across key sectors that power South African business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/20">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="group relative bg-background p-8 border-b md:border-b-0 md:border-r border-white/20 last:border-r-0 hover:bg-white transition-colors"
              >
                {/* Colored left border accent */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${industry.color}`} />
                {/* Icon circle */}
                <div className={`w-12 h-12 ${industry.color} rounded-full flex items-center justify-center mb-5`}>
                  <industry.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{industry.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {industry.description}
                </p>
                <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all">
                  Read more
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe / CTA Split */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: Blue content box */}
            <div className="bg-primary p-10 lg:p-14 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                Ready to start your project?
              </h3>
              <p className="mt-4 text-white/80 leading-relaxed">
                Get a free consultation and quote. Tell us what you need and we will get back to you within 24 hours.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors mt-8 w-fit"
              >
                Get a Free Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            {/* Right: Image */}
            <div className="relative min-h-[280px] lg:min-h-0">
              <Image
                src="/digital-technology-coding-programmer-and-cyber-security-software-development-javascript-on-virtual-screen-internet-of-things-iot-photo.jpg"
                alt="Technology"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Offset Image CTA */}
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Large image left */}
            <div className="lg:col-span-7 relative h-[320px] lg:h-[400px]">
              <Image
                src="/Nano Banana 2 - Web DevelopmentA clean_ modern workspace with a large ultrawide monitor displaying a.png"
                alt="Our team"
                fill
                className="object-cover"
              />
            </div>
            {/* Overlapping blue box right */}
            <div className="lg:col-span-5 lg:-ml-16 relative z-10">
              <div className="bg-primary p-10 lg:p-12">
                <h3 className="text-2xl font-bold text-white leading-tight">
                  Interested in working with us?
                </h3>
                <p className="mt-4 text-white/80 leading-relaxed">
                  We want to support you on your journey to create an impactful digital presence. Join us and let us build work that matters.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors mt-8"
                >
                  Start your project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">
            Ready to get online? Let&apos;s build something great together.
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Whether you need a simple website or a complex app, we are here to help your business grow.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-colors mt-8"
          >
            Get Started
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
