import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";
import { PROJECTS } from "@/data/portfolio";
import { ExternalLink, Github } from "lucide-react";

function ProjectOrb({ color, color2 }: { color: string; color2: string }) {
  const ref = useRef<THREE.Mesh>(null!);
  const ring = useRef<THREE.Mesh>(null!);
  useFrame((state, dt) => {
    if (ref.current) {
      ref.current.rotation.y += dt * 0.6;
      ref.current.rotation.x += dt * 0.3;
    }
    if (ring.current) ring.current.rotation.z += dt * 0.4;
  });
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[3, 3, 3]} intensity={2} color={color} />
      <pointLight position={[-3, -3, -3]} intensity={2} color={color2} />
      <Float speed={2} rotationIntensity={0.6} floatIntensity={1}>
        <mesh ref={ref}>
          <icosahedronGeometry args={[1.2, 2]} />
          <meshStandardMaterial
            color={color}
            emissive={color2}
            emissiveIntensity={0.6}
            metalness={0.9}
            roughness={0.15}
            wireframe
          />
        </mesh>
        <mesh ref={ring} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.8, 0.02, 8, 100]} />
          <meshBasicMaterial color={color} transparent opacity={0.6} />
        </mesh>
      </Float>
    </>
  );
}

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
              {/* 3D exhibit */}
              <div
                className="h-56 md:h-64 relative"
                style={{
                  background: `radial-gradient(circle at 50% 60%, ${p.color}22, transparent 70%)`,
                }}
              >
                <Suspense fallback={null}>
                  <Canvas
                    dpr={[1, 1.5]}
                    camera={{ position: [0, 0, 4.5], fov: 50 }}
                    gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
                  >
                    <ProjectOrb color={p.color} color2={p.color2} />
                  </Canvas>
                </Suspense>

                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full glass text-[10px] font-mono uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: p.color, boxShadow: `0 0 8px ${p.color}` }} />
                  Exhibit 0{i + 1}
                </div>
                <div className="absolute top-4 right-4 text-3xl">{p.icon}</div>
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
