import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HISTORY_MILESTONES } from '../data/knowledge';
import { Lang, UI_TEXT } from '../data/i18n';

gsap.registerPlugin(ScrollTrigger);

export function HistoryTimeline({ lang }: { lang: Lang }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const t = UI_TEXT[lang].history;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.timeline-card', {
        opacity: 0,
        y: 36,
        stagger: 0.14,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 78%',
          once: true,
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="history" ref={containerRef} className="py-24 px-5 sm:px-8 bg-navy/25 border-y border-electric/15">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-electric mb-2">{t.eyebrow}</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">{t.title}</h2>
        </div>

        <div className="relative space-y-6 before:hidden md:before:block before:absolute before:left-[120px] before:top-4 before:bottom-4 before:w-px before:bg-gradient-to-b before:from-electric before:via-neonblue before:to-transparent">
          {HISTORY_MILESTONES.map((m) => (
            <div key={m.year} className="timeline-card grid md:grid-cols-12 gap-4 md:gap-8 items-start">
              <div className="md:col-span-2 flex items-center gap-3 md:justify-end pr-4 pt-2">
                <span className="font-display text-2xl sm:text-3xl font-bold text-neonblue">{m.year}</span>
                <span className="hidden md:block w-3 h-3 rounded-full bg-electric ring-4 ring-electric/25 shrink-0" />
              </div>
              <div className="md:col-span-10 glass-card rounded-2xl p-6 hover:border-electric/55 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-electric font-semibold">{m.era}</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-electric/15 border border-electric/30 text-neonblue">
                    {m.innovation}
                  </span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-1">{m.title}</h3>
                <p className="text-xs font-medium text-slate-400 mb-3">{m.subtitle}</p>
                <p className="text-sm text-slate-300 leading-relaxed">{m.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
