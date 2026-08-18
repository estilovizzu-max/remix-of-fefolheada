import { useState, useEffect } from 'react';
import { Volume2, Square, Share2, Settings2, Type, AlignJustify, BookMarked } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Poem } from '@/data/poems';
import { toast } from '@/hooks/use-toast';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface PoemCardProps {
  poem: Poem;
  isRead: boolean;
  onToggleRead: (poemId: string, isRead: boolean) => void;
}

export const PoemCard = ({ poem, isRead, onToggleRead }: PoemCardProps) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [fontScale, setFontScale] = useLocalStorage<number>('readerFontScale', 1);
  const [lineHeight, setLineHeight] = useLocalStorage<number>('readerLineHeight', 2.2);
  const [readerMargin, setReaderMargin] = useLocalStorage<number>('readerMargin', 2);
  const [readerAlign, setReaderAlign] = useLocalStorage<string>('readerAlign', 'center');

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
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full px-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300 border-primary/20"
                  title="Ajustes de diagramação"
                >
                  <Settings2 className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-72 p-4">
                <p className="text-[10px] tracking-[0.3em] text-primary uppercase mb-3 font-bold">Ajustes de Leitura</p>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-xs font-bold flex items-center gap-2"><Type className="h-3.5 w-3.5" /> Fonte</span>
                      <span className="text-[10px]">{Math.round(fontScale * 100)}%</span>
                    </div>
                    <input
                      type="range" min={0.75} max={1.6} step={0.05}
                      value={fontScale}
                      onChange={(e) => setFontScale(parseFloat(e.target.value))}
                      className="w-full accent-primary"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-xs font-bold flex items-center gap-2"><AlignJustify className="h-3.5 w-3.5" /> Entrelinha</span>
                      <span className="text-[10px]">{lineHeight.toFixed(2)}</span>
                    </div>
                    <input
                      type="range" min={1.4} max={3.0} step={0.05}
                      value={lineHeight}
                      onChange={(e) => setLineHeight(parseFloat(e.target.value))}
                      className="w-full accent-primary"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-xs font-bold flex items-center gap-2"><BookMarked className="h-3.5 w-3.5" /> Margens</span>
                      <span className="text-[10px]">{readerMargin}rem</span>
                    </div>
                    <input
                      type="range" min={0} max={8} step={0.5}
                      value={readerMargin}
                      onChange={(e) => setReaderMargin(parseFloat(e.target.value))}
                      className="w-full accent-primary"
                    />
                  </div>

                  <div>
                    <span className="text-xs font-bold block mb-2">Alinhamento</span>
                    <div className="flex bg-muted p-1 rounded-md">
                      {(['left', 'center', 'right', 'justify'] as const).map((a) => (
                        <button
                          key={a}
                          onClick={() => setReaderAlign(a)}
                          className={`flex-1 py-1 rounded text-[10px] uppercase font-bold transition-colors ${
                            readerAlign === a
                              ? 'bg-primary text-primary-foreground'
                              : 'hover:bg-muted-foreground/10'
                          }`}
                        >
                          {a.slice(0, 3)}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

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
        <p 
          className="poem-text"
          style={{
            fontSize: `calc(1.25rem * ${fontScale})`,
            lineHeight: lineHeight,
            paddingLeft: `${readerMargin}rem`,
            paddingRight: `${readerMargin}rem`,
            textAlign: readerAlign as any
          }}
        >
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
                <span className="text-xl">✍️</span> O que eu digo a Deus depois de ler?
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
