"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Search, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

const workLinks = [
  { href: "/portfolio/ecommerce", label: "E-Commerce Platform", desc: "Online store with payments" },
  { href: "/portfolio/mobile-app", label: "Mobile Delivery App", desc: "iOS & Android on-demand app" },
  { href: "/portfolio/corporate", label: "Corporate Website", desc: "Multi-page business site" },
  { href: "/portfolio/landing", label: "Landing Page", desc: "High-converting lead page" },
]

const serviceLinks = [
  { href: "/services", label: "Website Development", desc: "Custom sites that convert visitors" },
  { href: "/services", label: "App Development", desc: "iOS & Android native apps" },
  { href: "/services", label: "UI/UX Design", desc: "Beautiful, usable interfaces" },
  { href: "/services", label: "E-Commerce Solutions", desc: "Online stores with payments" },
  { href: "/services", label: "SEO & Marketing", desc: "Get found on Google" },
  { href: "/services", label: "Maintenance", desc: "Keep your site running smoothly" },
]

const aboutLinks = [
  { href: "/about/story", label: "Our Story", desc: "How Pixelnest began" },
  { href: "/about/values", label: "Our Values", desc: "What drives us every day" },
  { href: "/about/team", label: "Meet the Team", desc: "The people behind Pixelnest" },
  { href: "/about/approach", label: "Our Approach", desc: "How we deliver projects" },
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
                <div className="absolute top-full left-0 mt-2 w-[640px] bg-white rounded-xl shadow-2xl border border-border overflow-hidden z-50">
                  <div className="px-8 py-5 border-b border-border flex items-center gap-4">
                    <span className="font-bold text-foreground text-base">About</span>
                    <Link
                      href="/about"
                      onClick={() => setAboutOpen(false)}
                      className="text-primary hover:underline text-sm inline-flex items-center gap-1"
                    >
                      See all <ChevronRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>

                  <div className="p-8 grid grid-cols-2 gap-x-8 gap-y-5">
                    {aboutLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setAboutOpen(false)}
                        className="group/item block py-3 border-t-2 border-transparent hover:border-primary transition-colors"
                      >
                        <span className="text-foreground font-medium group-hover/item:text-primary transition-colors block text-[15px]">
                          {item.label}
                        </span>
                        <span className="text-muted-foreground text-sm mt-1 block">
                          {item.desc}
                        </span>
                      </Link>
                    ))}
                  </div>

                  <div className="relative h-52">
                    <Image
                      src="/Nano Banana 2 - Web DevelopmentA clean_ modern workspace with a large ultrawide monitor displaying a.png"
                      alt="About Pixelnest"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-8">
                      <span className="text-white font-semibold text-base">About Pixelnest</span>
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
                <div className="absolute top-full left-0 mt-2 w-[640px] bg-white rounded-xl shadow-2xl border border-border overflow-hidden z-50">
                  <div className="px-8 py-5 border-b border-border flex items-center gap-4">
                    <span className="font-bold text-foreground text-base">Services</span>
                    <Link
                      href="/services"
                      onClick={() => setServicesOpen(false)}
                      className="text-primary hover:underline text-sm inline-flex items-center gap-1"
                    >
                      See all <ChevronRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>

                  <div className="p-8 grid grid-cols-2 gap-x-8 gap-y-5">
                    {serviceLinks.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setServicesOpen(false)}
                        className="group/item block py-3 border-t-2 border-transparent hover:border-primary transition-colors"
                      >
                        <span className="text-foreground font-medium group-hover/item:text-primary transition-colors block text-[15px]">
                          {item.label}
                        </span>
                        <span className="text-muted-foreground text-sm mt-1 block">
                          {item.desc}
                        </span>
                      </Link>
                    ))}
                  </div>

                  <div className="relative h-52">
                    <Image
                      src="/Nano Banana 2 - ramatic close-up of a glowing_analytics dashboard on a laptop screen __bar graphs_tr.png"
                      alt="Our Services"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-8">
                      <span className="text-white font-semibold text-base">Services by Pixelnest</span>
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
                <div className="absolute top-full left-0 mt-2 w-[640px] bg-white rounded-xl shadow-2xl border border-border overflow-hidden z-50">
                  {/* Header */}
                  <div className="px-8 py-5 border-b border-border flex items-center gap-4">
                    <span className="font-bold text-foreground text-base">Our Work</span>
                    <Link
                      href="/portfolio"
                      onClick={() => setWorkOpen(false)}
                      className="text-primary hover:underline text-sm inline-flex items-center gap-1"
                    >
                      See all <ChevronRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>

                  {/* Links Grid */}
                  <div className="p-8 grid grid-cols-2 gap-x-8 gap-y-5">
                    {workLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setWorkOpen(false)}
                        className="group/item block py-3 border-t-2 border-transparent hover:border-primary transition-colors"
                      >
                        <span className="text-foreground font-medium group-hover/item:text-primary transition-colors block text-[15px]">
                          {item.label}
                        </span>
                        <span className="text-muted-foreground text-sm mt-1 block">
                          {item.desc}
                        </span>
                      </Link>
                    ))}
                  </div>

                  {/* Bottom Image */}
                  <div className="relative h-52">
                    <Image
                      src="/Nano Banana 2 - Web DevelopmentA clean_ modern workspace with a large ultrawide monitor displaying a.png"
                      alt="Our Work"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-8">
                      <span className="text-white font-semibold text-base">Sample Projects by Pixelnest</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Search, Get a Quote Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Search button */}
            <button
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>

            <Link
              href="/contact"
              className="hidden sm:inline-flex bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Get a Quote
            </Link>

            {/* Mobile Menu Button */}
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
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mx-4 mt-2 bg-primary text-primary-foreground px-4 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors text-center"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
