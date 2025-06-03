import type { Metadata } from "next"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, GraduationCap, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "About Deepayan Das | Storage & Virtualization Engineer & B.Tech IT Student",
  description:
    "Learn about Deepayan Das - B.Tech IT student at Asansol Engineering College, Development Engineer Intern in Storage & Virtualization competency at Calsoft Inc. Experience in Storage Systems, Virtualization, Java, SQL, and Machine Learning.",
  keywords:
    "Deepayan Das About, B.Tech IT Student, Storage & Virtualization Engineer, Development Engineer Intern, Asansol Engineering College, Calsoft Inc, Storage Systems, Virtualization Technologies, Java Developer, SQL Expert, Machine Learning",
  openGraph: {
    title: "About Deepayan Das | Storage & Virtualization Engineer & B.Tech IT Student",
    description:
      "Learn about Deepayan Das - B.Tech IT student and Development Engineer Intern in Storage & Virtualization competency, passionate about technology and innovation.",
    url: "https://deepayandas.dev/about",
  },
}

const experiences = [
  {
    title: "Development Engineer Intern - Storage & Virtualization",
    company: "Calsoft Inc.",
    period: "Present",
    description:
      "Working as a Development Engineer Intern in Storage & Virtualization competency, gaining hands-on experience in storage systems, virtualization technologies, and software development practices.",
  },
  {
    title: "Summer Intern",
    company: "Celebal Technologies",
    period: "June 2024 - August 2024",
    description:
      "Collaborated on SQL database development, gained hands-on experience in writing efficient SQL queries and participated in real-world projects related to data management and analysis.",
  },
]

const education = [
  {
    degree: "B.Tech Information Technology",
    institution: "Asansol Engineering College",
    year: "2021 - Present",
    description: "Currently pursuing with 8.83 YGPA. Active member of AEC Coding Club.",
  },
  {
    degree: "Higher Secondary (Science)",
    institution: "Dhadka N.C.L Vidyamandir",
    year: "2020 - 2021",
    description: "Completed with 81.40% marks in Science stream.",
  },
  {
    degree: "Secondary Education",
    institution: "Asansol Ramakrishna Mission High School",
    year: "2018 - 2019",
    description: "Completed with 85.43% marks.",
  },
]

const certifications = [
  "Oracle AI Vector Search Professional",
  "AI for Everyone - Coursera (DeepLearning.AI)",
  "SQL for Data Science - Coursera (UC Davis)",
  "Introduction to Hardware and Operating Systems - Coursera (IBM)",
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  mainEntity: {
    "@type": "Person",
    name: "Deepayan Das",
    jobTitle: "Development Engineer Intern - Storage & Virtualization",
    worksFor: {
      "@type": "Organization",
      name: "Calsoft Inc.",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Asansol Engineering College",
    },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "Oracle AI Vector Search Professional",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "AI for Everyone - Coursera (DeepLearning.AI)",
      },
    ],
  },
}

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container py-10 max-w-6xl">
        <h1 className="text-3xl font-bold mb-6 hero-text font-display">About Me</h1>

        {/* Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-1 flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="relative w-56 h-56 overflow-hidden rounded-xl border-2 border-primary-blue/30 shadow-xl group-hover:shadow-2xl group-hover:shadow-primary-blue/20 transition-all duration-500 group-hover:scale-105 group-hover:rotate-1">
                <Image
                  src="/images/deepayan-photo.jpg"
                  alt="Deepayan Das - Development Engineer"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl"></div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-2 hero-text font-display">Deepayan Das</h2>
            <h3 className="text-lg text-primary-blue mb-4 font-medium">Storage & Virtualization Engineer</h3>

            <div className="prose prose-invert max-w-none text-base leading-relaxed space-y-4">
              <p>
                I'm a motivated B.Tech Information Technology student at Asansol Engineering College with a strong
                foundation in programming and software development. Currently working as a Development Engineer Intern
                in Storage & Virtualization competency at Calsoft Inc., I'm passionate about storage systems,
                virtualization technologies, and creating innovative solutions.
              </p>
              <p>
                My journey includes hands-on experience in storage & virtualization technologies, SQL database
                development, machine learning projects, and web technologies. I believe in continuous learning and have
                earned certifications in AI, SQL, and hardware systems to strengthen my technical foundation in storage
                and virtualization domains.
              </p>
              <p>
                When I'm not coding, you can find me playing football, creating videos, or strumming my guitar. I'm
                always eager to take on new challenges and contribute meaningfully to dynamic technical environments.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <Badge className="bg-primary-blue/10 text-primary-blue border-primary-blue/20 px-3 py-1 text-xs font-medium">
                Storage Systems
              </Badge>
              <Badge className="bg-secondary-teal/10 text-secondary-teal border-secondary-teal/20 px-3 py-1 text-xs font-medium">
                Virtualization
              </Badge>
              <Badge className="bg-accent-slate/10 text-accent-slate border-accent-slate/20 px-3 py-1 text-xs font-medium">
                Java
              </Badge>
              <Badge className="bg-primary-blue/10 text-primary-blue border-primary-blue/20 px-3 py-1 text-xs font-medium">
                SQL
              </Badge>
              <Badge className="bg-secondary-teal/10 text-secondary-teal border-secondary-teal/20 px-3 py-1 text-xs font-medium">
                Machine Learning
              </Badge>
              <Badge className="bg-accent-slate/10 text-accent-slate border-accent-slate/20 px-3 py-1 text-xs font-medium">
                Cloud Storage
              </Badge>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center font-display">
            <Briefcase className="mr-3 h-5 w-5 text-primary-blue" />
            Professional Experience
          </h2>
          <div className="space-y-5">
            {experiences.map((exp, index) => (
              <Card key={index} className="glass-card border-l-2 border-l-primary-blue">
                <CardContent className="p-5">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-lg font-bold text-primary-blue">{exp.title}</h3>
                    <span className="text-xs text-muted-foreground bg-muted/20 px-2 py-0.5 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-base text-secondary-teal mb-2 font-medium">{exp.company}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center font-display">
            <GraduationCap className="mr-3 h-5 w-5 text-secondary-teal" />
            Education
          </h2>
          <div className="space-y-5">
            {education.map((edu, index) => (
              <Card key={index} className="glass-card border-l-2 border-l-secondary-teal">
                <CardContent className="p-5">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-lg font-bold text-secondary-teal">{edu.degree}</h3>
                    <span className="text-xs text-muted-foreground bg-muted/20 px-2 py-0.5 rounded-full">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-base text-primary-blue mb-2 font-medium">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center font-display">
            <Award className="mr-3 h-5 w-5 text-accent-slate" />
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="glass-card group hover:border-accent-slate/30">
                <CardContent className="p-4 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-accent-slate mr-3 group-hover:animate-pulse"></div>
                  <span className="font-medium text-sm">{cert}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
