"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, User, Code, FileText, Mail, Github, Linkedin, HardDrive } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Projects", href: "/projects", icon: Code },
  { name: "Blog", href: "/blog", icon: FileText },
  { name: "Contact", href: "/contact", icon: Mail },
]

const socialLinks = [
  { name: "GitHub", href: "https://github.com/Deepayon", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/deepayandas42", icon: Linkedin },
  { name: "Email", href: "mailto:deepayandas42@gmail.com", icon: Mail },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar className="border-r border-border/30">
      <SidebarHeader className="p-4 border-b border-border/30">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary-blue to-secondary-teal text-white shadow-md">
            <HardDrive className="h-5 w-5" />
          </div>
          <div className="flex flex-col min-w-0 flex-1">
            <span className="font-bold text-base leading-tight">Deepayan Das</span>
            <span className="text-xs text-muted-foreground leading-tight">Development Engineer Intern</span>
            <span className="text-xs text-primary-blue leading-tight">Storage & Virtualization</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-3 py-4">
        <SidebarMenu className="space-y-1">
          {navItems.map((item) => (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href}
                tooltip={item.name}
                className="w-full justify-start px-3 py-2 rounded-md hover:bg-primary-blue/10 data-[active=true]:bg-primary-blue/15 data-[active=true]:text-primary-blue transition-all duration-200"
              >
                <Link href={item.href}>
                  <item.icon className="h-4 w-4 mr-3" />
                  <span className="font-medium text-sm">{item.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-border/30">
        <div className="flex justify-center gap-3 mb-3">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-md bg-muted/20 text-muted-foreground hover:bg-primary-blue/10 hover:text-primary-blue transition-all duration-200"
              aria-label={link.name}
            >
              <link.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
        <div className="text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Deepayan Das</div>
      </SidebarFooter>

      <div className="md:hidden fixed top-4 right-4 z-50">
        <SidebarTrigger className="bg-background/80 backdrop-blur-sm border border-border/30" />
      </div>
    </Sidebar>
  )
}
