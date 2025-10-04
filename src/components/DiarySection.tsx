import { useState } from 'react';
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

interface DiaryEntry {
  text: string;
  date: string;
}

interface DiarySectionProps {
  entries: DiaryEntry[];
  onSaveEntry: (text: string) => void;
  onDeleteEntry: (index: number) => void;
}

export const DiarySection = ({ entries, onSaveEntry, onDeleteEntry }: DiarySectionProps) => {
  const [diaryText, setDiaryText] = useState('');

  const handleSave = () => {
    if (diaryText.trim()) {
      onSaveEntry(diaryText);
      setDiaryText('');
      toast.success('Reflexão salva com sucesso!');
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <section id="diario-espiritual" className="space-y-8 mb-12">
      <h2 id="theme-diario" className="theme-header">
        Diário Terapêutico Espiritual
      </h2>
      <div className="bg-card p-6 rounded-lg shadow-md">
        <p className="mb-4 text-muted-foreground">
          Use este espaço para suas reflexões. Suas anotações são salvas no seu navegador e contribuem para suas conquistas.
        </p>
        <Textarea
          value={diaryText}
          onChange={(e) => setDiaryText(e.target.value)}
          className="w-full h-48 p-4 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-ring transition"
          placeholder="Escreva sua reflexão aqui..."
        />
        <Button 
          onClick={handleSave}
          className="mt-4 bg-primary hover:bg-primary/90"
        >
          Salvar Anotação
        </Button>
      </div>
      <div className="space-y-4">
        {entries.slice().reverse().map((entry, index) => {
          const originalIndex = entries.length - 1 - index;
          return (
            <div key={originalIndex} className="bg-card p-5 rounded-lg shadow-sm border-l-4 border-secondary">
              <p className="text-foreground whitespace-pre-line">{entry.text}</p>
              <div className="flex justify-between items-center mt-4 text-sm text-muted-foreground">
                <span>{formatDate(entry.date)}</span>
                <Button
                  onClick={() => onDeleteEntry(originalIndex)}
                  variant="ghost"
                  size="sm"
                  className="text-destructive hover:text-destructive/90"
                >
                  <Trash2 className="h-4 w-4 mr-1" />
                  Excluir
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
