import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Sparkles, Blocks, LayoutPanelTop } from "lucide-react";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Code2,
      title: "Frontend Development",
      description:
        "Building modern responsive apps using Next.js 14, React, Vite, and Tailwind CSS with a focus on high-performance UX.",
    },
    {
      icon: Blocks,
      title: "Fullstack & Backend",
      description:
        "Experienced with Node.js, Express, Supabase, and MongoDB to build secure authentication and scalable API architectures.",
    },
    {
      icon: Sparkles,
      title: "AI-Powered Platforms",
      description:
        "Creator of CVANT AI and ATHENO AI — leveraging Gemini API for intelligent resume building and automated study roadmaps.",
    },
    {
      icon: LayoutPanelTop,
      title: "Freelance Solutions",
      description:
        "Proven track record delivering digital identity for Ahmed Perfumes and UI development for India Med Services.",
    },
  ];

  return (
    <section ref={ref} id="about" className="py-24 relative overflow-hidden">
      {/* Spotlight effect */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="bg-gradient-web3 bg-clip-text text-transparent">Danish Rizwan</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-nature mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-foreground/90 leading-relaxed">
              I'm a <strong className="text-primary">Freelance Fullstack Developer</strong> currently 
              collaborating with <strong className="text-accent">Triolzss Pvt Ltd</strong>. I specialize in 
              turning complex ideas into scalable digital products, with a heavy focus on 
              Next.js 14 and intelligent AI integration.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              My approach blends technical precision with real-world project management. 
              Whether I'm architecting secure backend systems or designing intuitive 
              frontends, I ensure every line of code serves a business goal.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Recent highlights include launching <strong className="text-web3-blue">AI-driven platforms</strong> like 
              CVANT AI and ATHENO AI, as well as delivering professional digital 
              transformations for clients like **India Med Services** and **Ahmed Perfumes**.
            </p>
          </motion.div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-nature rounded-lg shadow-glow">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};