import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "ExamChimp",
    description:
      "Scalable online test platform with real-time evaluation, timed assessments, and performance analytics.",
    bullets: [
      "Dynamic test engine with timer and state synchronization",
      "Real-time result computation and analytics",
      "Optimized rendering for large question sets",
    ],
    tags: ["React", "Real-time", "EdTech"],
    category: "web",
    color: "var(--primary)",
    metrics: "examchimp.com",
    href: "https://examchimp.com",
  },
  {
    title: "Frontend practice platform",
    description:
      "Browser-based coding platform with real-time execution, deterministic evaluation, and persistent editor state.",
    bullets: [
      "Execution engine for validating user code against test cases",
      "Autosave + state persistence across sessions",
      "Real-time feedback with consistent evaluation",
    ],
    tags: ["JavaScript", "IDE", "Testing"],
    category: "web",
    color: "var(--glow-accent)",
    metrics: "practise-js.netlify.app",
    href: "https://practise-js.netlify.app",
  },
];

const examChimpDetailSections: { title: string; paragraphs: string[] }[] = [
  {
    title: "Overview",
    paragraphs: [
      "Built a scalable online test platform supporting timed assessments, real-time evaluation, and detailed performance analytics.",
    ],
  },
  {
    title: "System Design",
    paragraphs: [
      "Designed a dynamic test engine to manage question rendering, timer synchronization, and user navigation while maintaining consistent state across long-running sessions.",
      "Implemented real-time result computation and optimized data flow to minimize re-renders and ensure smooth performance even with large question sets.",
      "Optimized rendering strategies and state updates to handle high interaction frequency without degrading user experience.",
    ],
  },
  {
    title: "Key Insight",
    paragraphs: [
      "Maintaining consistent test state across timers, navigation, and submissions required predictable state management and careful synchronization of time-based events.",
    ],
  },
  {
    title: "Challenge",
    paragraphs: [
      "Handling long-running sessions with continuous user interaction while preserving performance and preventing state inconsistencies required efficient update strategies and controlled re-rendering.",
    ],
  },
];

const frontendPracticeDetailSections: { title: string; paragraphs: string[] }[] = [
  {
    title: "Overview",
    paragraphs: [
      "Built a browser-based coding platform with an integrated editor and execution system to validate user-submitted JavaScript against predefined test cases.",
    ],
  },
  {
    title: "System Design",
    paragraphs: [
      "Designed a deterministic execution flow to run user code safely and consistently, ensuring reliable evaluation across multiple test cases with real-time feedback.",
      "Implemented persistent editor state with autosave (debounced updates) to retain user-written code across sessions and navigation.",
    ],
  },
  {
    title: "Key Insight",
    paragraphs: [
      "Ensuring deterministic execution while preserving user state required clear separation between execution logic and editor state management.",
    ],
  },
  {
    title: "Challenge",
    paragraphs: [
      "Balancing performance, correctness, and safe execution of user code while maintaining a responsive and persistent editing experience.",
    ],
  },
];

const detailSectionsByTitle: Record<string, { title: string; paragraphs: string[] }[]> = {
  ExamChimp: examChimpDetailSections,
  "Frontend practice platform": frontendPracticeDetailSections,
};

const filters = ["all", "web"];

/** Match expand/collapse motion duration + buffer so grid doesn’t switch to stretch mid-exit. */
const DETAILS_EXIT_MS = 380;

type Project = (typeof projects)[number];

function glowBackgroundForColor(color: string) {
  if (color === "var(--primary)") {
    return "radial-gradient(circle at 50% 0%, hsl(150 100% 50% / 0.08), transparent 70%)";
  }
  return "radial-gradient(circle at 50% 0%, hsl(180 100% 50% / 0.08), transparent 70%)";
}

