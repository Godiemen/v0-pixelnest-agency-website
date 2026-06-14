"use client"

import { useState, useEffect, useRef, useCallback, useMemo } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Search, X, ArrowRight, FileText, Clock, CornerDownLeft } from "lucide-react"
import { cn } from "@/lib/utils"

const searchIndex = [
  { title: "Home", href: "/", desc: "Pixelnest homepage", category: "Pages" },
  { title: "Services", href: "/services", desc: "Web, app, design, e-commerce, maintenance", category: "Pages" },
  { title: "Website Development", href: "/services", desc: "Custom websites that convert", category: "Services" },
  { title: "App Development", href: "/services", desc: "iOS & Android mobile apps", category: "Services" },
  { title: "UI/UX Design", href: "/services", desc: "Beautiful, usable interfaces", category: "Services" },
  { title: "E-Commerce Solutions", href: "/services", desc: "Online stores with payments", category: "Services" },
  { title: "Maintenance", href: "/services", desc: "Keep your site running smoothly", category: "Services" },
  { title: "Website Development", href: "/services/website-development", desc: "Custom sites that convert visitors", category: "Services" },
  { title: "App Development", href: "/services/app-development", desc: "iOS & Android native apps", category: "Services" },
  { title: "UI/UX Design", href: "/services/ui-ux-design", desc: "Beautiful, usable interfaces", category: "Services" },
  { title: "E-Commerce", href: "/services/e-commerce", desc: "Online stores with payments", category: "Services" },
  { title: "Maintenance", href: "/services/maintenance", desc: "Keep your site running smoothly", category: "Services" },
  { title: "About", href: "/about", desc: "Learn about Pixelnest", category: "Pages" },
  { title: "Our Story", href: "/about/story", desc: "How Pixelnest began", category: "About" },
  { title: "Our Values", href: "/about/values", desc: "What drives us", category: "About" },
  { title: "Meet the Team", href: "/about/team", desc: "The people behind Pixelnest", category: "About" },
  { title: "Our Approach", href: "/about/approach", desc: "How we deliver projects", category: "About" },
  { title: "Portfolio", href: "/portfolio", desc: "Our sample projects", category: "Pages" },
  { title: "E-Commerce Platform", href: "/portfolio/ecommerce", desc: "Online store demo", category: "Projects" },
  { title: "Corporate Website", href: "/portfolio/corporate", desc: "Business website demo", category: "Projects" },
  { title: "Landing Page", href: "/portfolio/landing", desc: "Lead capture demo page", category: "Projects" },
  { title: "Contact", href: "/contact", desc: "Get in touch with us", category: "Pages" },
]

function getCategoryIcon(category: string) {
  switch (category) {
    case "Services": return "bg-blue-100 text-blue-600"
    case "Projects": return "bg-emerald-100 text-emerald-600"
    case "About": return "bg-amber-100 text-amber-600"
    default: return "bg-primary/10 text-primary"
  }
}

function fuzzyMatch(text: string, query: string): boolean {
  const t = text.toLowerCase()
  const q = query.toLowerCase()
  let qi = 0
  for (let ti = 0; ti < t.length && qi < q.length; ti++) {
    if (t[ti] === q[qi]) qi++
  }
  return qi === q.length
}

function scoreResult(item: typeof searchIndex[0], query: string): number {
  const q = query.toLowerCase()
  const title = item.title.toLowerCase()
  const desc = item.desc.toLowerCase()
  let score = 0
  if (title.startsWith(q)) score += 100
  else if (title.includes(q)) score += 50
  if (desc.includes(q)) score += 20
  if (fuzzyMatch(title, query)) score += 10
  return score
}

