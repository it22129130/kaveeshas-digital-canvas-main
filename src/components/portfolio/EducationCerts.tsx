import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import { ShineBorder } from "@/components/magicui/ShineBorder";
import { GridPattern } from "@/components/magicui/GridPattern";

const education = [
  {
    school: "SLIIT",
    degree: "BSc (Hons) Information Technology",
    period: "2022 – Present",
    status: "In Progress",
    color: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  },
  {
    school: "ESOFT Metro Campus",
    degree: "Diploma in Information Technology",
    period: "Completed",
    status: "Completed",
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
];

const certs = [
  {
    name: "Introduction to Azure Virtual Machines",
    issuer: "Microsoft",
    year: "2025",
    image: "/images/certificate-azure.png",
    badge: "☁️",
    color: "from-blue-500/20 to-cyan-500/5",
    border: ["#3b82f6", "#06b6d4"],
  },
  {
    name: "AWS SimuLearn: Computing Solutions",
    issuer: "AWS Training & Certification",
    year: "2025",
    image: "/images/certificate-aws.png",
    badge: "🚀",
    color: "from-orange-500/20 to-amber-500/5",
    border: ["#f97316", "#fbbf24"],
  },
];

export function EducationCerts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section id="education" className="relative py-28 overflow-hidden">
      <GridPattern dots className="opacity-30" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 mb-4">
            Education & Certifications
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Learning <span className="text-gradient">journey</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 font-display font-bold text-xl mb-6"
            >
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </motion.h3>
            <div className="space-y-4">
              {education.map((e, i) => (
                <motion.div
                  key={e.school}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="group p-6 rounded-2xl glass border border-white/8 hover-lift shimmer-overlay"
                >
                  <div className="flex items-start justify-between gap-3 flex-wrap">
                    <div>
                      <h4 className="font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {e.school}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">{e.degree}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <span className="text-xs px-2.5 py-1 rounded-full bg-secondary border border-white/8 text-muted-foreground">
                        {e.period}
                      </span>
                      <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${e.color}`}>
                        {e.status}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 font-display font-bold text-xl mb-6"
            >
              <Award className="h-6 w-6 text-primary" />
              Certifications
            </motion.h3>
            <div className="grid grid-cols-2 gap-4">
              {certs.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
                >
                  <ShineBorder
                    borderRadius={16}
                    duration={6}
                    color={c.border}
                  >
                    <div className={`relative rounded-2xl glass overflow-hidden bg-gradient-to-br ${c.color}`}>
                      <img
                        src={c.image}
                        alt={c.name}
                        className="w-full h-auto object-cover opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1b0b2e]/95 via-[#1b0b2e]/30 to-transparent pointer-events-none" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-1">
                            <span className="text-xl">{c.badge}</span>
                            <Award className="h-4 w-4 text-primary" />
                          </div>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-secondary/90 text-muted-foreground backdrop-blur-md border border-white/10">
                            {c.year}
                          </span>
                        </div>
                        <h4 className="font-display font-bold mt-2 text-xs leading-snug text-white">
                          {c.name}
                        </h4>
                        <p className="text-[10px] text-white/70 mt-1 flex items-center gap-1">
                          {c.issuer}
                          <ExternalLink className="h-2.5 w-2.5" />
                        </p>
                      </div>
                    </div>
                  </ShineBorder>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
