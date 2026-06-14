import type { Metadata } from 'next'
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight, Check, ChevronRight,
  Globe, Smartphone, Palette, ShoppingCart, TrendingUp, Wrench,
} from "lucide-react"
import { UtilityBar } from "@/components/utility-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: 'Services | Pixelnest Web & App Development Agency',
  description: 'Web development, mobile apps, UI/UX design, e-commerce, SEO and maintenance services for small businesses in Durban and across South Africa.',
}

const stats = [
  { label: "Services Offered", value: "6" },
  { label: "Projects Completed", value: "15+" },
  { label: "Technologies", value: "10+" },
  { label: "Support Hours", value: "24/7" },
]

const services = [
  {
    id: "website-development",
    icon: Globe,
    title: "Website Development",
    image: "/Nano Banana 2 - Web DevelopmentA clean_ modern workspace with a large ultrawide monitor displaying a.png",
    description: "We build fast, modern, mobile-friendly websites using the latest technologies. Whether you need a simple 5-page business site or a complex web application, we deliver quality work on time and on budget.",
    features: ["Mobile Responsive", "Fast Loading", "SEO Ready", "Easy to Update", "Custom Design", "CMS Integration"],
    price: "Starting from R2,500",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "app-development",
    icon: Smartphone,
    title: "App Development",
    image: "/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpeg",
    description: "We develop Android and iOS apps that help your business serve customers better. From booking apps to delivery solutions, we bring your mobile idea to life with native performance.",
    features: ["Android & iOS", "User Friendly", "Offline Support", "Push Notifications", "API Integration", "App Store Ready"],
    price: "Starting from R8,000",
    color: "from-violet-500 to-purple-500",
  },
  {
    id: "ui-ux-design",
    icon: Palette,
    title: "UI/UX Design",
    image: "/Nano Banana 2 - ramatic close-up of a glowing_analytics dashboard on a laptop screen __bar graphs_tr.png",
    description: "Good design is good business. We create clean, intuitive interfaces that make your users happy and keep them coming back. Every pixel is crafted with purpose.",
    features: ["Wireframing", "Prototyping", "User Testing", "Brand Identity", "Design Systems", "Accessibility"],
    price: "Starting from R1,500",
    color: "from-amber-500 to-orange-500",
  },
  {
    id: "e-commerce",
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    image: "/Nano Banana 2 - Professional UIUX mockup of a modern e-commerce website displayed on a sleek ultrawi.png",
    description: "Turn browsers into buyers with a powerful online store. We build e-commerce platforms with secure payments, inventory management, and everything you need to sell online 24/7.",
    features: ["Secure Payments", "Inventory Mgmt", "Order Tracking", "Multi-currency", "Mobile Checkout", "Admin Dashboard"],
    price: "Starting from R5,000",
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Maintenance & Support",
    image: "/Nano Banana 2 - A friendly_customer support_representative wearing a headset_ smiling warmly_at a mo.png",
    description: "Your website is never done. We provide ongoing maintenance, security updates, backups, and support so your site stays fast, secure, and up-to-date without you lifting a finger.",
    features: ["Security Updates", "Daily Backups", "Uptime Monitoring", "Bug Fixes", "Content Updates", "24/7 Support"],
    price: "Starting from R500/month",
    color: "from-slate-500 to-slate-700",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <UtilityBar />
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 lg:py-28 min-h-[420px] flex items-center">
        <Image
          src="/digital-technology-coding-programmer-and-cyber-security-software-development-javascript-on-virtual-screen-internet-of-things-iot-photo.jpg"
          alt="Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003380]/90 via-[#003380]/75 to-[#003380]/50" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            Everything you need to build your online presence and grow your business — all in one place.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-20 -mt-12 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="bg-white rounded-2xl shadow-xl border border-border/50 p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                <Check className="h-4 w-4" />
                What We Do
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                Services built for growth
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                From your first website to ongoing growth — we have you covered at every stage.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 100}>
                <div
                  id={service.id}
                  className="group relative bg-background rounded-2xl border border-border/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1 overflow-hidden h-full flex flex-col"
                >
                  {/* Top gradient bar */}
                  <div className={cn("h-1.5 w-full bg-gradient-to-r", service.color)} />

                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className={cn("w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center shadow-lg", service.color)}>
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {service.features.slice(0, 4).map((feat) => (
                        <span
                          key={feat}
                          className="text-[11px] font-medium bg-secondary text-muted-foreground px-2.5 py-1 rounded-md border border-border/50"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <span className="text-sm font-bold text-foreground">{service.price}</span>
                      <Link
                        href={`/services/${service.id}`}
                        className="inline-flex items-center gap-1 text-primary text-sm font-semibold hover:gap-2 transition-all"
                      >
                        Learn more
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 text-emerald-600 text-sm font-semibold rounded-full mb-6">
                  <Check className="h-4 w-4" />
                  Why Pixelnest
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
                  Built for South African businesses
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  We understand the local market. Affordable pricing, local support, and solutions tailored for businesses in Durban, KwaZulu-Natal, and across South Africa.
                </p>
                <div className="space-y-4">
                  {[
                    "No hidden fees — transparent pricing upfront",
                    "Local support — we are based in Durban, KZN",
                    "Fast turnaround — get online in days, not months",
                    "Future-proof — built with modern, scalable tech",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-foreground font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-3xl blur-2xl" />
                <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl">
                  <Image
                    src="/Nano Banana 2 - Web DevelopmentA clean_ modern workspace with a large ultrawide monitor displaying a.png"
                    alt="Pixelnest workspace"
                    width={600}
                    height={450}
                    className="object-cover w-full"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl border border-border p-5 max-w-[220px]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-4 w-4 text-emerald-600" />
                    </div>
                    <span className="text-xs text-muted-foreground font-medium">Success Rate</span>
                  </div>
                  <div className="text-2xl font-bold text-foreground">100%</div>
                  <div className="text-xs text-muted-foreground mt-1">Client satisfaction</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary py-20">
        <div className="absolute inset-0 bg-[url('/Nano%20Banana%202%20-%20Web%20DevelopmentA%20clean_%20modern%20workspace%20with%20a%20large%20ultrawide%20monitor%20displaying%20a.png')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-blue-800/90" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
            Not sure what you need?
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Every business is different. Contact us and we will help you find the right solution for your needs and budget.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-colors mt-8 shadow-xl"
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
