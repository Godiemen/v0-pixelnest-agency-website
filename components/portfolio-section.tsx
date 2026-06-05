import Image from "next/image"

const projects = [
  {
    image: "/images/portfolio-1.png",
    title: "Urban Retail Store",
    category: "E-commerce",
  },
  {
    image: "/images/portfolio-2.png",
    title: "MediCare Clinic",
    category: "Healthcare",
  },
  {
    image: "/images/portfolio-3.png",
    title: "Taste of Africa",
    category: "Restaurant App",
  },
  {
    image: "/images/portfolio-4.png",
    title: "Durban Properties",
    category: "Real Estate",
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Our Work
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of our early projects
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden bg-card border border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
