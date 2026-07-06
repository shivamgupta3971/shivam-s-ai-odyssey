import { motion } from "framer-motion";
import { Award, BadgeCheck } from "lucide-react";
import { ACHIEVEMENTS, CERTIFICATIONS } from "@/data/portfolio";

export const Achievements = () => {
  return (
    <section id="achievements" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="section-eyebrow mb-4">// Trophy Room</div>
          <h2 className="section-heading">
            Achievements & <span className="text-gradient">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Achievements */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-primary" />
              <h3 className="font-display text-xl font-semibold">Achievements</h3>
            </div>
            {ACHIEVEMENTS.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="glass-card rounded-2xl p-5 flex items-start gap-4 group hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-primary/10 border border-primary/30 grid place-items-center text-2xl group-hover:scale-110 transition-transform">
                  {a.icon}
                </div>
                <div>
                  <h4 className="font-display font-semibold text-lg mb-1">{a.title}</h4>
                  <p className="text-muted-foreground text-sm">{a.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <BadgeCheck className="w-5 h-5 text-secondary" />
              <h3 className="font-display text-xl font-semibold">Certifications</h3>
            </div>
            {CERTIFICATIONS.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative glass-card rounded-2xl p-5 overflow-hidden group"
              >
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-primary rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="text-[10px] font-mono uppercase tracking-widest text-secondary mb-2">
                  {c.issuer} · {c.code}
                </div>
                <h4 className="font-display font-semibold leading-snug">{c.title}</h4>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-5 text-center"
            >
              <div className="text-4xl font-display font-bold text-gradient">10+</div>
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mt-1">
                National Hackathons
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
