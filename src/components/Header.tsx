import { Instagram, Phone, Share2, CheckCircle2 } from 'lucide-react';
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
        ✨ Experiência Exclusiva • Método PCH
      </div>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-primary mb-6 tracking-tighter leading-[0.9] drop-shadow-sm">
        Sente que sua fé está <span className="text-secondary italic underline decoration-secondary/30 underline-offset-8">vazia</span>?
      </h1>
      <p className="text-lg md:text-2xl font-medium text-foreground/90 max-w-3xl mx-auto mb-8 leading-tight">
        Descubra o caminho simples para reorganizar sua mente e libertar sua alma através da <span className="text-primary underline decoration-secondary/30 underline-offset-4 font-bold">linguagem que acessa o invisível</span>.
      </p>
      
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <div className="flex items-center space-x-2 text-primary bg-primary/5 px-4 py-2 rounded-full border border-primary/10 shadow-sm">
          <CheckCircle2 className="h-4 w-4 text-secondary" />
          <span className="text-sm font-bold uppercase tracking-wider">Poemas de Poder</span>
        </div>
        <div className="flex items-center space-x-2 text-primary bg-primary/5 px-4 py-2 rounded-full border border-primary/10 shadow-sm">
          <CheckCircle2 className="h-4 w-4 text-secondary" />
          <span className="text-sm font-bold uppercase tracking-wider">Método PCH</span>
        </div>
        <div className="flex items-center space-x-2 text-primary bg-primary/5 px-4 py-2 rounded-full border border-primary/10 shadow-sm">
          <CheckCircle2 className="h-4 w-4 text-secondary" />
          <span className="text-sm font-bold uppercase tracking-wider">Cura Emocional</span>
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