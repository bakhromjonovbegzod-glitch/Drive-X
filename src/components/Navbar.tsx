import { useState, useEffect, useMemo } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Search, Menu, X, Zap, ArrowRight, Globe } from 'lucide-react';
import { BRANDS, Brand } from '../data/brands';
import { KNOWLEDGE_TOPICS, KnowledgeTopic, ENGINE_LAB, EngineSpec } from '../data/knowledge';
import { ICONIC_CARS, IconicCar } from '../data/iconicCars';
import { Lang, UI_TEXT } from '../data/i18n';

interface NavbarProps {
  lang: Lang;
  onToggleLang: (lang: Lang) => void;
  onSelectBrand: (brand: Brand) => void;
  onSelectTopic: (topic: KnowledgeTopic) => void;
  onSelectCar: (car: IconicCar) => void;
  onSelectEngine: (engine: EngineSpec) => void;
}

export function Navbar({
  lang,
  onToggleLang,
  onSelectBrand,
  onSelectTopic,
  onSelectCar,
  onSelectEngine,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);

  const t = UI_TEXT[lang];
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 160, damping: 28, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    const items: { type: string; title: string; subtitle: string; action: () => void }[] = [];

    BRANDS.forEach((b) => {
      if (b.name.toLowerCase().includes(q) || b.country.toLowerCase().includes(q)) {
        items.push({ type: 'Brand', title: b.name, subtitle: `${b.country} • ${b.founded}`, action: () => onSelectBrand(b) });
      }
    });
    ICONIC_CARS.forEach((c) => {
      if (c.name.toLowerCase().includes(q) || c.engine.toLowerCase().includes(q)) {
        items.push({ type: 'Iconic Car', title: c.name, subtitle: `${c.hp} • ${c.engine}`, action: () => onSelectCar(c) });
      }
    });
    KNOWLEDGE_TOPICS.forEach((topic) => {
      if (topic.title.toLowerCase().includes(q) || topic.subtitle.toLowerCase().includes(q)) {
        items.push({ type: 'Knowledge', title: topic.title, subtitle: topic.category, action: () => onSelectTopic(topic) });
      }
    });
    ENGINE_LAB.forEach((e) => {
      if (e.name.toLowerCase().includes(q) || e.config.toLowerCase().includes(q)) {
        items.push({
          type: 'Engine Lab',
          title: e.name,
          subtitle: e.config,
          action: () => {
            onSelectEngine(e);
            document.getElementById('technology')?.scrollIntoView({ behavior: 'smooth' });
          }
        });
      }
    });
    return items.slice(0, 7);
  }, [query, onSelectBrand, onSelectCar, onSelectTopic, onSelectEngine]);

  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.brands, href: '#brands' },
    { label: t.nav.knowledge, href: '#knowledge' },
    { label: t.nav.iconicCars, href: '#iconic-cars' },
    { label: t.nav.technology, href: '#technology' },
    { label: t.nav.history, href: '#history' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-obsidian/90 backdrop-blur-xl border-b border-electric/25 shadow-lg'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <motion.div
        style={{ scaleX }}
        className="h-[2px] bg-gradient-to-r from-electric via-neonblue to-cyan-300 origin-left"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-3">
        <a href="#home" className="flex items-center gap-3 shrink-0 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-electric to-blue-800 flex items-center justify-center shadow-[0_0_18px_rgba(22,119,255,0.5)]">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <div>
            <span className="font-display font-bold text-lg sm:text-xl tracking-[0.2em] text-white block leading-none">
              DRIVE <span className="text-electric">X</span>
            </span>
            <span className="text-[9px] tracking-[0.2em] text-slate-400 uppercase hidden sm:block mt-0.5">
              {t.brandSubtitle}
            </span>
          </div>
        </a>

        <nav className="hidden xl:flex items-center gap-5 text-xs font-medium text-slate-300">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white transition-colors whitespace-nowrap">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          {/* Search Bar */}
          <div className="relative hidden md:block w-52 lg:w-60">
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-navy/80 border border-electric/30 focus-within:border-electric transition-colors">
              <Search className="w-4 h-4 text-neonblue shrink-0" />
              <input
                type="text"
                value={query}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setTimeout(() => setSearchFocused(false), 180)}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full bg-transparent text-xs text-white placeholder-slate-400 focus:outline-none"
              />
              {query && (
                <button onClick={() => setQuery('')} className="text-slate-400 hover:text-white">
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {searchFocused && searchResults.length > 0 && (
              <div className="absolute top-full mt-2 left-0 right-0 glass-card rounded-xl overflow-hidden border border-electric/35 shadow-2xl z-50">
                {searchResults.map((item, idx) => (
                  <button
                    key={idx}
                    onMouseDown={() => {
                      item.action();
                      setQuery('');
                    }}
                    className="w-full text-left px-4 py-2.5 hover:bg-electric/15 transition-colors flex items-center justify-between gap-2 border-b border-electric/10 last:border-b-0"
                  >
                    <div>
                      <div className="text-xs font-semibold text-white">{item.title}</div>
                      <div className="text-[11px] text-slate-400">{item.subtitle}</div>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-electric/20 text-neonblue shrink-0">
                      {item.type}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Language Switcher UZ / EN */}
          <div className="flex items-center rounded-xl bg-navy/80 border border-electric/30 p-0.5 text-[11px] font-semibold">
            <Globe className="w-3.5 h-3.5 text-neonblue mx-1.5 hidden sm:block" />
            <button
              onClick={() => onToggleLang('uz')}
              className={`px-2.5 py-1.5 rounded-lg transition-all ${
                lang === 'uz' ? 'bg-electric text-white shadow-[0_0_12px_rgba(22,119,255,0.45)]' : 'text-slate-300 hover:text-white'
              }`}
            >
              UZ
            </button>
            <button
              onClick={() => onToggleLang('en')}
              className={`px-2.5 py-1.5 rounded-lg transition-all ${
                lang === 'en' ? 'bg-electric text-white shadow-[0_0_12px_rgba(22,119,255,0.45)]' : 'text-slate-300 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
            className="xl:hidden p-2 rounded-lg border border-electric/30 bg-navy/70 text-white"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="xl:hidden bg-obsidian/95 backdrop-blur-xl border-b border-electric/20 px-5 py-5 space-y-4">
          <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-navy/80 border border-electric/30">
            <Search className="w-4 h-4 text-neonblue shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full bg-transparent text-xs text-white placeholder-slate-400 focus:outline-none"
            />
          </div>
          {searchResults.length > 0 && (
            <div className="space-y-1.5 border border-electric/20 rounded-xl p-2 bg-navy/60">
              {searchResults.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    item.action();
                    setQuery('');
                    setMobileOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-electric/15 flex items-center justify-between text-xs"
                >
                  <span className="text-white font-medium">{item.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-neonblue" />
                </button>
              ))}
            </div>
          )}
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 rounded-lg bg-navy/50 text-sm text-slate-200 hover:text-electric"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
