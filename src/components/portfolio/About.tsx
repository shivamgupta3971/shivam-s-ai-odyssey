import { motion } from "framer-motion";
import { Terminal, Cpu, Layers } from "lucide-react";
import { TextScramble } from "./TextScramble";
import { TiltCard } from "./TiltCard";

export const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="md:col-span-2"
          >
            <div className="section-eyebrow mb-4">
              // <TextScramble text="About" delay={0.1} />
            </div>
            <h2 className="section-heading">
              The <span className="text-gradient"><TextScramble text="AI Lab" delay={0.3} /></span> of a builder.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="md:col-span-3 space-y-5 text-muted-foreground text-lg leading-relaxed font-sans"
          >
            <p>
              I'm <span className="text-foreground font-medium">Shivam Gupta</span>, a Computer Science undergrad specialising in{" "}
              <span className="text-primary font-medium">Artificial Intelligence & Machine Learning</span>. I build production-grade AI systems that fuse computer vision, LLMs and real-time telemetry into products people can actually use.
            </p>
            <p>
              My work spans <span className="text-secondary font-medium">agentic AI</span>, <span className="text-secondary font-medium">RAG pipelines</span>, <span className="text-secondary font-medium">pose estimation</span> and full-stack engineering — always tuned for latency, clarity and delight.
            </p>

            <motion.div 
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid sm:grid-cols-3 gap-3 pt-4"
            >
              {[
                { icon: Terminal, k: "Focus", v: "Real-time AI Systems", glow: "rgba(5, 244, 112, 0.12)" },
                { icon: Cpu, k: "Depth", v: "CV · LLMs · Agents", glow: "rgba(0, 229, 201, 0.12)" },
                { icon: Layers, k: "Stack", v: "End-to-end products", glow: "rgba(5, 244, 112, 0.12)" },
              ].map((s) => (
                <motion.div
                  key={s.k}
                  variants={{
                    hidden: { opacity: 0, y: 30, scale: 0.96 },
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      scale: 1,
                      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
                    }
                  }}
                  className="h-full"
                >
                  <TiltCard 
                    maxTilt={12} 
                    scale={1.03}
                    glowColor={s.glow}
                    className="rounded-xl overflow-hidden h-full"
                  >
                    <div className="glass-card rounded-xl p-4 h-full border border-border/50 hover:border-primary/30 transition-colors">
                      <s.icon className="w-5 h-5 text-primary mb-2" />
                      <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">{s.k}</div>
                      <div className="font-semibold text-foreground text-sm mt-0.5">{s.v}</div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default About;
