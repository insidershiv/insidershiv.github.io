import { motion } from "framer-motion";

const contactLinks = [
  {
    label: "Email",
    handle: "00shiv0000@gmail.com",
    href: "mailto:00shiv0000@gmail.com",
  },
  {
    label: "Phone",
    handle: "+91 9540997158",
    href: "tel:+919540997158",
  },
  {
    label: "LinkedIn",
    handle: "linkedin.com/in/shiv-kumar17",
    href: "https://www.linkedin.com/in/shiv-kumar17",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-sm text-primary mb-2">{"// contact"}</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Let&apos;s connect<span className="text-primary">.</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            Interested in frontend architecture, React, or collaboration? Reach out by email, phone, or LinkedIn.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-card border border-border rounded-sm p-6 font-mono text-sm glow-border">
              <p className="text-muted-foreground mb-4">{"// find me online"}</p>
              {contactLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  whileHover={{ x: 8 }}
                  className="flex flex-wrap items-baseline gap-x-3 gap-y-1 py-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="text-primary shrink-0">→</span>
                  <span className="text-foreground">{link.label}:</span>
                  <span className="break-all">{link.handle}</span>
                </motion.a>
              ))}
            </div>

            <div className="bg-card border border-border rounded-sm p-6 font-mono text-sm">
              <p className="text-muted-foreground mb-4">{"// current status"}</p>
              <p className="text-primary">
                <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2 animate-pulse" />
                Open to opportunities
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
