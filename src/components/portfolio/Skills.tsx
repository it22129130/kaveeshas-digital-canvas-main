import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Marquee } from "@/components/magicui/Marquee";

const skillGroups = [
  { name: "Java", color: "text-orange-400 border-orange-500/20 bg-orange-500/10" },
  { name: "JavaScript", color: "text-yellow-400 border-yellow-500/20 bg-yellow-500/10" },
  { name: "Python", color: "text-blue-400 border-blue-500/20 bg-blue-500/10" },
  { name: "React", color: "text-cyan-400 border-cyan-500/20 bg-cyan-500/10" },
  { name: "HTML", color: "text-orange-400 border-orange-500/20 bg-orange-500/10" },
  { name: "CSS", color: "text-blue-400 border-blue-500/20 bg-blue-500/10" },
  { name: "Tailwind", color: "text-sky-400 border-sky-500/20 bg-sky-500/10" },
  { name: "Bootstrap", color: "text-purple-400 border-purple-500/20 bg-purple-500/10" },
  { name: "Node.js", color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10" },
  { name: "PHP", color: "text-indigo-400 border-indigo-500/20 bg-indigo-500/10" },
  { name: "MySQL", color: "text-blue-400 border-blue-500/20 bg-blue-500/10" },
  { name: "MongoDB", color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10" },
  { name: "Kotlin", color: "text-violet-400 border-violet-500/20 bg-violet-500/10" },
  { name: "Figma", color: "text-pink-400 border-pink-500/20 bg-pink-500/10" },
  { name: "C", color: "text-gray-400 border-gray-500/20 bg-gray-500/10" },
  { name: "C++", color: "text-gray-400 border-gray-500/20 bg-gray-500/10" },
  { name: "Spring Boot", color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10" },
  { name: "Azure", color: "text-blue-400 border-blue-500/20 bg-blue-500/10" },
  { name: "AWS", color: "text-amber-400 border-amber-500/20 bg-amber-500/10" },
  { name: ".NET Core", color: "text-violet-400 border-violet-500/20 bg-violet-500/10" },
];

const first = skillGroups.slice(0, 10);
const second = skillGroups.slice(10);

function SkillTag({ name, color }: { name: string; color: string }) {
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold whitespace-nowrap mx-2 transition-transform duration-300 hover:scale-110 cursor-default ${color}`}>
      {name}
    </div>
  );
}

const categories = [
  { label: "Programming", items: ["Java", "C", "C++", "Python", "JavaScript"], emoji: "⚡" },
  { label: "Frontend", items: ["React", "HTML", "CSS", "Bootstrap", "Tailwind"], emoji: "🎨" },
  { label: "Backend", items: ["Node.js", "PHP", "Spring Boot", ".NET Core"], emoji: "⚙️" },
  { label: "Mobile", items: ["Kotlin"], emoji: "📱" },
  { label: "Database", items: ["MySQL", "MongoDB"], emoji: "🗄️" },
  { label: "Design", items: ["Figma"], emoji: "✨" },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 mb-4">
            Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Tools & <span className="text-gradient">technologies</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Technologies I work with every day</p>
        </motion.div>

        {/* Marquee rows */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative mb-4"
        >
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          <Marquee pauseOnHover repeat={2}>
            {first.map((s) => <SkillTag key={s.name} {...s} />)}
          </Marquee>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative mb-16"
        >
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          <Marquee reverse pauseOnHover repeat={2}>
            {second.map((s) => <SkillTag key={s.name} {...s} />)}
          </Marquee>
        </motion.div>

        {/* Category breakdown */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map(({ label, items, emoji }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
              className="group p-5 rounded-2xl glass border border-white/8 hover-lift shimmer-overlay"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">{emoji}</span>
                <h3 className="font-display font-semibold text-foreground">{label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-muted-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-200 cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
