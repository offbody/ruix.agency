import React from 'react';
import { ProcessStep } from '../types';

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Analiza",
    description: "Skeniranje procesa. Identifikacija uskih grla.",
  },
  {
    number: "02",
    title: "Strategija",
    description: "Dizajn prilagođenog plana za ERP integraciju.",
  },
  {
    number: "03",
    title: "Implementacija",
    description: "Brza integracija bez zaustavljanja proizvodnje.",
  },
  {
    number: "04",
    title: "Optimizacija",
    description: "Kontinuirana podrška i AI učenje sistema.",
  },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className="w-full px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-20">
          
          <div className="lg:w-1/3">
             <span className="text-ruix-600 font-mono text-sm tracking-widest uppercase mb-4 block">03 — Proces</span>
             <h2 className="text-4xl md:text-8xl font-bold tracking-tighter text-slate-900 leading-[0.9] mb-8">
              KAKO <br/> RADIMO
             </h2>
             <p className="text-xl text-slate-600 font-light mb-12">
               Bez suvišnih koraka. Direktan put od haosa do strukture.
             </p>
             <a 
              href="#contact"
              className="inline-block px-10 py-4 bg-slate-900 text-white font-bold uppercase tracking-widest hover:bg-ruix-600 transition-colors"
            >
              Start
            </a>
          </div>

          <div className="lg:w-2/3">
            <div className="space-y-0">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start md:items-center py-10 border-t border-slate-300 group hover:bg-white hover:pl-8 transition-all duration-300">
                  <span className="text-5xl md:text-8xl font-black text-slate-200 group-hover:text-ruix-600 transition-colors duration-300 w-32 md:w-48 leading-none">
                    {step.number}
                  </span>
                  <div>
                    <h4 className="text-2xl md:text-5xl font-bold text-slate-900 mb-2 tracking-tight">{step.title}</h4>
                    <p className="text-slate-500 font-light text-lg">{step.description}</p>
                  </div>
                </div>
              ))}
              <div className="border-t border-slate-300"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;