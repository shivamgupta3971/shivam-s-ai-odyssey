import { Suspense } from "react";
import { motion } from "framer-motion";
import { SkillsGalaxy } from "./SkillsGalaxy";
import { SKILL_GROUPS } from "@/data/portfolio";

export const Skills = () => {
  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-40" />
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="section-eyebrow mb-4">// Skills Galaxy</div>
          <h2 className="section-heading">A universe of <span className="text-gradient">capabilities</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Drag to orbit the galaxy. Every star is a tool in the AI engineer's arsenal.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3 h-[520px] md:h-[620px] rounded-2xl glass-card neon-border overflow-hidden relative">
            <Suspense fallback={<div className="grid place-items-center h-full text-muted-foreground">Loading galaxy…</div>}>
              <SkillsGalaxy />
            </Suspense>
            <div className="absolute bottom-3 right-4 text-[10px] font-mono text-muted-foreground/70">
              DRAG · AUTO-ORBIT
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            {SKILL_GROUPS.map((g, i) => (
              <motion.div
                key={g.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="glass-card rounded-xl p-4"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: g.color, boxShadow: `0 0 12px ${g.color}` }}
                  />
                  <h3 className="font-display font-semibold">{g.label}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {g.skills.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] font-mono px-2 py-1 rounded-md border transition-all hover:scale-105"
                      style={{
                        borderColor: g.color + "40",
                        color: g.color,
                        background: g.color + "0d",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
