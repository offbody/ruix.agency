import React from 'react';
import { Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ruix-900 text-white py-12 border-t border-ruix-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xl font-bold font-serif">ruix.agency</span>
            </div>
            <p className="text-ruix-300 text-sm leading-relaxed">
              Pomažemo kompanijama u Srbiji da automatizuju nabavku, uštede novac i posluju pametnije.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Brzi Linkovi</h4>
            <ul className="space-y-3 text-sm text-ruix-300">
              <li><a href="#about" className="hover:text-white transition-colors">O nama</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Usluge</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Proces</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Usluge</h4>
            <ul className="space-y-3 text-sm text-ruix-300">
              <li>Automatizacija Nabavke</li>
              <li>Analitika Troškova</li>
              <li>Upravljanje Rizicima</li>
              <li>Digitalizacija Dokumenata</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Društvene Mreže</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-ruix-800 flex items-center justify-center hover:bg-ruix-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-ruix-800 flex items-center justify-center hover:bg-ruix-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-ruix-800 flex items-center justify-center hover:bg-ruix-600 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-ruix-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-ruix-400 text-sm">© {new Date().getFullYear()} ruix.agency. Sva prava zadržana.</p>
          <div className="flex gap-6 text-sm text-ruix-400">
            <a href="#" className="hover:text-white transition-colors">Politika Privatnosti</a>
            <a href="#" className="hover:text-white transition-colors">Uslovi Korišćenja</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;