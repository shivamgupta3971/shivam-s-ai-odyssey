import { motion } from "framer-motion";
import { PROJECTS } from "@/data/portfolio";
import { Github } from "lucide-react";
import { TextScramble } from "./TextScramble";
import { TiltCard } from "./TiltCard";

export const Projects = () => {
  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-eyebrow mb-4">
            // <TextScramble text="Exhibition Hall" delay={0.1} />
          </div>
          <h2 className="section-heading">
            Projects in the <span className="text-gradient"><TextScramble text="AI Lab" delay={0.3} /></span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-sans">
            Four flagship exhibits — each an interactive experiment in AI, computer vision, or agentic systems.
          </p>
        </motion.div>

        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.id}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.96 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
                }
              }}
              className="h-full"
            >
              <TiltCard
                maxTilt={6}
                scale={1.015}
                glowColor={p.color + "22"}
                className="h-full rounded-3xl overflow-hidden"
              >
                <div className="group relative glass-card rounded-3xl overflow-hidden border border-border/50 hover:border-primary/30 transition-colors h-full flex flex-col">
                  {/* Project Showcase Image */}
                  <div className="h-56 md:h-64 relative overflow-hidden shrink-0">
                    {/* Background Showcase Image */}
                    <img
                      src={p.image}
                      alt={`${p.name} Showcase`}
                      className="absolute inset-0 w-full h-full object-cover object-top filter brightness-[0.7] contrast-[1.05] group-hover:scale-105 group-hover:brightness-[0.85] transition-all duration-700 ease-out"
                    />

                    {/* Neon color gradient overlay */}
                    <div
                      className="absolute inset-0 opacity-35 mix-blend-color-dodge transition-opacity group-hover:opacity-25 duration-500"
                      style={{
                        background: `radial-gradient(circle at 50% 60%, ${p.color} 0%, transparent 70%)`,
                      }}
                    />

                    <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1 rounded-full glass text-[10px] font-mono uppercase tracking-widest">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: p.color, boxShadow: `0 0 8px ${p.color}` }} />
                      Exhibit 0{i + 1}
                    </div>
                  </div>

                  <div className="p-6 md:p-7 flex flex-col flex-grow">
                    <h3 className="font-display text-2xl md:text-3xl font-bold mb-1">{p.name}</h3>
                    <p className="text-sm font-mono mb-4" style={{ color: p.color }}>
                      {p.subtitle}
                    </p>
                    <p className="text-muted-foreground mb-5 leading-relaxed font-sans text-sm">{p.summary}</p>

                    <ul className="space-y-1.5 mb-5 flex-grow font-sans">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">▸</span>
                          <span className="text-sm">{h}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between gap-4 mt-6 pt-4 border-t border-border/40">
                      <div className="flex flex-wrap gap-1.5">
                        {p.stack.map((s) => (
                          <span
                            key={s}
                            className="text-[10px] font-mono px-2 py-1 rounded-md bg-muted border border-border text-muted-foreground"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg glass border border-primary/20 hover:border-primary/60 hover:scale-105 hover:shadow-neon text-muted-foreground hover:text-primary transition-all duration-300 shrink-0"
                        aria-label={`View ${p.name} GitHub Repository`}
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>

                  <div
                    className="absolute inset-x-0 -bottom-px h-px opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: `linear-gradient(90deg, transparent, ${p.color}, transparent)` }}
                  />
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default Projects;
