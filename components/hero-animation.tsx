"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Sparkles } from "lucide-react"
import Link from "next/link"

export function HeroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { left, top, width, height } = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5

      const blob1 = containerRef.current.querySelector(".hero-blob-1") as HTMLElement
      const blob2 = containerRef.current.querySelector(".hero-blob-2") as HTMLElement
      const blob3 = containerRef.current.querySelector(".hero-blob-3") as HTMLElement

      if (blob1 && blob2 && blob3) {
        blob1.style.transform = `translate(${x * 20}px, ${y * 20}px)`
        blob2.style.transform = `translate(${-x * 15}px, ${-y * 15}px)`
        blob3.style.transform = `translate(${x * 10}px, ${y * 10}px)`
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6"
    >
      {/* Subtle animated blobs */}
      <div className="hero-blob hero-blob-1 absolute w-72 h-72"></div>
      <div className="hero-blob hero-blob-2 absolute w-64 h-64"></div>
      <div className="hero-blob hero-blob-3 absolute w-56 h-56"></div>

      {/* Hero content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto fade-in-up">
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-blue/5 text-primary-blue text-xs font-medium border border-primary-blue/10 backdrop-blur-sm">
            <Sparkles className="w-3 h-3" />
            Development Engineer Intern • Storage & Virtualization
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight text-white">
          Building Tomorrow's
          <br />
          <span className="relative text-primary-blue font-bold">
            Storage Solutions
            <div className="absolute -inset-1 bg-primary-blue/20 blur-md -z-10 rounded-lg"></div>
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-8 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Aspiring Development Engineer with a growing focus on{" "}
          <span className="text-primary-blue font-medium">storage systems</span>,{" "}
          <span className="text-secondary-teal font-medium">virtualization</span>, and{" "}
          <span className="text-accent-slate font-medium">cloud infrastructure</span>.
          <br className="hidden md:block" />
          Building hands-on projects to explore scalable, reliable solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="default"
            className="group relative overflow-hidden bg-primary-blue hover:bg-primary-blue/90 text-white px-6 py-2 font-medium rounded-md transition-all duration-300 shadow-lg hover:shadow-primary-blue/20"
          >
            <Link href="/projects">
              <span className="relative z-10">View Projects</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>

          <Button
            asChild
            size="default"
            variant="outline"
            className="group border border-primary-blue text-primary-blue hover:bg-primary-blue/5 px-6 py-2 font-medium rounded-md backdrop-blur-sm transition-all duration-300"
          >
            <Link href="/contact">
              <span className="transition-colors duration-300">Get in Touch</span>
            </Link>
          </Button>

          <Button
            asChild
            size="default"
            variant="ghost"
            className="group text-muted-foreground hover:text-primary-blue px-6 py-2 font-medium rounded-md hover:bg-primary-blue/5 transition-all duration-300"
          >
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" />
              <span>Resume</span>
            </a>
          </Button>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-6 h-10 border border-primary-blue/20 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-primary-blue rounded-full mt-2"></div>
        </div>
      </div>
    </div>
  )
}
