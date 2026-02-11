import React from 'react';
import { Bot, BarChart3, Globe, Zap, FileSpreadsheet, Lock } from 'lucide-react';
import { ServiceItem } from '../types';

const servicesData: ServiceItem[] = [
  {
    title: "Automatizacija",
    description: "Eliminacija manuelnog unosa. Sistem automatski generiše porudžbine.",
    icon: <Zap size={40} strokeWidth={1} />,
  },
  {
    title: "AI Analitika",
    description: "Algoritmi analiziraju troškove i identifikuju uštede u realnom vremenu.",
    icon: <Bot size={40} strokeWidth={1} />,
  },
  {
    title: "Dobavljači",
    description: "Centralizovana platforma za komunikaciju i ocenu performansi partnera.",
    icon: <Globe size={40} strokeWidth={1} />,
  },
  {
    title: "Digitalizacija",
    description: "Kompletna digitalna arhiva. Pretraga ugovora i faktura u sekundi.",
    icon: <FileSpreadsheet size={40} strokeWidth={1} />,
  },
  {
    title: "Predikcija",
    description: "Predviđanje potražnje i optimizacija zaliha koristeći istorijske podatke.",
    icon: <BarChart3 size={40} strokeWidth={1} />,
  },
  {
    title: "Compliance",
    description: "Automatska provera usklađenosti sa zakonima i internim standardima.",
    icon: <Lock size={40} strokeWidth={1} />,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-slate-950 text-white py-24 md:py-32 border-t border-white/10">
      <div className="w-full px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 pb-8 border-b border-white/20">
          <div>
            <span className="text-ruix-500 font-mono text-sm tracking-widest uppercase mb-4 block">02 — Usluge</span>
            <h2 className="text-4xl md:text-8xl font-bold tracking-tighter uppercase">
              Sistem<br/>Rešenja
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-lg mt-8 md:mt-0 font-light">
            Sveobuhvatni alati dizajnirani za industrijske standarde i skalabilnost.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-white/10">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="group p-12 border-r border-b border-white/10 hover:bg-slate-900 transition-colors duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-ruix-500 font-mono text-xs">
                0{index + 1}
              </div>
              <div className="text-white mb-8 group-hover:text-ruix-500 transition-colors duration-300">
                {service.icon}
              </div>
              <h4 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">{service.title}</h4>
              <p className="text-slate-400 leading-relaxed font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;