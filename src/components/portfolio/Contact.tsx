import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PROFILE, RESUME_URL } from "@/data/portfolio";

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
            <div className="section-eyebrow mb-4">// Contact</div>
            <h2 className="section-heading">
              Let's build the <span className="text-gradient">next AI product</span>.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Open to internships, research collaborations, and full-stack AI engineering roles at teams building at the frontier.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <Button asChild variant="hero" size="lg">
                <a href={`mailto:${PROFILE.email}`}>
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </a>
              </Button>
              <Button asChild variant="neon" size="lg">
                <a href={RESUME_URL} download="Shivam_Gupta_Resume.pdf">
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-left">
              {items.map((it) => {
                const Tag: any = it.href ? "a" : "div";
                return (
                  <Tag
                    key={it.label}
                    href={it.href}
                    target={it.href?.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="glass rounded-xl p-4 flex items-center gap-3 hover:border-primary/60 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-primary/10 border border-primary/30 grid place-items-center group-hover:scale-110 transition-transform">
                      <it.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                        {it.label}
                      </div>
                      <div className="text-sm font-medium truncate">{it.value}</div>
                    </div>
                  </Tag>
                );
              })}
            </div>
          </motion.div>

          <footer className="text-center mt-12 text-sm text-muted-foreground">
            <p>
              © 2026 <span className="text-foreground">Shivam Gupta</span> · Crafted with
              React Three Fiber, GSAP & Framer Motion
            </p>
          </footer>
        </div>
      </div>
    </section>
  );
};
