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
      <div className="container py-12">
        <h1 className="text-3xl font-bold mb-8 text-white">About Me</h1>

        {/* Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-1 flex justify-start">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary-blue/20 via-secondary-teal/15 to-accent-slate/20 rounded-lg blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative w-56 h-56 overflow-hidden rounded-lg border border-primary-blue/20 shadow-lg transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1">
                <Image
                  src="/images/deepayan-photo.jpg"
                  alt="Deepayan Das - Development Engineer"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-lg"></div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-4 text-white">Deepayan Das</h2>
            <h3 className="text-xl text-primary-blue mb-6 font-semibold">Storage & Virtualization Intern</h3>

            <div className="prose prose-invert max-w-none text-base leading-relaxed space-y-4 text-gray-300">
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
              <Badge className="bg-primary-blue/20 text-primary-blue border-primary-blue/30 px-3 py-1 text-sm">
                Storage Systems
              </Badge>
              <Badge className="bg-secondary-teal/20 text-secondary-teal border-secondary-teal/30 px-3 py-1 text-sm">
                Virtualization
              </Badge>
              <Badge className="bg-accent-slate/20 text-accent-slate border-accent-slate/30 px-3 py-1 text-sm">
                Java
              </Badge>
              <Badge className="bg-primary-blue/20 text-primary-blue border-primary-blue/30 px-3 py-1 text-sm">
                SQL
              </Badge>
              <Badge className="bg-secondary-teal/20 text-secondary-teal border-secondary-teal/30 px-3 py-1 text-sm">
                Machine Learning
              </Badge>
              <Badge className="bg-accent-slate/20 text-accent-slate border-accent-slate/30 px-3 py-1 text-sm">
                Cloud Storage
              </Badge>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center text-white">
            <Briefcase className="mr-3 h-6 w-6 text-primary-blue" />
            Professional Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-gray-900/50 border-primary-blue/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <h3 className="text-lg font-bold text-primary-blue">{exp.title}</h3>
                    <span className="text-sm text-gray-400 bg-gray-800/50 px-2 py-1 rounded">{exp.period}</span>
                  </div>
                  <p className="text-base text-secondary-teal mb-3 font-semibold">{exp.company}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center text-white">
            <GraduationCap className="mr-3 h-6 w-6 text-secondary-teal" />
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="bg-gray-900/50 border-secondary-teal/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <h3 className="text-lg font-bold text-secondary-teal">{edu.degree}</h3>
                    <span className="text-sm text-gray-400 bg-gray-800/50 px-2 py-1 rounded">{edu.year}</span>
                  </div>
                  <p className="text-base text-primary-blue mb-3 font-semibold">{edu.institution}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section>
          <h2 className="text-2xl font-bold mb-8 flex items-center text-white">
            <Award className="mr-3 h-6 w-6 text-accent-slate" />
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-accent-slate/20 backdrop-blur-sm group hover:border-accent-slate/40 transition-colors"
              >
                <CardContent className="p-4 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-accent-slate mr-3 group-hover:animate-pulse"></div>
                  <span className="text-gray-300 text-sm">{cert}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
