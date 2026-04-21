"use client"

import { useState } from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import {
  Bot,
  Shield,
  Sparkles,
  GraduationCap,
  FlaskConical,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

const cards = [
  {
    icon: FlaskConical,
    title: "AI Safety Researcher",
    desc: "Passionate about building rigorous evaluation methods for AI systems. Developed programmatic eval frameworks that measure correctness, reliability, and efficiency without relying on LLM-based judges.",
    color: "bg-red-500/10 text-red-500",
  },
  {
    icon: Bot,
    title: "Agentic AI Architect",
    desc: "Designing multi-agent workflows with LangGraph -- orchestrating specialized AI agents for dynamic task routing, decision-making, and intelligent collaboration at enterprise scale.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Shield,
    title: "AI Security Builder",
    desc: "Built an AI Security Layer using Hugging Face Transformers to detect prompt injection and model manipulation threats through real-time input-output scanning and threat scoring.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Sparkles,
    title: "Patent Holder",
    desc: "Filed patent for Verity.AI's novel approach to ML-driven test plan and script generation from project artifacts like JIRA stories, Figma designs, and wiki documents.",
    color: "bg-amber-500/10 text-amber-500",
  },
  {
    icon: GraduationCap,
    title: "CS Graduate -- 9.4 CGPA",
    desc: "B.Tech in Computer Science from Chitkara University. Oracle Certified (Java SE8, Database SQL). Data Science and ML specialization with strong academic foundation.",
    color: "bg-secondary/10 text-secondary",
  },
]

export function AboutSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()
  const [currentCard, setCurrentCard] = useState(0)

  const prev = () => setCurrentCard((c) => (c === 0 ? cards.length - 1 : c - 1))
  const next = () => setCurrentCard((c) => (c === cards.length - 1 ? 0 : c + 1))

  return (
    <section id="about" ref={ref} className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            About Me
          </div>
          <h2 className="text-balance text-3xl font-bold text-secondary md:text-4xl">
            AI/ML Engineer &amp; Aspiring AI Safety Researcher
          </h2>
        </div>

        <div
          className={`mt-12 flex flex-col gap-12 lg:flex-row lg:items-start transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Left: Story */}
          <div className="flex-1 text-pretty leading-relaxed text-foreground/80">
            <p>
              I&apos;m Jagdeep Kaur, a Senior AI/ML Engineer at Optum (UnitedHealth Group) with over
              6 years of experience shipping production AI systems. My journey spans from building
              automation frameworks as a Software Engineer at MakeMyTrip to inventing{" "}
              <span className="font-semibold text-primary">Verity.AI</span> at Adobe &mdash; a generative
              AI platform adopted globally across engineering teams.
            </p>
            <p className="mt-5">
              Today, I focus on what I believe is the most critical frontier in AI:{" "}
              <span className="font-semibold text-secondary">agent reliability and safety</span>. At
              Optum, I architect agentic AI systems using LangGraph, build first-of-its-kind{" "}
              <span className="font-semibold text-primary">programmatic evaluation frameworks</span>{" "}
              that eliminate dependency on LLM-based judges, and develop AI security layers that
              detect prompt injection and model manipulation threats in real-time.
            </p>

            {/* Research Interest callout */}
            <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-5">
              <div className="flex items-center gap-2 text-sm font-bold text-primary">
                <FlaskConical className="h-4 w-4" />
                Research Interest
              </div>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                I am deeply interested and dedicated to transitioning into AI research, with a
                particular focus on reliability and safety of AI systems. On a personal level, I
                actively research AI hallucination reduction techniques and the evaluation of
                non-deterministic outputs &mdash; exploring how we can build more trustworthy and
                dependable AI that people can truly rely on.
              </p>
            </div>

            <p className="mt-5">
              I hold a B.Tech in Computer Science from Chitkara University (CGPA: 9.4/10), am Oracle
              Certified in Java SE8 and Database SQL, and have a filed patent for my invention at
              Adobe. My work sits at the intersection of building powerful AI agents and ensuring they
              are trustworthy, safe, and reliable.
            </p>
          </div>

          {/* Right: Carousel */}
          <div className="w-full lg:w-96 shrink-0">
            <div className="relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm">
              {/* Card content */}
              <div className="min-h-[180px]">
                {cards.map((card, i) => {
                  const CardIcon = card.icon
                  return (
                    <div
                      key={card.title}
                      className={`transition-all duration-500 ${
                        i === currentCard
                          ? "relative opacity-100 translate-x-0"
                          : "absolute inset-0 opacity-0 translate-x-8 pointer-events-none"
                      }`}
                    >
                      <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${card.color}`}>
                        <CardIcon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-bold text-secondary">{card.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-foreground/60">{card.desc}</p>
                    </div>
                  )
                })}
              </div>

              {/* Navigation */}
              <div className="mt-6 flex items-center justify-between">
                <div className="flex gap-1.5">
                  {cards.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentCard(i)}
                      className={`h-2 rounded-full transition-all ${
                        i === currentCard ? "w-6 bg-primary" : "w-2 bg-muted-foreground/20"
                      }`}
                      aria-label={`Go to card ${i + 1}`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-foreground/60 transition-colors hover:bg-muted hover:text-foreground"
                    aria-label="Previous card"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={next}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-foreground/60 transition-colors hover:bg-muted hover:text-foreground"
                    aria-label="Next card"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Quick stats under carousel */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-border bg-card p-3 text-center">
                <div className="text-lg font-bold text-primary">6+</div>
                <div className="text-xs text-muted-foreground">Years Experience</div>
              </div>
              <div className="rounded-lg border border-border bg-card p-3 text-center">
                <div className="text-lg font-bold text-primary">3</div>
                <div className="text-xs text-muted-foreground">Companies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
