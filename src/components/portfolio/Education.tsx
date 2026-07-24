import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { EDUCATION } from "@/data/portfolio";
import { TextScramble } from "./TextScramble";
import { TiltCard } from "./TiltCard";

export const Education = () => {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-eyebrow mb-4">
            // <TextScramble text="Timeline" delay={0.1} />
          </div>
          <h2 className="section-heading">
            Education <span className="text-gradient"><TextScramble text="trajectory" delay={0.3} /></span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central rail */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-secondary/50 to-transparent md:-translate-x-px" />

          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-10"
          >
            {EDUCATION.map((e, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={e.school}
                  variants={{
                    hidden: { opacity: 0, y: 40, scale: 0.97 },
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      scale: 1,
                      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
                    }
                  }}
                  className={`relative md:grid md:grid-cols-2 md:gap-10 ${left ? "" : "md:[&>*:first-child]:col-start-2"}`}
                >
                  {/* Node */}
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10">
                    <div className="relative">
                      <div className="w-4 h-4 rounded-full bg-gradient-primary shadow-neon" />
                      <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
                    </div>
                  </div>

                  <div className={`pl-12 md:pl-0 ${left ? "md:pr-16 md:text-right" : "md:pl-16 md:col-start-2"}`}>
                    <TiltCard
                      maxTilt={6}
                      scale={1.015}
                      glowColor={left ? "rgba(5, 244, 112, 0.12)" : "rgba(0, 229, 201, 0.12)"}
                      className="rounded-2xl overflow-hidden"
                    >
                      <div className="glass-card rounded-2xl p-5 md:p-6 group border border-border/50 hover:border-primary/30 transition-colors">
                        <div className={`flex items-center gap-2 mb-3 ${left ? "md:justify-end" : ""}`}>
                          <GraduationCap className="w-4 h-4 text-primary" />
                          <span className="text-xs font-mono text-primary">{e.year}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full border border-secondary/40 text-secondary bg-secondary/5 font-mono uppercase tracking-wider">
                            {e.status}
                          </span>
                        </div>
                        <h3 className="font-display text-xl font-semibold mb-1">{e.school}</h3>
                        <p className="text-primary text-sm mb-2 font-medium">{e.degree}</p>
                        <p className="text-muted-foreground text-sm font-sans">{e.detail}</p>
                      </div>
                    </TiltCard>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Education;