function Highlight({ text, query }: { text: string; query: string }) {
  if (!query) return <>{text}</>
  const parts = text.split(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi"))
  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <mark key={i} className="bg-primary/20 text-foreground rounded px-0.5 font-semibold">
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  )
}

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const router = useRouter()
  const [query, setQuery] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([])

  useEffect(() => {
    const saved = localStorage.getItem("pixelnest-recent-searches")
    if (saved) setRecentSearches(JSON.parse(saved))
  }, [])

  useEffect(() => {
    if (isOpen) {
      setQuery("")
      setSelectedIndex(0)
      setTimeout(() => inputRef.current?.focus(), 50)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  const results = useMemo(() => {
    const q = query.trim()
    if (q.length === 0) return []
    return searchIndex
      .filter((item) => fuzzyMatch(item.title, q) || fuzzyMatch(item.desc, q))
      .map((item) => ({ ...item, score: scoreResult(item, q) }))
      .sort((a, b) => b.score - a.score)
  }, [query])

  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  useEffect(() => {
    if (results.length > 0 && selectedIndex >= 0) {
      itemRefs.current[selectedIndex]?.scrollIntoView({ block: "nearest" })
    }
  }, [selectedIndex, results.length])

  const saveRecent = useCallback((q: string) => {
    setRecentSearches((prev) => {
      const next = [q, ...prev.filter((s) => s !== q)].slice(0, 5)
      localStorage.setItem("pixelnest-recent-searches", JSON.stringify(next))
      return next
    })
  }, [])

  const handleNavigate = useCallback((href: string) => {
    if (query.trim()) saveRecent(query.trim())
    onClose()
    router.push(href)
  }, [query, router, onClose, saveRecent])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === "Escape") {
        onClose()
        return
      }
      if (results.length === 0) return
      if (e.key === "ArrowDown") {
        e.preventDefault()
        setSelectedIndex((i) => (i + 1) % results.length)
      } else if (e.key === "ArrowUp") {
        e.preventDefault()
        setSelectedIndex((i) => (i - 1 + results.length) % results.length)
      } else if (e.key === "Enter") {
        e.preventDefault()
        const item = results[selectedIndex]
        if (item) handleNavigate(item.href)
      }
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [isOpen, onClose, results, selectedIndex, handleNavigate])

  const handleClickOutside = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose()
  }, [onClose])

  const showRecent = query.trim().length === 0 && recentSearches.length > 0
  const showEmpty = query.trim().length === 0 && recentSearches.length === 0
  const showResults = query.trim().length > 0
  const groupedResults = showResults
    ? results.reduce<Record<string, typeof searchIndex>>((acc, item) => {
        const cat = item.category || "Other"
        if (!acc[cat]) acc[cat] = []
        acc[cat].push(item)
        return acc
      }, {})
    : {}

  const flatResults = showResults ? results : []
  const totalResults = flatResults.length

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-start justify-center pt-20 sm:pt-28 px-4"
      onClick={handleClickOutside}
    >
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-border">
          <Search className="h-5 w-5 text-muted-foreground flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pages, services, projects..."
            className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground text-base"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 rounded bg-secondary text-muted-foreground text-xs font-mono border border-border">
            ESC
          </kbd>
        </div>

        {/* Content */}
        <div ref={listRef} className="flex-1 overflow-y-auto">
          {/* Recent Searches */}
          {showRecent && (
            <div className="py-3">
              <div className="px-5 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Recent Searches
              </div>
              {recentSearches.map((term, i) => (
                <button
                  key={i}
                  onClick={() => setQuery(term)}
                  className="w-full flex items-center gap-3 px-5 py-2.5 hover:bg-secondary/60 transition-colors text-left"
                >
                  <Clock className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <span className="text-sm text-foreground">{term}</span>
                </button>
              ))}
            </div>
          )}

          {/* Empty State */}
          {showEmpty && (
            <div className="px-5 py-10 text-center">
              <Search className="h-8 w-8 text-muted-foreground/40 mx-auto mb-3" />
              <p className="text-muted-foreground text-sm">
                Start typing to search pages, services, and projects
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {["Services", "Portfolio", "Contact", "About"].map((s) => (
                  <button
                    key={s}
                    onClick={() => setQuery(s)}
                    className="px-3 py-1 rounded-full bg-secondary text-xs text-foreground hover:bg-secondary/80 transition-colors border border-border"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Results */}
          {showResults && totalResults === 0 && (
            <div className="px-5 py-10 text-center">
              <p className="text-muted-foreground text-sm">
                No results found for &quot;<span className="font-medium text-foreground">{query}</span>&quot;
              </p>
            </div>
          )}

          {showResults && totalResults > 0 && (
            <div className="py-2">
              {Object.entries(groupedResults).map(([category, items]) => (
                <div key={category}>
                  <div className="px-5 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider sticky top-0 bg-white z-10">
                    {category}
                  </div>
                  {items.map((item) => {
                    const globalIndex = flatResults.findIndex((r) => r.href === item.href && r.title === item.title)
                    const isSelected = globalIndex === selectedIndex
                    return (
                      <Link
                        key={item.href + item.title}
                        ref={(el) => { itemRefs.current[globalIndex] = el }}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault()
                          handleNavigate(item.href)
                        }}
                        className={cn(
                          "flex items-center gap-4 px-5 py-3 transition-colors cursor-pointer",
                          isSelected ? "bg-secondary" : "hover:bg-secondary/50"
                        )}
                      >
                        <div className={cn("w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0", getCategoryIcon(item.category))}>
                          <FileText className="h-4 w-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground truncate">
                            <Highlight text={item.title} query={query} />
                          </p>
                          <p className="text-muted-foreground text-xs truncate">
                            <Highlight text={item.desc} query={query} />
                          </p>
                        </div>
                        {isSelected && (
                          <CornerDownLeft className="h-4 w-4 text-primary flex-shrink-0" />
                        )}
                      </Link>
                    )
                  })}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-3 bg-secondary/50 border-t border-border text-xs text-muted-foreground flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-background border border-border font-mono text-[10px]">↑↓</kbd>
              <span>to navigate</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-background border border-border font-mono text-[10px]">↵</kbd>
              <span>to select</span>
            </span>
          </div>
          <span>
            {showResults ? `${totalResults} result${totalResults !== 1 ? "s" : ""}` : "Ready to search"}
          </span>
        </div>
      </div>
    </div>
  )
}
