"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { Building2, Briefcase, MapPin } from "lucide-react"

const experiences = [
  {
    role: "Senior AI/ML Engineer",
    org: "Optum (UnitedHealth Group)",
    location: "Gurgaon",
    period: "Aug 2025 -- Present",
    description:
      "Leading development of enterprise-scale agentic AI systems and AI safety infrastructure.",
    highlights: [
      "Designed and implemented an agentic AI system leveraging LangGraph, orchestrating multiple specialized AI agents to dynamically collaborate and solve complex tasks based on contextual inputs",
      "Developed first-of-its-kind programmatic evaluation frameworks to rigorously measure correctness, reliability, and efficiency of agent outputs -- eliminating dependency on LLM-based judges",
      "Developed an AI Security Layer using Hugging Face Transformers to detect and prevent prompt injection and model manipulation threats through real-time input-output scanning, threat scoring, and response sanitization",
      "Built scalable multi-agent workflows, enabling intelligent task routing, decision-making, and dynamic agent composition to optimize automation and reduce manual intervention",
    ],
    tags: ["LangGraph", "Agentic AI", "AI Safety", "Hugging Face", "Programmatic Evals"],
    featured: true,
  },
  {
    role: "Gen AI Specialist, Software Engineer II",
    org: "Adobe",
    location: "Noida",
    period: "Oct 2023 -- Jul 2025",
    description:
      "Invented Verity.AI and built AI-powered developer productivity tools adopted globally across Adobe engineering.",
    highlights: [
      "Invented and led development of Verity.AI -- a generative AI platform that creates code, test plans, and automation scripts directly from JIRA stories, Figma designs, and wiki docs. Adopted across Adobe engineering teams globally",
      "Achieved massive adoption: generated 1300+ test plans, 2000+ test cases, and 1400+ automation scenarios in a single week",
      "Filed a patent for Verity.AI's novel approach to AI-driven test plan and script generation",
      "Built UnitCrafter (AI unit test generator with >80% coverage) and AutoHeal (self-healing engine fixing broken locators in automation scripts)",
      "Designed an AI system to generate HTML directly from images, integrated into Adobe's email workflow",
      "Fine-tuned LLMs using LoRA and QLoRA for domain-specific test generation and contextual code suggestions",
    ],
    tags: ["Verity.AI", "LangChain", "AWS Bedrock", "LoRA/QLoRA", "Patent", "FastAPI", "Streamlit"],
    featured: true,
  },
  {
    role: "Software Engineer",
    org: "MakeMyTrip",
    location: "Gurgaon",
    period: "Jun 2020 -- Aug 2023",
    description:
      "Built automation frameworks, deployment tools, and led POC for GitHub Copilot adoption across QE.",
    highlights: [
      "Built automation frameworks in Karate, Rest Assured, Appium, and Selenium",
      "Designed and implemented a deployment application using Python and Django",
      "Conducted successful POC for GitHub Copilot, showcasing cutting-edge technologies in QE",
      "Managed critical merger projects (MakeMyTrip + IndiGo Airlines, MMT + GI), account deletion, and AWS migration",
      "Achieved extensive code coverage for integration tests using Jacoco, publishing to SonarQube",
      "Created Jenkins pipeline (Groovy script), reducing deployment time and enhancing software delivery",
    ],
    tags: ["Python", "Django", "Selenium", "Jenkins", "AWS", "CI/CD"],
    featured: false,
  },
]

export function ExperienceSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section id="experience" ref={ref} className="bg-card py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Career Journey
          </div>
          <h2 className="text-balance text-3xl font-bold text-secondary md:text-4xl">
            6+ Years of Impact
          </h2>
        </div>

        <div className="relative mt-14">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 hidden h-full w-px bg-border md:block" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <div
                key={exp.role + exp.org}
                className={`relative flex flex-col gap-4 transition-all duration-500 md:flex-row ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${(i + 1) * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="hidden md:block">
                  <div
                    className={`relative left-[0.5rem] top-2 h-4 w-4 rounded-full border-2 ${
                      exp.featured ? "border-primary bg-primary" : "border-muted-foreground/30 bg-card"
                    }`}
                  />
                </div>

                <div
                  className={`flex-1 rounded-xl border p-6 md:ml-8 ${
                    exp.featured ? "border-primary/20 bg-background animate-glow" : "border-border bg-background"
                  }`}
                >
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="text-lg font-bold text-secondary">{exp.role}</h3>
                      <div className="mt-1 flex flex-wrap items-center gap-3">
                        <span className="flex items-center gap-1.5 text-sm font-medium text-primary">
                          <Building2 className="h-3.5 w-3.5" />
                          {exp.org}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <span className="flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                      <Briefcase className="h-3 w-3" />
                      {exp.period}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">{exp.description}</p>

                  <ul className="mt-4 flex flex-col gap-2">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-foreground/70">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-primary/5 px-2.5 py-1 text-xs font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
