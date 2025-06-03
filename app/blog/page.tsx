import type { Metadata } from "next"
import { BlogCard } from "@/components/blog-card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog | Deepayan Das",
  description:
    "Technical articles and insights by Deepayan Das, a Development Engineer specializing in Storage & Virtualization, Java, and modern infrastructure technologies.",
  keywords: "Deepayan Das, Development Engineer, Storage, Virtualization, Java, Blog, Technical Articles",
}

const blogPosts = [
  {
    title: "Storage Virtualization Fundamentals: A Developer's Guide",
    excerpt:
      "Understanding the core concepts of storage virtualization and how it impacts modern application development.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=center",
    date: "December 15, 2024",
    readTime: "8 min read",
    tags: ["Storage", "Virtualization", "Development"],
    slug: "storage-virtualization-fundamentals",
  },
  {
    title: "Modern Storage Architectures: From Traditional to Cloud-Native",
    excerpt: "Exploring the evolution of storage architectures and their impact on modern application development.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center",
    date: "December 10, 2024",
    readTime: "10 min read",
    tags: ["Storage", "Cloud", "Architecture"],
    slug: "modern-storage-architectures",
  },
  {
    title: "Working with Storage APIs in Java: Best Practices",
    excerpt: "A comprehensive guide to integrating storage services in Java applications with practical examples.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop&crop=center",
    date: "December 5, 2024",
    readTime: "12 min read",
    tags: ["Java", "Storage", "APIs"],
    slug: "java-storage-apis",
  },
]

const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)))

export default function BlogPage() {
  return (
    <div className="container py-10 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3 hero-text">Technical Blog</h1>
        <p className="text-base text-muted-foreground max-w-2xl">
          Insights and experiences from my journey in storage & virtualization engineering, covering practical
          development challenges and solutions.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search articles..." className="pl-10 bg-card/50 backdrop-blur-sm border-border/30" />
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge
            variant="outline"
            className="cursor-pointer hover:bg-icy-blue hover:text-background transition-all duration-300 px-3 py-1"
          >
            All Topics
          </Badge>
          {allTags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="cursor-pointer hover:bg-icy-blue hover:text-background transition-all duration-300 px-3 py-1"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>

      {/* Coming Soon Section */}
      <div className="mt-12 text-center">
        <div className="glass-card p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3 hero-text">More Articles Coming Soon</h3>
          <p className="text-sm text-muted-foreground">
            I'm working on more in-depth articles about storage systems, virtualization technologies, and practical
            development experiences. Stay tuned!
          </p>
        </div>
      </div>
    </div>
  )
}
