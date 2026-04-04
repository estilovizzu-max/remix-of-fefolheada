import { Instagram, Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-black text-primary tracking-tighter">
              Folheando <span className="text-secondary italic">Fé</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-xs">
              Uma jornada de espiritualidade e poesia através das palavras de Evaldo Poeta. Fortalecendo a fé através da arte.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('poems-content')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Poemas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('diary-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Diário Espiritual
                </button>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-muted-foreground">
                <Instagram className="h-5 w-5 mr-3 text-primary" />
                <a href="https://www.instagram.com/oevaldopoeta" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  @oevaldopoeta
                </a>
              </li>
              <li className="flex items-center text-muted-foreground">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <a href="https://wa.me/5511961226754" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  (11) 96122-6754
                </a>
              </li>
              <li className="flex items-center text-muted-foreground">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <span>contato@folheandofe.com.br</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Folheando Fé - Por Evaldo Poeta. Todos os direitos reservados.
          </p>
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <span>Desenvolvido com carinho para o Reino</span>
          </div>
        </div>
      </div>
    </footer>
  );
};