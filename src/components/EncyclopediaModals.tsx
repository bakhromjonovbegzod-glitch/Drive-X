import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, MapPin, Calendar, User, BookOpen, Cpu } from 'lucide-react';
import { Brand } from '../data/brands';
import { KnowledgeTopic } from '../data/knowledge';
import { IconicCar } from '../data/iconicCars';
import { Lang, UI_TEXT } from '../data/i18n';

export function BrandModal({ brand, lang, onClose }: { brand: Brand | null; lang: Lang; onClose: () => void }) {
  const t = UI_TEXT[lang].brands;
  return (
    <AnimatePresence>
      {brand && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[80] bg-obsidian/92 backdrop-blur-xl overflow-y-auto flex items-center justify-center p-4 sm:p-8"
        >
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-card rounded-3xl max-w-3xl w-full p-6 sm:p-10 relative border border-electric/35 space-y-6"
          >
            <button onClick={onClose} className="absolute top-5 right-5 w-10 h-10 rounded-xl bg-navy/80 border border-electric/30 flex items-center justify-center text-slate-300 hover:text-white">
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-electric/30 to-navy border border-electric/45 flex items-center justify-center font-display font-bold text-xl text-neonblue">
                {brand.monogram}
              </div>
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-electric">{brand.tagline}</span>
                <h3 className="font-display text-3xl sm:text-4xl font-bold text-white">{brand.name}</h3>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-obsidian/80 border border-electric/20 flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-neonblue shrink-0" />
                <div>
                  <span className="text-slate-400 block">{t.origin}</span>
                  <span className="font-semibold text-white">{brand.country}</span>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-obsidian/80 border border-electric/20 flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-neonblue shrink-0" />
                <div>
                  <span className="text-slate-400 block">{t.founded}</span>
                  <span className="font-semibold text-white">{brand.founded}</span>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-obsidian/80 border border-electric/20 flex items-center gap-2.5">
                <User className="w-4 h-4 text-neonblue shrink-0" />
                <div>
                  <span className="text-slate-400 block">{t.founder}</span>
                  <span className="font-semibold text-white">{brand.founder}</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-neonblue font-semibold mb-2">{t.historyTitle}</h4>
              <p className="text-sm text-slate-300 leading-relaxed">{brand.history}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-2.5 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-electric" /> {t.famousModels}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {brand.famousModels.map((m) => (
                    <span key={m} className="px-3 py-1.5 rounded-lg text-xs bg-navy border border-electric/25 text-white">{m}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-2.5 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-electric" /> {t.innovations}
                </h4>
                <ul className="space-y-1 text-xs text-slate-300">
                  {brand.innovations.map((inn) => <li key={inn}>• {inn}</li>)}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function KnowledgeModal({ topic, lang, onClose }: { topic: KnowledgeTopic | null; lang: Lang; onClose: () => void }) {
  const t = UI_TEXT[lang].knowledge;
  return (
    <AnimatePresence>
      {topic && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[80] bg-obsidian/92 backdrop-blur-xl overflow-y-auto flex items-center justify-center p-4 sm:p-8"
        >
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-card rounded-3xl max-w-3xl w-full p-6 sm:p-10 relative border border-electric/35 space-y-6"
          >
            <button onClick={onClose} className="absolute top-5 right-5 w-10 h-10 rounded-xl bg-navy/80 border border-electric/30 flex items-center justify-center text-slate-300 hover:text-white">
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-electric">{topic.category}</span>
              <h3 className="font-display text-3xl font-bold text-white mt-1">{topic.title}</h3>
              <p className="text-sm text-neonblue mt-1">{topic.subtitle}</p>
            </div>

            <div className="p-4 rounded-2xl bg-obsidian/90 border border-electric/25">
              <svg viewBox="0 0 600 130" className="w-full h-28">
                <line x1="30" y1="65" x2="570" y2="65" stroke="rgba(22,119,255,0.2)" strokeDasharray="5 5" />
                <rect x="45" y="35" width="120" height="60" rx="10" fill="rgba(22,119,255,0.12)" stroke="#1677FF" strokeWidth="1.5" />
                <text x="105" y="70" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily="Inter">Input Energy</text>
                <path d="M175 65 L230 65" stroke="#38BDF8" strokeWidth="2" strokeDasharray="4 4" />
                <rect x="240" y="25" width="130" height="80" rx="12" fill="rgba(56,189,248,0.12)" stroke="#38BDF8" strokeWidth="1.5" />
                <text x="305" y="62" textAnchor="middle" fill="#38BDF8" fontSize="11" fontWeight="bold" fontFamily="Inter">{topic.category}</text>
                <text x="305" y="79" textAnchor="middle" fill="#CBD5E1" fontSize="10" fontFamily="Inter">Active Control</text>
                <path d="M380 65 L435 65" stroke="#38BDF8" strokeWidth="2" strokeDasharray="4 4" />
                <rect x="445" y="35" width="120" height="60" rx="10" fill="rgba(22,119,255,0.12)" stroke="#1677FF" strokeWidth="1.5" />
                <text x="505" y="70" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily="Inter">Road Dynamics</text>
              </svg>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-widest text-slate-400 font-semibold flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-electric" /> {t.breakdown}
              </h4>
              <p className="text-sm text-slate-200 leading-relaxed">{topic.deepDive}</p>
            </div>

            <div className="grid sm:grid-cols-3 gap-3">
              {topic.specs.map((s) => (
                <div key={s.label} className="p-3.5 rounded-xl bg-navy/60 border border-electric/20 text-xs">
                  <span className="text-slate-400 block">{s.label}</span>
                  <span className="font-semibold text-white mt-1 block">{s.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function IconicCarModal({ car, lang, onClose }: { car: IconicCar | null; lang: Lang; onClose: () => void }) {
  const [viewMode, setViewMode] = useState<'exterior' | 'interior'>('exterior');
  const t = UI_TEXT[lang].iconic;
  const tc = UI_TEXT[lang].compare;

  return (
    <AnimatePresence>
      {car && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[80] bg-obsidian/94 backdrop-blur-xl overflow-y-auto p-4 sm:p-8 flex items-start justify-center"
        >
          <motion.article
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-card rounded-3xl max-w-5xl w-full p-6 sm:p-10 relative border border-electric/35 my-4 space-y-8"
          >
            <button onClick={onClose} className="absolute top-5 right-5 z-10 w-10 h-10 rounded-xl bg-navy/85 border border-electric/30 flex items-center justify-center text-slate-300 hover:text-white">
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neonblue">{car.brand} • {car.era}</span>
              <h3 className="font-display text-3xl sm:text-5xl font-bold text-white">{car.name}</h3>
              <p className="text-base text-slate-300 max-w-3xl">{car.introduction}</p>
            </div>

            <div className="space-y-3">
              <div className="relative h-72 sm:h-[420px] rounded-2xl overflow-hidden border border-electric/30 bg-obsidian">
                <img
                  src={viewMode === 'exterior' ? car.image : car.interior}
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setViewMode('exterior')}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold ${viewMode === 'exterior' ? 'bg-electric text-white' : 'bg-navy text-slate-300 border border-electric/25'}`}
                >
                  {t.exterior}
                </button>
                <button
                  onClick={() => setViewMode('interior')}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold ${viewMode === 'interior' ? 'bg-electric text-white' : 'bg-navy text-slate-300 border border-electric/25'}`}
                >
                  {t.interior}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              {[
                { label: tc.engine, val: car.engine },
                { label: tc.hp, val: car.hp },
                { label: tc.torque, val: car.torque },
                { label: tc.accel, val: car.accel },
                { label: tc.topSpeed, val: car.topSpeed },
                { label: tc.weight, val: car.weight },
                { label: tc.transmission, val: car.transmission },
                { label: tc.drivetrain, val: car.drivetrain },
              ].map((spec) => (
                <div key={spec.label} className="p-3.5 rounded-xl bg-obsidian/80 border border-electric/20">
                  <span className="text-slate-400 block">{spec.label}</span>
                  <span className="font-semibold text-white mt-1 block">{spec.val}</span>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-widest text-neonblue font-semibold">{t.evolution}</h4>
                <p className="text-sm text-slate-300 leading-relaxed">{car.history}</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-widest text-neonblue font-semibold">{t.techExp}</h4>
                <p className="text-sm text-slate-300 leading-relaxed">{car.technicalExplanation}</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-navy/50 border border-electric/20">
              <h4 className="text-xs uppercase tracking-widest text-electric font-semibold mb-3">{t.factsTitle}</h4>
              <ul className="grid sm:grid-cols-3 gap-3 text-xs text-slate-200">
                {car.interestingFacts.map((fact, idx) => (
                  <li key={idx} className="p-3 rounded-xl bg-obsidian/70 border border-electric/15">{fact}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
