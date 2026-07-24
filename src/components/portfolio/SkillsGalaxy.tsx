import { Suspense, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls, Sparkles } from "@react-three/drei";
import * as THREE from "three";
import { SKILL_GROUPS } from "@/data/portfolio";

interface Node {
  label: string;
  color: string;
  position: [number, number, number];
  size: number;
}

function useSkillNodes(): Node[] {
  return useMemo(() => {
    const nodes: Node[] = [];
    const all: { label: string; color: string }[] = [];
    SKILL_GROUPS.forEach((g) => g.skills.forEach((s) => all.push({ label: s, color: g.color })));
    const n = all.length;
    const golden = Math.PI * (3 - Math.sqrt(5));
    all.forEach((s, i) => {
      const y = 1 - (i / (n - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = golden * i;
      const x = Math.cos(theta) * r;
      const z = Math.sin(theta) * r;
      const R = 3.6;
      nodes.push({ ...s, position: [x * R, y * R, z * R], size: 0.14 });
    });
    return nodes;
  }, []);
}

interface GalaxyProps {
  hoveredNode: number | null;
  setHoveredNode: (index: number | null) => void;
}

function Galaxy({ hoveredNode, setHoveredNode }: GalaxyProps) {
  const nodes = useSkillNodes();
  const group = useRef<THREE.Group>(null!);
  
  useFrame((_, dt) => {
    if (group.current) {
      const speedFactor = hoveredNode !== null ? 0.1 : 1.0;
      group.current.rotation.y += dt * 0.08 * speedFactor;
      group.current.rotation.x = Math.sin(Date.now() * 0.0002) * 0.15 * speedFactor;
    }
  });
  
  return (
    <group ref={group}>
      {/* Core */}
      <mesh>
        <icosahedronGeometry args={[0.6, 2]} />
        <meshStandardMaterial
          color="#ff7847"
          emissive="#9b33ff"
          emissiveIntensity={hoveredNode !== null ? 0.4 : 0.8}
          metalness={0.9}
          roughness={0.15}
        />
      </mesh>

      {/* Rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3.6, 0.008, 8, 128]} />
        <meshBasicMaterial color="#ff7847" transparent opacity={hoveredNode !== null ? 0.15 : 0.35} />
      </mesh>
      <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[3.6, 0.006, 8, 128]} />
        <meshBasicMaterial color="#9b33ff" transparent opacity={0.3} />
      </mesh>

      {nodes.map((node, i) => {
        const isHovered = hoveredNode === i;
        
        return (
          <group key={i} position={node.position}>
            <mesh
              scale={isHovered ? 1.85 : 1.0}
              onPointerOver={(e) => {
                e.stopPropagation();
                setHoveredNode(i);
              }}
              onPointerOut={() => {
                setHoveredNode(null);
              }}
            >
              <sphereGeometry args={[node.size, 16, 16]} />
              <meshStandardMaterial
                color={node.color}
                emissive={node.color}
                emissiveIntensity={isHovered ? 2.8 : 0.9}
                toneMapped={false}
              />
            </mesh>
            <Html
              center
              distanceFactor={9}
              zIndexRange={isHovered ? [80, 20] : [10, 0]}
              style={{ pointerEvents: "none" }}
            >
              <div
                className="text-[11px] font-mono whitespace-nowrap px-2 py-0.5 rounded-md backdrop-blur-sm border transition-all duration-300"
                style={{
                  background: isHovered ? "hsl(240 40% 10% / 0.9)" : "hsl(240 40% 5% / 0.7)",
                  borderColor: isHovered ? node.color : node.color + "55",
                  color: isHovered ? "#ffffff" : node.color,
                  textShadow: isHovered 
                    ? `0 0 12px ${node.color}, 0 0 20px ${node.color}` 
                    : `0 0 8px ${node.color}`,
                  boxShadow: isHovered ? `0 0 20px ${node.color}33` : "none",
                  transform: isHovered ? "scale(1.25) translateY(-5px)" : "none",
                  fontWeight: isHovered ? "700" : "normal",
                }}
              >
                {node.label}
              </div>
            </Html>
          </group>
        );
      })}
    </group>
  );
}

export const SkillsGalaxy = () => {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 9], fov: 55 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[8, 8, 8]} intensity={1.5} color="#ff7847" />
      <pointLight position={[-8, -6, -8]} intensity={1.5} color="#9b33ff" />
      <Suspense fallback={null}>
        <Galaxy hoveredNode={hoveredNode} setHoveredNode={setHoveredNode} />
        <Sparkles 
          count={60} 
          scale={14} 
          size={1.5} 
          speed={hoveredNode !== null ? 0.05 : 0.3} 
          color="#9b33ff" 
        />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={hoveredNode === null}
        autoRotateSpeed={0.5}
        rotateSpeed={0.6}
      />
    </Canvas>
  );
};
