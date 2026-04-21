"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { Shield, Cpu, Network, BarChart3, Lock, Zap } from "lucide-react"

const researchAreas = [
  {
    icon: Shield,
    title: "AI Safety & Security",
    desc: "Building AI security layers with Hugging Face Transformers for real-time threat detection, prompt injection prevention, and response sanitization in LLM applications.",
    tags: ["Prompt Injection", "Threat Scoring", "Response Sanitization"],
    featured: true,
  },
  {
    icon: BarChart3,
    title: "Programmatic Evaluations",
    desc: "First-of-its-kind evaluation frameworks that measure correctness, reliability, and efficiency of agent outputs through deterministic code-based testing -- eliminating LLM-judge dependency.",
    tags: ["Deep-Evals", "Langfuse", "Deterministic Testing"],
    featured: true,
  },
  {
    icon: Network,
    title: "Agentic AI & Multi-Agent Systems",
    desc: "Designing enterprise-scale agent architectures with LangGraph for intelligent task routing, dynamic agent composition, and multi-agent collaboration workflows.",
    tags: ["LangGraph", "Task Routing", "Agent Composition"],
    featured: true,
  },
  {
    icon: Cpu,
    title: "LLM Fine-tuning & Optimization",
    desc: "Fine-tuning large language models with LoRA and QLoRA for domain-specific tasks, improving accuracy while reducing token cost and compute requirements.",
    tags: ["LoRA", "QLoRA", "Domain Adaptation"],
    featured: false,
  },
  {
    icon: Zap,
    title: "Generative AI for DevTools",
    desc: "Building AI-powered developer productivity tools -- from code generation (Verity.AI) to self-healing automation (AutoHeal) and AI-driven unit testing (UnitCrafter).",
    tags: ["Verity.AI", "UnitCrafter", "AutoHeal"],
    featured: false,
  },
  {
    icon: Lock,
    title: "RAG & Contextual AI",
    desc: "Leveraging LangChain, AWS Bedrock, and vector databases (Qdrant, FAISS) for contextual code and test generation from design artifacts, JIRA stories, and documentation.",
    tags: ["RAG", "Qdrant", "FAISS", "LangChain"],
    featured: false,
  },
]

export function ResearchSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section id="research" ref={ref} className="bg-card py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Research & Focus Areas
          </div>
          <h2 className="text-balance text-3xl font-bold text-secondary md:text-4xl">
            Deep Expertise Across AI/ML
          </h2>
          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-foreground/70">
            My work spans agent safety, programmatic evaluations, and building production-grade
            AI systems. Each area connects to a single mission: making AI trustworthy at scale.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {researchAreas.map((area, i) => (
            <div
              key={area.title}
              className={`group rounded-xl border bg-background p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${
                area.featured ? "border-primary/30 animate-glow" : "border-border"
              } ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              {area.featured && (
                <div className="mb-3 inline-block rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                  Core Focus
                </div>
              )}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/5 transition-colors group-hover:bg-primary/10">
                <area.icon className="h-6 w-6 text-secondary transition-colors group-hover:text-primary" />
              </div>
              <h3 className="text-lg font-bold text-secondary">{area.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/60">{area.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {area.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
