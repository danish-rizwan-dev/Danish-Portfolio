import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, CheckCircle2 } from "lucide-react";

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      company: "Triolzss Pvt Ltd",
      role: "Fullstack Web Developer",
      period: "2025 June - Present", // Adjust start date as needed
      achievements: [
        "Developing and maintaining scalable web applications using modern full-stack architectures.",
        "Collaborating on complex UI/UX designs to ensure seamless user transitions and high performance.",
        "Implementing secure authentication systems and optimizing database queries for production environments.",
      ],
      gradient: "from-primary to-accent",
    },
    {
      company: "Freelance",
      role: "Fullstack Developer & AI Specialist",
      period: "2025 June - Present",
      achievements: [
        "Developing AI-powered applications like CVANT AI and ATHENO AI leveraging the Gemini API.",
        "Delivered professional UI/UX solutions for India Med Services and brand identity for Ahmed Perfumes.",
        "Architecting robust backends using Node.js, Supabase, and MongoDB for diverse client needs.",
        "Building high-performance, responsive frontends with Next.js 14 and Tailwind CSS.",
      ],
      gradient: "from-accent to-web3-blue",
    },
  ];

  return (
    <section ref={ref} id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Work <span className="bg-gradient-nature bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-web3 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-card/40 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-card">
                <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${exp.gradient} rounded-l-2xl`} />
                
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 bg-gradient-to-br ${exp.gradient} rounded-xl shadow-glow`}>
                    <Briefcase className="w-6 h-6 text-primary-foreground" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                    <p className="text-lg text-primary font-semibold">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-1">{exp.period}</p>
                  </div>
                </div>

                <div className="space-y-3 ml-16">
                  {exp.achievements.map((achievement, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-foreground/90">{achievement}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};