import type { Metadata } from 'next'
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronRight, Globe, Users, Mail, FileText, Search, Shield, Check, Globe as GlobeIcon, FileCode, Palette, Database, Cloud, Zap, TrendingUp } from "lucide-react"
import { UtilityBar } from "@/components/utility-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: 'Corporate Website | Pixelnest Sample Project',
  description: 'A demo corporate website with service pages, team section, and contact forms built by Pixelnest.',
}

const features = [
  {
    icon: Globe,
    title: "Multi-Page Structure",
    description: "Home, About, Services, Team, and Contact pages — all professionally designed and fully connected.",
    color: "from-blue-500 to-blue-600",
    accent: "bg-blue-500",
    number: "01",
  },
  {
    icon: Users,
    title: "Team Showcase",
    description: "Beautiful team profiles with photos, bios, roles, and social links to build trust with visitors.",
    color: "from-emerald-500 to-emerald-600",
    accent: "bg-emerald-500",
    number: "02",
  },
  {
    icon: Mail,
    title: "Contact Forms",
    description: "Smart contact forms with validation, spam protection, and direct email notifications to your inbox.",
    color: "from-amber-500 to-amber-600",
    accent: "bg-amber-500",
    number: "03",
  },
  {
    icon: FileText,
    title: "Service Pages",
    description: "Detailed service pages that explain what you do, how you do it, and why clients should choose you.",
    color: "from-violet-500 to-violet-600",
    accent: "bg-violet-500",
    number: "04",
  },
  {
    icon: Search,
    title: "SEO Ready",
    description: "Structured data, meta tags, sitemaps, and fast loading so Google finds you before your competitors.",
    color: "from-rose-500 to-rose-600",
    accent: "bg-rose-500",
    number: "05",
  },
  {
    icon: Shield,
    title: "SSL & Security",
    description: "HTTPS encryption, security headers, and protection against common web vulnerabilities out of the box.",
    color: "from-cyan-500 to-cyan-600",
    accent: "bg-cyan-500",
    number: "06",
  },
]

const techStack = [
  { name: "Next.js", description: "SEO-friendly static pages", icon: GlobeIcon, color: "from-slate-700 to-slate-900" },
  { name: "TypeScript", description: "Reliable, maintainable code", icon: FileCode, color: "from-blue-500 to-blue-700" },
  { name: "Tailwind CSS", description: "Consistent brand styling", icon: Palette, color: "from-cyan-500 to-cyan-700" },
  { name: "Sanity CMS", description: "Easy content management", icon: Database, color: "from-purple-500 to-purple-700" },
  { name: "Vercel", description: "Global edge deployment", icon: Cloud, color: "from-gray-800 to-black" },
  { name: "Resend", description: "Reliable form delivery", icon: Mail, color: "from-emerald-500 to-emerald-700" },
]

const stats = [
  { value: "100/100", label: "Lighthouse Score" },
  { value: "0.8s", label: "First Contentful Paint" },
  { value: "Top 3", label: "Local SEO Ranking" },
]

export default function CorporatePage() {
  return (
    <main className="min-h-screen">
      <UtilityBar />
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-16 lg:py-20 min-h-[360px] flex items-center">
        <Image
          src="/808d8e66625f9f23dc948164e1f1171d.jpg"
          alt="Corporate Website"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003380]/90 via-[#003380]/75 to-[#003380]/50" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/portfolio" className="hover:text-white transition-colors">Our Work</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">Corporate Website</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Corporate Website
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            A professional multi-page website that tells your story, showcases your team, and converts visitors into clients.
          </p>
        </div>
      </section>

      {/* Why It Matters - Premium SaaS */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6">
                <Globe className="h-4 w-4" />
                Why it matters
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
                Your digital front door
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Before a customer calls you, they Google you. Your website is often the first impression — and you only get one chance to make it count.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "Build instant credibility with a professional look",
                  "Showcase your services, team, and success stories",
                  "Capture leads while you sleep with smart forms",
                  "Rank higher on Google with SEO-optimized pages",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Get your website
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl">
                <Image
                  src="/02d061d2f8f9feb6df8ea43d33779299.jpg"
                  alt="Corporate Website"
                  width={600}
                  height={450}
                  className="object-cover w-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl border border-border p-5 max-w-[200px]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">Lead Increase</span>
                </div>
                <div className="text-2xl font-bold text-foreground">+210%</div>
                <div className="text-xs text-muted-foreground mt-1">After professional redesign</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - Premium */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              Features
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              What is included
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
              A complete website package that covers every page a modern business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group relative bg-white rounded-2xl p-8 border border-border/50 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1.5 transition-all duration-500"
              >
                <div className={`absolute top-0 left-8 right-8 h-1 ${feature.accent} rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="flex items-center justify-between mb-6">
                  <span className="text-5xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-500">
                    {feature.number}
                  </span>
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
                <div className={`mt-6 h-0.5 w-12 ${feature.accent} rounded-full group-hover:w-full transition-all duration-500`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack - SaaS Premium */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0f172a] to-slate-900" />
        <div className="absolute inset-0 bg-[url('/146dc47b322c4034b2e6b7b9b4dffa1b.jpg')] opacity-10 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/80" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold rounded-full mb-6">
                <Zap className="h-4 w-4 text-amber-400" />
                Performance-first stack
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                Built to rank
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Every technical decision is made with speed and search visibility in mind. Fast sites rank higher and convert better.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/72c9433c2717295c79e7b4caac7afb25.jpg"
                  alt="Technology stack"
                  width={600}
                  height={450}
                  className="object-cover w-full"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-white font-semibold text-sm mb-1">{tech.name}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Work Samples</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Visual examples of our design style and capabilities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-background border border-border">
              <Image src="/145ace8fef4034b718348a1efc126ccf.jpg" alt="Website mockup 1" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-background border border-border">
              <Image src="/eedaea0cc72837674a5789e39ca676b5.jpg" alt="Website mockup 2" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-background border border-border">
              <Image src="/2f78ed26a90662d307856754c29a19ab.jpg" alt="Website mockup 3" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">
            Ready for a new website?
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            We can build a corporate website that builds trust, ranks on Google, and brings in qualified leads.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-colors mt-8"
          >
            Get a Free Quote
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
