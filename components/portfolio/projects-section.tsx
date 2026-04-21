"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { ExternalLink, Github, Star, Bot, Shield, TestTubes, Code2, Image, Wrench } from "lucide-react"

const projects = [
  {
    title: "Verity.AI",
    subtitle: "Generative AI Platform -- Patent Filed",
    icon: Star,
    featured: true,
    problem:
      "Engineering teams spend weeks manually writing test plans, test cases, and automation scripts from JIRA stories and Figma designs -- slowing release cycles across Adobe.",
    approach:
      "Invented and led development of a generative AI platform that creates application code, test plans, and automation scripts directly from JIRA stories, Figma designs, and wiki documents. Leveraged LangChain, AWS Bedrock, and OpenAI APIs for contextual generation.",
    impact:
      "Generated 1300+ test plans, 2000+ test cases, and 1400+ automation scenarios in a single week. Adopted across Adobe engineering teams globally. Filed patent for the novel approach.",
    tools: ["LangChain", "AWS Bedrock", "OpenAI", "Python", "FastAPI", "Streamlit"],
    links: { github: "https://github.com/jagdeep1001" },
  },
  {
    title: "Agentic AI System (Optum)",
    subtitle: "Multi-Agent Orchestration with LangGraph",
    icon: Bot,
    featured: true,
    problem:
      "Complex enterprise tasks require dynamic collaboration between specialized AI capabilities -- static pipelines can't adapt to contextual inputs.",
    approach:
      "Designed and implemented an agentic AI system leveraging LangGraph, orchestrating multiple specialized AI agents for dynamic collaboration. Built intelligent task routing, decision-making, and dynamic agent composition.",
    impact:
      "Enabled scalable multi-agent workflows that optimize automation and significantly reduce manual intervention across Optum engineering teams.",
    tools: ["LangGraph", "Python", "Agentic AI", "LLMs", "Multi-Agent Systems"],
    links: {},
  },
  {
    title: "Programmatic Evaluation Frameworks",
    subtitle: "First-of-its-kind AI Testing -- No LLM Judges",
    icon: TestTubes,
    featured: true,
    problem:
      "Evaluating AI agent outputs using LLM-based judges introduces bias, inconsistency, and circular reasoning -- organizations can't trust AI grading AI.",
    approach:
      "Developed first-of-its-kind programmatic evaluation frameworks that rigorously measure correctness, reliability, and efficiency of agent outputs through deterministic, code-based testing suites -- completely eliminating dependency on LLM-based judges.",
    impact:
      "Established a new standard for AI evaluation at Optum: objective, repeatable, and auditable agent testing that scales across all agentic workflows.",
    tools: ["Python", "Deep-Evals", "Langfuse", "Statistical Testing", "CI/CD"],
    links: {},
  },
  {
    title: "AI Security Layer",
    subtitle: "Prompt Injection & Threat Detection",
    icon: Shield,
    featured: true,
    problem:
      "LLM applications are vulnerable to prompt injection, model manipulation, and adversarial inputs -- real-time defenses are critical for enterprise deployment.",
    approach:
      "Developed an AI Security Layer using Hugging Face Transformers for real-time input-output scanning, threat scoring, and response sanitization to detect and prevent prompt injection and model manipulation threats.",
    impact:
      "Secured LLM interactions across Optum's agentic AI systems, preventing adversarial attacks while maintaining response quality and latency requirements.",
    tools: ["Hugging Face", "Transformers", "Python", "Threat Scoring", "Real-time Scanning"],
    links: {},
  },
  {
    title: "UnitCrafter & AutoHeal",
    subtitle: "AI-Powered Developer Productivity Tools",
    icon: Wrench,
    featured: false,
    problem:
      "Low unit test coverage on critical services and flaky automation tests from broken locators drain engineering time.",
    approach:
      "Built UnitCrafter to generate unit tests at pull-request level achieving >80% coverage. Built AutoHeal as a self-healing engine that fixes broken locators in automation scripts automatically.",
    impact:
      "Achieved >80% unit test coverage on critical services. Significantly cut flaky test failures, saving hours of debugging per sprint.",
    tools: ["Python", "AST Parsing", "LLMs", "Selenium", "CI/CD"],
    links: {},
  },
  {
    title: "Image-to-HTML Generator",
    subtitle: "Visual Input to Production Code",
    icon: Image,
    featured: false,
    problem:
      "Developers manually convert design mockups and images into HTML code, wasting time on repetitive coding tasks.",
    approach:
      "Designed an AI system to generate HTML directly from images using vision models, integrated into Adobe's email workflow pipeline.",
    impact:
      "Enhanced developer speed and eliminated repetitive coding tasks in Adobe's email production workflow.",
    tools: ["Vision Models", "HTML/CSS", "Python", "Adobe Workflow"],
    links: {},
  },
]

export function ProjectsSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section id="projects" ref={ref} className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            AI/ML Innovations
          </div>
          <h2 className="text-balance text-3xl font-bold text-secondary md:text-4xl">
            What I&apos;ve Built
          </h2>
          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-foreground/70">
            From inventing Verity.AI at Adobe to building AI safety infrastructure at Optum --
            each project tackles a real engineering challenge with AI-first solutions.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`group flex flex-col overflow-hidden rounded-2xl border transition-all duration-500 hover:shadow-xl ${
                project.featured ? "border-primary/20" : "border-border"
              } ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              } ${project.featured ? "md:col-span-1" : ""}`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              {/* Header */}
              <div
                className={`flex items-center gap-3 px-6 py-4 ${
                  project.featured ? "bg-secondary" : "bg-muted"
                }`}
              >
                <project.icon
                  className={`h-5 w-5 ${
                    project.featured ? "text-primary" : "text-muted-foreground"
                  }`}
                />
                <div className="flex-1">
                  <h3
                    className={`text-sm font-bold ${
                      project.featured ? "text-secondary-foreground" : "text-secondary"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`text-xs ${
                      project.featured ? "text-secondary-foreground/60" : "text-muted-foreground"
                    }`}
                  >
                    {project.subtitle}
                  </p>
                </div>
                {project.featured && (
                  <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs font-bold text-primary">
                    Featured
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col bg-card p-6">
                <div className="flex flex-col gap-4">
                  <div>
                    <h4 className="mb-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                      Problem
                    </h4>
                    <p className="text-sm leading-relaxed text-foreground/70">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="mb-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                      Approach
                    </h4>
                    <p className="text-sm leading-relaxed text-foreground/70">{project.approach}</p>
                  </div>
                  <div>
                    <h4 className="mb-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                      Impact
                    </h4>
                    <p className="text-sm leading-relaxed text-foreground/70">{project.impact}</p>
                  </div>
                </div>

                <div className="mt-auto pt-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-md bg-secondary/5 px-2 py-0.5 text-xs font-medium text-secondary"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-secondary"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
