"use client"

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-secondary">
      {/* Background banner image */}
      <Image
        src="/images/hero-banner.jpg"
        alt=""
        fill
        className="object-cover opacity-30"
        priority
        aria-hidden="true"
      />

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/60" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-6 py-20 lg:flex-row lg:gap-16">
        {/* Left: Text content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="animate-fade-in-up">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <span className="inline-block h-2 w-2 animate-pulse-dot rounded-full bg-primary" />
              Senior AI/ML Engineer @ Optum
            </div>
          </div>

          <h1 className="animate-fade-in-up animate-delay-100 text-balance text-4xl font-bold leading-tight tracking-tight text-secondary-foreground md:text-5xl lg:text-6xl">
            Jagdeep Kaur
          </h1>

          <p className="animate-fade-in-up animate-delay-200 mt-5 max-w-xl text-pretty text-base leading-relaxed text-secondary-foreground/70 lg:text-lg">
            Inventor of{" "}
            <span className="font-semibold text-primary">Verity.AI</span> &mdash; building
            agentic AI systems, programmatic evaluation frameworks, and AI security
            layers. Patent holder with 6+ years at{" "}
            <span className="font-semibold text-secondary-foreground/90">Adobe</span>,{" "}
            <span className="font-semibold text-secondary-foreground/90">Optum</span> &amp;{" "}
            <span className="font-semibold text-secondary-foreground/90">MakeMyTrip</span>.
          </p>

          <p className="animate-fade-in-up animate-delay-200 mt-3 max-w-xl text-pretty text-sm leading-relaxed text-secondary-foreground/50 italic">
            Deeply interested in AI safety research, agent reliability, and building trustworthy AI systems
            that can be rigorously evaluated through programmatic methods.
          </p>

          {/* CTA buttons */}
          <div className="animate-fade-in-up animate-delay-300 mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              View My Work
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-lg border border-secondary-foreground/20 bg-secondary-foreground/5 px-6 py-3 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary-foreground/10"
            >
              <Mail className="h-4 w-4" />
              Get in Touch
            </a>
          </div>

          {/* Social row */}
          <div className="animate-fade-in-up animate-delay-400 mt-6 flex items-center justify-center gap-4 lg:justify-start">
            <a
              href="https://github.com/jagdeep1001"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-foreground/40 transition-colors hover:text-primary"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/jagdeep-kaur-30b604188/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-foreground/40 transition-colors hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:jagdeepk782@gmail.com"
              className="text-secondary-foreground/40 transition-colors hover:text-primary"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Stats row */}
          <div className="animate-fade-in-up animate-delay-500 mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { value: "6+", label: "Years Experience" },
              { value: "Patent", label: "Filed (Verity.AI)" },
              { value: "1300+", label: "Test Plans Generated" },
              { value: "3", label: "Top Companies" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-secondary-foreground/10 bg-secondary-foreground/5 px-3 py-3 text-center"
              >
                <div className="text-xl font-bold text-primary md:text-2xl">{stat.value}</div>
                <div className="mt-0.5 text-xs text-secondary-foreground/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Profile photo */}
        <div className="animate-fade-in-up animate-delay-300 flex shrink-0 items-center justify-center">
          <div className="relative">
            {/* Decorative ring */}
            <div className="absolute -inset-3 rounded-full border-2 border-dashed border-primary/20 animate-[spin_20s_linear_infinite]" />
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-primary/30 shadow-2xl md:h-72 md:w-72 lg:h-80 lg:w-80">
              <Image
                src="/images/jagdeep.jpg"
                alt="Jagdeep Kaur - Senior AI/ML Engineer"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -right-2 bottom-6 rounded-lg border border-primary/30 bg-secondary px-3 py-2 shadow-lg">
              <div className="text-xs font-bold text-primary">Patent Holder</div>
              <div className="text-[10px] text-secondary-foreground/50">Verity.AI @ Adobe</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
