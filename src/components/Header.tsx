import { Instagram, Phone, Share2 } from 'lucide-react';
import { toast } from 'sonner';

export const Header = () => {
  const handleShare = async () => {
    const shareData = {
      title: 'Folheando Fé Poesia do Meu Grupo de Oração',
      text: 'Uma coleção de poemas espirituais do grupo de oração.',
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast.success('Link copiado!');
      }
    } catch (err) {
      console.error('Erro ao compartilhar:', err);
    }
  };

  return (
    <header className="text-center mb-8 animate-in fade-in slide-in-from-top-4 duration-1000">
      <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-bold mb-6 tracking-wide uppercase">
        ✨ Experiência Exclusiva • Método Filho da Luz
      </div>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-primary mb-6 tracking-tighter leading-[0.9] drop-shadow-sm">
        Folheando <span className="text-secondary italic">Fé</span>
      </h1>
      <p className="text-xl md:text-3xl font-medium text-foreground/90 max-w-3xl mx-auto mb-8 leading-tight">
        Uma jornada que reorganiza sua mente através da <span className="text-primary underline decoration-secondary/30 underline-offset-4">linguagem que acessa o invisível</span>.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
        <div className="flex items-center space-x-2 text-muted-foreground bg-muted/50 px-4 py-2 rounded-full border border-border/50">
          <p className="text-sm font-light tracking-widest uppercase">Por Evaldo Poeta</p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-x-4 sm:gap-x-6 gap-y-2 mt-6 text-sm sm:text-base">
        <a 
          href="https://www.instagram.com/oevaldopoeta" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center text-muted-foreground hover:text-primary transition"
        >
          <Instagram className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
          <span>@oevaldopoeta</span>
        </a>
        <a 
          href="https://wa.me/5511961226754" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center text-muted-foreground hover:text-primary transition"
        >
          <Phone className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
          <span>(11) 96122-6754</span>
        </a>
        <button 
          onClick={handleShare}
          className="flex items-center text-muted-foreground hover:text-primary transition"
        >
          <Share2 className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
          <span>Partilhar</span>
        </button>
      </div>
    </header>
  );
};