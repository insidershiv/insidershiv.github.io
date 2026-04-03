import { motion } from "framer-motion";
import InteractiveGrid from "./InteractiveGrid";
import TypingText from "./TypingText";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-x-hidden"
    >
      <InteractiveGrid />
      <div className="scanline absolute inset-0 z-10" />

      <div className="relative z-20 w-full min-w-0 max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-sm text-muted-foreground mb-4 tracking-widest uppercase"
        >
          {">"} shiv_kumar.init()
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-4 leading-tight"
        >
          <span className="text-foreground">Shiv Kumar</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-xl md:text-2xl font-mono text-primary mb-6"
        >
          Senior Software Engineer
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight"
        >
          <span className="text-foreground">I build </span>
          <span className="text-primary glow-text">scalable</span>
          <br />
          <span className="text-foreground">web & mobile systems</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-mono text-base sm:text-lg md:text-xl text-secondary-foreground mb-10 mx-auto flex w-full min-w-0 max-w-sm min-h-[2.75rem] items-center justify-center break-words sm:max-w-xl md:max-w-none md:break-normal sm:min-h-8"
        >
          <TypingText
            texts={[
              "Building systems, not just UI",
              "Designing for scale and reliability",
              "Optimizing for real user impact",
              "Handling complexity with clean architecture",
            ]}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mx-auto grid min-w-0 w-full max-w-md grid-cols-1 gap-4 sm:max-w-2xl sm:grid-cols-2"
        >
          <a
            href="#projects"
            className="flex w-full items-center justify-center whitespace-nowrap px-6 py-3 text-center font-mono font-semibold bg-primary text-primary-foreground rounded-sm hover-lift glow-border"
          >
            {">"} view_projects()
          </a>
          <a
            href="#contact"
            className="flex w-full items-center justify-center whitespace-nowrap px-6 py-3 text-center font-mono font-semibold border border-primary text-primary rounded-sm hover-lift hover:bg-primary/10 transition-colors"
          >
            {">"} contact_me()
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="pointer-events-none absolute bottom-6 left-1/2 z-20 -translate-x-1/2 animate-float sm:bottom-8"
        aria-hidden
      >
        <div className="flex h-8 w-5 justify-center rounded-full border-2 border-primary/40 pt-1">
          <div className="h-2 w-1 animate-bounce rounded-full bg-primary" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
