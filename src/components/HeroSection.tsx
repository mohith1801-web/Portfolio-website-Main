import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={heroBg}
        alt="Corporate abstract background"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/70" />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">
            Full Stack Developer
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Mohith <span className="text-gold-gradient">R</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Pre-final year Computer Science student at Panimalar Engineering College, passionate about crafting modern, scalable web applications.
          </p>

          {/* Social links */}
          <div className="flex items-center justify-center gap-5 mb-12">
            <a
              href="https://github.com/mohith1801-web/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-primary-foreground/20 text-primary-foreground/70 hover:text-accent hover:border-accent transition-all"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/mohith-r-5172293a8"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-primary-foreground/20 text-primary-foreground/70 hover:text-accent hover:border-accent transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:mohithraja1801@gmail.com"
              className="p-3 rounded-full border border-primary-foreground/20 text-primary-foreground/70 hover:text-accent hover:border-accent transition-all"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          <a
            href="mailto:mohithraja1801@gmail.com"
            className="inline-block px-8 py-3.5 rounded-md gold-gradient text-accent-foreground font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity shadow-corporate"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="text-primary-foreground/40" size={24} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
