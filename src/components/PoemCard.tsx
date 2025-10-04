import { useState, useEffect } from 'react';
import { Play, Square, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Poem } from '@/data/poems';

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
    utterance.lang = 'pt-BR';
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <article className="bg-card rounded-lg shadow-sm border border-border overflow-hidden">
      <div className="p-4 border-b border-border flex justify-between items-center">
        <h3 className="text-lg font-semibold text-foreground">{poem.title}</h3>
        <div className="flex items-center gap-4">
          <Button
            onClick={handleSpeak}
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-primary"
          >
            {isSpeaking ? (
              <Square className="h-5 w-5" />
            ) : (
              <Volume2 className="h-5 w-5" />
            )}
          </Button>
          <Label className="flex items-center gap-2 cursor-pointer">
            <Switch
              checked={isRead}
              onCheckedChange={(checked) => onToggleRead(poem.id, checked)}
            />
            <span className={`text-sm ${isRead ? 'text-primary font-semibold' : 'text-muted-foreground'}`}>
              {isRead ? 'Lido' : 'Não lido'}
            </span>
          </Label>
        </div>
      </div>
      <div className="poem-container">
        <div className="poem-watermark">Evaldo Poeta</div>
        <p className="poem-text">{poem.text}</p>
      </div>
    </article>
  );
};
