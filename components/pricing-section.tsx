import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const pricingPlans = [
  {
    name: "Starter Website",
    price: "From R2,500",
    description: "Perfect for small businesses just getting started",
    features: [
      "5 page website",
      "Mobile responsive design",
      "Contact form",
      "Basic SEO setup",
      "Social media links",
    ],
    featured: false,
  },
  {
    name: "Business Website",
    price: "From R5,000",
    description: "For growing businesses that need more features",
    features: [
      "10 pages",
      "Advanced SEO setup",
      "Email setup",
      "Google Analytics",
      "Content management system",
      "3 months support",
    ],
    featured: true,
  },
  {
    name: "Custom App",
    price: "Get a Quote",
    description: "Full custom solution for your unique needs",
    features: [
      "Android & iOS apps",
      "Custom features",
      "Backend development",
      "Admin dashboard",
      "Ongoing support",
      "Maintenance included",
    ],
    featured: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Affordable packages designed for South African businesses
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                plan.featured
                  ? "bg-primary text-primary-foreground shadow-xl scale-105"
                  : "bg-background border border-border hover:shadow-lg"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className={`text-xl font-semibold mb-2 ${
                  plan.featured ? "text-primary-foreground" : "text-foreground"
                }`}>
                  {plan.name}
                </h3>
                <div className={`text-3xl font-bold mb-2 ${
                  plan.featured ? "text-primary-foreground" : "text-primary"
                }`}>
                  {plan.price}
                </div>
                <p className={`text-sm ${
                  plan.featured ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      plan.featured ? "bg-primary-foreground/20" : "bg-primary/10"
                    }`}>
                      <Check className={`h-3 w-3 ${
                        plan.featured ? "text-primary-foreground" : "text-primary"
                      }`} />
                    </div>
                    <span className={`text-sm ${
                      plan.featured ? "text-primary-foreground/90" : "text-muted-foreground"
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full ${
                  plan.featured
                    ? "bg-background text-primary hover:bg-background/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                <Link href="#contact">Get Started</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
