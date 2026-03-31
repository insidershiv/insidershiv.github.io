import { motion } from "framer-motion";

const PRINCIPLES = [
  "Think in systems, not isolated components",
  "Treat performance as a feature, not an afterthought",
  "Design for consistency under concurrent interactions",
  "Make trade-offs explicit and intentional",
];

const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.11, delayChildren: 0.06 },
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 28, rotateX: -12, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: { type: "spring" as const, stiffness: 120, damping: 18 },
  },
};

const AboutSection = () => {
  return (
    <section id="about" className="overflow-x-hidden py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-sm text-primary mb-2">{"// about"}</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8">
            Who am I<span className="text-primary">?</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-secondary-foreground leading-relaxed">
              <p>
                {`I'm a Senior Frontend Engineer with 6+ years of experience building scalable, production-grade web and mobile applications using React. I focus on designing frontend systems that are fast, reliable, and built to scale — not just UI components, but complete architectures that handle real-world complexity.`}
              </p>
              <p>
                {`I've led frontend development for multi-tenant enterprise platforms, improved performance across critical user flows, and built systems that handle concurrent user interactions with consistency. I enjoy solving problems around data flow, rendering performance, and system design — especially where technical decisions directly impact user experience and system behavior.`}
              </p>
              <p>
                {`Outside of work, I build products end-to-end, including a live test platform and a browser-based coding environment with an integrated editor, real-time code execution, and automated test case evaluation. I'm driven by ownership, clarity in design, and building systems that are both technically robust and genuinely useful.`}
              </p>
              <div className="font-mono text-sm bg-card border border-border rounded-sm p-4 glow-border overflow-x-auto">
                <span className="text-muted-foreground">const</span>{" "}
                <span className="text-accent">principles</span> = [<br />
                {PRINCIPLES.map((line, i) => (
                  <span key={line}>
                    &nbsp;&nbsp;
                    <span className="text-primary">&quot;{line}&quot;</span>
                    {i < PRINCIPLES.length - 1 ? "," : ""}
                    <br />
                  </span>
                ))}
                ];
              </div>
            </div>

            <div className="relative overflow-x-hidden md:sticky md:top-28 md:overflow-visible perspective-[1200px]">
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -inset-4 md:-inset-8 rounded-2xl opacity-40 blur-3xl"
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.35, 0.55, 0.35],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  background:
                    "radial-gradient(ellipse at 30% 20%, hsl(150 100% 45% / 0.35), transparent 55%), radial-gradient(ellipse at 70% 80%, hsl(180 100% 50% / 0.25), transparent 50%)",
                }}
              />

              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-xl opacity-[0.15]"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                style={{
                  background:
                    "conic-gradient(from 180deg at 50% 50%, hsl(150 100% 50% / 0.4), transparent 40%, hsl(180 100% 55% / 0.35), transparent 75%)",
                }}
              />

              <div className="relative rounded-xl border border-border/80 bg-card/80 backdrop-blur-sm p-6 shadow-[0_0_60px_-12px_hsl(150_100%_50%_/_0.25)]">
                <motion.div
                  className="mb-5 flex items-baseline justify-between gap-3 border-b border-border/60 pb-4"
                  initial={{ opacity: 0, y: -8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                  <span className="font-mono text-xs text-muted-foreground tracking-wider">
                    {"// live manifest"}
                  </span>
                  <motion.span
                    className="font-display text-2xl font-bold tabular-nums text-primary glow-text"
                    animate={{ scale: [1, 1.04, 1] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    6+ Years of Experience
                  </motion.span>
                </motion.div>

                <motion.ul
                  className="space-y-3 [transform-style:preserve-3d]"
                  variants={listVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-40px" }}
                >
                  {PRINCIPLES.map((text, i) => (
                    <motion.li
                      key={text}
                      variants={rowVariants}
                      whileHover={{
                        x: -6,
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                        },
                      }}
                      className="group relative overflow-hidden rounded-sm border border-border/70 bg-background/50 pl-4"
                    >
                      <motion.span
                        className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary to-accent"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.15 + i * 0.1,
                          duration: 0.45,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        style={{ originY: 0 }}
                      />
                      <motion.span
                        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        style={{
                          background:
                            "linear-gradient(105deg, transparent 40%, hsl(150 100% 50% / 0.12) 50%, transparent 60%)",
                          backgroundSize: "200% 100%",
                        }}
                        animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "linear",
                          repeatDelay: 1,
                        }}
                      />
                      <div className="flex items-start gap-3 py-3 pr-3">
                        <motion.span
                          className="mt-0.5 font-mono text-[10px] text-muted-foreground/80"
                          whileHover={{ color: "hsl(150, 100%, 50%)" }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </motion.span>
                        <span className="font-mono text-xs leading-relaxed text-foreground/95">
                          {text}
                        </span>
                      </div>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
