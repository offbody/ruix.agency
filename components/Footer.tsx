
import React, { useState } from 'react';
import { X } from 'lucide-react';

type LegalDocType = 'privacy' | 'terms';

const Footer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDoc, setCurrentDoc] = useState<LegalDocType | null>(null);

  const openModal = (doc: LegalDocType) => {
    setCurrentDoc(doc);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentDoc(null);
    document.body.style.overflow = 'unset';
  };

  const renderLegalContent = () => {
    if (currentDoc === 'privacy') {
      return (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold mb-4">Politika Privatnosti</h3>
          <p className="text-sm text-slate-500 mb-4">Poslednje ažuriranje: {new Date().toLocaleDateString('sr-RS')}</p>
          
          <h4 className="font-bold text-slate-900 mt-4">1. Uvod</h4>
          <p>RUIX.AGENCY ("mi", "naš") posvećena je zaštiti vaše privatnosti. Ova politika objašnjava kako prikupljamo, koristimo i štitimo vaše podatke prilikom posete našem sajtu.</p>
          
          <h4 className="font-bold text-slate-900 mt-4">2. Prikupljanje podataka</h4>
          <p>Putem kontakt forme i AI alata možemo prikupljati sledeće podatke: Ime i prezime, email adresa, naziv kompanije, i podatke o poslovanju koje svesno unesete radi analize.</p>
          
          <h4 className="font-bold text-slate-900 mt-4">3. Upotreba podataka</h4>
          <p>Vaše podatke koristimo isključivo za: komunikaciju sa vama, pružanje usluga automatizacije nabavke, i unapređenje našeg AI algoritma. RUIX.AGENCY nikada neće prodati vaše podatke trećim licima.</p>
          
          <h4 className="font-bold text-slate-900 mt-4">4. Bezbednost</h4>
          <p>Primenjujemo industrijske standarde zaštite podataka kako bismo sprečili neovlašćen pristup ili curenje informacija.</p>
          
          <h4 className="font-bold text-slate-900 mt-4">5. Kontakt</h4>
          <p>Za sva pitanja u vezi sa privatnošću, kontaktirajte nas putem forme na sajtu ili na email: privacy@ruix.agency.</p>
        </div>
      );
    }
    
    if (currentDoc === 'terms') {
      return (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold mb-4">Uslovi Korišćenja</h3>
          <p className="text-sm text-slate-500 mb-4">Poslednje ažuriranje: {new Date().toLocaleDateString('sr-RS')}</p>

          <h4 className="font-bold text-slate-900 mt-4">1. Prihvatanje uslova</h4>
          <p>Pristupom i korišćenjem sajta RUIX.AGENCY prihvatate ove uslove korišćenja u potpunosti.</p>

          <h4 className="font-bold text-slate-900 mt-4">2. Intelektualna svojina</h4>
          <p>Celokupan sadržaj na ovom sajtu (tekst, kod, dizajn, logotipi, AI modeli) je isključivo vlasništvo RUIX.AGENCY. Zabranjeno je kopiranje, reprodukcija ili distribucija bez pismene dozvole.</p>

          <h4 className="font-bold text-slate-900 mt-4">3. Odricanje od odgovornosti</h4>
          <p>Informacije i AI analize na sajtu su informativnog karaktera. RUIX.AGENCY ne garantuje apsolutnu tačnost predikcija i nije odgovorna za poslovne odluke donete na osnovu automatski generisanih saveta.</p>

          <h4 className="font-bold text-slate-900 mt-4">4. Izmene uslova</h4>
          <p>RUIX.AGENCY zadržava pravo da promeni ove uslove bilo kada. Nastavak korišćenja sajta nakon izmena podrazumeva prihvatanje novih uslova.</p>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <footer className="bg-ruix-900 text-white py-12 border-t border-ruix-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Changed grid from cols-4 to cols-3 since we removed Social Media column */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            
            <div className="col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xl font-bold font-serif uppercase tracking-wider">RUIX.AGENCY</span>
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

            {/* Social Media column removed as requested */}
          </div>
          
          <div className="pt-8 border-t border-ruix-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-ruix-400 text-sm">© {new Date().getFullYear()} RUIX.AGENCY. Sva prava zadržana.</p>
            <div className="flex gap-6 text-sm text-ruix-400">
              <button 
                onClick={() => openModal('privacy')} 
                className="hover:text-white transition-colors focus:outline-none"
              >
                Politika Privatnosti
              </button>
              <button 
                onClick={() => openModal('terms')} 
                className="hover:text-white transition-colors focus:outline-none"
              >
                Uslovi Korišćenja
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
            onClick={closeModal}
          ></div>
          <div className="relative bg-white text-slate-700 w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-lg shadow-2xl animate-fade-in-up">
            <div className="sticky top-0 right-0 bg-white/95 backdrop-blur border-b border-slate-100 p-4 flex justify-end z-10">
              <button 
                onClick={closeModal}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500 hover:text-slate-900"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-8">
              {renderLegalContent()}
            </div>
            <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end">
              <button 
                onClick={closeModal}
                className="px-6 py-2 bg-slate-900 text-white font-bold uppercase text-sm tracking-wider hover:bg-ruix-600 transition-colors"
              >
                Zatvori
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
