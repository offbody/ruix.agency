import React from 'react';
import { ShieldCheck, TrendingUp, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-white text-slate-900">
      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 p-8 md:p-20 flex flex-col justify-center border-r border-slate-100">
          <span className="text-ruix-600 font-mono text-sm tracking-widest uppercase mb-8 block">01 — O Nama</span>
          
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-none mb-12">
            ARHITEKTE <br/>EFIKASNOSTI.
          </h2>
          
          <div className="space-y-8 text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-xl">
            <p>
              <strong className="text-slate-900 font-bold">Ruix.agency</strong> nije samo softver. Mi smo strateški partner koji modernizuje lance snabdevanja u Srbiji. Razumemo težinu industrije i kompleksnost logistike.
            </p>
            <p>
              Spajamo decenijsko iskustvo u teškoj industriji sa preciznošću veštačke inteligencije. Rezultat je sistem koji radi brže od vas.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8">
            <div className="border-l-2 border-ruix-600 pl-6">
              <h4 className="text-4xl font-bold text-slate-900 mb-2">+150%</h4>
              <p className="text-sm uppercase tracking-wider text-slate-500">Rast Efikasnosti</p>
            </div>
            <div className="border-l-2 border-slate-200 pl-6">
              <h4 className="text-4xl font-bold text-slate-900 mb-2">ISO</h4>
              <p className="text-sm uppercase tracking-wider text-slate-500">Sertifikovani</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 h-96 lg:h-auto relative overflow-hidden bg-slate-100">
          <img 
            src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070" 
            alt="Container Terminal" 
            className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 transform hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 p-12 bg-gradient-to-t from-black/80 to-transparent w-full">
            <p className="text-white font-mono text-xs md:text-sm tracking-widest uppercase">
              // Beograd, Srbija <br/>
              // Logistički Centar
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;