import { Suspense, useMemo, useRef } from "react";
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
    // Fibonacci sphere for even distribution
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

function Galaxy() {
  const nodes = useSkillNodes();
  const group = useRef<THREE.Group>(null!);
  useFrame((_, dt) => {
    if (group.current) {
      group.current.rotation.y += dt * 0.08;
      group.current.rotation.x = Math.sin(Date.now() * 0.0002) * 0.15;
    }
  });
  return (
    <group ref={group}>
      {/* Core */}
      <mesh>
        <icosahedronGeometry args={[0.6, 2]} />
        <meshStandardMaterial
          color="#22d3ee"
          emissive="#a855f7"
          emissiveIntensity={0.8}
          metalness={0.9}
          roughness={0.15}
        />
      </mesh>

      {/* Rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3.6, 0.008, 8, 128]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.35} />
      </mesh>
      <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[3.6, 0.006, 8, 128]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.3} />
      </mesh>

      {nodes.map((node, i) => (
        <group key={i} position={node.position}>
          <mesh>
            <sphereGeometry args={[node.size, 16, 16]} />
            <meshStandardMaterial
              color={node.color}
              emissive={node.color}
              emissiveIntensity={0.9}
              toneMapped={false}
            />
          </mesh>
          <Html
            center
            distanceFactor={9}
            zIndexRange={[10, 0]}
            style={{ pointerEvents: "none" }}
          >
            <div
              className="text-[11px] font-mono whitespace-nowrap px-2 py-0.5 rounded-md backdrop-blur-sm border"
              style={{
                background: "hsl(240 40% 5% / 0.7)",
                borderColor: node.color + "55",
                color: node.color,
                textShadow: `0 0 8px ${node.color}`,
              }}
            >
              {node.label}
            </div>
          </Html>
        </group>
      ))}
    </group>
  );
}

export const SkillsGalaxy = () => {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 9], fov: 55 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[8, 8, 8]} intensity={1.5} color="#22d3ee" />
      <pointLight position={[-8, -6, -8]} intensity={1.5} color="#a855f7" />
      <Suspense fallback={null}>
        <Galaxy />
        <Sparkles count={60} scale={14} size={1.5} speed={0.3} color="#a855f7" />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.6}
        rotateSpeed={0.6}
      />
    </Canvas>
  );
};
