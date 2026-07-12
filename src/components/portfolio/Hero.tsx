import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, ArrowRight, Mail, Download, Sparkles, Palette } from "lucide-react";
import { Ripple } from "@/components/ui/ripple";

const roles = ["Frontend Developer", "UI/UX Designer", "React Specialist", "Creative Coder"];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex <= current.length) {
      timer = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 65);
    } else if (!deleting && charIndex > current.length) {
      timer = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && charIndex > 0) {
      timer = setTimeout(() => {
        setCharIndex((c) => c - 1);
        setDisplayed(current.slice(0, charIndex - 1));
      }, 38);
    } else {
      setDeleting(false);
      setRoleIndex((r) => (r + 1) % roles.length);
    }
    return () => clearTimeout(timer);
  }, [charIndex, deleting, roleIndex]);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.11, delayChildren: 0.25 } },
  };
  const item = {
    hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center pt-16"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="grid lg:grid-cols-[1.25fr_1fr] gap-12 xl:gap-20 items-center">

          {/* ── LEFT: Text Content ── */}
          <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col">

            {/* Available badge */}
            <motion.div variants={item} className="mb-7 w-fit">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border border-violet-500/30 bg-violet-500/10 text-violet-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-400" />
                </span>
                <Sparkles className="h-3.5 w-3.5" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name heading */}
            <motion.div variants={item}>
              <h1 className="text-5xl md:text-6xl xl:text-[4.5rem] font-display font-extrabold leading-[1.06] tracking-tight">
                <span className="text-white/90">Hi, I'm </span>
                <span
                  style={{
                    backgroundImage: "linear-gradient(135deg, #a78bfa 0%, #818cf8 40%, #38bdf8 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Kaveesha
                </span>
                <br />
                <span className="text-white/85">Maharambage</span>
              </h1>
            </motion.div>

            {/* Typewriter role */}
            <motion.div variants={item} className="mt-5 h-9 flex items-center">
              <p className="text-xl font-display font-semibold text-white/40">
                {"< "}
                <span className="text-violet-400">{displayed}</span>
                <span className="inline-block w-[2px] h-5 bg-violet-400 ml-0.5 align-middle animate-pulse" />
                {" />"}
              </p>
            </motion.div>

            {/* Description */}
            <motion.p variants={item} className="mt-6 text-base md:text-[1.05rem] text-white/50 max-w-[28rem] leading-[1.75]">
              Undergraduate IT student at{" "}
              <span className="text-white/80 font-semibold">SLIIT</span>. Passionate about
              building pixel-perfect web experiences with{" "}
              <span className="text-violet-300 font-medium">React</span> &{" "}
              <span className="text-sky-300 font-medium">modern design</span>.
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.7)]"
                style={{ background: "linear-gradient(135deg, #7c3aed, #6366f1)" }}
              >
                View Projects
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white/80 border border-white/10 bg-white/5 hover:bg-white/8 hover:border-violet-500/40 hover:text-white transition-all duration-300"
              >
                <Mail className="h-4 w-4" /> Let's Talk
              </a>
              <a
                href="/documents/Kaveesha_Maharambage_CV_2026.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm text-white/40 hover:text-white/70 transition-colors duration-300"
              >
                <Download className="h-3.5 w-3.5" /> CV
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={item} className="mt-8 flex items-center gap-2.5">
              {[
                { href: "https://github.com/it22129130", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/kaveesha-maharambage-1810a7281", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:maharabagekaweesha@gmail.com", icon: Mail, label: "Email" },
                { href: "https://www.behance.net/kaweeshanethmi", icon: Palette, label: "Behance" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-xl border border-white/8 bg-white/4 text-white/40 hover:text-white/90 hover:border-violet-500/50 hover:bg-violet-500/10 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
              <div className="ml-1 h-px w-10 bg-gradient-to-r from-white/10 to-transparent" />
              <span className="text-xs text-white/25 font-medium">Sri Lanka 🇱🇰</span>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Circular Image + Ripple ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center mx-auto lg:mx-0"
          >
            {/* Ripple container — size determines how wide ripples spread */}
            <div className="relative flex items-center justify-center w-80 h-80 md:w-[380px] md:h-[380px]">

              {/* MagicUI Ripple behind the image */}
              <Ripple
                mainCircleSize={180}
                mainCircleOpacity={0.18}
                numCircles={7}
                className="[&>div]:border-violet-500/40 [&>div]:bg-violet-500/5 [mask-image:none]"
                style={{
                  ["--duration" as string]: "2.5s",
                }}
              />

              {/* Outer glow ring */}
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, #7c3aed, #6366f1, #0891b2, #7c3aed)",
                  filter: "blur(16px)",
                  opacity: 0.45,
                }}
              />

              {/* Spinning gradient border ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                className="absolute inset-[-3px] rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, #7c3aed 0%, #6366f1 25%, #38bdf8 50%, #06b6d4 75%, #7c3aed 100%)",
                  borderRadius: "50%",
                }}
              />

              {/* Inner white ring gap */}
              <div
                className="absolute inset-[2px] rounded-full"
                style={{ background: "#1b0b2e" }}
              />

              {/* Profile image — circle */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute inset-[6px] rounded-full overflow-hidden"
                style={{
                  boxShadow: "inset 0 0 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)",
                }}
              >
                <img
                  src="/images/profile.png"
                  alt="Kaveesha Maharambage"
                  className="w-full h-full object-cover object-top"
                />
                {/* Subtle inner gradient at bottom */}
                <div
                  className="absolute inset-x-0 bottom-0 h-1/4"
                  style={{ background: "linear-gradient(to top, rgba(9,9,15,0.7), transparent)" }}
                />
              </motion.div>

              {/* Floating badge — top right */}
              <motion.div
                animate={{ y: [0, -7, 0], rotate: [-2, 2, -2] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                className="absolute -top-2 -right-2 z-20 px-3 py-1.5 rounded-full border border-violet-500/40 bg-[#1b0b2e]/90 text-xs font-bold text-violet-300 shadow-[0_0_20px_rgba(139,92,246,0.3)] backdrop-blur-sm"
              >
                🎓 SLIIT Student
              </motion.div>

              {/* Floating badge — bottom left */}
              <motion.div
                animate={{ y: [0, 7, 0], rotate: [2, -2, 2] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.7 }}
                className="absolute -bottom-2 -left-2 z-20 px-3 py-1.5 rounded-full border border-sky-500/40 bg-[#1b0b2e]/90 text-xs font-bold text-sky-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] backdrop-blur-sm"
              >
                ⚛️ React Dev
              </motion.div>

              {/* Floating badge — left middle */}
              <motion.div
                animate={{ x: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1.5 }}
                className="absolute left-[-3rem] top-1/2 -translate-y-1/2 z-20 px-2.5 py-1 rounded-full border border-emerald-500/40 bg-[#1b0b2e]/90 text-xs font-bold text-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.25)] backdrop-blur-sm whitespace-nowrap"
              >
                🎨 UI/UX
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] text-white/25 tracking-[0.2em] uppercase font-medium">scroll</span>
          <motion.div
            animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-px h-8 origin-top"
            style={{ background: "linear-gradient(to bottom, rgba(139,92,246,0.8), transparent)" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
