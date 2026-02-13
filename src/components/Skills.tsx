import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend & Web",
      skills: ["Next.js 14", "React.js", "Vite", "Tailwind CSS", "Shadcn/UI", "TypeScript"],
      color: "primary",
    },
    {
      title: "Backend & Cloud",
      skills: ["Node.js", "Express.js", "Supabase", "MongoDB", "REST APIs", "Clerk Auth"],
      color: "accent",
    },
    {
      title: "AI & Intelligence",
      skills: ["Gemini API", "AI Roadmaps", "ATS Optimization", "Vector Embeddings"],
      color: "web3-blue",
    },
    {
      title: "Programming & Tools",
      skills: ["JavaScript", "C++", "Git", "GitHub", "Vercel", "Postman"],
      color: "primary",
    },
  ];

  return (
    <section ref={ref} id="skills" className="py-24 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Skills & <span className="bg-gradient-nature bg-clip-text text-transparent">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-nature mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-foreground">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="group relative"
                  >
                    <div className={`
                      px-4 py-2 rounded-lg font-medium text-sm
                      bg-card border border-border/50
                      hover:border-primary/50 hover:shadow-glow
                      transition-all duration-300 cursor-default
                      hover:scale-105 text-foreground/80 hover:text-primary
                    `}>
                      {skill}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};