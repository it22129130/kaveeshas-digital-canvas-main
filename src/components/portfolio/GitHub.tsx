import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Star, GitFork, ExternalLink } from "lucide-react";
import { GridPattern } from "@/components/magicui/GridPattern";

const repos = [
  { name: "Academic-Scheduler", desc: "Student management and timetable system.", lang: "React", color: "bg-cyan-400" },
  { name: "LearnLink", desc: "Skill sharing platform for students.", lang: "Java", color: "bg-orange-400" },
  { name: "Public-Health-System", desc: "Midwife & baby visits tracking.", lang: "JavaScript", color: "bg-yellow-400" },
];

export function GitHubSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section id="github" className="relative py-28 overflow-hidden">
      <GridPattern className="opacity-20" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 mb-4">
            GitHub
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Open source <span className="text-gradient">& code</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_2fr] gap-6">
          {/* Profile card */}
          <motion.a
            href="https://github.com/it22129130"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="group p-7 rounded-2xl bg-gradient-primary text-white shadow-glow hover:shadow-cyan hover:scale-[1.02] transition-all duration-300 block"
          >
            <div className="p-3 rounded-xl bg-white/10 w-fit">
              <Github className="h-8 w-8" />
            </div>
            <h3 className="mt-5 font-display font-bold text-xl">@it22129130</h3>
            <p className="text-sm opacity-80 mt-2 leading-relaxed">
              Visit my GitHub profile to explore all repositories, projects, and open source contributions.
            </p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-3 transition-all duration-300">
              View profile <ExternalLink className="h-4 w-4" />
            </span>
          </motion.a>

          {/* Repo cards */}
          <div className="grid sm:grid-cols-2 gap-4 content-start">
            {repos.map((r, i) => (
              <motion.a
                key={r.name}
                href="https://github.com/it22129130"
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.25 + i * 0.1, duration: 0.5 }}
                className="group p-5 rounded-2xl glass border border-white/8 hover-lift shimmer-overlay hover:border-primary/30"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Github className="h-4 w-4 text-muted-foreground" />
                  <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors duration-300 truncate">
                    {r.name}
                  </h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <span className={`h-2.5 w-2.5 rounded-full ${r.color}`} />
                    {r.lang}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5" /> —
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="h-3.5 w-3.5" /> —
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
