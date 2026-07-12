import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FolderGit2, ArrowUpRight, Globe, Smartphone, Monitor } from "lucide-react";

const projects = [
  {
    title: "Academic Scheduler System",
    desc: "Student management and timetable scheduling system with admin dashboard.",
    tech: ["React", "Material UI", ".NET Core"],
    category: "Frontend",
    icon: Monitor,
    color: "from-violet-500/20 to-purple-500/5",
    border: "hover:border-violet-500/40",
    glow: "hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.4)]",
    link: "https://github.com/lasinduSemasingha/Academic_Schedular",
  },
  {
    title: "LearnLink – Skill Sharing",
    desc: "Platform connecting students and instructors for peer-to-peer learning.",
    tech: ["React", "Spring Boot"],
    category: "Frontend",
    icon: Globe,
    color: "from-cyan-500/20 to-blue-500/5",
    border: "hover:border-cyan-500/40",
    glow: "hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.4)]",
    link: "https://github.com/lasinduSemasingha/LearnLink",
  },
  {
    title: "Public Health Information System",
    desc: "Midwife management, baby visits tracking and medical stock system.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    category: "Frontend",
    icon: Monitor,
    color: "from-emerald-500/20 to-green-500/5",
    border: "hover:border-emerald-500/40",
    glow: "hover:shadow-[0_0_40px_-10px_rgba(52,211,153,0.4)]",
    link: "https://github.com/IT22025180/Public-Health-Care-System",
  },
  {
    title: "Online Bidding System",
    desc: "Full-featured auction platform with real-time bidding and contact system.",
    tech: ["HTML", "CSS", "JS", "Bootstrap", "Java", "MySQL"],
    category: "Frontend",
    icon: Globe,
    color: "from-orange-500/20 to-amber-500/5",
    border: "hover:border-orange-500/40",
    glow: "hover:shadow-[0_0_40px_-10px_rgba(249,115,22,0.3)]",
    link: "https://github.com/it22129130/Online-bidding-system",
  },
  {
    title: "Bake 'N Take UI Redesign",
    desc: "Complete UI/UX overhaul with improved user flows and responsive design.",
    tech: ["Figma"],
    category: "Design",
    icon: Monitor,
    color: "from-pink-500/20 to-rose-500/5",
    border: "hover:border-pink-500/40",
    glow: "hover:shadow-[0_0_40px_-10px_rgba(236,72,153,0.3)]",
    link: "https://www.figma.com/design/aNZtv63prvpfFKI8w7HNkU/HCI-Project?node-id=342-484&node-type=frame&t=ZxNH2GzrBnSKqPpj-0",
  },
  {
    title: "To-Do List Mobile App",
    desc: "Task management app with full CRUD operations and local persistence.",
    tech: ["Kotlin", "SQLite"],
    category: "Mobile",
    icon: Smartphone,
    color: "from-violet-500/20 to-indigo-500/5",
    border: "hover:border-violet-500/40",
    glow: "hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.4)]",
    link: "https://github.com/it22129130/Tic-Tac-Toe-Mobile-Game-Application",
  },
  {
    title: "Tic Tac Toe Mobile Game",
    desc: "Interactive two-player mobile game built natively for Android.",
    tech: ["Kotlin"],
    category: "Mobile",
    icon: Smartphone,
    color: "from-cyan-500/20 to-teal-500/5",
    border: "hover:border-cyan-500/40",
    glow: "hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.4)]",
    link: "https://github.com/it22129130/Tic-Tac-Toe-Mobile-Game-Application",
  },
];

const filters = ["All", "Frontend", "Mobile", "Design"];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });
  const [active, setActive] = useState("All");

  const filtered = projects.filter((p) => active === "All" || p.category === active);

  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div
        aria-hidden
        className="absolute inset-0 bg-dots opacity-30 pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
      />
      <div
        aria-hidden
        className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
      />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 mb-4">
            Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Things I've <span className="text-gradient">built</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            A selection of academic, personal and design projects.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex justify-center gap-2 mb-10"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === f
                  ? "bg-gradient-primary text-white shadow-glow"
                  : "glass border border-white/10 text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                key={p.title}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative block p-6 rounded-2xl glass border border-white/8 overflow-hidden cursor-pointer transition-all duration-500 ${p.border} ${p.glow}`}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="relative z-10">
                  {/* Top row */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                      <FolderGit2 className="h-5 w-5 text-primary" />
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>

                  {/* Tech tags */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground group-hover:border-primary/30 group-hover:text-foreground transition-all duration-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
