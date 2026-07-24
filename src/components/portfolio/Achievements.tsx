import { motion } from "framer-motion";
import { Award, BadgeCheck, ExternalLink } from "lucide-react";
import { ACHIEVEMENTS, CERTIFICATIONS } from "@/data/portfolio";
import { TextScramble } from "./TextScramble";
import { TiltCard } from "./TiltCard";

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
          <div className="section-eyebrow mb-4">
            // <TextScramble text="Trophy Room" delay={0.1} />
          </div>
          <h2 className="section-heading">
            Achievements & <span className="text-gradient"><TextScramble text="Certifications" delay={0.3} /></span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Achievements */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-primary" />
              <h3 className="font-display text-xl font-semibold">Achievements</h3>
            </div>
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="space-y-4"
            >
              {ACHIEVEMENTS.map((a) => (
                <motion.div
                  key={a.title}
                  variants={{
                    hidden: { opacity: 0, x: -30, scale: 0.98 },
                    visible: { 
                      opacity: 1, 
                      x: 0, 
                      scale: 1,
                      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
                    }
                  }}
                >
                  <TiltCard
                    maxTilt={6}
                    scale={1.015}
                    glowColor="rgba(5, 244, 112, 0.12)"
                    className="rounded-2xl overflow-hidden"
                  >
                    <div className="glass-card rounded-2xl p-5 flex items-start gap-4 group border border-border/50 hover:border-primary/30 transition-all duration-300">
                      <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-primary/10 border border-primary/30 grid place-items-center text-2xl group-hover:scale-110 transition-transform">
                        {a.icon}
                      </div>
                      <div>
                        <h4 className="font-display font-semibold text-lg mb-1">{a.title}</h4>
                        <p className="text-muted-foreground text-sm font-sans">{a.detail}</p>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Certifications */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <BadgeCheck className="w-5 h-5 text-secondary" />
              <h3 className="font-display text-xl font-semibold">Certifications</h3>
            </div>
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="space-y-4"
            >
              {CERTIFICATIONS.map((c) => {
                const cert = c as {
                  title: string;
                  code: string;
                  issuer: string;
                  credentialId?: string;
                  certificationNumber?: string;
                  dateEarned?: string;
                  dateExpired?: string;
                  url?: string;
                };

                const CardContent = (
                  <div className="glass-card rounded-2xl p-5 group border border-border/50 hover:border-primary/30 transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-primary rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                    
                    <div>
                      <div className="flex justify-between items-start gap-2 mb-2">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-secondary">
                          {cert.issuer} · {cert.code}
                        </span>
                        {cert.url && (
                          <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                        )}
                      </div>
                      <h4 className="font-display font-semibold leading-snug group-hover:text-primary transition-colors duration-300">
                        {cert.title}
                      </h4>
                    </div>
                    
                    <div className="relative z-10">
                      {cert.credentialId && (
                        <div className="text-[11px] font-mono text-muted-foreground/80 mt-3 flex flex-col gap-0.5">
                          <span>ID: {cert.credentialId}</span>
                          {cert.certificationNumber && (
                            <span>Cert No: {cert.certificationNumber}</span>
                          )}
                        </div>
                      )}
                      {cert.dateEarned && (
                        <div className="text-[10px] font-mono text-muted-foreground/60 mt-2">
                          Issued: {cert.dateEarned} {cert.dateExpired ? `· Expires: ${cert.dateExpired}` : ''}
                        </div>
                      )}
                    </div>
                  </div>
                );

                return (
                  <motion.div
                    key={cert.title}
                    variants={{
                      hidden: { opacity: 0, y: 30, scale: 0.97 },
                      visible: { 
                        opacity: 1, 
                        y: 0, 
                        scale: 1,
                        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
                      }
                    }}
                  >
                    <TiltCard
                      maxTilt={6}
                      scale={1.015}
                      glowColor="rgba(0, 229, 201, 0.12)"
                      className={`rounded-2xl overflow-hidden ${cert.url ? "cursor-pointer" : ""}`}
                    >
                      {cert.url ? (
                        <a href={cert.url} target="_blank" rel="noopener noreferrer" className="block">
                          {CardContent}
                        </a>
                      ) : (
                        CardContent
                      )}
                    </TiltCard>
                  </motion.div>
                );
              })}
            </motion.div>

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
export default Achievements;
