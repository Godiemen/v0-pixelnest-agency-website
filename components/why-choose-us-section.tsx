import { Wallet, Zap, MapPin } from "lucide-react"

const features = [
  {
    icon: Wallet,
    title: "Affordable Pricing",
    description: "We offer competitive rates for small businesses",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "We deliver your project on time",
  },
  {
    icon: MapPin,
    title: "Local & Reliable",
    description: "Based in Durban, always available to help",
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Why Choose Us
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We&apos;re committed to delivering quality work that exceeds expectations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-xl bg-background shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
