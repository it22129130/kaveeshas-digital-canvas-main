import { Section } from "./Section";
import { Code, Layout, Server, Smartphone, Database, Palette } from "lucide-react";

const groups = [
  { icon: Code, title: "Programming", items: ["Java", "C", "C++", "Python", "JavaScript"] },
  { icon: Layout, title: "Frontend", items: ["React", "HTML", "CSS", "Bootstrap"] },
  { icon: Server, title: "Backend", items: ["Node.js", "PHP"] },
  { icon: Smartphone, title: "Mobile", items: ["Kotlin"] },
  { icon: Database, title: "Database", items: ["MySQL"] },
  { icon: Palette, title: "UI/UX", items: ["Figma"] },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools & technologies I use">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((g) => (
          <div key={g.title} className="p-6 rounded-2xl bg-card border border-border shadow-soft hover-lift">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-gradient-primary text-primary-foreground">
                <g.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold">{g.title}</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span key={s} className="px-3 py-1.5 rounded-full text-sm bg-secondary text-secondary-foreground border border-border hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
