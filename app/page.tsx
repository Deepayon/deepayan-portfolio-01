import type { Metadata } from "next"
import { HeroAnimation } from "@/components/hero-animation"
import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Deepayan Das | Development Engineer - Storage & Virtualization Portfolio",
  description:
    "Deepayan Das - B.Tech IT student from Asansol Engineering College, Development Engineer Intern in Storage & Virtualization competency at Calsoft Inc. Skilled in Storage Systems, Virtualization, Java, SQL, and Machine Learning.",
  keywords:
    "Deepayan Das, Deepayan, Development Engineer, Storage Engineer, Virtualization Engineer, Storage & Virtualization, Java Developer, Machine Learning Engineer, SQL Developer, B.Tech IT, Asansol Engineering College, Calsoft Inc, Portfolio, Resume, West Bengal Developer",
  openGraph: {
    title: "Deepayan Das | Development Engineer - Storage & Virtualization",
    description:
      "B.Tech IT student and Development Engineer Intern in Storage & Virtualization competency, passionate about Storage Systems, Virtualization Technologies, and innovative solutions.",
    url: "https://deepayandas.dev",
    images: [
      {
        url: "/images/deepayan-photo.jpg",
        width: 1200,
        height: 630,
        alt: "Deepayan Das - Storage & Virtualization Engineer Portfolio",
      },
    ],
  },
}

const featuredProjects = [
  {
    title: "ExplorEase",
    description:
      "Your True Travel Companion - A full-stack travel application with backend and frontend components, containerized with Docker for seamless deployment.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop&crop=center",
    tags: ["JavaScript", "CSS", "HTML", "Docker", "Full-Stack"],
    githubUrl: "https://github.com/Deepayon/ExplorEase",
    featured: true,
  },
  {
    title: "HoverBoard Canvas",
    description:
      "Real-time collaborative drawing application with dynamic tools, color palettes, and seamless communication using Socket.IO.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center",
    tags: ["HTML5", "CSS3", "JavaScript", "Socket.IO"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Movie Recommender System",
    description:
      "Machine learning-based recommendation system using dimensionality reduction and similarity measures with Python.",
    image: "https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?w=400&h=300&fit=crop&crop=center",
    tags: ["Python", "Machine Learning", "Pandas", "NumPy"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
  },
]

const skills = [
  {
    category: "Storage & Virtualization",
    items: ["Storage Systems", "Virtualization Technologies", "Cloud Storage", "Data Management"],
  },
  { category: "Programming", items: ["Java", "C", "JavaScript", "Python"] },
  { category: "Database & Web", items: ["SQL", "DBMS", "HTML5", "CSS3"] },
  { category: "Core Technologies", items: ["DSA", "OOP", "Computer Networks", "Machine Learning"] },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Deepayan Das Portfolio",
  description:
    "Portfolio website of Deepayan Das, Development Engineer in Storage & Virtualization and B.Tech IT student",
  url: "https://deepayandas.dev",
  mainEntity: {
    "@type": "Person",
    name: "Deepayan Das",
    jobTitle: "Development Engineer Intern - Storage & Virtualization",
    worksFor: {
      "@type": "Organization",
      name: "Calsoft Inc.",
    },
  },
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div>
        {/* Hero Section */}
        <HeroAnimation />

        {/* Featured Projects Section */}
        <section className="py-12 px-4 md:px-6">
          <div className="container max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Featured Projects</h2>
              <Button asChild variant="ghost" className="animated-underline text-sm">
                <Link href="/projects">
                  View All <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-12 px-4 md:px-6 bg-muted/10">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category} className="bg-card p-4 rounded-lg shadow-sm border border-border/30">
                  <h3 className="text-base font-semibold mb-3 text-primary-blue">{skillGroup.category}</h3>
                  <ul className="space-y-1.5">
                    {skillGroup.items.map((skill) => (
                      <li key={skill} className="flex items-center text-sm">
                        <div className="w-1 h-1 rounded-full bg-secondary-teal mr-2"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 px-4 md:px-6">
          <div className="container max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-primary-blue/5 to-secondary-teal/5 p-6 md:p-8 rounded-lg text-center border border-primary-blue/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Let's Work Together</h2>
              <p className="text-base mb-6 text-muted-foreground max-w-xl mx-auto">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              <Button asChild className="bg-primary-blue hover:bg-primary-blue/90 text-white">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
