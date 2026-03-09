import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: number; // 0-100
}

const skillGroups: { category: string; skills: Skill[] }[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "JavaScript", level: 90 },
      { name: "HTML / CSS", level: 90 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "Java", level: 70 },
    ],
  },
  {
    category: "Tools & Workflow",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "REST APIs", level: 80 },
      { name: "VS Code", level: 90 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-2">Skills</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-14">
            Technical proficiency
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: gi * 0.12 }}
            >
              <h3 className="font-display text-lg font-semibold text-foreground mb-6">{group.category}</h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span key={skill.name} className="inline-block px-4 py-2 bg-card border border-border rounded-md text-sm font-medium text-foreground shadow-card">
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
