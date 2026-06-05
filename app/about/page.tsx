import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronRight, Heart, DollarSign, Users, Search, Palette, Code, Rocket } from "lucide-react"
import { UtilityBar } from "@/components/utility-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const values = [
  {
    icon: Heart,
    title: "Quality Work",
    description: "We take pride in delivering work that we would be proud to show anyone",
  },
  {
    icon: DollarSign,
    title: "Honest Pricing",
    description: "No hidden fees, no surprises. We tell you exactly what it costs upfront",
  },
  {
    icon: Users,
    title: "Client First",
    description: "Your success is our success. We are invested in helping you grow",
  },
]

const process = [
  {
    icon: Search,
    step: "01",
    title: "Discover",
    description: "We learn about your business, goals, and target audience",
  },
  {
    icon: Palette,
    step: "02",
    title: "Design",
    description: "We create mockups and prototypes for your approval",
  },
  {
    icon: Code,
    step: "03",
    title: "Build",
    description: "We develop your solution using modern technologies",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch",
    description: "We deploy and provide training and support",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <UtilityBar />
      <Navbar />

      {/* Hero Section - Split Design */}
      <section className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-secondary py-16 lg:py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-end">
            <div className="max-w-xl lg:pr-12">
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-6">
                <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-foreground">About</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                About Pixelnest
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                A new agency with fresh ideas and genuine dedication
              </p>
            </div>
          </div>
          <div className="bg-primary py-16 lg:py-24 px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="max-w-xl lg:pl-12">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about-office.png"
                  alt="Our office"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Pixelnest was founded in Durban, South Africa with one mission — to help small and medium businesses get online and grow. We are a new agency but we bring fresh ideas, modern skills, and genuine dedication to every project we take on. We believe that every business deserves a quality online presence, regardless of size or budget.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Values</h2>
            <p className="mt-4 text-muted-foreground">What guides us in everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-background p-8 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Meet the Team</h2>
            <p className="mt-4 text-muted-foreground">The people behind Pixelnest</p>
          </div>
          <div className="max-w-sm mx-auto">
            <div className="bg-secondary rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-square">
                <Image
                  src="/images/team-nqobani.png"
                  alt="Nqobani Ntuli"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-foreground">Nqobani Ntuli</h3>
                <p className="text-primary font-medium mt-1">Founder & Developer</p>
                <p className="text-muted-foreground text-sm mt-1">Durban, KwaZulu-Natal</p>
                <p className="text-muted-foreground mt-4">
                  Passionate about technology and helping businesses grow online. Building Pixelnest to make quality web development accessible to all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Approach</h2>
            <p className="mt-4 text-muted-foreground">How we work with you from start to finish</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={step.title} className="relative">
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-primary/20" />
                )}
                <div className="relative bg-background p-6 rounded-xl text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Durban */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Proudly Durban. Proudly South African.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We are proud to be based in Durban, KwaZulu-Natal. We understand the local business landscape and are committed to supporting our community. By choosing Pixelnest, you are supporting a local business while getting world-class digital solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We work with businesses across Durban, KwaZulu-Natal, and all of South Africa. Whether you are a restaurant in Umhlanga, a retailer in the CBD, or a startup in Ballito, we are here to help you succeed online.
              </p>
            </div>
            <div className="bg-primary/5 rounded-2xl p-8 text-center">
              <div className="text-6xl font-bold text-primary mb-2">031</div>
              <p className="text-xl font-semibold text-foreground">Durban Area Code</p>
              <p className="text-muted-foreground mt-2">Local support for local businesses</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground text-balance">
            Ready to work with us?
          </h2>
          <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">
            Let&apos;s discuss your project and see how we can help your business grow.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-background text-primary px-8 py-4 rounded-lg font-semibold hover:bg-background/90 transition-colors mt-8"
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
