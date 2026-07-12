import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";
import { ShineBorder } from "@/components/magicui/ShineBorder";

const bullets = [
  "Designed web and mobile interfaces for real client projects",
  "Created wireframes and high-fidelity UI designs using Figma",
  "Collaborated closely with developers for smooth implementation",
  "Focused on usability, accessibility, and modern user experience",
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section id="experience" className="relative py-28 overflow-hidden">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none"
      />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 mb-4">
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Where I've <span className="text-gradient">worked</span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto pl-8">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 h-full w-px">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="h-full bg-gradient-to-b from-primary via-primary/50 to-transparent origin-top"
            />
          </div>

          {/* Timeline dot */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="absolute -left-[10px] top-6 w-5 h-5 rounded-full bg-primary shadow-glow ring-4 ring-background"
          />

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <ShineBorder
              borderRadius={20}
              duration={6}
              color={["#8b5cf6", "#06b6d4", "#34d399"]}
            >
              <div className="p-7 md:p-9 rounded-2xl glass border border-white/8">
                {/* Header */}
                <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-foreground">
                        UI/UX Designer Intern
                      </h3>
                      <p className="text-primary font-medium text-sm mt-0.5">
                        Gamage Recruiters
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-semibold">
                      Internship
                    </span>
                    <span className="text-xs text-muted-foreground">Sri Lanka</span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-3">
                  {bullets.map((line, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                      className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      {line}
                    </motion.li>
                  ))}
                </ul>

                {/* Tools used */}
                <div className="mt-6 pt-6 border-t border-white/8 flex flex-wrap gap-2">
                  {["Figma", "UI Design", "UX Research", "Prototyping", "Wireframing", "Collaboration"].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-secondary border border-white/8 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ShineBorder>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
