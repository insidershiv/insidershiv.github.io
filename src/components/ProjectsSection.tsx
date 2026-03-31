import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "ExamChimp",
    description:
      "A scalable test platform with timed exams and real-time evaluation — built for reliability under load and a smooth candidate experience.",
    tags: ["React", "Real-time", "EdTech"],
    category: "web",
    color: "var(--primary)",
    metrics: "examchimp.com",
    href: "https://examchimp.com",
  },
  {
    title: "Frontend practice platform",
    description:
      "An in-browser IDE with automated test execution for real-time code validation and dynamic problem rendering — learn by doing with instant feedback.",
    tags: ["JavaScript", "IDE", "Testing"],
    category: "web",
    color: "var(--glow-accent)",
    metrics: "practise-js.netlify.app",
    href: "https://practise-js.netlify.app",
  },
];

const filters = ["all", "web"];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filtered = activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-32 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-sm text-primary mb-2">{"// projects"}</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-12">
            Featured work<span className="text-primary">.</span>
          </h2>

          <div className="flex gap-2 mb-10 font-mono text-sm flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-sm border transition-all duration-300 ${
                  activeFilter === f
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
                }`}
              >
                .{f}
              </button>
            ))}
          </div>

          <AnimatePresence mode="popLayout">
            <div className="grid md:grid-cols-2 gap-6">
              {filtered.map((project, i) => (
                <motion.a
                  key={project.title}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group bg-card border border-border rounded-sm overflow-hidden hover-lift cursor-pointer relative block text-left no-underline"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, hsl(${project.color === "var(--primary)" ? "150 100% 50%" : "180 100% 50%"} / 0.08), transparent 70%)`,
                    }}
                  />

                  <div className="p-6 relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs text-muted-foreground">./{project.category}</span>
                      <motion.span
                        animate={{ rotate: hoveredIndex === i ? 45 : 0 }}
                        className="text-primary text-xl"
                      >
                        ↗
                      </motion.span>
                    </div>

                    <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                    <div className="font-mono text-xs text-primary mb-4 underline-offset-4 group-hover:underline">
                      {project.metrics}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-xs px-2 py-1 bg-muted text-muted-foreground rounded-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
