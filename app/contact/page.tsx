import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact | Deepayan Das",
  description:
    "Get in touch with Deepayan Das, a Development Engineer Intern in Storage & Virtualization competency specializing in Storage Systems, Virtualization Technologies, and innovative solutions.",
  keywords:
    "Deepayan Das, Storage & Virtualization Engineer, Development Engineer, Storage Systems, Virtualization Technologies, Contact",
}

export default function ContactPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-2">Contact</h1>
      <p className="text-muted-foreground mb-8">Have a question or want to work together? Feel free to reach out.</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
              <ContactForm />
            </CardContent>
          </Card>
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-1">
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-icy-blue mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a
                      href="mailto:deepayandas42@gmail.com"
                      className="text-muted-foreground hover:text-icy-blue transition-colors"
                    >
                      deepayandas42@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-icy-blue mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <a href="tel:+917001929005" className="text-muted-foreground hover:text-icy-blue transition-colors">
                      +91 7001929xx5
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-icy-blue mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-muted-foreground">West Bengal, India</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Connect</h2>
              <div className="grid grid-cols-3 gap-4">
                <a
                  href="https://github.com/Deepayon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 rounded-lg bg-muted/30 hover:bg-icy-blue/20 transition-colors"
                >
                  <Github className="h-8 w-8 mb-2" />
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/deepayandas42"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 rounded-lg bg-muted/30 hover:bg-icy-blue/20 transition-colors"
                >
                  <Linkedin className="h-8 w-8 mb-2" />
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a
                  href="mailto:deepayandas42@gmail.com"
                  className="flex flex-col items-center p-4 rounded-lg bg-muted/30 hover:bg-icy-blue/20 transition-colors"
                >
                  <Mail className="h-8 w-8 mb-2" />
                  <span className="text-sm">Email</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
