"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { Award, FileText, Trophy, GraduationCap, Medal, Rocket } from "lucide-react"

const achievements = [
  {
    icon: FileText,
    type: "Patent",
    title: "Patent Filed -- Verity.AI",
    desc: "Patent filed for invention titled 'Utilizing Machine Learning Models to Generate Digital Test Plans and Scripts for Integrating Project Development Files Within Computer Systems'.",
  },
  {
    icon: Award,
    type: "Recognition",
    title: "Special Contribution Award -- Verity.AI",
    desc: "Recognized for exceptional contribution in building and scaling Verity.AI across Adobe engineering teams globally.",
  },
  {
    icon: Trophy,
    type: "Performance",
    title: "Employee of the Month (x2)",
    desc: "Awarded Employee of the Month in January 2021 and October 2022 for outstanding performance and impact.",
  },
  {
    icon: Medal,
    type: "Performance",
    title: "Ace Performer of Quarter 1, 2022",
    desc: "Recognized as the top performer for Q1 2022 for delivering critical automation infrastructure.",
  },
  {
    icon: GraduationCap,
    type: "Certification",
    title: "Oracle Cloud Certifications",
    desc: "Oracle Certified Cloud Operations Associate (2020-2022) and Oracle Cloud Infrastructure Developer Associate (2020-2022).",
  },
  {
    icon: GraduationCap,
    type: "Education",
    title: "Data Science Specialization",
    desc: "Completed Data Science Specialization by University of Michigan (2020). Strong foundation in statistical methods and ML.",
  },
  {
    icon: Rocket,
    type: "Competition",
    title: "Smart India Hackathon 2020",
    desc: "Selected for Smart India Hackathon 2020 -- a prestigious national-level competition for innovative tech solutions.",
  },
  {
    icon: GraduationCap,
    type: "Academic",
    title: "B.Tech CS -- CGPA 9.4/10",
    desc: "Chitkara University, Punjab (2017-2021). Matriculation: 10/10 CGPA. High School: 92% CBSE.",
  },
]

export function AchievementsSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section id="achievements" ref={ref} className="bg-card py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Awards & Achievements
          </div>
          <h2 className="text-balance text-3xl font-bold text-secondary md:text-4xl">
            Recognition & Certifications
          </h2>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {achievements.map((item, i) => (
            <div
              key={item.title}
              className={`flex items-start gap-4 rounded-xl border border-border bg-background p-5 transition-all duration-500 hover:border-primary/20 hover:shadow-md ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${(i + 1) * 80}ms` }}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="mb-1 text-xs font-bold uppercase tracking-wider text-primary">
                  {item.type}
                </div>
                <h3 className="font-bold text-secondary">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-foreground/60">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
