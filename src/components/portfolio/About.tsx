import { Section } from "./Section";
import { Sparkles, Code2, Palette } from "lucide-react";

export function About() {
  return (
    <Section id="about" eyebrow="About Me" title="Crafting clean, useful interfaces" description="A bit about my background and what drives me.">
      <div className="grid md:grid-cols-[1.3fr_1fr] gap-10">
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            I am an enthusiastic undergraduate IT student at <span className="text-foreground font-medium">SLIIT</span> with a strong passion for frontend
            development and UI/UX design. I enjoy creating responsive and visually appealing web applications using modern
            technologies like React and JavaScript.
          </p>
          <p>
            During my internship as a UI/UX Designer, I gained hands-on experience designing real-world interfaces, creating
            wireframes and prototypes using Figma, and collaborating with developers.
          </p>
          <p>
            I'm passionate about continuous learning and building innovative digital solutions that improve user experience.
          </p>
        </div>
        <div className="grid sm:grid-cols-1 gap-4">
          {[
            { icon: Code2, title: "Frontend Development", desc: "React, JavaScript, modern CSS" },
            { icon: Palette, title: "UI/UX Design", desc: "Figma, wireframing, prototyping" },
            { icon: Sparkles, title: "Continuous Learner", desc: "Always exploring new tools & ideas" },
          ].map((item) => (
            <div key={item.title} className="p-5 rounded-2xl bg-card border border-border shadow-soft hover-lift">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-gradient-primary text-primary-foreground">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
