import { Section } from "./Section";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <div className="relative pl-8 border-l-2 border-border">
        <div className="absolute -left-[11px] top-0 h-5 w-5 rounded-full bg-gradient-primary shadow-glow" />
        <div className="p-6 md:p-8 rounded-2xl bg-card border border-border shadow-soft hover-lift">
          <div className="flex items-start justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-secondary">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">UI/UX Designer Intern</h3>
                <p className="text-sm text-muted-foreground">Gamage Recruiters</p>
              </div>
            </div>
            <span className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground">Internship</span>
          </div>
          <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
            {[
              "Designed web and mobile interfaces for real client projects",
              "Created wireframes and high-fidelity UI designs using Figma",
              "Collaborated closely with developers for smooth implementation",
              "Focused on usability, accessibility, and modern user experience",
            ].map((line) => (
              <li key={line} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
