import { Section } from "./Section";
import { Github, Star, GitFork, ExternalLink } from "lucide-react";

const repos = [
  { name: "Academic-Scheduler", desc: "Student management and timetable system.", lang: "React" },
  { name: "LearnLink", desc: "Skill sharing platform for students.", lang: "Java" },
  { name: "Public-Health-System", desc: "Midwife & baby visits tracking.", lang: "JavaScript" },
];

export function GitHubSection() {
  return (
    <Section id="github" eyebrow="GitHub" title="Open source & code">
      <div className="grid md:grid-cols-[1fr_2fr] gap-6">
        <a
          href="https://github.com/it22129130"
          target="_blank"
          rel="noreferrer"
          className="p-6 rounded-2xl bg-gradient-primary text-primary-foreground shadow-elegant hover-lift block"
        >
          <Github className="h-10 w-10" />
          <h3 className="mt-4 font-semibold text-lg">@it22129130</h3>
          <p className="text-sm opacity-90 mt-1">Visit my GitHub profile to explore all repositories.</p>
          <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium">
            View profile <ExternalLink className="h-4 w-4" />
          </span>
        </a>

        <div className="grid sm:grid-cols-2 gap-4">
          {repos.map((r) => (
            <a
              key={r.name}
              href="https://github.com/it22129130"
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-2xl bg-card border border-border shadow-soft hover-lift group"
            >
              <div className="flex items-center gap-2">
                <Github className="h-4 w-4 text-muted-foreground" />
                <h4 className="font-semibold text-sm group-hover:text-primary transition-smooth">{r.name}</h4>
              </div>
              <p className="text-sm text-muted-foreground mt-2">{r.desc}</p>
              <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-full bg-primary" />{r.lang}</span>
                <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5" /> —</span>
                <span className="flex items-center gap-1"><GitFork className="h-3.5 w-3.5" /> —</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
