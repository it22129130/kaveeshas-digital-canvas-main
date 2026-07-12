import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Github, Linkedin, Send, MapPin, CheckCircle, Palette } from "lucide-react";
import { ShineBorder } from "@/components/magicui/ShineBorder";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "maharabagekaweesha@gmail.com",
    href: "mailto:maharabagekaweesha@gmail.com",
    color: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    glow: "hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.4)]",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Kaveesha Maharambage",
    href: "https://www.linkedin.com/in/kaveesha-maharambage-1810a7281",
    color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    glow: "hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.4)]",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@it22129130",
    href: "https://github.com/it22129130",
    color: "text-gray-300 bg-gray-500/10 border-gray-500/20",
    glow: "hover:shadow-[0_0_30px_-5px_rgba(156,163,175,0.3)]",
  },
  {
    icon: Palette,
    label: "Behance",
    value: "kaweeshanethmi",
    href: "https://www.behance.net/kaweeshanethmi",
    color: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    glow: "hover:shadow-[0_0_30px_-5px_rgba(14,165,233,0.4)]",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Sri Lanka 🇱🇰",
    href: undefined,
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    glow: "",
  },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-primary/8 rounded-full blur-3xl pointer-events-none"
      />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 mb-4">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Let's work <span className="text-gradient">together</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Have a project, role or just want to say hi? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start">
          {/* Contact cards */}
          <div className="space-y-3">
            {contacts.map(({ icon: Icon, label, value, href, color, glow }, i) => {
              const Wrapper = href ? "a" : "div";
              return (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                >
                  <Wrapper
                    {...(href ? { href, target: href.startsWith("http") ? "_blank" : undefined, rel: "noreferrer" } : {})}
                    className={`flex items-center gap-4 p-4 rounded-2xl glass border border-white/8 transition-all duration-300 ${href ? `cursor-pointer hover-lift ${glow}` : ""}`}
                  >
                    <div className={`p-3 rounded-xl border shrink-0 ${color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground font-medium">{label}</p>
                      <p className="text-sm font-semibold text-foreground truncate mt-0.5">{value}</p>
                    </div>
                  </Wrapper>
                </motion.div>
              );
            })}
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <ShineBorder
              borderRadius={20}
              duration={5}
              color={["#8b5cf6", "#06b6d4", "#34d399"]}
            >
              <form
                onSubmit={handleSubmit}
                className="p-7 md:p-9 rounded-2xl glass border border-white/8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { label: "Name", placeholder: "Your name", type: "text", required: true },
                    { label: "Email", placeholder: "you@example.com", type: "email", required: true },
                  ].map(({ label, placeholder, type, required }) => (
                    <div key={label} className="group">
                      <label className="block text-xs font-semibold text-muted-foreground mb-1.5 group-focus-within:text-primary transition-colors">
                        {label}
                      </label>
                      <input
                        type={type}
                        required={required}
                        placeholder={placeholder}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-foreground placeholder-muted-foreground/50 focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>

                <div className="group">
                  <label className="block text-xs font-semibold text-muted-foreground mb-1.5 group-focus-within:text-primary transition-colors">
                    Subject
                  </label>
                  <input
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-foreground placeholder-muted-foreground/50 focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  />
                </div>

                <div className="group">
                  <label className="block text-xs font-semibold text-muted-foreground mb-1.5 group-focus-within:text-primary transition-colors">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me a bit about your project or opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-foreground placeholder-muted-foreground/50 focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-primary text-white font-semibold shadow-glow hover:shadow-cyan hover:scale-[1.02] transition-all duration-300"
                >
                  {sent ? (
                    <>
                      <CheckCircle className="h-4 w-4" />
                      Message sent! I'll get back to you soon ✓
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </form>
            </ShineBorder>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
