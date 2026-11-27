import { useState, useRef, MouseEvent } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  Compass,
  Cpu,
  HelpCircle,
  Layers,
  Sparkles,
  Zap,
} from 'lucide-react';
import { BRANDS, Brand } from './data/brands';
import {
  KNOWLEDGE_TOPICS,
  KnowledgeTopic,
  ENGINE_LAB,
  EngineSpec,
  DID_YOU_KNOW_FACTS,
} from './data/knowledge';
import { ICONIC_CARS, IconicCar } from './data/iconicCars';
import { Lang, UI_TEXT } from './data/i18n';
import { Navbar } from './components/Navbar';
import { EngineLab3D } from './components/EngineLab3D';
import { HistoryTimeline } from './components/HistoryTimeline';
import { ComparisonSection } from './components/ComparisonSection';
import { BrandModal, KnowledgeModal, IconicCarModal } from './components/EncyclopediaModals';

function MagneticButton({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({
      x: (e.clientX - rect.left - rect.width / 2) * 0.18,
      y: (e.clientY - rect.top - rect.height / 2) * 0.18,
    });
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

export default function App() {
  const [lang, setLang] = useState<Lang>('en');
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<KnowledgeTopic | null>(null);
  const [selectedCar, setSelectedCar] = useState<IconicCar | null>(null);
  const [selectedEngine, setSelectedEngine] = useState<EngineSpec>(ENGINE_LAB[3]);
  const [expandedFactId, setExpandedFactId] = useState<string>(DID_YOU_KNOW_FACTS[0].id);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const t = UI_TEXT[lang];

  const handleHeroMove = (e: MouseEvent<HTMLElement>) => {
    setParallax({
      x: (e.clientX / window.innerWidth - 0.5) * -18,
      y: (e.clientY / window.innerHeight - 0.5) * -12,
    });
  };

  return (
    <div className="min-h-screen bg-[#05070B] text-slate-100 overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-electric/10 blur-[140px]" />
        <div className="absolute top-1/2 -right-40 w-[480px] h-[480px] rounded-full bg-blue-600/10 blur-[150px]" />
      </div>

      <Navbar
        lang={lang}
        onToggleLang={setLang}
        onSelectBrand={setSelectedBrand}
        onSelectTopic={setSelectedTopic}
        onSelectCar={setSelectedCar}
        onSelectEngine={setSelectedEngine}
      />

      <main className="relative z-10">
        {/* 1. HERO SECTION */}
        <section
          id="home"
          onMouseMove={handleHeroMove}
          className="relative min-h-screen flex items-center pt-20 overflow-hidden"
        >
          <div
            className="absolute inset-0 transition-transform duration-200 ease-out"
            style={{ transform: `scale(1.06) translate3d(${parallax.x}px, ${parallax.y}px, 0)` }}
          >
            <img
              src="/images/bmw-m5.jpg"
              alt="Automotive engineering showcase"
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#05070B] via-[#05070B]/80 to-[#05070B]/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-transparent to-[#05070B]/60" />
          </div>

          <div className="relative max-w-7xl mx-auto px-5 sm:px-8 w-full py-16 lg:py-24 grid lg:grid-cols-12 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-8 space-y-6"
            >
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-electric/35 bg-navy/70 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-neonblue animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neonblue">
                  {t.hero.tagline}
                </span>
              </div>

              <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[0.95] text-white">
                {t.hero.titleLine1}<br />
                <span className="bg-gradient-to-r from-white via-neonblue to-electric bg-clip-text text-transparent">
                  {t.hero.titleLine2}
                </span>
              </h1>

              <p className="text-base sm:text-xl text-slate-300 font-light max-w-2xl leading-relaxed">
                {t.hero.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <MagneticButton
                  href="#knowledge"
                  className="blue-glow-btn inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-white"
                >
                  {t.hero.btnExplore}
                  <ArrowRight className="w-4 h-4" />
                </MagneticButton>
                <MagneticButton
                  href="#brands"
                  className="glass-card px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-100 inline-flex items-center gap-2.5 hover:border-electric transition-colors"
                >
                  <Compass className="w-4 h-4 text-neonblue" />
                  {t.hero.btnBrands}
                </MagneticButton>
              </div>
            </motion.div>

            <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4">
              {[
                { label: t.hero.stat1Label, val: t.hero.stat1Val, icon: Layers },
                { label: t.hero.stat2Label, val: t.hero.stat2Val, icon: BookOpen },
                { label: t.hero.stat3Label, val: t.hero.stat3Val, icon: Cpu },
              ].map((stat) => (
                <div key={stat.label} className="glass-card rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-slate-400 block">{stat.label}</span>
                    <span className="font-display text-lg font-bold text-white">{stat.val}</span>
                  </div>
                  <stat.icon className="w-5 h-5 text-electric shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. AUTOMOTIVE BRANDS */}
        <section id="brands" className="py-24 px-5 sm:px-8 max-w-7xl mx-auto">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-electric mb-2">{t.brands.eyebrow}</p>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">{t.brands.title}</h2>
            </div>
            <p className="text-sm text-slate-400 max-w-md">{t.brands.desc}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {BRANDS.map((brand, idx) => (
              <motion.button
                key={brand.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.04 }}
                onClick={() => setSelectedBrand(brand)}
                className="glass-card rounded-2xl p-5 text-left hover:border-electric/70 hover:-translate-y-1.5 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-11 h-11 rounded-xl bg-electric/15 border border-electric/35 flex items-center justify-center font-display font-bold text-sm text-neonblue">
                      {brand.monogram}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{brand.founded}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-neonblue transition-colors">
                    {brand.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">{brand.country}</p>
                </div>
                <div className="mt-5 pt-3 border-t border-electric/15 flex items-center justify-between text-xs text-electric font-semibold">
                  <span>{t.brands.readMore}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.button>
            ))}
          </div>
        </section>

        {/* 3. CAR KNOWLEDGE */}
        <section id="knowledge" className="py-24 px-5 sm:px-8 bg-navy/25 border-y border-electric/15">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neonblue mb-2">{t.knowledge.eyebrow}</p>
                <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">{t.knowledge.title}</h2>
              </div>
              <p className="text-sm text-slate-400 max-w-md">{t.knowledge.desc}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {KNOWLEDGE_TOPICS.map((topic, idx) => (
                <motion.button
                  key={topic.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ delay: idx * 0.04 }}
                  onClick={() => setSelectedTopic(topic)}
                  className="glass-card rounded-2xl p-6 text-left hover:border-electric/65 hover:-translate-y-1 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <span className="inline-block text-[11px] uppercase tracking-widest px-2.5 py-1 rounded bg-electric/15 text-neonblue mb-3">
                      {topic.category}
                    </span>
                    <h3 className="font-display text-xl font-bold text-white group-hover:text-neonblue transition-colors">
                      {topic.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 mb-3">{topic.subtitle}</p>
                    <p className="text-sm text-slate-300 leading-relaxed">{topic.summary}</p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-electric/15 flex items-center justify-between text-xs font-semibold text-electric">
                    <span>{t.knowledge.openGuide}</span>
                    <BookOpen className="w-4 h-4" />
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* 4. ICONIC CARS */}
        <section id="iconic-cars" className="py-24 px-5 sm:px-8 max-w-7xl mx-auto">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-electric mb-2">{t.iconic.eyebrow}</p>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">{t.iconic.title}</h2>
            </div>
            <p className="text-sm text-slate-400 max-w-md">{t.iconic.desc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ICONIC_CARS.map((car, idx) => (
              <motion.article
                key={car.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setSelectedCar(car)}
                className="glass-card rounded-2xl overflow-hidden flex flex-col cursor-pointer hover:border-electric/70 hover:-translate-y-1.5 transition-all group"
              >
                <div className="relative h-48 overflow-hidden bg-obsidian">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-85" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded text-[10px] font-semibold uppercase tracking-wider bg-obsidian/80 border border-electric/30 text-neonblue">
                    {car.brand}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-neonblue transition-colors">
                      {car.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">{car.engine}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-electric/15 text-xs">
                    <div>
                      <span className="text-slate-500 block">{t.iconic.output}</span>
                      <span className="font-semibold text-white">{car.hp}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">{t.compare.accel}</span>
                      <span className="font-semibold text-neonblue">{car.accel}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* 5. ENGINE LAB */}
        <EngineLab3D lang={lang} selectedEngine={selectedEngine} onSelectEngine={setSelectedEngine} />

        {/* 6. AUTOMOTIVE HISTORY */}
        <HistoryTimeline lang={lang} />

        {/* 7. EDUCATIONAL COMPARISON */}
        <ComparisonSection lang={lang} />

        {/* 8. DID YOU KNOW? */}
        <section id="facts" className="py-24 px-5 sm:px-8 bg-navy/25 border-t border-electric/15">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neonblue mb-2">{t.facts.eyebrow}</p>
                <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">{t.facts.title}</h2>
              </div>
              <p className="text-sm text-slate-400">{t.facts.desc}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {DID_YOU_KNOW_FACTS.map((fact) => {
                const isOpen = expandedFactId === fact.id;
                return (
                  <motion.div
                    key={fact.id}
                    layout
                    onClick={() => setExpandedFactId(fact.id)}
                    className={`glass-card rounded-2xl p-6 cursor-pointer transition-colors ${
                      isOpen ? 'border-electric/70 shadow-[0_0_30px_rgba(22,119,255,0.16)]' : 'hover:border-electric/45'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <HelpCircle className="w-5 h-5 text-electric shrink-0 mt-1" />
                        <div>
                          <h3 className="font-display text-lg font-bold text-white">{fact.question}</h3>
                          <p className="text-xs text-neonblue mt-1">{fact.shortAnswer}</p>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded text-[11px] font-mono bg-electric/15 text-neonblue shrink-0">
                        {fact.metric}
                      </span>
                    </div>

                    {isOpen && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="text-sm text-slate-300 leading-relaxed mt-4 pt-4 border-t border-electric/15"
                      >
                        {fact.explanation}
                      </motion.p>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-electric/20 bg-obsidian/95 relative z-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Zap className="w-4 h-4 text-electric" />
            <span className="font-display font-bold text-lg tracking-[0.22em] text-white">
              DRIVE <span className="text-electric">X</span>
            </span>
            <span className="text-xs text-slate-500">|</span>
            <span className="text-xs uppercase tracking-widest text-slate-400">{t.footer.tagline}</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-400">
            <a href="#home" className="hover:text-white">{t.nav.home}</a>
            <a href="#brands" className="hover:text-white">{t.nav.brands}</a>
            <a href="#knowledge" className="hover:text-white">{t.nav.knowledge}</a>
            <a href="#iconic-cars" className="hover:text-white">{t.nav.iconicCars}</a>
            <a href="#technology" className="hover:text-white">{t.nav.technology}</a>
            <a href="#history" className="hover:text-white">{t.nav.history}</a>
          </div>

          <div className="text-xs text-slate-500 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-electric" />
            <span>{t.footer.copy}</span>
          </div>
        </div>
      </footer>

      <BrandModal brand={selectedBrand} lang={lang} onClose={() => setSelectedBrand(null)} />
      <KnowledgeModal topic={selectedTopic} lang={lang} onClose={() => setSelectedTopic(null)} />
      <IconicCarModal car={selectedCar} lang={lang} onClose={() => setSelectedCar(null)} />
    </div>
  );
}
