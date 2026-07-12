import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/8 py-12 overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-primary/3 to-transparent pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#home" className="font-display font-bold text-xl">
              <span className="text-gradient">KM</span>
              <span className="text-foreground/40">.</span>
            </a>
            <p className="text-xs text-muted-foreground">
              Made with{" "}
              <Heart className="inline h-3 w-3 text-red-400 fill-red-400 mx-0.5" />
              in Sri Lanka
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-3">
            {[
              { href: "https://github.com/it22129130", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/kaveesha-maharambage-1810a7281", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:maharabagekaweesha@gmail.com", icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="p-2.5 rounded-full glass border border-white/8 text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          {/* Copyright + back to top */}
          <div className="flex items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Kaveesha Maharambage
            </p>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-full glass border border-white/8 text-muted-foreground hover:text-primary hover:border-primary/40 hover:-translate-y-1 hover:shadow-glow transition-all duration-300"
            >
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
