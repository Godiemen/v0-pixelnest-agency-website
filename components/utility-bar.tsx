"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Mail, Search } from "lucide-react"
import { SearchModal } from "./search-modal"

export function UtilityBar() {
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setSearchOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", handleKey)
    return () => document.removeEventListener("keydown", handleKey)
  }, [])

  return (
    <>
      <div className="w-full bg-white border-b border-border/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-11 items-center justify-end text-sm gap-4">
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 px-3 h-9 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
              <span className="hidden sm:inline text-xs font-medium">Search</span>
              <kbd className="hidden md:inline-flex items-center px-1.5 py-0.5 rounded bg-white/70 text-[10px] font-mono border border-primary/20">
                ⌘K
              </kbd>
            </button>

            <Link
              href="/contact"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>Contact us</span>
            </Link>

            <Link
              href="/contact"
              className="hidden sm:inline-flex bg-primary text-white px-4 py-1.5 rounded-full font-medium hover:bg-primary/90 transition-colors text-sm"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
