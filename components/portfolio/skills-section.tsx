"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const skillCategories = [
  {
    category: "Gen AI & LLMs",
    skills: [
      { name: "Prompt Engineering & RAG", level: 95 },
      { name: "LangChain & LangGraph", level: 95 },
      { name: "AWS Bedrock & OpenAI APIs", level: 90 },
      { name: "Fine-tuning (LoRA, QLoRA)", level: 88 },
      { name: "Agentic AI & Multi-Agent", level: 95 },
      { name: "Deep-Evals & Langfuse", level: 90 },
    ],
  },
  {
    category: "Machine Learning",
    skills: [
      { name: "Supervised & Unsupervised Learning", level: 90 },
      { name: "Reinforcement Learning", level: 82 },
      { name: "PyTorch & TensorFlow", level: 88 },
      { name: "Scikit-learn", level: 90 },
      { name: "Hugging Face Transformers", level: 92 },
    ],
  },
  {
    category: "Programming & Frameworks",
    skills: [
      { name: "Python", level: 95 },
      { name: "Java", level: 85 },
      { name: "FastAPI & Django", level: 90 },
      { name: "SQL & MySQL", level: 88 },
      { name: "Streamlit", level: 85 },
    ],
  },
  {
    category: "Data & Infrastructure",
    skills: [
      { name: "Pandas, NumPy, Matplotlib", level: 90 },
      { name: "Vector DBs (Qdrant, FAISS)", level: 88 },
      { name: "Kafka & RabbitMQ", level: 80 },
      { name: "Docker & CI/CD", level: 85 },
      { name: "AWS Cloud", level: 82 },
    ],
  },
]

export function SkillsSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section id="skills" ref={ref} className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Technical Skills
          </div>
          <h2 className="text-balance text-3xl font-bold text-secondary md:text-4xl">
            Tools & Technologies
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {skillCategories.map((cat, ci) => (
            <div
              key={cat.category}
              className={`rounded-xl border border-border bg-card p-6 transition-all duration-500 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${(ci + 1) * 120}ms` }}
            >
              <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-secondary">
                {cat.category}
              </h3>
              <div className="flex flex-col gap-4">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground/80">{skill.name}</span>
                      <span className="text-xs font-medium text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${(ci * 5 + si) * 80}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
