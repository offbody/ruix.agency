import React, { useState } from 'react';
import { Send, Sparkles, ArrowRight } from 'lucide-react';
import { analyzeProcurementNeeds } from '../services/gemini';
import { AiStatus } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  // AI Assistant State
  const [aiIndustry, setAiIndustry] = useState('');
  const [aiSize, setAiSize] = useState('');
  const [aiChallenges, setAiChallenges] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [aiStatus, setAiStatus] = useState<AiStatus>(AiStatus.IDLE);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Hvala vam, ${formData.name}! Vaša poruka je poslata.`);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleAiAnalysis = async (e: React.FormEvent) => {
    e.preventDefault();
    if(!aiIndustry || !aiSize || !aiChallenges) {
        alert("Molimo popunite sva polja za AI analizu.");
        return;
    }
    setAiStatus(AiStatus.LOADING);
    const response = await analyzeProcurementNeeds(aiIndustry, aiSize, aiChallenges);
    setAiResponse(response);
    setAiStatus(AiStatus.SUCCESS);
  };

  return (
    <section id="contact" className="bg-slate-950 text-white min-h-screen flex flex-col lg:flex-row">
      
      {/* Left: Contact Form (White) */}
      <div className="lg:w-1/2 bg-white text-slate-900 p-12 md:p-24 flex flex-col justify-center">
        <span className="text-ruix-600 font-mono text-sm tracking-widest uppercase mb-4 block">06 — Kontakt</span>
        <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-8">
          POKRENI <br/> TRANSFORMACIJU.
        </h2>
        
        <form onSubmit={handleContactSubmit} className="space-y-8 mt-8">
          <div className="group relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="block w-full border-b-2 border-slate-300 py-4 text-xl font-bold bg-transparent focus:border-ruix-600 outline-none transition-colors placeholder-transparent peer"
              placeholder="Ime"
              id="name"
            />
            <label htmlFor="name" className="absolute left-0 -top-3.5 text-sm text-slate-500 transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-ruix-600">Ime i Prezime</label>
          </div>

          <div className="group relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="block w-full border-b-2 border-slate-300 py-4 text-xl font-bold bg-transparent focus:border-ruix-600 outline-none transition-colors placeholder-transparent peer"
              placeholder="Email"
              id="email"
            />
             <label htmlFor="email" className="absolute left-0 -top-3.5 text-sm text-slate-500 transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-ruix-600">Poslovni Email</label>
          </div>

          <div className="group relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={3}
              required
              className="block w-full border-b-2 border-slate-300 py-4 text-xl font-bold bg-transparent focus:border-ruix-600 outline-none transition-colors resize-none placeholder-transparent peer"
              placeholder="Poruka"
              id="message"
            ></textarea>
            <label htmlFor="message" className="absolute left-0 -top-3.5 text-sm text-slate-500 transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-ruix-600">Vaša Poruka</label>
          </div>

          <button
            type="submit"
            className="w-full md:w-auto py-4 px-12 bg-slate-900 text-white font-bold uppercase tracking-widest hover:bg-ruix-600 transition-colors flex items-center justify-between gap-4 mt-8"
          >
            Pošalji <Send size={20} />
          </button>
        </form>
      </div>

      {/* Right: AI Tool (Dark Industrial) */}
      <div className="lg:w-1/2 bg-slate-900 p-12 md:p-24 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/10 relative overflow-hidden">
        {/* Abstract background grid */}
        <div className="absolute inset-0 z-0 opacity-10" 
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6 text-ruix-400">
            <Sparkles size={32} />
            <h3 className="text-2xl font-mono tracking-wider uppercase">AI.CONSULTANT_V1.0</h3>
          </div>
          
          <p className="text-slate-400 mb-12 font-light text-lg">
            Unesite parametre. Algoritam će generisati instant strategiju optimizacije.
          </p>

          <form onSubmit={handleAiAnalysis} className="space-y-6">
            <div>
              <label className="block text-xs font-mono text-ruix-500 mb-2 uppercase">Input: Industrija</label>
              <input
                type="text"
                value={aiIndustry}
                onChange={(e) => setAiIndustry(e.target.value)}
                className="w-full bg-slate-800/50 border border-slate-700 p-4 text-white focus:border-ruix-500 outline-none font-mono"
                placeholder="PROIZVODNJA / IT / LOGISTIKA"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono text-ruix-500 mb-2 uppercase">Input: Veličina</label>
                   <select 
                    value={aiSize}
                    onChange={(e) => setAiSize(e.target.value)}
                    className="w-full bg-slate-800/50 border border-slate-700 p-4 text-white focus:border-ruix-500 outline-none font-mono appearance-none"
                  >
                    <option value="">SELECT...</option>
                    <option value="1-10">SMALL (1-10)</option>
                    <option value="11-50">MEDIUM (11-50)</option>
                    <option value="50+">ENTERPRISE (50+)</option>
                  </select>
                </div>
                 <div>
                  <label className="block text-xs font-mono text-ruix-500 mb-2 uppercase">Input: Izazov</label>
                   <input
                    type="text"
                    value={aiChallenges}
                    onChange={(e) => setAiChallenges(e.target.value)}
                    className="w-full bg-slate-800/50 border border-slate-700 p-4 text-white focus:border-ruix-500 outline-none font-mono"
                    placeholder="TROŠKOVI..."
                  />
                </div>
            </div>
            
            <button
              type="submit"
              disabled={aiStatus === AiStatus.LOADING}
              className={`w-full py-5 border border-ruix-500 text-ruix-400 font-mono uppercase tracking-widest hover:bg-ruix-500 hover:text-white transition-all flex items-center justify-center gap-2 ${
                aiStatus === AiStatus.LOADING ? 'opacity-50 cursor-wait' : ''
              }`}
            >
              {aiStatus === AiStatus.LOADING ? 'PROCESSING_DATA...' : 'EXECUTE_ANALYSIS'} <ArrowRight size={18} />
            </button>
          </form>

          {aiResponse && (
            <div className="mt-8 p-6 bg-slate-800 border-l-4 border-ruix-500 animate-fade-in">
              <span className="text-xs font-mono text-ruix-500 block mb-2">// OUTPUT:</span>
              <p className="text-slate-200 font-light leading-relaxed">{aiResponse}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;