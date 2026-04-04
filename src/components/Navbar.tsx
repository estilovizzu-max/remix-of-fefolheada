import { Menu, X, BookOpen, Users, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border py-3 shadow-sm' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <div 
          className="flex items-center space-x-2 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="bg-primary p-2 rounded-xl group-hover:rotate-12 transition-transform">
            <Heart className="h-6 w-6 text-primary-foreground fill-primary-foreground" />
          </div>
          <span className="text-2xl font-black text-primary tracking-tighter">
            Folheando <span className="text-secondary italic">Fé</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('poems-content')} className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
            Poemas
          </button>
          <button onClick={() => scrollToSection('diary-section')} className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
            Diário
          </button>
          <Button 
            onClick={() => scrollToSection('poems-content')}
            variant="default" 
            className="rounded-full px-6"
          >
            QUERO MINHA TRANSFORMAÇÃO
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-muted-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 space-y-4 animate-in slide-in-from-top-2">
          <button 
            onClick={() => scrollToSection('poems-content')}
            className="flex items-center space-x-3 w-full p-3 rounded-xl hover:bg-muted transition-colors"
          >
            <BookOpen className="h-5 w-5 text-primary" />
            <span className="font-medium">Poemas</span>
          </button>
          <button 
            onClick={() => scrollToSection('diary-section')}
            className="flex items-center space-x-3 w-full p-3 rounded-xl hover:bg-muted transition-colors"
          >
            <Users className="h-5 w-5 text-secondary" />
            <span className="font-medium">Diário Espiritual</span>
          </button>
          <Button 
            onClick={() => scrollToSection('poems-content')}
            className="w-full rounded-xl"
          >
            Começar Jornada
          </Button>
        </div>
      )}
    </nav>
  );
};