import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonialsData: Testimonial[] = [
  {
    name: "Marko Petrović",
    company: "Tehnomanija Logistic",
    text: "Uštedeli smo stotine sati administracije mesečno. Ruix je promenio igru.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=256&h=256&auto=format&fit=crop"
  },
  {
    name: "Jelena Jovanović",
    company: "BioFarm Srbija",
    text: "Transparentnost koju smo dobili je neprocenjiva za naš biznis.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&h=256&auto=format&fit=crop"
  },
  {
    name: "Stefan Nikolić",
    company: "Gradnja Invest",
    text: "Implementacija brža od očekivane. Rezultati vidljivi odmah.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&h=256&auto=format&fit=crop"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-slate-100 text-slate-900">
      <div className="w-full px-6 md:px-12">
        <span className="text-ruix-600 font-mono text-sm tracking-widest uppercase mb-12 block">05 — Reference</span>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonialsData.map((item, index) => (
            <div key={index} className="flex flex-col justify-between h-full border-t-2 border-slate-300 pt-8">
              <Quote className="text-ruix-600 mb-8" size={48} />
              <p className="text-2xl md:text-3xl font-bold leading-tight mb-8 tracking-tight">
                "{item.text}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-slate-300 rounded-none overflow-hidden">
                   <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale" />
                </div>
                <div>
                  <h5 className="font-bold text-lg uppercase tracking-wider">{item.name}</h5>
                  <p className="text-sm text-slate-500 font-mono">{item.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;