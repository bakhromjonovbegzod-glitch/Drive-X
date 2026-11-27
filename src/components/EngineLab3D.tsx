import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { Cpu, CheckCircle2, AlertTriangle, Sparkles } from 'lucide-react';
import { ENGINE_LAB, EngineSpec } from '../data/knowledge';
import { Lang, UI_TEXT } from '../data/i18n';

function EngineCore3D({ activeId }: { activeId: string }) {
  const groupRef = useRef<THREE.Group>(null);
  const pistonCount = activeId === 'v12' ? 6 : activeId === 'v10' ? 5 : activeId === 'v8' ? 4 : activeId === 'rotary' ? 3 : 4;

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.004;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.4) * 0.06;
    }
  });

  const isVLayout = activeId.startsWith('v');
  const isBoxer = activeId === 'boxer';

  return (
    <group ref={groupRef}>
      <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.22, 0.22, 3.2, 24]} />
        <meshStandardMaterial color="#1e293b" metalness={0.92} roughness={0.2} />
      </mesh>
      <mesh position={[-1.7, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.78, 0.78, 0.14, 36]} />
        <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.25} />
      </mesh>
      <mesh position={[-1.78, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[0.74, 0.03, 16, 48]} />
        <meshBasicMaterial color="#1677FF" />
      </mesh>

      {Array.from({ length: pistonCount }).map((_, idx) => {
        const x = (idx - (pistonCount - 1) / 2) * 0.62;
        if (isVLayout || isBoxer) {
          const angle = isBoxer ? Math.PI / 2 : 0.65;
          return (
            <group key={idx} position={[x, 0, 0]}>
              <mesh position={[0, Math.cos(angle) * 0.7, Math.sin(angle) * 0.7]} rotation={[angle, 0, 0]}>
                <cylinderGeometry args={[0.2, 0.2, 0.75, 20]} />
                <meshStandardMaterial color="#334155" metalness={0.85} roughness={0.2} />
              </mesh>
              <mesh position={[0, Math.cos(-angle) * 0.7, Math.sin(-angle) * 0.7]} rotation={[-angle, 0, 0]}>
                <cylinderGeometry args={[0.2, 0.2, 0.75, 20]} />
                <meshStandardMaterial color="#334155" metalness={0.85} roughness={0.2} />
              </mesh>
              <mesh position={[0, Math.cos(angle) * 1.12, Math.sin(angle) * 1.12]} rotation={[angle, 0, 0]}>
                <cylinderGeometry args={[0.14, 0.14, 0.05, 16]} />
                <meshBasicMaterial color="#38BDF8" />
              </mesh>
              <mesh position={[0, Math.cos(-angle) * 1.12, Math.sin(-angle) * 1.12]} rotation={[-angle, 0, 0]}>
                <cylinderGeometry args={[0.14, 0.14, 0.05, 16]} />
                <meshBasicMaterial color="#38BDF8" />
              </mesh>
            </group>
          );
        }
        return (
          <group key={idx} position={[x, 0.72, 0]}>
            <mesh>
              <cylinderGeometry args={[0.22, 0.22, 0.9, 20]} />
              <meshStandardMaterial color="#334155" metalness={0.88} roughness={0.2} />
            </mesh>
            <mesh position={[0, 0.5, 0]}>
              <cylinderGeometry args={[0.16, 0.16, 0.06, 16]} />
              <meshBasicMaterial color="#1677FF" />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

interface EngineLab3DProps {
  lang: Lang;
  selectedEngine: EngineSpec;
  onSelectEngine: (engine: EngineSpec) => void;
}

export function EngineLab3D({ lang, selectedEngine, onSelectEngine }: EngineLab3DProps) {
  const [rpmSim, setRpmSim] = useState(4500);
  const t = UI_TEXT[lang].engineLab;

  return (
    <section id="technology" className="py-24 px-5 sm:px-8 max-w-7xl mx-auto">
      <div className="mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neonblue mb-2">{t.eyebrow}</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">{t.title}</h2>
        </div>
        <p className="text-sm text-slate-400 max-w-md">{t.desc}</p>
      </div>

      <div className="flex flex-wrap gap-2.5 mb-8">
        {ENGINE_LAB.map((eng) => {
          const active = eng.id === selectedEngine.id;
          return (
            <button
              key={eng.id}
              onClick={() => onSelectEngine(eng)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wider transition-all ${
                active
                  ? 'bg-electric text-white shadow-[0_0_20px_rgba(22,119,255,0.5)]'
                  : 'bg-navy/70 text-slate-300 border border-electric/25 hover:border-electric/70'
              }`}
            >
              {eng.name}
            </button>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-5 glass-card rounded-2xl overflow-hidden flex flex-col border border-electric/30">
          <div className="h-80 sm:h-96 relative bg-[#04060B]">
            <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-lg bg-obsidian/80 border border-electric/30 text-[11px] font-mono text-neonblue">
              {t.viewportBadge}
            </div>
            <Canvas camera={{ position: [3.6, 2.2, 3.8], fov: 42 }}>
              <ambientLight intensity={1.3} />
              <pointLight position={[4, 4, 4]} color="#1677FF" intensity={3.5} />
              <pointLight position={[-4, 2, -4]} color="#38BDF8" intensity={2.5} />
              <EngineCore3D activeId={selectedEngine.id} />
              <OrbitControls enablePan={false} enableZoom={false} />
            </Canvas>
          </div>
          <div className="p-5 border-t border-electric/20 bg-navy/40 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400 uppercase tracking-wider">{t.rpmLabel}</span>
              <span className="font-mono font-bold text-neonblue">{rpmSim.toLocaleString()} RPM</span>
            </div>
            <input
              type="range"
              min={1000}
              max={9000}
              step={250}
              value={rpmSim}
              onChange={(e) => setRpmSim(Number(e.target.value))}
              className="w-full accent-[#1677FF]"
            />
            <div className="flex justify-between text-[11px] text-slate-400">
              <span>{t.firingOrder}: <strong className="text-white">{selectedEngine.firingOrder}</strong></span>
              <span>{t.balance}: <strong className="text-neonblue">{selectedEngine.balanceRating}</strong></span>
            </div>
          </div>
        </div>

        <motion.div
          key={selectedEngine.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Cpu className="w-5 h-5 text-electric" />
              <span className="text-xs uppercase tracking-[0.2em] text-neonblue">{selectedEngine.config}</span>
            </div>
            <h3 className="font-display text-3xl font-bold text-white mb-3">{selectedEngine.name}</h3>
            <p className="text-sm text-slate-300 leading-relaxed">{selectedEngine.howItWorks}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="p-4 rounded-xl bg-obsidian/70 border border-electric/20 space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neonblue">
                <CheckCircle2 className="w-4 h-4" />
                {t.advantages}
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {selectedEngine.advantages.map((adv, i) => (
                  <li key={i}>• {adv}</li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-obsidian/70 border border-slate-700/60 space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                {t.tradeoffs}
              </div>
              <ul className="space-y-1.5 text-xs text-slate-400">
                {selectedEngine.disadvantages.map((dis, i) => (
                  <li key={i}>• {dis}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-2 border-t border-electric/15">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-slate-400 mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-electric" />
              {t.famousCars} {selectedEngine.name}
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedEngine.famousCars.map((car) => (
                <span key={car} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-electric/15 border border-electric/30 text-white">
                  {car}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
