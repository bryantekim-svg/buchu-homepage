import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to handle scroll to section smoothly
  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 py-4 md:py-6 mix-blend-difference text-white transition-all duration-300">
        <div className="w-full px-6 md:px-12 flex justify-between items-center">
          {/* Logo - Using Image */}
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="block">
            <img 
              src="./logo.png" 
              alt="부추꽃더클래식" 
              className="h-12 md:h-16 w-auto object-contain brightness-0 invert"
              onError={(e) => {
                // Fallback if image fails
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            {/* Fallback Text Logo */}
            <span className="hidden font-serif text-xl md:text-2xl font-bold tracking-tighter whitespace-nowrap">
              부추꽃더클래식
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-12">
            <button onClick={() => scrollToSection('reality')} className="text-sm font-medium uppercase tracking-widest hover:text-emerald-400 transition-colors">Reality</button>
            <button onClick={() => scrollToSection('philosophy')} className="text-sm font-medium uppercase tracking-widest hover:text-emerald-400 transition-colors">Philosophy</button>
            <button onClick={() => scrollToSection('walk')} className="text-sm font-medium uppercase tracking-widest hover:text-emerald-400 transition-colors">Lifestyle</button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border border-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
            >
              상담 예약
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-stone-950/95 backdrop-blur-xl text-white flex flex-col p-8">
          <div className="flex justify-end mb-12">
            <button onClick={() => setMobileMenuOpen(false)} className="p-2">
              <X size={32} />
            </button>
          </div>
          <nav className="flex flex-col gap-8 text-2xl font-serif items-center">
             <img 
              src="./logo.png" 
              alt="Logo" 
              className="h-16 mb-8 brightness-0 invert" 
            />
            <button onClick={() => scrollToSection('reality')} className="hover:text-emerald-400 transition-colors">현실 점검</button>
            <button onClick={() => scrollToSection('philosophy')} className="hover:text-emerald-400 transition-colors">공간과 철학</button>
            <button onClick={() => scrollToSection('walk')} className="hover:text-emerald-400 transition-colors">산책이 있는 삶</button>
            <button onClick={() => scrollToSection('contact')} className="mt-8 px-10 py-4 bg-white text-black rounded-full text-lg font-bold">상담 예약하기</button>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;