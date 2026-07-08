import { Section } from "./Section";
import { ArrowUpRight, FolderGit2 } from "lucide-react";

const projects = [
  { title: "Academic Scheduler System", desc: "Student management and timetable system.", tech: ["React", "Material UI", ".NET Core"] },
  { title: "LearnLink – Skill Sharing", desc: "Platform connecting students and instructors.", tech: ["React", "Spring Boot"] },
  { title: "Public Health Information System", desc: "Midwife management, baby visits and stock tracking.", tech: ["React", "Node.js", "Express", "MongoDB"] },
  { title: "Online Bidding System", desc: "Auction platform with built-in contact system.", tech: ["HTML", "CSS", "JS", "Bootstrap", "Java", "MySQL"] },
  { title: "Bake 'N Take UI Redesign", desc: "Improved UI/UX and full responsive redesign.", tech: ["Figma"] },
  { title: "To-Do List Mobile App", desc: "Task management app with full CRUD.", tech: ["Kotlin", "SQLite"] },
  { title: "Tic Tac Toe Mobile Game", desc: "Interactive mobile game built natively.", tech: ["Kotlin"] },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built"
      description="A selection of academic, personal and design projects."
      className="bg-secondary/40"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className="group p-6 rounded-2xl bg-card border border-border shadow-soft hover-lift relative overflow-hidden"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-20 blur-2xl transition-smooth" />
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-xl bg-secondary">
                <FolderGit2 className="h-5 w-5 text-primary" />
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-smooth" />
            </div>
            <h3 className="mt-5 font-semibold text-lg">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
