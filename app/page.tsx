import Link from "next/link"
import { ArrowRight, Smartphone, Globe, Palette, TrendingUp } from "lucide-react"
import { UtilityBar } from "@/components/utility-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSlideshow } from "@/components/hero-slideshow"
import { WhyChoosePremium } from "@/components/why-choose-premium"
import { LatestWorkPremium } from "@/components/latest-work-premium"

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive websites that look great on all devices",
    href: "/services#web-development",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Android and iOS apps that delight your customers",
    href: "/services#mobile-apps",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful interfaces that are easy to use",
    href: "/services#ui-ux-design",
  },
  {
    icon: TrendingUp,
    title: "SEO & Marketing",
    description: "Get found on Google and grow your online presence",
    href: "/services#seo-marketing",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <UtilityBar />
      <Navbar />

      {/* Hero Section with Slideshow */}
      <HeroSlideshow />

      {/* Services Preview */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Services</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Everything you need to establish and grow your online presence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-6 bg-secondary rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
                <span className="inline-flex items-center gap-1 mt-4 text-primary font-medium text-sm group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Premium */}
      <WhyChoosePremium />

      {/* Latest Work - Premium */}
      <LatestWorkPremium />

      {/* CTA Banner */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground text-balance">
            Ready to get online? Let&apos;s build something great together.
          </h2>
          <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">
            Whether you need a simple website or a complex app, we are here to help your business grow.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-background text-primary px-8 py-4 rounded-lg font-semibold hover:bg-background/90 transition-colors mt-8"
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
