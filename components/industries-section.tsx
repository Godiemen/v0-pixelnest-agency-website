import { ShoppingBag, Heart, GraduationCap, Home, UtensilsCrossed, Users } from "lucide-react"

const industries = [
  { icon: ShoppingBag, label: "Retail" },
  { icon: Heart, label: "Healthcare" },
  { icon: GraduationCap, label: "Education" },
  { icon: Home, label: "Real Estate" },
  { icon: UtensilsCrossed, label: "Restaurants" },
  { icon: Users, label: "Non-Profit" },
]

export function IndustriesSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Industries We Serve
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We work with businesses across various sectors
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group flex flex-col items-center p-6 rounded-xl border border-border hover:border-primary/30 hover:bg-secondary transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <industry.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <span className="text-sm font-medium text-foreground text-center">
                {industry.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
