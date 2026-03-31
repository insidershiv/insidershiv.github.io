import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Voicetec Sys Ltd — Delhi, India",
    period: "Oct 2022 — Present",
    bullets: [
      "Led frontend architecture for a multi-tenant white-labeled platform, onboarding 8+ enterprise clients with tenant isolation and scalable customizations.",
      "Designed component architecture and state management patterns, cutting integration issues by 25% and improving development efficiency.",
      "Improved performance with code splitting and lazy loading: ~30% smaller initial bundle, ~20% better TTI, and optimized rendering paths.",
      "Migrated modules to a micro-frontend architecture, reducing cross-team release dependencies by 40%.",
      "Implemented CI/CD with backend and DevOps teams; built cross-platform mobile apps with React Native.",
      "Mentored junior engineers, ran code reviews, and established performance monitoring (bundle size, runtime metrics), cutting performance issues by ~30% on critical apps.",
    ],
    stack: ["React", "TypeScript", "React Native", "Micro-frontends", "CI/CD"],
  },
  {
    role: "Software Engineer",
    company: "BrainyDX — Delhi, India",
    period: "Dec 2020 — Apr 2022",
    bullets: [
      "Modernized legacy systems into a modular React-based architecture for better scalability.",
      "Built a multilingual healthcare platform across 5+ countries with localization and regional workflows.",
      "Designed lab-test booking flows, reducing page load time by 35% during peak traffic.",
      "Integrated secure real-time video consultation using third-party SDKs.",
    ],
    stack: ["React", "Healthcare", "i18n", "WebRTC"],
  },
  {
    role: "Software Developer",
    company: "SK Infotechies — Noida, India",
    period: "Sep 2019 — Oct 2020",
    bullets: [
      "Developed a B2B auction and e-commerce platform with real-time bidding via event-driven updates.",
      "Reduced redundant network calls by 12% through better state management, request deduplication, and client-side caching.",
      "Integrated Firebase Crashlytics; resolved production failures and reduced ANRs by 15%.",
      "Streamlined checkout flows, increasing conversion rates by 4%.",
    ],
    stack: ["React", "Firebase", "Real-time", "E-commerce"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 px-6 bg-surface">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-sm text-primary mb-2">{"// experience"}</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-16">
            Journey<span className="text-primary">.</span>
          </h2>

          <div className="relative">
            <div className="absolute left-4 md:left-0 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-12">
              {experiences.map((exp, i) => (
                <motion.div
                  key={`${exp.company}-${exp.period}`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="relative pl-12 md:pl-10 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.5 }}
                    className="absolute left-2 md:left-[-6px] top-2 w-4 h-4 rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors"
                  />

                  <div className="bg-card border border-border rounded-sm p-6 hover-lift group-hover:border-primary/30 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                      <h3 className="text-lg font-display font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
                    </div>

                    <p className="font-mono text-sm text-primary mb-4">@{exp.company}</p>
                    <ul className="text-sm text-muted-foreground mb-4 leading-relaxed space-y-2 list-disc pl-4">
                      {exp.bullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.stack.map((s) => (
                        <span key={s} className="font-mono text-xs px-2 py-1 bg-muted text-muted-foreground rounded-sm">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
