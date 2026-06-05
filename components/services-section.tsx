import { Globe, Smartphone, Palette, Search } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "We build fast, modern and mobile-friendly websites",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Android and iOS apps built for your business needs",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Clean and user-friendly designs that convert visitors",
  },
  {
    icon: Search,
    title: "SEO & Digital Marketing",
    description: "Help your business get found on Google",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to establish a strong online presence
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl p-8 hover:shadow-lg hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
