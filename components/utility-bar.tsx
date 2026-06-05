"use client"

import Link from "next/link"
import { Mail, ArrowRight } from "lucide-react"

export function UtilityBar() {
  return (
    <div className="w-full bg-background border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-10 items-center justify-end gap-6 text-sm">
          <Link 
            href="#contact" 
            className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
          >
            <Mail className="h-4 w-4" />
            <span>Contact Us</span>
          </Link>
          <Link 
            href="#contact" 
            className="flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium"
          >
            <span>Get a Quote</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
