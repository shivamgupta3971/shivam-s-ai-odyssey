import { Suspense, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles, Stars, TorusKnot, Points, PointMaterial } from "@react-three/drei";
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
      <PointMaterial transparent color="#ffcca3" size={0.04} sizeAttenuation depthWrite={false} />
    </Points>
  );
}

function CoreOrb() {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.elapsedTime;
      ref.current.rotation.y = time * (hovered ? 0.45 : 0.2);
      ref.current.rotation.x = Math.sin(time * 0.3) * (hovered ? 0.3 : 0.15);
    }
  });
  
  return (
    <Float speed={hovered ? 2.5 : 1.4} rotationIntensity={hovered ? 1.0 : 0.5} floatIntensity={hovered ? 1.2 : 0.8}>
      <mesh 
        ref={ref} 
        scale={hovered ? 1.45 : 1.15}
        onPointerOver={(e) => { e.stopPropagation(); setHovered(true); }}
        onPointerOut={() => setHovered(false)}
      >
        <icosahedronGeometry args={[1, 6]} />
        <MeshDistortMaterial
          color={hovered ? "#ff7847" : "#d45124"}
          emissive={hovered ? "#ff4fa5" : "#9b33ff"}
          emissiveIntensity={hovered ? 0.65 : 0.3}
          distort={hovered ? 0.55 : 0.45}
          speed={hovered ? 3.0 : 1.8}
          roughness={0.05}
          metalness={0.95}
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
    if (g1.current) g1.current.rotation.z += dt * 0.25;
    if (g2.current) g2.current.rotation.x += dt * 0.18;
    if (g3.current) g3.current.rotation.y += dt * 0.3;
  });
  
  return (
    <>
      <group ref={g1}>
        <TorusKnot args={[2.5, 0.02, 200, 12]}>
          <meshBasicMaterial color="#ff7847" transparent opacity={0.3} />
        </TorusKnot>
      </group>
      <group ref={g2}>
        <mesh>
          <torusGeometry args={[3.1, 0.015, 12, 128]} />
          <meshBasicMaterial color="#9b33ff" transparent opacity={0.45} />
        </mesh>
      </group>
      <group ref={g3}>
        <mesh>
          <torusGeometry args={[3.7, 0.01, 12, 128]} />
          <meshBasicMaterial color="#ffcca3" transparent opacity={0.35} />
        </mesh>
      </group>
    </>
  );
}

function InteractiveGroup({ children }: { children: React.ReactNode }) {
  const ref = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    if (ref.current) {
      const width = state.viewport?.width ?? 10;
      const targetX = width < 7 ? 0 : 1.8;
      const targetY = width < 7 ? -0.8 : 0.2;
      ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, targetX, 0.05);
      ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, targetY, 0.05);
      
      const pX = state.pointer?.x ?? state.mouse?.x ?? 0;
      const pY = state.pointer?.y ?? state.mouse?.y ?? 0;
      const mouseX = pX * 0.25;
      const mouseY = pY * 0.25;
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, mouseX, 0.05);
      ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, -mouseY, 0.05);
    }
  });
  
  return <group ref={ref}>{children}</group>;
}

function CameraRig() {
  useFrame((state) => {
    const scrollY = window.scrollY || 0;
    const targetZ = 6 + scrollY * 0.0035;
    const targetY = -scrollY * 0.002;
    
    const pX = state.pointer?.x ?? state.mouse?.x ?? 0;
    const pY = state.pointer?.y ?? state.mouse?.y ?? 0;
    const mouseX = pX * 0.4;
    const mouseY = pY * 0.4;
    
    const nextX = THREE.MathUtils.lerp(state.camera.position.x, mouseX, 0.05);
    const nextY = THREE.MathUtils.lerp(state.camera.position.y, targetY + mouseY, 0.05);
    const nextZ = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.05);
    
    if (!isNaN(nextX) && !isNaN(nextY) && !isNaN(nextZ)) {
      state.camera.position.set(nextX, nextY, nextZ);
    }
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export const HeroScene = () => {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 6], fov: 55 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <fog attach="fog" args={["#05040b", 8, 22]} />
      <ambientLight intensity={0.45} />
      <pointLight position={[5, 5, 5]} intensity={2.2} color="#ff7847" />
      <pointLight position={[-5, -3, -5]} intensity={2.2} color="#9b33ff" />
      <Suspense fallback={null}>
        <InteractiveGroup>
          <CoreOrb />
          <OrbitRings />
        </InteractiveGroup>
        <ParticleField />
        <Sparkles count={90} scale={12} size={2} speed={0.4} color="#ffcca3" />
        <Stars radius={40} depth={30} count={900} factor={3.2} fade speed={0.5} />
      </Suspense>
      <CameraRig />
    </Canvas>
  );
};
