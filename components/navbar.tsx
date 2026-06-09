"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Search } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Our Work" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

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
            {navLinks.map((link) => (
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
