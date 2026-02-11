import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900 text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
          alt="Industrial Warehouse" 
          className="w-full h-full object-cover opacity-60 grayscale scale-105 animate-pulse-slow" 
          style={{ animationDuration: '20s' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 pt-20">
        <div className="max-w-7xl">
          <div className="mb-6 flex items-center gap-4 animate-fade-in-up">
             <div className="h-[1px] w-20 bg-ruix-500"></div>
             <span className="text-ruix-400 font-mono text-sm tracking-[0.3em] uppercase">Logistika 4.0</span>
          </div>
          
          <h1 className="text-5xl md:text-9xl font-bold leading-[0.9] tracking-tighter mb-10 text-white">
            AUTOMATIZUJ <br />
            <span className="text-white">NABAVKU.</span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12 border-t border-white/20 pt-8 mt-12">
            <p className="text-xl md:text-2xl text-slate-300 max-w-xl font-light leading-relaxed">
              Eliminišite uska grla u lancu snabdevanja pomoću AI tehnologije. Efikasnost nije opcija, to je standard.
            </p>
            
            <a 
              href="#contact"
              className="group flex items-center gap-4 text-white uppercase tracking-widest text-sm font-bold hover:text-ruix-400 transition-colors"
            >
              <span className="border-b border-white group-hover:border-ruix-400 pb-1">Započni Proces</span>
              <ArrowDown className="group-hover:translate-y-2 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;