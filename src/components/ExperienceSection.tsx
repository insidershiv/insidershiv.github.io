import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Voicetec Sys Ltd — Delhi, India",
    period: "Oct 2022 — Present",
    bullets: [
      "Built and led frontend architecture for a multi-tenant white-labeled platform supporting 8+ enterprise clients, designing tenant isolation and configurable feature modules to enable scalable onboarding and client-specific customizations.",
      "Defined component architecture and state management patterns with clear frontend–backend contracts, ensuring predictable data flow and reducing integration issues by 25% while improving development velocity across teams.",
      "Improved application performance using code splitting, lazy loading, and optimized rendering strategies, reducing bundle size by ~30% and improving time-to-interactive by ~20% across critical user flows.",
      "Migrated the platform to a micro-frontend architecture, establishing clear module boundaries and enabling independent deployments, which reduced cross-team release dependencies by 40% and improved parallel development.",
      "Diagnosed production issues using runtime metrics and structured logging, reducing incident resolution time by 35% while maintaining 99.85% uptime under varying load conditions.",
      "Implemented CI/CD pipelines with backend and DevOps teams to automate build and deployment workflows, reducing deployment time by 50% and improving release consistency across environments.",
      "Built cross-platform mobile applications using React Native with ~90% code reuse across Android and iOS, ensuring consistent performance and platform-specific optimizations.",
      "Mentored engineers and conducted code reviews, enforcing best practices and improving code quality, reducing post-release defects by 20–30% across shared codebases.",
      "Established performance monitoring by tracking bundle size, runtime metrics, and regressions, enabling early detection and reducing performance-related issues by ~30% across critical user-facing applications.",
      "Key insight: Designing clear system boundaries and enforcing predictable data flow was essential to scaling both the platform and the engineering team without introducing instability.",
      "Challenge: Managing shared state and communication across micro-frontends, along with tenant-specific configurations in a shared codebase, required careful contract design and a scalable configuration strategy. We implemented structured, environment-driven configuration layers and feature flags to support client-specific behavior without code duplication, while enforcing strict contracts to maintain consistency, avoid tight coupling, and prevent configuration drift across tenants.",
    ],
    stack: [
      "React",
      "TypeScript",
      "React Native",
      "Micro-frontends",
      "CI/CD",
      "Redux",
    ],
  },
  {
    role: "Software Engineer",
    company: "BrainyDX — Delhi, India",
    period: "Dec 2020 — Apr 2022",
    bullets: [
      "Modernized legacy systems into a modular React-based architecture, improving scalability, reducing technical debt, and enabling easier feature expansion across the platform.",
      "Built a multilingual healthcare platform across 5+ countries, designing localization-aware workflows and region-specific user experiences to support diverse operational requirements.",
      "Optimized lab-test booking workflows and data loading strategies, reducing page load time by 35% during peak traffic and improving responsiveness across critical user journeys.",
      "Integrated secure real-time video consultation using third-party SDKs, ensuring stable communication and seamless user experience across varying network conditions.",
      "Key insight: Efficient data loading strategies and minimizing unnecessary re-renders were critical to maintaining performance and usability under high traffic conditions.",
      "Challenge: Balancing performance with complex, dynamic workflows required careful coordination between API design and frontend state management to avoid excessive re-renders and inconsistent user states.",
    ],
    stack: ["React", "Healthcare", "i18n", "WebRTC"],
  },
  {
    role: "Software Developer",
    company: "SK Infotechies — Noida, India",
    period: "Sep 2019 — Oct 2020",
    bullets: [
      "Developed a B2B auction and e-commerce platform with real-time bidding workflows using event-driven updates, ensuring low-latency interactions and consistent state synchronization across concurrent users.",
      "Optimized state management and API interactions by implementing request deduplication and client-side caching, reducing redundant network calls by 12% and improving responsiveness under high user load.",
      "Integrated Firebase Crashlytics to monitor production issues, proactively identifying failures and reducing ANRs by 15%, improving application stability.",
      "Streamlined checkout flows by optimizing user journeys and reducing friction points, increasing conversion rates by 4%.",
      "Key insight: Ensuring consistent state across concurrent users in real-time workflows required efficient event handling and careful synchronization to avoid race conditions.",
      "Challenge: Handling real-time updates at scale introduced race conditions and state inconsistencies, which were mitigated through controlled update flows and client-side synchronization strategies.",
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
          <p className="font-mono text-sm text-primary mb-2">
            {"// experience"}
          </p>
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
                      <span className="font-mono text-xs text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>

                    <p className="font-mono text-sm text-primary mb-4">
                      @{exp.company}
                    </p>
                    <ul className="text-sm text-muted-foreground mb-4 leading-relaxed space-y-2 list-disc pl-4">
                      {exp.bullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.stack.map((s) => (
                        <span
                          key={s}
                          className="font-mono text-xs px-2 py-1 bg-muted text-muted-foreground rounded-sm"
                        >
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
