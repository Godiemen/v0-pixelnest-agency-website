import Image from "next/image"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function HeroSection() {
  return (
    <section className="relative bg-primary overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight text-balance">
              We Build Websites & Apps For Your Business
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-primary-foreground/90 max-w-xl mx-auto lg:mx-0 text-pretty">
              Pixelnest is a new Durban-based web agency helping small businesses get online with professional websites and mobile apps
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className={cn(buttonVariants({ size: "lg" }), "bg-background text-primary hover:bg-background/90 font-semibold px-8")}
              >
                Get a Free Quote
              </Link>
              <Link
                href="/services"
                className={cn(buttonVariants({ size: "lg", variant: "outline" }), "border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8")}
              >
                See Our Services
              </Link>
            </div>
          </div>

          {/* Image Mosaic Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-40 sm:h-48 rounded-xl overflow-hidden">
                <Image
                  src="/Nano Banana 2 - A friendly_customer support_representative wearing a headset_ smiling warmly_at a mo.png"
                  alt="Customer support"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-56 sm:h-64 rounded-xl overflow-hidden">
                <Image
                  src="/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpeg"
                  alt="Code background"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative h-56 sm:h-64 rounded-xl overflow-hidden">
                <Image
                  src="/Nano Banana 2 - Web DevelopmentA clean_ modern workspace with a large ultrawide monitor displaying a.png"
                  alt="Workspace"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-40 sm:h-48 rounded-xl overflow-hidden">
                <Image
                  src="/digital-technology-coding-programmer-and-cyber-security-software-development-javascript-on-virtual-screen-internet-of-things-iot-photo.jpg"
                  alt="Technology"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
