import { motion } from "framer-motion";
import { Sparkles, Brain, Code2, Zap } from "lucide-react";
import { HeroScene } from "./HeroScene";
import { Button } from "@/components/ui/button";
import { RESUME_URL, PROFILE } from "@/data/portfolio";
import { Download, ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden">
      {/* 3D canvas */}
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      {/* Grid + vignette overlay */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto min-h-screen flex flex-col justify-center px-6 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="section-eyebrow mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            AI Engineer · {PROFILE.location}
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display leading-[1.05] mb-6">
            <span className="block">Shivam</span>
            <span className="block text-gradient">Gupta</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed"
          >
            I build{" "}
            <span className="text-primary">real-time AI systems</span>,{" "}
            <span className="text-secondary">computer vision pipelines</span> and{" "}
            <span className="text-primary">LLM-powered products</span> — from pose-aware fitness coaches to RAG-driven clinical platforms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            <Button asChild variant="hero" size="lg">
              <a href={RESUME_URL} download="Shivam_Gupta_Resume.pdf">
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </Button>
            <Button asChild variant="neon" size="lg">
              <a href="#projects">
                Explore Lab
                <ArrowDown className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl"
          >
            {[
              { icon: Brain, label: "AI / ML", value: "LLMs · RAG · CV" },
              { icon: Code2, label: "Stack", value: "Python · TS · React" },
              { icon: Zap, label: "Hackathons", value: "10+ National" },
              { icon: Sparkles, label: "Projects", value: "4 Flagship" },
            ].map((s) => (
              <div key={s.label} className="glass rounded-xl p-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-primary/20 border border-primary/30 grid place-items-center">
                  <s.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">{s.label}</div>
                  <div className="text-sm font-medium">{s.value}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-muted-foreground text-xs font-mono flex flex-col items-center gap-2"
      >
        <span>SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};
