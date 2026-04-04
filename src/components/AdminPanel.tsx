import { useState } from 'react';
import { Plus, X, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';
import { themeTitles } from '@/data/poems';

interface NewPoem {
  theme: string;
  title: string;
  text: string;
  reflection: string;
}

interface AdminPanelProps {
  onAddPoem: (poem: NewPoem) => void;
}

export const AdminPanel = ({ onAddPoem }: AdminPanelProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newPoem, setNewPoem] = useState<NewPoem>({
    theme: '',
    title: '',
    text: ''
  });

  const handleSubmit = () => {
    if (!newPoem.theme || !newPoem.title.trim() || !newPoem.text.trim()) {
      toast.error('Por favor, preencha todos os campos');
      return;
    }

    onAddPoem(newPoem);
    setNewPoem({ theme: '', title: '', text: '' });
    setIsOpen(false);
    toast.success('Poema adicionado com sucesso!');
  };

  const handleReset = () => {
    setNewPoem({ theme: '', title: '', text: '' });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          className="fixed bottom-6 left-6 z-20 bg-primary hover:bg-primary/90 shadow-lg"
          size="lg"
        >
          <Plus className="h-5 w-5 mr-2" />
          Adicionar Poema
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">
            Adicionar Novo Poema
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <Label htmlFor="theme">Tema</Label>
            <Select
              value={newPoem.theme}
              onValueChange={(value) => setNewPoem({ ...newPoem, theme: value })}
            >
              <SelectTrigger id="theme">
                <SelectValue placeholder="Selecione um tema" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(themeTitles).map(([key, title]) => (
                  <SelectItem key={key} value={key}>
                    {title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Título do Poema</Label>
            <Input
              id="title"
              value={newPoem.title}
              onChange={(e) => setNewPoem({ ...newPoem, title: e.target.value })}
              placeholder="Digite o título do poema"
              className="text-base"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="text">Texto do Poema</Label>
            <Textarea
              id="text"
              value={newPoem.text}
              onChange={(e) => setNewPoem({ ...newPoem, text: e.target.value })}
              placeholder="Digite o texto do poema aqui..."
              className="min-h-[300px] font-serif text-base leading-relaxed"
            />
            <p className="text-sm text-muted-foreground">
              Use quebras de linha para separar os versos
            </p>
          </div>

          <div className="flex gap-3 justify-end pt-4">
            <Button
              variant="outline"
              onClick={handleReset}
              className="gap-2"
            >
              <X className="h-4 w-4" />
              Limpar
            </Button>
            <Button
              onClick={handleSubmit}
              className="bg-primary hover:bg-primary/90 gap-2"
            >
              <Save className="h-4 w-4" />
              Salvar Poema
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
