"use client"

import Link from "next/link"
import { Mail } from "lucide-react"

export function UtilityBar() {
  return (
    <div className="w-full bg-white border-b border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-11 items-center justify-end text-sm">
          <Link
            href="/contact"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <Mail className="h-3.5 w-3.5" />
            <span>Contact us</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
