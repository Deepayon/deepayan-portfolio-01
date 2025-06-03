import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock } from "lucide-react"

export interface BlogCardProps {
  title: string
  excerpt: string
  image: string
  date: string
  readTime: string
  tags: string[]
  slug: string
}

export function BlogCard({ title, excerpt, image, date, readTime, tags, slug }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="block h-full">
      <Card className="project-card h-full overflow-hidden">
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg line-clamp-2">{title}</CardTitle>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <div className="flex items-center">
              <CalendarDays className="mr-1 h-3.5 w-3.5" />
              {date}
            </div>
            <div className="flex items-center">
              <Clock className="mr-1 h-3.5 w-3.5" />
              {readTime}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-sm line-clamp-2">{excerpt}</CardDescription>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="skill-tag text-xs px-2 py-0.5">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
