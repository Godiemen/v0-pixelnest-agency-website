import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, ChevronRight, Globe, Smartphone, Palette, TrendingUp } from "lucide-react"
import { UtilityBar } from "@/components/utility-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

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

      {/* Hero Section - Dark Navy */}
      <section className="bg-accent py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-accent-foreground/70 text-sm mb-6">
            <Link href="/" className="hover:text-accent-foreground transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-accent-foreground">Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent-foreground">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-accent-foreground/80 max-w-2xl">
            Everything you need to build your online presence and grow your business
          </p>
        </div>
      </section>

      {/* Services Detailed Sections */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  service.reverse ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={service.reverse ? "lg:order-2" : ""}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={service.reverse ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-foreground">
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xl font-semibold text-primary mb-6">
                    {service.price}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Get a Quote
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
