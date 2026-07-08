import { useState } from "react";
import { Section } from "./Section";
import { Mail, Github, Linkedin, Send, MapPin } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Section id="contact" eyebrow="Contact" title="Let's work together" description="Have a project, role or just want to say hi? I'd love to hear from you.">
      <div className="grid md:grid-cols-[1fr_1.3fr] gap-8">
        <div className="space-y-4">
          <a href="mailto:maharabagekaweesha@gmail.com" className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border shadow-soft hover-lift">
            <div className="p-3 rounded-xl bg-gradient-primary text-primary-foreground"><Mail className="h-5 w-5" /></div>
            <div>
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="font-medium text-sm break-all">maharabagekaweesha@gmail.com</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/kaveesha-maharambage-1810a7281" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border shadow-soft hover-lift">
            <div className="p-3 rounded-xl bg-gradient-primary text-primary-foreground"><Linkedin className="h-5 w-5" /></div>
            <div>
              <p className="text-xs text-muted-foreground">LinkedIn</p>
              <p className="font-medium text-sm">Kaveesha Maharambage</p>
            </div>
          </a>
          <a href="https://github.com/it22129130" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border shadow-soft hover-lift">
            <div className="p-3 rounded-xl bg-gradient-primary text-primary-foreground"><Github className="h-5 w-5" /></div>
            <div>
              <p className="text-xs text-muted-foreground">GitHub</p>
              <p className="font-medium text-sm">@it22129130</p>
            </div>
          </a>
          <div className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border shadow-soft">
            <div className="p-3 rounded-xl bg-secondary"><MapPin className="h-5 w-5 text-primary" /></div>
            <div>
              <p className="text-xs text-muted-foreground">Location</p>
              <p className="font-medium text-sm">Sri Lanka</p>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            setTimeout(() => setSent(false), 4000);
          }}
          className="p-6 md:p-8 rounded-2xl bg-card border border-border shadow-soft space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-muted-foreground">Name</label>
              <input required className="mt-1.5 w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-smooth text-sm" placeholder="Your name" />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">Email</label>
              <input type="email" required className="mt-1.5 w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-smooth text-sm" placeholder="you@example.com" />
            </div>
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground">Subject</label>
            <input className="mt-1.5 w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-smooth text-sm" placeholder="What's this about?" />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground">Message</label>
            <textarea required rows={5} className="mt-1.5 w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-smooth text-sm resize-none" placeholder="Tell me a bit about your project..." />
          </div>
          <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-elegant hover:shadow-glow transition-smooth">
            {sent ? "Message sent ✓" : (<>Send message <Send className="h-4 w-4" /></>)}
          </button>
        </form>
      </div>
    </Section>
  );
}
