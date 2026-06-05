import Image from "next/image"
import { Lightbulb, Code, HeartHandshake } from "lucide-react"

const values = [
  { icon: Lightbulb, label: "Fresh Ideas" },
  { icon: Code, label: "Modern Tech" },
  { icon: HeartHandshake, label: "Dedicated Service" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative h-80 lg:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/images/about-office.png"
              alt="Pixelnest office in Durban"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              About Pixelnest
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Pixelnest is a new web agency founded in Durban, South Africa. We are passionate about helping small and medium businesses establish a strong online presence through beautiful websites and powerful mobile apps.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We may be new but we bring fresh ideas, modern technology and dedicated service to every project. Our team is committed to delivering high-quality work that helps your business grow.
            </p>

            {/* Values */}
            <div className="flex flex-wrap gap-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-background px-5 py-3 rounded-full border border-border"
                >
                  <value.icon className="h-5 w-5 text-primary" />
                  <span className="font-medium text-foreground">{value.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
