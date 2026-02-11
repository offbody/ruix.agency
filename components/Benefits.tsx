import React from 'react';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="bg-slate-900 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        
        {/* Block 1: Text */}
        <div className="p-12 md:p-24 flex flex-col justify-center bg-ruix-900/20 border-r border-b border-white/10">
          <span className="text-ruix-500 font-mono text-sm tracking-widest uppercase mb-4 block">04 — Rezultati</span>
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6">PROFITABILNOST.</h2>
          <p className="text-xl text-slate-400 font-light mb-8 max-w-md">
            Smanjenje operativnih troškova za 30% u prvoj godini implementacije. Matematika je jasna.
          </p>
          <div className="h-1 w-20 bg-ruix-600"></div>
        </div>

        {/* Block 2: Image */}
        <div className="h-96 md:h-auto relative overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070" 
            alt="Factory Tech" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-transparent transition-colors"></div>
           <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tighter">PRECIZNOST</h3>
          </div>
        </div>

        {/* Block 3: Image */}
         <div className="h-96 md:h-auto relative overflow-hidden group border-r border-white/10 md:order-3">
          <img 
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop" 
            alt="Shipping Logistics Speed" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-transparent transition-colors"></div>
          <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tighter">BRZINA</h3>
          </div>
        </div>

        {/* Block 4: Text */}
        <div className="p-12 md:p-24 flex flex-col justify-center bg-slate-950 md:order-4">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6 text-slate-100">KONTROLA.</h2>
          <p className="text-xl text-slate-400 font-light mb-8 max-w-md">
            Eliminacija ljudske greške. Potpuna transparentnost nad svakim delom lanca snabdevanja.
          </p>
          <div className="h-1 w-20 bg-ruix-600"></div>
        </div>

      </div>
    </section>
  );
};

export default Benefits;