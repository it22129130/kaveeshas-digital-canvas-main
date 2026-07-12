import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Palette, Sparkles, Briefcase, Star, Users } from "lucide-react";
import { NumberTicker } from "@/components/magicui/NumberTicker";
import { GridPattern } from "@/components/magicui/GridPattern";

const highlights = [
  { icon: Code2, title: "Frontend Development", desc: "React, JavaScript, modern CSS & Tailwind", color: "text-violet-400", bg: "bg-violet-500/10 border-violet-500/20" },
  { icon: Palette, title: "UI/UX Design", desc: "Figma, wireframing, high-fidelity prototyping", color: "text-cyan-400", bg: "bg-cyan-500/10 border-cyan-500/20" },
  { icon: Sparkles, title: "Continuous Learner", desc: "Always exploring new tools, frameworks & ideas", color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
];

const stats = [
  { icon: Star, value: 7, suffix: "+", label: "Projects Built", color: "text-violet-400" },
  { icon: Briefcase, value: 1, suffix: "", label: "Internship", color: "text-cyan-400" },
  { icon: Users, value: 2, suffix: "", label: "Certifications", color: "text-emerald-400" },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <GridPattern className="opacity-40" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 mb-4">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-balance">
            Crafting clean,{" "}
            <span className="text-gradient">useful interfaces</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A bit about my background and what drives me to create.
          </p>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-6 mb-16">
          {stats.map(({ icon: Icon, value, suffix, label, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass border border-white/8 rounded-2xl p-6 text-center hover-lift gradient-border"
            >
              <Icon className={`h-6 w-6 mx-auto mb-3 ${color}`} />
              <div className={`text-3xl font-display font-bold ${color}`}>
                <NumberTicker value={value} suffix={suffix} />
              </div>
              <p className="text-sm text-muted-foreground mt-1">{label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-start">
          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5 text-muted-foreground leading-relaxed text-base"
          >
            <p>
              I am an enthusiastic undergraduate IT student at{" "}
              <span className="text-foreground font-semibold">SLIIT</span> with a strong
              passion for frontend development and UI/UX design. I enjoy creating
              responsive and visually appealing web applications using modern technologies
              like <span className="text-primary font-medium">React</span> and JavaScript.
            </p>
            <p>
              During my internship as a{" "}
              <span className="text-foreground font-semibold">UI/UX Designer at Gamage Recruiters</span>,
              I gained hands-on experience designing real-world interfaces, creating
              wireframes and prototypes using Figma, and collaborating with developers to
              bring designs to life.
            </p>
            <p>
              I'm passionate about{" "}
              <span className="text-primary font-medium">continuous learning</span> and
              building innovative digital solutions that genuinely improve user experience.
              Currently exploring cloud technologies (Azure, AWS) and modern animation
              libraries.
            </p>

            {/* Status badge */}
            <div className="pt-2 flex items-center gap-3">
              <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                </span>
                Open to internships & full-time roles
              </div>
            </div>
          </motion.div>

          {/* Highlight cards */}
          <div className="space-y-4">
            {highlights.map(({ icon: Icon, title, desc, color, bg }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group p-5 rounded-2xl glass border border-white/8 shimmer-overlay hover-lift"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-2.5 rounded-xl border ${bg} shrink-0`}>
                    <Icon className={`h-5 w-5 ${color}`} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">{title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
