import { Instagram, Phone, Share2 } from 'lucide-react';
import { toast } from 'sonner';

export const Header = () => {
  const handleShare = async () => {
    const shareData = {
      title: 'Folheando Fé - Por Evaldo Poeta',
      text: 'Uma coleção de poemas espirituais por Evaldo Poeta.',
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
    <header className="text-center mb-12">
      <h1 className="text-5xl font-bold text-primary mb-4">Folheando Fé</h1>
      <p className="text-xl text-muted-foreground mt-4">Por Evaldo Poeta</p>
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
