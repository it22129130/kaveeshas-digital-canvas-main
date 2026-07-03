import { Github, Linkedin, ArrowRight, Mail, Download } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-hero pt-32 pb-24">
      {/* Decorative blobs */}
      <div aria-hidden className="absolute top-20 -left-20 w-72 h-72 rounded-full bg-primary/20 blur-3xl animate-blob" />
      <div aria-hidden className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary-glow/20 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-[1.4fr_1fr] gap-12 items-center">
        <div className="animate-fade-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-balance">
            Hi, I'm <span className="text-gradient">Kaveesha</span>
            <br /> Maharambage
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl animate-fade-in" style={{ animationDelay: "120ms" }}>
            Undergraduate IT Student · Frontend Developer · UI/UX Designer.
            Passionate about building user-friendly and modern web applications.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 animate-fade-in" style={{ animationDelay: "220ms" }}>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-elegant hover:shadow-glow hover:scale-[1.02] transition-smooth"
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card text-foreground font-medium hover:bg-secondary hover:-translate-y-0.5 transition-smooth"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </a>
            <a
              href="/documents/Kaveesha_Maharambage_CV_2026.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-foreground/80 hover:text-primary hover:-translate-y-0.5 transition-smooth"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 animate-fade-in" style={{ animationDelay: "320ms" }}>
            <a
              href="https://github.com/it22129130"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:bg-secondary hover:-translate-y-0.5 transition-smooth shadow-soft"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/kaveesha-maharambage-1810a7281"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:bg-secondary hover:-translate-y-0.5 transition-smooth shadow-soft"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:maharabagekaweesha@gmail.com"
              className="p-3 rounded-full bg-card border border-border hover:bg-secondary hover:-translate-y-0.5 transition-smooth shadow-soft"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Avatar card */}
        <div className="relative animate-fade-in mx-auto md:mx-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80 group">
            <div className="absolute inset-0 rounded-3xl bg-gradient-primary blur-2xl opacity-40 animate-float" />
            <div className="relative w-full h-full rounded-3xl bg-card border border-border shadow-elegant overflow-hidden animate-float transition-smooth group-hover:scale-[1.02]">
              <img
                src="/images/profile.png"
                alt="Kaveesha Maharambage"
                className="w-full h-full object-cover transition-smooth group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent p-5">
                <p className="font-display text-white font-semibold">Kaveesha Maharambage</p>
                <p className="text-xs text-white/85 mt-1">SLIIT · Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
