"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"

const projects = [
  {
    image: "/images/portfolio-1.png",
    title: "E-Commerce Platform",
    category: "Website",
    description: "Modern online store with payment integration",
  },
  {
    image: "/images/portfolio-3.png",
    title: "Food Delivery App",
    category: "Mobile App",
    description: "iOS and Android food ordering application",
  },
  {
    image: "/images/portfolio-2.png",
    title: "Healthcare Portal",
    category: "Website",
    description: "Patient management and booking system",
  },
  {
    image: "/images/portfolio-4.png",
    title: "Property Listings",
    category: "Website",
    description: "Real estate platform with virtual tours",
  },
]

const filters = ["All", "Websites", "Apps", "Design"]

const codeSnippets = [
  { code: "<div class=\"hero\">", x: 5, y: 10 },
  { code: "const app = () => {", x: 80, y: 15 },
  { code: "function init()", x: 10, y: 70 },
  { code: ".container {", x: 75, y: 75 },
  { code: "import React", x: 50, y: 5 },
  { code: "export default", x: 85, y: 50 },
  { code: "useState()", x: 15, y: 40 },
  { code: "@media screen", x: 70, y: 30 },
]

function FloatingCode() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {codeSnippets.map((snippet, i) => (
        <div
          key={i}
          className="absolute text-blue-500/10 font-mono text-sm animate-float-code"
          style={{
            left: `${snippet.x}%`,
            top: `${snippet.y}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${6 + Math.random() * 4}s`,
          }}
        >
          {snippet.code}
        </div>
      ))}
    </div>
  )
}

function GradientOrb() {
  return (
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-20 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-3xl animate-pulse-glow" />
    </div>
  )
}

function ProjectCard({ project, index, isVisible }: { project: typeof projects[0]; index: number; isVisible: boolean }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: y * 10, y: -x * 10 })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative rounded-2xl overflow-hidden transition-all duration-700 cursor-pointer ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{
        transitionDelay: `${index * 150}ms`,
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        background: "rgba(13, 21, 40, 0.8)",
        border: "1px solid rgba(59, 130, 246, 0.2)",
      }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" style={{ boxShadow: "inset 0 0 60px rgba(59, 130, 246, 0.2)" }} />
      
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        
        {/* Hover overlay with button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-blue-600/20 backdrop-blur-sm">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            View Project
            <ExternalLink className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative z-20">
        <span className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 text-xs font-medium rounded-full mb-3">
          {project.category}
        </span>
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm">{project.description}</p>
      </div>

      {/* Border glow */}
      <div className="absolute inset-0 rounded-2xl border border-blue-500/0 group-hover:border-blue-500/40 transition-all duration-500 pointer-events-none" />
    </div>
  )
}

export function LatestWorkPremium() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => {
        if (activeFilter === "Websites") return p.category === "Website"
        if (activeFilter === "Apps") return p.category === "Mobile App"
        if (activeFilter === "Design") return p.category === "Design"
        return true
      })

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      style={{ background: "#000000" }}
    >
      <FloatingCode />
      <GradientOrb />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-blue-400 text-sm font-medium">Currently building something new</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Latest Work
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Check out some of our recent projects
          </p>
        </div>

        {/* Filter Bar */}
        <div className={`flex justify-center gap-2 mb-12 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`relative px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {filter}
              {activeFilter === filter && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-blue-500 rounded-full animate-scale-in" />
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} isVisible={isVisible} />
          ))}
        </div>

        {/* CTA Button */}
        <div className={`text-center transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
          >
            View All Work
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-code {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.1; }
          50% { transform: translateY(-30px) translateX(15px); opacity: 0.2; }
        }
        @keyframes pulse-glow {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.2); opacity: 0.3; }
        }
        @keyframes scale-in {
          from { transform: translateX(-50%) scaleX(0); }
          to { transform: translateX(-50%) scaleX(1); }
        }
        .animate-float-code { animation: float-code 8s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 4s ease-in-out infinite; }
        .animate-scale-in { animation: scale-in 0.3s ease-out forwards; }
      `}</style>
    </section>
  )
}
