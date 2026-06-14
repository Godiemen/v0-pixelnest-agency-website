"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronRight, Globe, Smartphone, Palette, ShoppingCart, Wrench, FileText, Heart, Users, Target, Lightbulb, BarChart3, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

const workLinks = [
  { href: "/portfolio/ecommerce", label: "E-Commerce Platform", desc: "Online store with payments", icon: ShoppingCart },
  { href: "/portfolio/corporate", label: "Corporate Website", desc: "Multi-page business site", icon: FileText },
  { href: "/portfolio/landing", label: "Landing Page", desc: "High-converting lead page", icon: TrendingUp },
]

const serviceLinks = [
  { href: "/services/website-development", label: "Website Development", desc: "Custom sites that convert visitors", icon: Globe },
  { href: "/services/app-development", label: "App Development", desc: "iOS & Android native apps", icon: Smartphone },
  { href: "/services/ui-ux-design", label: "UI/UX Design", desc: "Beautiful, usable interfaces", icon: Palette },
  { href: "/services/e-commerce", label: "E-Commerce Solutions", desc: "Online stores with payments", icon: ShoppingCart },
  { href: "/services/maintenance", label: "Maintenance", desc: "Keep your site running smoothly", icon: Wrench },
]

const aboutLinks = [
  { href: "/about/story", label: "Our Story", desc: "How Pixelnest began", icon: Lightbulb },
  { href: "/about/values", label: "Our Values", desc: "What drives us every day", icon: Heart },
  { href: "/about/team", label: "Meet the Team", desc: "The people behind Pixelnest", icon: Users },
  { href: "/about/approach", label: "Our Approach", desc: "How we deliver projects", icon: Target },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [workOpen, setWorkOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const workRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (workRef.current && !workRef.current.contains(event.target as Node)) {
      setWorkOpen(false)
    }
    if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
      setServicesOpen(false)
    }
    if (aboutRef.current && !aboutRef.current.contains(event.target as Node)) {
      setAboutOpen(false)
    }
  }, [])

  useEffect(() => {
    if (workOpen || servicesOpen || aboutOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [workOpen, servicesOpen, aboutOpen, handleClickOutside])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 w-full bg-background transition-shadow duration-300",
        isScrolled && "shadow-md"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Pixelnest"
              width={140}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navLinks.filter(l => l.label !== "Services" && l.label !== "About").map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-foreground hover:text-primary transition-colors font-medium py-2 group",
                  pathname === link.href && "text-primary"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300",
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            ))}

            {/* About Dropdown */}
            <div ref={aboutRef} className="relative">
              <button
                onClick={() => { setAboutOpen(!aboutOpen); setWorkOpen(false); setServicesOpen(false) }}
                className={cn(
                  "relative text-foreground hover:text-primary transition-colors font-medium py-2 group flex items-center gap-1",
                  pathname.startsWith("/about") && "text-primary"
                )}
              >
                About
                <ChevronRight className={cn("h-3.5 w-3.5 transition-transform duration-300", aboutOpen ? "rotate-90" : "rotate-0")} />
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300",
                    pathname.startsWith("/about") ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </button>

              {aboutOpen && (
                <div className="absolute top-full left-0 mt-2 w-[560px] bg-white rounded-2xl shadow-2xl border border-border/50 overflow-hidden z-50">
                  {/* Header */}
                  <div className="px-6 py-4 border-b border-border/60 flex items-center justify-between bg-secondary/20">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Image src="/logo.png" alt="Pixelnest" width={18} height={18} className="object-contain" />
                      </div>
                      <span className="font-bold text-foreground text-sm">About Pixelnest</span>
                    </div>
                    <Link
                      href="/about"
                      onClick={() => setAboutOpen(false)}
                      className="text-primary text-xs font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all bg-primary/5 px-3 py-1.5 rounded-full hover:bg-primary/10"
                    >
                      View all <ChevronRight className="h-3 w-3" />
                    </Link>
                  </div>

                  {/* Links */}
                  <div className="p-4 grid grid-cols-2 gap-2">
                    {aboutLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setAboutOpen(false)}
                        className="group/item flex items-start gap-3 p-3 rounded-xl hover:bg-secondary/50 transition-all"
                      >
                        <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover/item:bg-primary/15 transition-colors">
                          <item.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <span className="text-foreground font-semibold group-hover/item:text-primary transition-colors block text-sm leading-tight">
                            {item.label}
                          </span>
                          <span className="text-muted-foreground text-xs mt-0.5 block leading-relaxed">
                            {item.desc}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Bottom banner */}
                  <div className="relative h-44 mx-4 mb-4 rounded-xl overflow-hidden">
                    <Image
                      src="/Nano Banana 2 - Web DevelopmentA clean_ modern workspace with a large ultrawide monitor displaying a.png"
                      alt="About Pixelnest"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-5">
                      <span className="text-white font-semibold text-sm">About Pixelnest</span>
                      <p className="text-white/70 text-xs mt-0.5">Discover what drives us</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div ref={servicesRef} className="relative">
              <button
                onClick={() => { setServicesOpen(!servicesOpen); setWorkOpen(false); setAboutOpen(false) }}
                className={cn(
                  "relative text-foreground hover:text-primary transition-colors font-medium py-2 group flex items-center gap-1",
                  pathname === "/services" && "text-primary"
                )}
              >
                Services
                <ChevronRight className={cn("h-3.5 w-3.5 transition-transform duration-300", servicesOpen ? "rotate-90" : "rotate-0")} />
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300",
                    pathname === "/services" ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[560px] bg-white rounded-2xl shadow-2xl border border-border/50 overflow-hidden z-50">
                  {/* Header */}
                  <div className="px-6 py-4 border-b border-border/60 flex items-center justify-between bg-secondary/20">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Image src="/logo.png" alt="Pixelnest" width={18} height={18} className="object-contain" />
                      </div>
                      <span className="font-bold text-foreground text-sm">Our Services</span>
                    </div>
                    <Link
                      href="/services"
                      onClick={() => setServicesOpen(false)}
                      className="text-primary text-xs font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all bg-primary/5 px-3 py-1.5 rounded-full hover:bg-primary/10"
                    >
                      View all <ChevronRight className="h-3 w-3" />
                    </Link>
                  </div>

                  {/* Links */}
                  <div className="p-4 grid grid-cols-2 gap-2">
                    {serviceLinks.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setServicesOpen(false)}
                        className="group/item flex items-start gap-3 p-3 rounded-xl hover:bg-secondary/50 transition-all"
                      >
                        <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover/item:bg-primary/15 transition-colors">
                          <item.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <span className="text-foreground font-semibold group-hover/item:text-primary transition-colors block text-sm leading-tight">
                            {item.label}
                          </span>
                          <span className="text-muted-foreground text-xs mt-0.5 block leading-relaxed">
                            {item.desc}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Bottom banner */}
                  <div className="relative h-44 mx-4 mb-4 rounded-xl overflow-hidden">
                    <Image
                      src="/Nano Banana 2 - ramatic close-up of a glowing_analytics dashboard on a laptop screen __bar graphs_tr.png"
                      alt="Our Services"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-5">
                      <span className="text-white font-semibold text-sm">Services by Pixelnest</span>
                      <p className="text-white/70 text-xs mt-0.5">Solutions that drive growth</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Our Work Dropdown */}
            <div ref={workRef} className="relative">
              <button
                onClick={() => { setWorkOpen(!workOpen); setServicesOpen(false); setAboutOpen(false) }}
                className={cn(
                  "relative text-foreground hover:text-primary transition-colors font-medium py-2 group flex items-center gap-1",
                  pathname.startsWith("/portfolio") && "text-primary"
                )}
              >
                Our Work
                <ChevronRight className={cn("h-3.5 w-3.5 transition-transform duration-300", workOpen ? "rotate-90" : "rotate-0")} />
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300",
                    pathname.startsWith("/portfolio") ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </button>

              {workOpen && (
                <div className="absolute top-full left-0 mt-2 w-[560px] bg-white rounded-2xl shadow-2xl border border-border/50 overflow-hidden z-50">
                  {/* Header */}
                  <div className="px-6 py-4 border-b border-border/60 flex items-center justify-between bg-secondary/20">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Image src="/logo.png" alt="Pixelnest" width={18} height={18} className="object-contain" />
                      </div>
                      <span className="font-bold text-foreground text-sm">Our Work</span>
                    </div>
                    <Link
                      href="/portfolio"
                      onClick={() => setWorkOpen(false)}
                      className="text-primary text-xs font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all bg-primary/5 px-3 py-1.5 rounded-full hover:bg-primary/10"
                    >
                      View all <ChevronRight className="h-3 w-3" />
                    </Link>
                  </div>

                  {/* Links */}
                  <div className="p-4 grid grid-cols-2 gap-2">
                    {workLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setWorkOpen(false)}
                        className="group/item flex items-start gap-3 p-3 rounded-xl hover:bg-secondary/50 transition-all"
                      >
                        <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover/item:bg-primary/15 transition-colors">
                          <item.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <span className="text-foreground font-semibold group-hover/item:text-primary transition-colors block text-sm leading-tight">
                            {item.label}
                          </span>
                          <span className="text-muted-foreground text-xs mt-0.5 block leading-relaxed">
                            {item.desc}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Bottom banner */}
                  <div className="relative h-44 mx-4 mb-4 rounded-xl overflow-hidden">
                    <Image
                      src="/Nano Banana 2 - Web DevelopmentA clean_ modern workspace with a large ultrawide monitor displaying a.png"
                      alt="Our Work"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-5">
                      <span className="text-white font-semibold text-sm">Sample Projects by Pixelnest</span>
                      <p className="text-white/70 text-xs mt-0.5">See what we have built</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border">
            <div className="flex flex-col py-4 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 hover:text-primary hover:bg-secondary rounded-lg transition-colors font-medium",
                    pathname === link.href ? "text-primary bg-secondary" : "text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
