import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PROFILE, RESUME_URL } from "@/data/portfolio";
import { TextScramble } from "./TextScramble";
import { TiltCard } from "./TiltCard";
import { Magnetic } from "./Magnetic";

export const Contact = () => {
  const items = [
    { icon: Mail, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { icon: Phone, label: "Phone", value: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: "Location", value: PROFILE.location },
    { icon: Github, label: "GitHub", value: PROFILE.github.replace("https://", ""), href: PROFILE.github },
    { icon: Linkedin, label: "LinkedIn", value: PROFILE.linkedin.replace("https://", ""), href: PROFILE.linkedin },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-70 pointer-events-none" />
      <div className="container mx-auto px-6 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="glass-card neon-border rounded-3xl p-8 md:p-14 text-center"
          >
            <div className="section-eyebrow mb-4">
              // <TextScramble text="Contact" delay={0.1} />
            </div>
            <h2 className="section-heading">
              Let's build the <span className="text-gradient"><TextScramble text="next AI product" delay={0.3} /></span>.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 font-sans">
              Open to internships, research collaborations, and full-stack AI engineering roles at teams building at the frontier.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <Magnetic>
                <Button asChild variant="hero" size="lg">
                  <a href={`mailto:${PROFILE.email}`}>
                    <Mail className="w-4 h-4" />
                    Get in Touch
                  </a>
                </Button>
              </Magnetic>
              <Magnetic>
                <Button asChild variant="neon" size="lg">
                  <a href={RESUME_URL} download="Shivam_Gupta_Resume.pdf">
                    <Download className="w-4 h-4" />
                    Download Resume
                  </a>
                </Button>
              </Magnetic>
            </div>

            <motion.div 
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-left"
            >
              {items.map((it) => {
                const innerContent = (
                  <div className="glass rounded-xl p-4 flex items-center gap-3 border border-border/50 hover:border-primary/30 transition-colors h-full">
                    <div className="w-10 h-10 rounded-lg bg-gradient-primary/10 border border-primary/30 grid place-items-center group-hover:scale-110 transition-transform shrink-0">
                      <it.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                        {it.label}
                      </div>
                      <div className="text-sm font-semibold truncate text-foreground">{it.value}</div>
                    </div>
                  </div>
                );

                return (
                  <motion.div
                    key={it.label}
                    variants={{
                      hidden: { opacity: 0, y: 25, scale: 0.96 },
                      visible: { 
                        opacity: 1, 
                        y: 0, 
                        scale: 1,
                        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
                      }
                    }}
                  >
                    <TiltCard
                      maxTilt={10}
                      scale={1.03}
                      glowColor="rgba(5, 244, 112, 0.12)"
                      className={`rounded-xl overflow-hidden ${it.href ? "cursor-pointer" : ""}`}
                    >
                      {it.href ? (
                        <a
                          href={it.href}
                          target={it.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="block h-full group"
                        >
                          {innerContent}
                        </a>
                      ) : (
                        innerContent
                      )}
                    </TiltCard>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          <footer className="text-center mt-20 pb-8 text-sm text-muted-foreground font-sans flex flex-col items-center gap-6">
            {/* Stylish SG Emblem */}
            <div className="relative group cursor-pointer select-none">
              {/* Outer Pulsing Glow */}
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-md opacity-40 group-hover:opacity-75 group-hover:blur-lg transition-all duration-500 scale-95" />
              
              {/* Inner glass logo container */}
              <div className="relative w-12 h-12 rounded-2xl bg-[#0f0f12]/80 border border-primary/30 flex items-center justify-center font-display font-extrabold text-xl shadow-2xl backdrop-blur-md group-hover:border-primary/60 group-hover:scale-105 transition-all duration-500 overflow-hidden">
                {/* Diagonal sweep light animation */}
                <div className="absolute inset-0 w-1/2 h-full bg-white/5 skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000 ease-out" />
                <span className="text-gradient">SG</span>
              </div>
            </div>
            
            <p className="tracking-wide">
              © 2026 <span className="text-foreground font-medium">Shivam Gupta</span> · All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </section>
  );
};
export default Contact;
