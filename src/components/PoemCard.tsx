import { useState, useEffect } from 'react';
import { Volume2, Square, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Poem } from '@/data/poems';
import { toast } from '@/hooks/use-toast';

interface PoemCardProps {
  poem: Poem;
  isRead: boolean;
  onToggleRead: (poemId: string, isRead: boolean) => void;
}

export const PoemCard = ({ poem, isRead, onToggleRead }: PoemCardProps) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const handleSpeak = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(poem.text);
    
    // Get all available voices
    const voices = window.speechSynthesis.getVoices();
    // Try to find a better Brazilian Portuguese voice (Google is usually more natural)
    const preferredVoice = voices.find(v => v.lang.includes('pt-BR') && v.name.includes('Google')) || 
                           voices.find(v => v.lang.includes('pt-BR')) ||
                           voices.find(v => v.lang.includes('pt'));
    
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }
    
    utterance.lang = 'pt-BR';
    utterance.rate = 0.95; // Slightly faster for natural rhythm
    utterance.pitch = 1.05; // Slightly higher pitch for more "human" feel
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  const handleShare = async () => {
    const shareData = {
      title: `${poem.title} - Evaldo Poeta`,
      text: `${poem.title}\n\n${poem.text}\n\n- Evaldo Poeta`,
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        toast({
          title: "Compartilhado com sucesso!",
          description: "Obrigado por compartilhar 🙏"
        });
      } else {
        await navigator.clipboard.writeText(`${shareData.title}\n\n${shareData.text}`);
        toast({
          title: "Copiado!",
          description: "Poema copiado para a área de transferência"
        });
      }
    } catch (error) {
      console.error('Erro ao compartilhar:', error);
    }
  };

  return (
    <article className="bg-card rounded-[2.5rem] shadow-lg border border-border/50 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
      <div className="p-8 border-b border-border bg-gradient-to-br from-primary/[0.03] to-secondary/[0.03]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <h3 className="text-2xl font-bold text-primary tracking-tight">{poem.title}</h3>
          
          <div className="flex items-center gap-3 flex-wrap">
            <Button
              onClick={handleSpeak}
              variant="outline"
              size="sm"
              className="rounded-full px-6 hover:bg-primary hover:text-primary-foreground transition-all duration-300 border-primary/20"
              title={isSpeaking ? "Parar áudio" : "Ouvir poema"}
            >
              {isSpeaking ? (
                <><Square className="h-4 w-4 mr-2" /> Parar</>
              ) : (
                <><Volume2 className="h-4 w-4 mr-2" /> Ouvir</>
              )}
            </Button>
            <Button
              onClick={handleShare}
              variant="outline"
              size="sm"
              className="rounded-full px-6 hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 border-secondary/20"
              title="Compartilhar poema"
            >
              <Share2 className="h-4 w-4 mr-2" /> Partilhar
            </Button>
            
            <div className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full border border-border/50">
              <Switch
                id={`read-${poem.id}`}
                checked={isRead}
                onCheckedChange={(checked) => onToggleRead(poem.id, checked)}
                className="data-[state=checked]:bg-primary"
              />
              <Label htmlFor={`read-${poem.id}`} className={`text-xs font-bold uppercase tracking-widest cursor-pointer ${isRead ? 'text-primary' : 'text-muted-foreground'}`}>
                {isRead ? 'Lido' : 'Marcar'}
              </Label>
            </div>
          </div>
        </div>
      </div>

      <div className="poem-container relative p-10 md:p-20 flex flex-col items-center">
        <div className="poem-watermark text-primary/5">Evaldo Poeta</div>
        <p className="poem-text">
          {poem.text}
        </p>
        
        <div className="mt-12 space-y-6">
          {poem.reflection && (
            <div className="p-6 bg-primary/[0.02] rounded-3xl border border-primary/10 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary/40" />
              <h4 className="flex items-center gap-2 font-bold text-primary mb-3 text-sm uppercase tracking-widest">
                <span className="text-xl">✨</span> Reflexão da Alma
              </h4>
              <p className="text-base text-foreground/80 leading-relaxed italic">
                "{poem.reflection}"
              </p>
            </div>
          )}

          {poem.inspiration && (
            <div className="p-6 bg-secondary/[0.02] rounded-3xl border border-secondary/10 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-secondary/40" />
              <h4 className="flex items-center gap-2 font-bold text-secondary mb-3 text-sm uppercase tracking-widest">
                <span className="text-xl">✍️</span> Convite ao Poeta
              </h4>
              <p className="text-base text-foreground/80 leading-relaxed">
                {poem.inspiration}
              </p>
            </div>
          )}
        </div>

        <div className="mt-10 pt-6 border-t border-border/30 flex justify-end">
          <p className="text-lg font-serif italic text-primary/40">— Evaldo Poeta</p>
        </div>
      </div>
    </article>
  );
};
