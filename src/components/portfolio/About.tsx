import { motion } from "framer-motion";
import { Terminal, Cpu, Layers } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="md:col-span-2"
          >
            <div className="section-eyebrow mb-4">// About</div>
            <h2 className="section-heading">
              The <span className="text-gradient">AI Lab</span> of a builder.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="md:col-span-3 space-y-5 text-muted-foreground text-lg leading-relaxed"
          >
            <p>
              I'm <span className="text-foreground font-medium">Shivam Gupta</span>, a Computer Science undergrad specialising in{" "}
              <span className="text-primary">Artificial Intelligence & Machine Learning</span>. I build production-grade AI systems that fuse computer vision, LLMs and real-time telemetry into products people can actually use.
            </p>
            <p>
              My work spans <span className="text-secondary">agentic AI</span>, <span className="text-secondary">RAG pipelines</span>, <span className="text-secondary">pose estimation</span> and full-stack engineering — always tuned for latency, clarity and delight.
            </p>

            <div className="grid sm:grid-cols-3 gap-3 pt-4">
              {[
                { icon: Terminal, k: "Focus", v: "Real-time AI Systems" },
                { icon: Cpu, k: "Depth", v: "CV · LLMs · Agents" },
                { icon: Layers, k: "Stack", v: "End-to-end products" },
              ].map((s) => (
                <div key={s.k} className="glass-card rounded-xl p-4">
                  <s.icon className="w-5 h-5 text-primary mb-2" />
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">{s.k}</div>
                  <div className="font-medium text-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
