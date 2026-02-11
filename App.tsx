import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Benefits />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;