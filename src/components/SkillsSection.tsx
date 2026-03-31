import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  {
    name: "Core & web",
    skills: [
      { name: "React.js", level: 96 },
      { name: "Next.js", level: 92 },
      { name: "TypeScript", level: 94 },
      { name: "Redux / Context API", level: 92 },
      { name: "Micro-frontends", level: 88 },
      { name: "React Native (Android & iOS)", level: 88 },
      { name: "HTML5 / CSS", level: 93 },
      { name: "Material UI / Bootstrap", level: 90 },
    ],
  },
  {
    name: "Performance",
    skills: [
      { name: "Code splitting & lazy loading", level: 92 },
      { name: "Render optimization", level: 90 },
      { name: "SEO", level: 85 },
      { name: "Accessibility", level: 88 },
    ],
  },
  {
    name: "Cloud, testing & tools",
    skills: [
      { name: "REST APIs", level: 92 },
      { name: "Git", level: 95 },
      { name: "CI/CD", level: 88 },
      { name: "AWS Lambda / CloudFront", level: 78 },
      { name: "Firebase", level: 82 },
      { name: "Jest / RTL / E2E", level: 88 },
    ],
  },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-sm text-primary mb-2">{"// skills"}</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-12">
            Tech stack<span className="text-primary">.</span>
          </h2>

          <div className="flex gap-2 mb-10 font-mono text-sm flex-wrap">
            {categories.map((cat, i) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(i)}
                className={`px-4 py-2 rounded-sm border transition-all duration-300 ${
                  activeCategory === i
                    ? "bg-primary text-primary-foreground border-primary glow-border"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {categories[activeCategory].skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="group"
                >
                  <div className="flex justify-between mb-2 font-mono text-sm">
                    <span className="text-foreground group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
