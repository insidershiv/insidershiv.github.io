import { motion } from "framer-motion";
import TypingText from "./TypingText";
import InteractiveGrid from "./InteractiveGrid";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <InteractiveGrid />
      <div className="scanline absolute inset-0 z-10" />

      <div className="relative z-20 text-center px-6 max-w-4xl">
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
          className="font-mono text-lg md:text-xl text-secondary-foreground mb-10 h-8"
        >
          <TypingText
            texts={[
              "React, Next.js & TypeScript",
              "Multi-tenant platforms & micro-frontends",
              "Performance & bundle optimization",
              "React Native — Android & iOS",
            ]}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground font-mono font-semibold rounded-sm hover-lift glow-border"
          >
            {">"} view_projects()
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-primary text-primary font-mono font-semibold rounded-sm hover-lift hover:bg-primary/10 transition-colors"
          >
            {">"} contact_me()
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float"
        >
          <div className="w-5 h-8 border-2 border-primary/40 rounded-full flex justify-center pt-1">
            <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
