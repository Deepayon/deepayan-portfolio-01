import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl?: string
  githubUrl?: string
  featured?: boolean
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  demoUrl,
  githubUrl,
  featured = false,
}: ProjectCardProps) {
  return (
    <Card
      className={`project-card overflow-hidden group ${featured ? "border-primary-blue/20 shadow-md shadow-primary-blue/5" : ""}`}
    >
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {featured && (
          <div className="absolute top-3 right-3 bg-primary-blue text-white px-2 py-0.5 rounded-md text-xs font-medium">
            Featured
          </div>
        )}
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-bold group-hover:text-primary-blue transition-colors duration-300">
          {title}
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground leading-relaxed">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="skill-tag text-xs px-2 py-0.5">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 pt-2 border-t border-border/30">
        {githubUrl && (
          <Button asChild variant="outline" size="sm" className="flex-1 hover:bg-muted/30 text-xs">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-1.5 h-3.5 w-3.5" /> Code
            </a>
          </Button>
        )}
        {demoUrl && (
          <Button asChild size="sm" className="flex-1 bg-primary-blue hover:bg-primary-blue/90 text-white text-xs">
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-1.5 h-3.5 w-3.5" /> Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