function ExpandableProjectCard({
  project,
  index,
  hoveredIndex,
  setHoveredIndex,
  detailSections,
  detailsOpen,
  onDetailsOpenChange,
  fillRowHeight,
}: {
  project: Project;
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (n: number | null) => void;
  detailSections: { title: string; paragraphs: string[] }[];
  detailsOpen: boolean;
  onDetailsOpenChange: (open: boolean) => void;
  /** When true, card stretches to match sibling height (collapsed grid row). */
  fillRowHeight: boolean;
}) {
  const toggleClosedLabel = "Show details";
  const toggleOpenLabel = "Hide details";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      className={cn(
        "group bg-card border border-border rounded-sm overflow-hidden hover-lift relative text-left min-h-0",
        fillRowHeight && "h-full",
      )}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: glowBackgroundForColor(project.color) }}
      />

      <div className="p-6 relative z-10">
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="font-mono text-xs text-muted-foreground shrink-0">./{project.category}</span>
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 min-w-0 font-mono text-xs text-primary shrink no-underline"
            aria-label={`Open ${project.metrics}`}
          >
            <span className="truncate underline-offset-4 group-hover:underline">{project.metrics}</span>
            <motion.span
              animate={{ rotate: hoveredIndex === index ? 45 : 0 }}
              className="inline-flex shrink-0 no-underline items-center justify-center text-primary"
              aria-hidden
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 block"
                stroke="currentColor"
                strokeWidth={1}
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              >
                <path d="M8 16L16 8" />
                <path d="M16 8h-3.5M16 8v3.5" />
              </svg>
            </motion.span>
          </a>
        </div>

        <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        {project.description ? (
          <p
            className={`text-sm text-muted-foreground leading-relaxed ${project.bullets ? "mb-3" : "mb-4"}`}
          >
            {project.description}
          </p>
        ) : null}
        {project.bullets ? (
          <ul className="text-sm text-muted-foreground mb-4 leading-relaxed space-y-2 list-disc pl-4">
            {project.bullets.map((b, j) => (
              <li key={j}>{b}</li>
            ))}
          </ul>
        ) : null}

        <button
          type="button"
          onClick={() => onDetailsOpenChange(!detailsOpen)}
          className="flex items-center gap-1.5 font-mono text-sm text-primary mb-3 hover:underline underline-offset-4 w-full text-left"
          aria-expanded={detailsOpen}
        >
          <span>{detailsOpen ? toggleOpenLabel : toggleClosedLabel}</span>
          <ChevronRight
            className={`h-4 w-4 shrink-0 transition-transform duration-300 ease-out ${detailsOpen ? "rotate-90" : ""}`}
            aria-hidden
          />
        </button>

        <AnimatePresence initial={false}>
          {detailsOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <div className="space-y-5 pb-1 border-t border-border/60 pt-4 mb-4">
                {detailSections.map((section) => (
                  <section key={section.title}>
                    <h4 className="font-mono text-xs text-primary mb-2 tracking-wide">{section.title}</h4>
                    <div className="space-y-2">
                      {section.paragraphs.map((p, k) => (
                        <p key={k} className="text-sm text-muted-foreground leading-relaxed">
                          {p}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="font-mono text-xs px-2 py-1 bg-muted text-muted-foreground rounded-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [detailsOpenByTitle, setDetailsOpenByTitle] = useState<Record<string, boolean>>({});

  const filtered = activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter);
  const hasExpandedDetails = filtered.some((p) => detailsOpenByTitle[p.title]);

  const [gridLooseLayout, setGridLooseLayout] = useState(false);

  useEffect(() => {
    if (hasExpandedDetails) {
      setGridLooseLayout(true);
    } else {
      const t = window.setTimeout(() => setGridLooseLayout(false), DETAILS_EXIT_MS);
      return () => window.clearTimeout(t);
    }
  }, [hasExpandedDetails, filtered]);

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
            <div
              className={cn(
                "grid md:grid-cols-2 gap-6",
                gridLooseLayout ? "items-start" : "items-stretch",
              )}
            >
              {filtered.map((project, i) => (
                <ExpandableProjectCard
                  key={project.title}
                  project={project}
                  index={i}
                  hoveredIndex={hoveredIndex}
                  setHoveredIndex={setHoveredIndex}
                  detailSections={detailSectionsByTitle[project.title]}
                  detailsOpen={detailsOpenByTitle[project.title] ?? false}
                  onDetailsOpenChange={(open) =>
                    setDetailsOpenByTitle((prev) => ({ ...prev, [project.title]: open }))
                  }
                  fillRowHeight={!gridLooseLayout}
                />
              ))}
            </div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
