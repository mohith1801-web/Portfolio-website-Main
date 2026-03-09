import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const contactLinks = [
  { icon: Mail, label: "mohithraja1801@gmail.com", href: "mailto:mohithraja1801@gmail.com" },
  { icon: Phone, label: "+91 8122821300", href: "tel:+918122821300" },
  { icon: Github, label: "github.com/mohith1801-web", href: "https://github.com/mohith1801-web/" },
  { icon: Linkedin, label: "LinkedIn Profile", href: "https://www.linkedin.com/in/mohith-r-5172293a8" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-secondary/40">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-2">Contact</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get in touch
          </h2>
          <p className="text-muted-foreground mb-12 max-w-lg mx-auto">
            Feel free to reach out for collaborations, learning opportunities, or just to say hello!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid sm:grid-cols-2 gap-5"
        >
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-card border border-border rounded-lg p-5 hover:border-accent/40 transition-colors shadow-card group"
            >
              <div className="w-10 h-10 rounded-md gold-gradient flex items-center justify-center flex-shrink-0">
                <link.icon size={18} className="text-accent-foreground" />
              </div>
              <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors truncate">
                {link.label}
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
