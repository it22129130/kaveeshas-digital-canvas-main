import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display font-bold">
            <span className="text-gradient">Kaveesha Maharambage</span>
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            © {new Date().getFullYear()} — Designed & built with <Heart className="inline h-3 w-3 text-primary" /> in Sri Lanka.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://github.com/it22129130" target="_blank" rel="noreferrer" className="p-2.5 rounded-full border border-border hover:bg-secondary transition-smooth" aria-label="GitHub"><Github className="h-4 w-4" /></a>
          <a href="https://www.linkedin.com/in/kaveesha-maharambage-1810a7281" target="_blank" rel="noreferrer" className="p-2.5 rounded-full border border-border hover:bg-secondary transition-smooth" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
          <a href="mailto:maharabagekaweesha@gmail.com" className="p-2.5 rounded-full border border-border hover:bg-secondary transition-smooth" aria-label="Email"><Mail className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}
