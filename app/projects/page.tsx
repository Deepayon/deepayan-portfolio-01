import type { Metadata } from "next"
import { ProjectCard } from "@/components/project-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Projects | Deepayan Das",
  description:
    "Explore projects by Deepayan Das, a Development Engineer specializing in DevOps, Cloud, React, Kubernetes, and MinIO.",
  keywords: "Deepayan Das, Development Engineer, DevOps, Cloud, React, Kubernetes, MinIO, Projects, Portfolio",
}

const projects = [
  {
    title: "ExplorEase",
    description:
      "Your True Travel Companion - A full-stack travel application with backend and frontend components, containerized with Docker for seamless deployment.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop&crop=center",
    tags: ["JavaScript", "CSS", "HTML", "Docker", "Full-Stack"],
    githubUrl: "https://github.com/Deepayon/ExplorEase",
    category: "featured",
  },
  {
    title: "HoverBoard Canvas",
    description:
      "Real-time collaborative drawing application with dynamic tools, color palettes, and seamless communication using Socket.IO.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center",
    tags: ["HTML5", "CSS3", "JavaScript", "Socket.IO"],
    demoUrl: "#",
    githubUrl: "#",
    category: "featured",
  },
  {
    title: "Movie Recommender System",
    description:
      "Machine learning-based recommendation system using dimensionality reduction and similarity measures with Python libraries.",
    image: "https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?w=400&h=300&fit=crop&crop=center",
    tags: ["Python", "Machine Learning", "Pandas", "NumPy"],
    demoUrl: "#",
    githubUrl: "#",
    category: "featured",
  },
  {
    title: "SQL Database Projects",
    description:
      "Efficient SQL query development and database management projects during internship at Celebal Technologies.",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop&crop=center",
    tags: ["SQL", "Database Management", "Data Analysis"],
    githubUrl: "#",
    category: "backend",
  },
]

export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.category === "featured")
  const devopsProjects = projects.filter((p) => p.category === "devops")
  const frontendProjects = projects.filter((p) => p.category === "frontend")
  const backendProjects = projects.filter((p) => p.category === "backend")

  return (
    <div className="container py-10 max-w-6xl">
      <h1 className="text-3xl font-bold mb-2">Projects</h1>
      <p className="text-muted-foreground mb-6">A collection of my work across various domains and technologies.</p>

      <Tabs defaultValue="all" className="mb-6">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Projects</TabsTrigger>
          <TabsTrigger value="featured">Featured</TabsTrigger>
          <TabsTrigger value="devops">DevOps</TabsTrigger>
          <TabsTrigger value="frontend">Frontend</TabsTrigger>
          <TabsTrigger value="backend">Backend</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} featured={project.category === "featured"} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="featured">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} featured={true} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="devops">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {devopsProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="frontend">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {frontendProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="backend">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {backendProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
