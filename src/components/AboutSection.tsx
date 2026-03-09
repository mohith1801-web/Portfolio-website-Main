import { motion } from "framer-motion";
import { GraduationCap, Code, Briefcase } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Diploma — CSE",
    text: "Diploma in Computer Science Engineering from Panimalar Polytechnic College",
  },
  {
    icon: GraduationCap,
    title: "B.E. — CSE",
    text: "Bachelor of Engineering in Computer Science at Panimalar Engineering College — Pre-final year",
  },
  {
    icon: Code,
    title: "Specialization",
    text: "Full Stack Development with React, Node.js, and modern JavaScript tooling",
  },
  {
    icon: Briefcase,
    title: "Experience",
    text: "Built real-world e-commerce platform for a textiles business using MERN stack",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-2">About Me</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Driven by curiosity, built on code.
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed mb-14">
            I'm Mohith R — a pre-final year Computer Science student at Panimalar Engineering College with a strong foundation from my Diploma in CSE at Panimalar Polytechnic College. I'm passionate about building end-to-end web applications and have hands-on experience with the MERN stack. I enjoy solving real-world problems through clean, maintainable code — from crafting pixel-perfect user interfaces to designing robust backend APIs. Currently focused on deepening my skills in full stack development and contributing to meaningful projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-lg p-7 shadow-card border border-border hover:border-accent/40 transition-colors"
            >
              <div className="w-11 h-11 rounded-md gold-gradient flex items-center justify-center mb-5">
                <item.icon size={20} className="text-accent-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
