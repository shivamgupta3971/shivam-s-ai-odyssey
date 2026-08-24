import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Brain, Code2, Zap, Download, ArrowDown } from "lucide-react";
import { HeroScene } from "./HeroScene";
import { Button } from "@/components/ui/button";
import { RESUME_URL, PROFILE } from "@/data/portfolio";
import { TextScramble } from "./TextScramble";
import { TiltCard } from "./TiltCard";
import { Magnetic } from "./Magnetic";

export const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen w-full overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D canvas */}
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      {/* Grid + vignette overlay */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background pointer-events-none" />

      {/* Interactive Ambient Mouse Glow */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-700"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle 500px at ${mousePos.x}px ${mousePos.y}px, rgba(34, 211, 238, 0.1), rgba(168, 85, 247, 0.05), transparent 80%)`
        }}
      />

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
            <TextScramble text="AI Engineer" delay={0.1} duration={0.5} /> · {PROFILE.location}
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display leading-[1.05] mb-6">
            <span className="block select-all cursor-default">
              <TextScramble text="Shivam" delay={0.25} duration={0.7} />
            </span>
            <span className="block text-gradient select-all cursor-default">
              <TextScramble text="Gupta" delay={0.45} duration={0.7} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed font-sans"
          >
            I build{" "}
            <span className="text-primary font-medium">real-time AI systems</span>,{" "}
            <span className="text-secondary font-medium">computer vision pipelines</span> and{" "}
            <span className="text-primary font-medium">LLM-powered products</span> — from pose-aware fitness coaches to RAG-driven clinical platforms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            <Magnetic>
              <Button asChild variant="hero" size="lg">
                <a href={RESUME_URL} download="Shivam_Gupta_Resume.pdf">
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </Button>
            </Magnetic>
            <Magnetic>
              <Button asChild variant="neon" size="lg">
                <a href="#projects">
                  Explore Lab
                  <ArrowDown className="w-4 h-4" />
                </a>
              </Button>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl"
          >
            {[
              { icon: Brain, label: "AI / ML", value: "LLMs · RAG · CV", glow: "rgba(5, 244, 112, 0.15)" },
              { icon: Code2, label: "Stack", value: "Python · TS · React", glow: "rgba(0, 229, 201, 0.15)" },
              { icon: Zap, label: "Hackathons", value: "10+ National", glow: "rgba(5, 244, 112, 0.15)" },
              { icon: Sparkles, label: "Projects", value: "4 Flagship", glow: "rgba(0, 229, 201, 0.15)" },
            ].map((s) => (
              <TiltCard 
                key={s.label} 
                maxTilt={12} 
                scale={1.03}
                glowColor={s.glow}
                className="rounded-xl overflow-hidden h-full"
              >
                <div className="glass rounded-xl p-3.5 flex items-center gap-3 h-full border border-border/50 hover:border-primary/30 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-gradient-primary/20 border border-primary/30 grid place-items-center shrink-0">
                    <s.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">{s.label}</div>
                    <div className="text-xs font-semibold">{s.value}</div>
                  </div>
                </div>
              </TiltCard>
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
export default Hero;
