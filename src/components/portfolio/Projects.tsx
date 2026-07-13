import { motion } from "framer-motion";
import { PROJECTS } from "@/data/portfolio";

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
          <div className="section-eyebrow mb-4">// Exhibition Hall</div>
          <h2 className="section-heading">
            Projects in the <span className="text-gradient">AI Lab</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Four flagship exhibits — each an interactive experiment in AI, computer vision, or agentic systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
              className="group relative glass-card neon-border rounded-3xl overflow-hidden hover:shadow-neon transition-all duration-500"
            >
              {/* Project Showcase Image */}
              <div className="h-56 md:h-64 relative overflow-hidden">
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

              <div className="p-6 md:p-7">
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-1">{p.name}</h3>
                <p className="text-sm font-mono mb-4" style={{ color: p.color }}>
                  {p.subtitle}
                </p>
                <p className="text-muted-foreground mb-5 leading-relaxed">{p.summary}</p>

                <ul className="space-y-1.5 mb-5">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

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
              </div>

              <div
                className="absolute inset-x-0 -bottom-px h-px opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(90deg, transparent, ${p.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
