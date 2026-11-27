import { useState } from 'react';
import { ICONIC_CARS } from '../data/iconicCars';
import { Lang, UI_TEXT } from '../data/i18n';

export function ComparisonSection({ lang }: { lang: Lang }) {
  const t = UI_TEXT[lang].compare;
  const [slotsCount, setSlotsCount] = useState<2 | 3>(3);
  const [selectedIds, setSelectedIds] = useState<string[]>([
    'bmw-m5-f90',
    'porsche-911-gt3-rs',
    'lamborghini-aventador',
  ]);

  const activeIds = selectedIds.slice(0, slotsCount);
  const selectedCars = activeIds.map((id) => ICONIC_CARS.find((c) => c.id === id) || ICONIC_CARS[0]);

  const maxHp = Math.max(...selectedCars.map((c) => c.hpNum));
  const maxTorque = Math.max(...selectedCars.map((c) => c.torqueNum));
  const minAccel = Math.min(...selectedCars.map((c) => c.accelNum));
  const maxSpeed = Math.max(...selectedCars.map((c) => c.topSpeedNum));
  const minWeight = Math.min(...selectedCars.map((c) => c.weightNum));

  return (
    <section id="compare" className="py-24 px-5 sm:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neonblue mb-2">{t.eyebrow}</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">{t.title}</h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSlotsCount(2)}
            className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
              slotsCount === 2 ? 'bg-electric text-white shadow-[0_0_16px_rgba(22,119,255,0.4)]' : 'bg-navy border border-electric/25 text-slate-300'
            }`}
          >
            {t.twoCars}
          </button>
          <button
            onClick={() => setSlotsCount(3)}
            className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
              slotsCount === 3 ? 'bg-electric text-white shadow-[0_0_16px_rgba(22,119,255,0.4)]' : 'bg-navy border border-electric/25 text-slate-300'
            }`}
          >
            {t.threeCars}
          </button>
        </div>
      </div>

      <div className={`grid grid-cols-1 ${slotsCount === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-4 mb-6`}>
        {activeIds.map((selId, idx) => (
          <div key={idx} className="glass-card rounded-xl p-3">
            <label className="block text-[11px] uppercase tracking-wider text-slate-400 mb-1.5">
              {t.vehicle} {idx + 1}
            </label>
            <select
              value={selId}
              onChange={(e) => {
                const next = [...selectedIds];
                next[idx] = e.target.value;
                setSelectedIds(next);
              }}
              className="w-full bg-obsidian/90 border border-electric/25 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-electric"
            >
              {ICONIC_CARS.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      <div className="glass-card rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-electric/20 bg-navy/50">
                <th className="p-5 text-xs font-semibold uppercase tracking-widest text-slate-400 w-44">{t.spec}</th>
                {selectedCars.map((c) => (
                  <th key={c.id} className="p-5 min-w-[200px]">
                    <div className="flex items-center gap-3">
                      <img src={c.image} alt={c.name} className="w-16 h-11 rounded-lg object-cover border border-electric/30" />
                      <div>
                        <div className="font-display font-bold text-white text-sm">{c.name}</div>
                        <div className="text-[11px] text-neonblue">{c.brand}</div>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-electric/10 text-sm">
              <tr>
                <td className="p-5 text-xs uppercase tracking-wider text-slate-400">{t.engine}</td>
                {selectedCars.map((c) => <td key={c.id} className="p-5 text-slate-200">{c.engine}</td>)}
              </tr>
              <tr>
                <td className="p-5 text-xs uppercase tracking-wider text-slate-400">{t.hp}</td>
                {selectedCars.map((c) => (
                  <td key={c.id} className={`p-5 ${c.hpNum === maxHp ? 'text-neonblue font-bold' : 'text-white'}`}>
                    {c.hp} {c.hpNum === maxHp ? '★' : ''}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-5 text-xs uppercase tracking-wider text-slate-400">{t.torque}</td>
                {selectedCars.map((c) => (
                  <td key={c.id} className={`p-5 ${c.torqueNum === maxTorque ? 'text-neonblue font-bold' : 'text-white'}`}>
                    {c.torque} {c.torqueNum === maxTorque ? '★' : ''}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-5 text-xs uppercase tracking-wider text-slate-400">{t.accel}</td>
                {selectedCars.map((c) => (
                  <td key={c.id} className={`p-5 ${c.accelNum === minAccel ? 'text-neonblue font-bold' : 'text-white'}`}>
                    {c.accel} {c.accelNum === minAccel ? '★' : ''}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-5 text-xs uppercase tracking-wider text-slate-400">{t.topSpeed}</td>
                {selectedCars.map((c) => (
                  <td key={c.id} className={`p-5 ${c.topSpeedNum === maxSpeed ? 'text-neonblue font-bold' : 'text-white'}`}>
                    {c.topSpeed} {c.topSpeedNum === maxSpeed ? '★' : ''}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-5 text-xs uppercase tracking-wider text-slate-400">{t.weight}</td>
                {selectedCars.map((c) => (
                  <td key={c.id} className={`p-5 ${c.weightNum === minWeight ? 'text-neonblue font-bold' : 'text-white'}`}>
                    {c.weight} {c.weightNum === minWeight ? '★' : ''}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-5 text-xs uppercase tracking-wider text-slate-400">{t.transmission}</td>
                {selectedCars.map((c) => <td key={c.id} className="p-5 text-slate-200">{c.transmission}</td>)}
              </tr>
              <tr>
                <td className="p-5 text-xs uppercase tracking-wider text-slate-400">{t.drivetrain}</td>
                {selectedCars.map((c) => <td key={c.id} className="p-5 text-slate-200">{c.drivetrain}</td>)}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
