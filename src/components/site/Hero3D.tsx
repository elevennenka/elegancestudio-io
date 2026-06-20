import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import type { Mesh, Group } from "three";

function GoldOrb({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.3;
    ref.current.rotation.x = state.clock.elapsedTime * 0.15;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.6}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color="#d4af6a"
          metalness={1}
          roughness={0.15}
          distort={0.35}
          speed={1.2}
        />
      </mesh>
    </Float>
  );
}

function GlassRing({ position }: { position: [number, number, number] }) {
  const ref = useRef<Mesh>(null);
  useFrame((s) => {
    if (!ref.current) return;
    ref.current.rotation.x = s.clock.elapsedTime * 0.4;
    ref.current.rotation.z = s.clock.elapsedTime * 0.2;
  });
  return (
    <Float speed={1} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={ref} position={position}>
        <torusGeometry args={[1.1, 0.06, 32, 100]} />
        <meshPhysicalMaterial
          color="#f5e6c4"
          metalness={0.9}
          roughness={0.05}
          transmission={0.5}
          thickness={0.5}
        />
      </mesh>
    </Float>
  );
}

function Scene({ mouse }: { mouse: { x: number; y: number } }) {
  const group = useRef<Group>(null);
  useFrame(() => {
    if (!group.current) return;
    group.current.rotation.y += (mouse.x * 0.3 - group.current.rotation.y) * 0.05;
    group.current.rotation.x += (-mouse.y * 0.2 - group.current.rotation.x) * 0.05;
  });
  return (
    <group ref={group}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#fff1d6" />
      <pointLight position={[-5, -3, -2]} intensity={2} color="#d4af6a" />
      <pointLight position={[3, -4, 3]} intensity={1.5} color="#ffb56b" />

      <GoldOrb position={[0, 0, 0]} scale={1.4} />
      <GoldOrb position={[-2.6, 1.2, -1]} scale={0.4} />
      <GoldOrb position={[2.4, -1.1, -0.5]} scale={0.5} />
      <GlassRing position={[1.8, 1.3, 0]} />
      <GlassRing position={[-2, -1.5, 0.5]} />

      <Sparkles count={80} size={2.5} scale={[10, 6, 6]} speed={0.4} color="#f5d589" />
      <Environment preset="night" />
    </group>
  );
}

export function Hero3D() {
  const mouse = useRef({ x: 0, y: 0 });
  return (
    <div
      className="absolute inset-0"
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mouse.current.x = (e.clientX - r.left) / r.width - 0.5;
        mouse.current.y = (e.clientY - r.top) / r.height - 0.5;
      }}
    >
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          <Scene mouse={mouse.current} />
        </Suspense>
      </Canvas>
    </div>
  );
}
