import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono, Poppins, Fira_Code } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar"

// Load modern fonts
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-code",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://deepayandas.dev"),
  title: {
    default: "Deepayan Das | Development Engineer - Storage & Virtualization",
    template: "%s | Deepayan Das",
  },
  description:
    "Deepayan Das - B.Tech IT student, Development Engineer Intern in Storage & Virtualization competency at Calsoft Inc. Expert in Java, SQL, Machine Learning, Storage Systems, and Virtualization technologies.",
  keywords: [
    "Deepayan Das",
    "Deepayan",
    "Development Engineer",
    "Storage Engineer",
    "Virtualization Engineer",
    "Storage & Virtualization",
    "B.Tech IT",
    "Java Developer",
    "Machine Learning",
    "SQL Developer",
    "Storage Systems",
    "Virtualization Technologies",
    "Cloud Storage",
    "Data Storage",
    "Asansol Engineering College",
    "Calsoft Inc",
    "Celebal Technologies",
    "JavaScript",
    "Python",
    "Database Management",
    "West Bengal Developer",
    "Indian Developer",
    "Portfolio",
    "Resume",
  ],
  authors: [{ name: "Deepayan Das", url: "https://deepayandas.dev" }],
  creator: "Deepayan Das",
  publisher: "Deepayan Das",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://deepayandas.dev",
    siteName: "Deepayan Das Portfolio",
    title: "Deepayan Das | Development Engineer & Software Developer",
    description:
      "B.Tech IT student and Development Engineer Intern passionate about Java, Machine Learning, and innovative web technologies.",
    images: [
      {
        url: "/images/deepayan-photo.jpg",
        width: 1200,
        height: 630,
        alt: "Deepayan Das - Development Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepayan Das | Development Engineer & Software Developer",
    description:
      "B.Tech IT student and Development Engineer Intern passionate about Java, Machine Learning, and innovative web technologies.",
    images: ["/images/deepayan-photo.jpg"],
    creator: "@deepayandas42",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://deepayandas.dev",
  },
    generator: 'v0.dev'
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Deepayan Das",
  url: "https://deepayandas.dev",
  image: "https://deepayandas.dev/images/deepayan-photo.jpg",
  jobTitle: "Development Engineer Intern - Storage & Virtualization",
  worksFor: {
    "@type": "Organization",
    name: "Calsoft Inc.",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Asansol Engineering College",
  },
  address: {
    "@type": "PostalAddress",
    addressRegion: "West Bengal",
    addressCountry: "India",
  },
  email: "deepayandas42@gmail.com",
  telephone: "+91-8538841490",
  sameAs: [
    "https://www.linkedin.com/in/deepayandas42",
    "https://github.com/Deepayon",
    "mailto:deepayandas42@gmail.com",
  ],
  knowsAbout: [
    "Storage Systems",
    "Virtualization Technologies",
    "Java Programming",
    "SQL Database Management",
    "Machine Learning",
    "Web Development",
    "JavaScript",
    "Python",
    "Data Structures and Algorithms",
    "Cloud Storage",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable} ${firaCode.variable}`}
    >
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="canonical" href="https://deepayandas.dev" />
        <meta name="google-site-verification" content="your-google-verification-code" />
      </head>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <SidebarProvider>
            <div className="flex min-h-screen">
              <AppSidebar />
              <main className="flex-1 overflow-y-auto bg-background">{children}</main>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
