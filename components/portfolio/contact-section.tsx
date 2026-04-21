"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { Mail, Linkedin, Github, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section id="contact" ref={ref} className="bg-secondary py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Get in Touch
          </div>
          <h2 className="text-balance text-3xl font-bold text-secondary-foreground md:text-4xl">
            {"Let's Connect"}
          </h2>
          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-secondary-foreground/60">
            Open to discussing AI/ML roles, research collaborations, speaking opportunities,
            or interesting projects in agentic AI and AI safety.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href="mailto:jagdeepk782@gmail.com"
            className="flex items-center gap-4 rounded-xl border border-secondary-foreground/10 bg-secondary-foreground/5 p-5 transition-all duration-300 hover:bg-secondary-foreground/10 hover:border-primary/30"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="text-xs font-medium text-secondary-foreground/50">Email</div>
              <div className="text-sm font-semibold text-secondary-foreground">
                jagdeepk782@gmail.com
              </div>
            </div>
          </a>

          <a
            href="tel:+918195976370"
            className="flex items-center gap-4 rounded-xl border border-secondary-foreground/10 bg-secondary-foreground/5 p-5 transition-all duration-300 hover:bg-secondary-foreground/10 hover:border-primary/30"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20">
              <Phone className="h-6 w-6 text-accent" />
            </div>
            <div>
              <div className="text-xs font-medium text-secondary-foreground/50">Phone</div>
              <div className="text-sm font-semibold text-secondary-foreground">
                +91-8195976370
              </div>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/jagdeep-kaur-30b604188/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-xl border border-secondary-foreground/10 bg-secondary-foreground/5 p-5 transition-all duration-300 hover:bg-secondary-foreground/10 hover:border-primary/30"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0077b5]/20">
              <Linkedin className="h-6 w-6 text-[#0077b5]" />
            </div>
            <div>
              <div className="text-xs font-medium text-secondary-foreground/50">LinkedIn</div>
              <div className="text-sm font-semibold text-secondary-foreground">
                Jagdeep Kaur
              </div>
            </div>
          </a>

          <a
            href="https://github.com/jagdeep1001"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-xl border border-secondary-foreground/10 bg-secondary-foreground/5 p-5 transition-all duration-300 hover:bg-secondary-foreground/10 hover:border-primary/30"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary-foreground/10">
              <Github className="h-6 w-6 text-secondary-foreground" />
            </div>
            <div>
              <div className="text-xs font-medium text-secondary-foreground/50">GitHub</div>
              <div className="text-sm font-semibold text-secondary-foreground">
                jagdeep1001
              </div>
            </div>
          </a>
        </div>

        {/* Location */}
        <div className="mt-10 flex items-center justify-center gap-2 text-sm text-secondary-foreground/40">
          <MapPin className="h-4 w-4" />
          <span>Gurgaon, India</span>
        </div>
      </div>
    </section>
  )
}
