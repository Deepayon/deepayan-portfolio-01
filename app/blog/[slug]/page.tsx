import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CalendarDays, Clock, User } from "lucide-react"

// Blog posts data
const blogPosts = [
  {
    slug: "storage-virtualization-fundamentals",
    title: "Storage Virtualization Fundamentals: A Developer's Guide",
    excerpt:
      "Understanding the core concepts of storage virtualization and how it impacts modern application development.",
    content: `
    Storage Virtualization Fundamentals: A Developer's Guide

Storage virtualization is a critical technology that abstracts physical storage resources from applications and users. As a development engineer working in storage and virtualization, understanding these fundamentals is essential for building scalable applications.

What is Storage Virtualization?

Storage virtualization creates a logical layer between applications and physical storage devices. This abstraction allows for:

- Simplified Management: Centralized control of storage resources
- Improved Utilization: Better allocation of storage capacity
- Enhanced Performance: Optimized data placement and access patterns
- Increased Flexibility: Dynamic provisioning and scaling

 Key Benefits for Developers

 1. Simplified Data Management
With storage virtualization, developers can focus on application logic rather than underlying storage complexities.

 2. Scalability
Applications can scale storage resources dynamically without code changes.

 3. Performance Optimization
Intelligent data placement improves application response times.

 Implementation Considerations

When working with virtualized storage environments, consider:

- API Integration Leverage storage APIs for dynamic provisioning
- Data Locality Understand how virtualization affects data placement
- Performance Monitoring: Implement proper monitoring for virtualized environments

 Conclusion

Storage virtualization is transforming how we build and deploy applications. Understanding these fundamentals helps developers create more efficient and scalable solutions.
    `,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop&crop=center",
    date: "December 15, 2024",
    readTime: "8 min read",
    tags: ["Storage", "Virtualization", "Development"],
    author: "Deepayan Das",
  },
  {
    slug: "modern-storage-architectures",
    title: "Modern Storage Architectures: From Traditional to Cloud-Native",
    excerpt: "Exploring the evolution of storage architectures and their impact on modern application development.",
    content: `
  Modern Storage Architectures: From Traditional to Cloud-Native

The landscape of storage architectures has evolved dramatically over the past decade. This evolution has significant implications for how we design and build applications.

 Traditional Storage Architectures

Traditional storage systems were built around:
- Direct Attached Storage (DAS)
- Network Attached Storage (NAS)
- Storage Area Networks (SAN)

These architectures served well for their time but had limitations in terms of scalability and flexibility.

 Cloud-Native Storage

Modern cloud-native storage solutions offer:

 Object Storage
- Scalable and durable
- RESTful APIs
- Global accessibility

 Block Storage
- High performance
- Consistent latency
- Snapshot capabilities

 File Storage
- POSIX compliance
- Shared access
- Hierarchical organization

 Best Practices for Developers

1. Choose the Right Storage Type: Match storage characteristics to application needs
2. Implement Proper Error Handling: Handle storage failures gracefully
3. Optimize Data Access Patterns: Design for your storage architecture
4. Monitor Performance: Track key metrics and optimize accordingly

 Future Trends

The future of storage includes:
- AI-Driven Optimization
- Edge Storage Solutions
- Quantum Storage Technologies

Understanding these trends helps developers prepare for the next generation of applications.
    `,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop&crop=center",
    date: "December 10, 2024",
    readTime: "10 min read",
    tags: ["Storage", "Cloud", "Architecture"],
    author: "Deepayan Das",
  },
  {
    slug: "java-storage-apis",
    title: "Working with Storage APIs in Java: Best Practices",
    excerpt: "A comprehensive guide to integrating storage services in Java applications with practical examples.",
    content: `
  Working with Storage APIs in Java: Best Practices

Java developers working with storage systems need to understand how to effectively integrate with various storage APIs. This guide covers best practices and common patterns.

 Common Storage APIs

 AWS S3 SDK
\`\`\`java
S3Client s3Client = S3Client.builder()
    .region(Region.US_EAST_1)
    .build();

PutObjectRequest request = PutObjectRequest.builder()
    .bucket("my-bucket")
    .key("my-object")
    .build();

s3Client.putObject(request, RequestBody.fromString("Hello World"));
\`\`\`

 Azure Blob Storage
\`\`\`java
BlobServiceClient blobServiceClient = new BlobServiceClientBuilder()
    .connectionString(connectionString)
    .buildClient();

BlobClient blobClient = blobServiceClient
    .getBlobContainerClient("container")
    .getBlobClient("blob");

blobClient.upload(data);
\`\`\`

 Best Practices

 1. Connection Management
- Use connection pooling
- Implement proper retry logic
- Handle timeouts gracefully

 2. Error Handling
- Implement exponential backoff
- Handle specific error codes
- Log errors appropriately

 3. Performance Optimization
- Use async operations when possible
- Implement proper caching strategies
- Monitor and tune performance

 Security Considerations

- Use IAM roles and policies
- Implement encryption at rest and in transit
- Regularly rotate access keys
- Follow principle of least privilege

 Conclusion

Effective storage API integration is crucial for modern Java applications. Following these best practices ensures reliable and performant storage operations.
    `,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop&crop=center",
    date: "December 5, 2024",
    readTime: "12 min read",
    tags: ["Java", "Storage", "APIs"],
    author: "Deepayan Das",
  },
]

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    return {
      title: "Post Not Found | Deepayan Das",
    }
  }

  return {
    title: `${post.title} | Deepayan Das`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container py-12 max-w-4xl">
      <Button asChild variant="ghost" className="mb-8 animated-underline">
        <Link href="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </Button>

      <article className="prose prose-invert max-w-none">
        <div className="mb-8">
          <div className="aspect-video relative overflow-hidden rounded-xl mb-8">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="skill-tag">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-4xl font-bold mb-4 hero-text">{post.title}</h1>

          <div className="flex items-center gap-6 text-muted-foreground mb-8">
            <div className="flex items-center">
              <User className="mr-2 h-4 w-4" />
              {post.author}
            </div>
            <div className="flex items-center">
              <CalendarDays className="mr-2 h-4 w-4" />
              {post.date}
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              {post.readTime}
            </div>
          </div>
        </div>

        <div
          className="prose prose-invert max-w-none prose-headings:hero-text prose-a:text-icy-blue prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded"
          dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br>") }}
        />
      </article>
    </div>
  )
}
