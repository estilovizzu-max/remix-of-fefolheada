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
    <header className="text-center mb-4">
      <h1 className="text-6xl md:text-8xl font-black text-primary mb-4 tracking-tighter drop-shadow-sm">
        Folheando <span className="text-secondary italic">Fé</span>
      </h1>
      <p className="text-2xl md:text-3xl font-medium text-foreground/80 mb-2">Poesia do Meu Grupo de Oração</p>
      <div className="flex items-center justify-center space-x-2 text-muted-foreground">
        <div className="h-px w-8 bg-border" />
        <p className="text-lg font-light tracking-widest uppercase">Por Evaldo Poeta</p>
        <div className="h-px w-8 bg-border" />
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