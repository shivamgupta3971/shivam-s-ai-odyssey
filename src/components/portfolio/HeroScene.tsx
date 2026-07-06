import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, MeshDistortMaterial, Sparkles, Stars, TorusKnot, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
  const ref = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const arr = new Float32Array(1500 * 3);
    for (let i = 0; i < 1500; i++) {
      const r = 8 + Math.random() * 12;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);
  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.y += dt * 0.03;
      ref.current.rotation.x += dt * 0.01;
    }
  });
  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial transparent color="#7dd3fc" size={0.04} sizeAttenuation depthWrite={false} />
    </Points>
  );
}

function CoreOrb() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.25;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
    }
  });
  return (
    <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.8}>
      <mesh ref={ref} scale={1.6}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color="#22d3ee"
          emissive="#a855f7"
          emissiveIntensity={0.6}
          distort={0.45}
          speed={1.6}
          roughness={0.15}
          metalness={0.85}
        />
      </mesh>
    </Float>
  );
}

function OrbitRings() {
  const g1 = useRef<THREE.Group>(null!);
  const g2 = useRef<THREE.Group>(null!);
  const g3 = useRef<THREE.Group>(null!);
  useFrame((_, dt) => {
    if (g1.current) g1.current.rotation.z += dt * 0.2;
    if (g2.current) g2.current.rotation.x += dt * 0.15;
    if (g3.current) g3.current.rotation.y += dt * 0.25;
  });
  return (
    <>
      <group ref={g1}><TorusKnot args={[2.6, 0.02, 200, 12]}><meshBasicMaterial color="#22d3ee" transparent opacity={0.25} /></TorusKnot></group>
      <group ref={g2}><mesh><torusGeometry args={[3.2, 0.015, 12, 128]} /><meshBasicMaterial color="#a855f7" transparent opacity={0.4} /></mesh></group>
      <group ref={g3}><mesh><torusGeometry args={[3.8, 0.01, 12, 128]} /><meshBasicMaterial color="#7dd3fc" transparent opacity={0.3} /></mesh></group>
    </>
  );
}

export const HeroScene = () => {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 6], fov: 55 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <color attach="background" args={["#05050f"]} />
      <fog attach="fog" args={["#05050f", 8, 22]} />
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={2} color="#22d3ee" />
      <pointLight position={[-5, -3, -5]} intensity={2} color="#a855f7" />
      <Suspense fallback={null}>
        <CoreOrb />
        <OrbitRings />
        <ParticleField />
        <Sparkles count={80} scale={12} size={2} speed={0.4} color="#7dd3fc" />
        <Stars radius={40} depth={30} count={800} factor={3} fade speed={0.5} />
      </Suspense>
    </Canvas>
  );
};
