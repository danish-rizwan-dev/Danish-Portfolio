import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, MessageCircle, Phone } from "lucide-react";

// 1. Professional contact data for Danish Rizwan
const CONTACT_METHODS = [
  {
    icon: Mail,
    label: "Email",
    value: "danishriz987@gmail.com",
    href: "mailto:danishriz987@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8287805596",
    href: "tel:+918287805596",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "danish-rizwan-dev",
    href: "https://github.com/danish-rizwan-dev",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Danish Rizwan",
    href: "https://www.linkedin.com/in/danish-rizwan-050539258/",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 }
  })
};

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          custom={0}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's <span className="bg-gradient-web3 bg-clip-text text-transparent">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-nature mx-auto rounded-full mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next web project? Reach out through any of these channels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {CONTACT_METHODS.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
              custom={index + 1}
              aria-label={`Contact Danish Rizwan via ${method.label}`}
              className="group relative bg-card/40 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="p-4 bg-gradient-nature rounded-xl shadow-glow group-hover:scale-110 transition-transform duration-300">
                  <method.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-sm text-muted-foreground mb-1">{method.label}</p>
                  <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {method.value}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          custom={5}
          className="text-center"
        >
          <Button variant="hero" size="lg" asChild className="text-lg px-8 py-6">
            <a href="https://wa.me/918287805596" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              Start a Conversation
            </a>
          </Button>
        </motion.div>

        {/* Footer with updated name and year */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20 pt-8 border-t border-border/50"
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Danish Rizwan. Built with passion for smooth experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
};