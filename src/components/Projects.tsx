import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "CVANT AI",
      description: "AI-powered resume builder generating ATS-optimized content. Integrated Gemini API for smart summarization and content enhancement.",
      tech: ["Next.js 14", "Gemini API", "Clerk", "MongoDB", "Tailwind CSS"],
      stats: "AI-Driven UX",
      link: "https://cvant-ai.vercel.app/",
      github: "https://github.com/danish-rizwan-dev",
      gradient: "from-primary to-accent",
    },
    {
      title: "ATHENO AI",
      description: "AI study companion with learning roadmaps and smart flashcards. Features a Pomodoro timer and task board for optimized learning.",
      tech: ["React.js", "Gemini API", "Supabase", "Tailwind CSS"],
      stats: "Smart Education",
      link: "https://atheno-study-companion.vercel.app/",
      github: "https://github.com/danish-rizwan-dev",
      gradient: "from-accent to-web3-blue",
    },
    {
      title: "India Med Service",
      description: "Specialized user interface for a medical services provider. Focused on high-performance navigation and clean accessibility.",
      tech: ["React.js", "Tailwind CSS", "Modern UI", "Performance Optimization"],
      stats: "Healthcare Tech",
      link: "https://indiamedservice.com/",
      github: "https://github.com/danish-rizwan-dev",
      gradient: "from-web3-blue to-primary",
    },
    {
      title: "Gym Management System",
      description: "Full-stack member management platform with real-time attendance tracking and a comprehensive admin dashboard.",
      tech: ["React.js", "Supabase", "Tailwind CSS", "Real-time DB"],
      stats: "Live Dashboard",
      link: "https://gym-membership-management-system.vercel.app/",
      github: "https://github.com/danish-rizwan-dev",
      gradient: "from-primary to-web3-blue",
    },
  ];

  return (
    <section ref={ref} id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-nature bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-web3 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 h-full transition-all duration-500 hover:border-primary/50 hover:shadow-card hover:-translate-y-2">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                
                <div className="relative z-10 h-full flex flex-col space-y-4">
                  <div className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full w-fit">
                    {project.stats}
                  </div>

                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-secondary/50 text-secondary-foreground px-3 py-1 rounded-full border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};