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
    <article className="bg-card rounded-lg shadow-lg border border-border overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
      <div className="p-4 border-b border-border bg-gradient-to-r from-primary/5 to-secondary/5">
        <h3 className="text-xl font-bold text-primary mb-3">{poem.title}</h3>
        <div className="flex items-center gap-2 flex-wrap">
          <Button
            onClick={handleSpeak}
            variant="outline"
            size="sm"
            className="gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
            title={isSpeaking ? "Parar áudio" : "Ouvir poema"}
          >
            {isSpeaking ? (
              <><Square className="h-4 w-4" /> Parar</>
            ) : (
              <><Volume2 className="h-4 w-4" /> Ouvir</>
            )}
          </Button>
          <Button
            onClick={handleShare}
            variant="outline"
            size="sm"
            className="gap-2 hover:bg-secondary hover:text-secondary-foreground transition-colors"
            title="Compartilhar poema"
          >
            <Share2 className="h-4 w-4" /> Compartilhar
          </Button>
          <Label className="flex items-center gap-2 cursor-pointer ml-auto">
            <Switch
              checked={isRead}
              onCheckedChange={(checked) => onToggleRead(poem.id, checked)}
            />
            <span className={`text-sm font-medium ${isRead ? 'text-primary' : 'text-muted-foreground'}`}>
              {isRead ? '✓ Lido' : 'Marcar como lido'}
            </span>
          </Label>
        </div>
      </div>
      <div className="poem-container">
        <div className="poem-watermark">Evaldo Poeta</div>
        <p className="poem-text">{poem.text}</p>
        
        {poem.reflection && (
          <div className="mt-8 p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
            <h4 className="flex items-center gap-2 font-bold text-primary mb-2">
              <span>🔑</span> REFLEXÃO
            </h4>
            <p className="text-sm text-foreground/80 leading-relaxed italic">
              {poem.reflection}
            </p>
          </div>
        )}

        {poem.inspiration && (
          <div className="mt-4 p-4 bg-secondary/5 rounded-lg border-l-4 border-secondary">
            <h4 className="flex items-center gap-2 font-bold text-secondary mb-2">
              <span>✍️</span> ESCREVA SUA POESIA
            </h4>
            <p className="text-sm text-foreground/80 leading-relaxed">
              {poem.inspiration}
            </p>
          </div>
        )}

        <div className="mt-6 text-right">
          <p className="text-sm font-['Dancing_Script',cursive] text-primary/60 italic">— Evaldo Poeta</p>
        </div>
      </div>
    </article>
  );
};
