import { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function HypercarMesh({ neonColor }: { neonColor: string }) {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh position={[0, 0.56, 0]} castShadow>
        <boxGeometry args={[4.3, 0.58, 1.92]} />
        <meshStandardMaterial color="#0b1222" metalness={0.9} roughness={0.18} />
      </mesh>
      <mesh position={[-0.15, 1.05, 0]} castShadow>
        <boxGeometry args={[2.0, 0.52, 1.48]} />
        <meshStandardMaterial color="#040812" metalness={0.95} roughness={0.05} transparent opacity={0.88} />
      </mesh>
      <mesh position={[2.16, 0.65, 0]}>
        <boxGeometry args={[0.08, 0.06, 1.72]} />
        <meshBasicMaterial color={neonColor} />
      </mesh>
      <mesh position={[-2.16, 0.72, 0]}>
        <boxGeometry args={[0.08, 0.07, 1.82]} />
        <meshBasicMaterial color={neonColor} />
      </mesh>
    </group>
  );
}

export function Showcase3D() {
  const [neonColor, setNeonColor] = useState('#1677FF');
  const [autoRotate, setAutoRotate] = useState(true);

  return (
    <section id="showcase-3d" className="py-24 px-5 sm:px-8 max-w-7xl mx-auto">
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neonblue mb-2">Interactive 3D Studio</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white">360° Showroom Experience</h2>
        </div>
        <div className="flex items-center gap-3">
          {['#1677FF', '#00E5FF', '#6366F1'].map((c) => (
            <button
              key={c}
              onClick={() => setNeonColor(c)}
              className="w-5 h-5 rounded-full border border-white/50"
              style={{ backgroundColor: c }}
            />
          ))}
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className="px-3.5 py-2 rounded-lg text-xs font-medium bg-obsidian border border-electric/35 text-neonblue"
          >
            Auto-Orbit: {autoRotate ? 'ON' : 'OFF'}
          </button>
        </div>
      </div>
      <div className="glass-card rounded-2xl h-[480px] overflow-hidden">
        <Canvas shadows camera={{ position: [5.5, 2.5, 5.5], fov: 42 }}>
          <fog attach="fog" args={['#05070B', 6, 22]} />
          <ambientLight intensity={1.2} />
          <pointLight position={[-4, 2.5, 4]} color={neonColor} intensity={3.5} />
          <HypercarMesh neonColor={neonColor} />
          <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            <circleGeometry args={[14, 64]} />
            <meshStandardMaterial color="#060911" roughness={0.18} metalness={0.85} />
          </mesh>
          <OrbitControls enablePan={false} autoRotate={autoRotate} />
        </Canvas>
      </div>
    </section>
  );
}
