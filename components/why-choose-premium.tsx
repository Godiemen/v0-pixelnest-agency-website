"use client"

import { useEffect, useRef, useState } from "react"
import { DollarSign, Clock, MapPin, CheckCircle, Zap, Smartphone } from "lucide-react"

const features = [
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Quality work at prices small businesses can afford. No hidden fees, transparent quotes.",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "We respect your time and deliver on schedule. Most projects completed in 2-4 weeks.",
  },
  {
    icon: MapPin,
    title: "Local & Reliable",
    description: "Based in Durban, supporting local businesses. Face-to-face meetings available.",
  },
]

const stats = [
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "hr", label: "Response Time" },
  { value: 100, suffix: "%", label: "Mobile Friendly" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const duration = 2000
          const increment = value / (duration / 16)
          
          const timer = setInterval(() => {
            start += increment
            if (start >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
          
          return () => clearInterval(timer)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-white">
      {count}{suffix}
    </div>
  )
}

function seededRandom(n: number) {
  const x = Math.sin(n * 12.9898) * 43758.5453
  return x - Math.floor(x)
}

function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-blue-500/30 rounded-full animate-float"
          style={{
            left: `${seededRandom(i) * 100}%`,
            top: `${seededRandom(i + 100) * 100}%`,
            animationDelay: `${seededRandom(i + 200) * 5}s`,
            animationDuration: `${3 + seededRandom(i + 300) * 4}s`,
          }}
        />
      ))}
    </div>
  )
}

function GradientOrb() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-30 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-full blur-3xl animate-pulse-slow" />
    </div>
  )
}

export function WhyChoosePremium() {
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

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0a0f1e 0%, #0d1528 50%, #0a0f1e 100%)" }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-cyan-900/20 animate-gradient-shift" />
      </div>
      
      <FloatingParticles />
      <GradientOrb />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Why Choose Pixelnest?
          </h2>
          <div className="relative inline-block">
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We are a new agency but we bring fresh ideas and genuine commitment to every project
            </p>
            {/* Animated underline */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-line-draw" style={{ width: isVisible ? "200px" : "0px", transition: "width 1.5s ease-out 0.5s" }} />
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative p-8 rounded-2xl transition-all duration-700 cursor-pointer ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                background: "rgba(13, 21, 40, 0.6)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(59, 130, 246, 0.2)",
              }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: "0 0 40px rgba(59, 130, 246, 0.3), inset 0 0 40px rgba(59, 130, 246, 0.05)" }} />
              
              {/* Card content */}
              <div className="relative z-10 transform group-hover:-translate-y-2 transition-transform duration-500">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <feature.icon className="h-8 w-8 text-blue-400 animate-bounce-slow" style={{ animationDelay: `${index * 200}ms` }} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Border glow animation */}
              <div className="absolute inset-0 rounded-2xl border border-blue-500/0 group-hover:border-blue-500/50 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Stats Counter */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl"
              style={{
                background: "rgba(59, 130, 246, 0.05)",
                border: "1px solid rgba(59, 130, 246, 0.1)",
              }}
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-gray-400 mt-2 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 0.8; }
        }
        @keyframes gradient-shift {
          0%, 100% { transform: translateX(-50%); }
          50% { transform: translateX(50%); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.5; }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-gradient-shift { animation: gradient-shift 8s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
      `}</style>
    </section>
  )
}
