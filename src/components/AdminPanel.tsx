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
    text: '',
    reflection: ''
  });
  const [errors, setErrors] = useState<Partial<Record<keyof NewPoem, string>>>({});

  const validate = () => {
    const newErrors: Partial<Record<keyof NewPoem, string>> = {};
    if (!newPoem.theme) newErrors.theme = 'O tema é obrigatório';
    if (!newPoem.title.trim()) newErrors.title = 'O título é obrigatório';
    if (!newPoem.text.trim()) newErrors.text = 'O texto do poema é obrigatório';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) {
      toast.error('Por favor, corrija os campos obrigatórios');
      return;
    }

    onAddPoem(newPoem);
    setNewPoem({ theme: '', title: '', text: '', reflection: '' });
    setIsOpen(false);
    toast.success('Poema adicionado com sucesso!');
  };

  const handleReset = () => {
    setNewPoem({ theme: '', title: '', text: '', reflection: '' });
    setErrors({});
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <footer className="w-full flex flex-col items-center justify-center py-24 mt-12 border-t border-border/10 bg-gradient-to-b from-transparent to-muted/20">
          <div className="relative group">
            <p className="text-[10px] sm:text-xs text-muted-foreground/30 font-light tracking-[0.5em] uppercase select-none transition-all duration-700">
              CRIADO POR EVALDO.OS
            </p>
            <button 
              className="absolute inset-0 w-full h-full cursor-default focus:outline-none z-10" 
              aria-label="Admin Access"
            />
          </div>
        </footer>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">
            Adicionar Novo Poema
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <Label htmlFor="theme" className={errors.theme ? "text-destructive" : ""}>
              Tema *
            </Label>
            <Select
              value={newPoem.theme}
              onValueChange={(value) => {
                setNewPoem({ ...newPoem, theme: value });
                if (errors.theme) setErrors({ ...errors, theme: undefined });
              }}
            >
              <SelectTrigger id="theme" className={errors.theme ? "border-destructive focus:ring-destructive" : ""}>
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
            {errors.theme && <p className="text-xs text-destructive">{errors.theme}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="title" className={errors.title ? "text-destructive" : ""}>
              Título do Poema *
            </Label>
            <Input
              id="title"
              value={newPoem.title}
              onChange={(e) => {
                setNewPoem({ ...newPoem, title: e.target.value });
                if (errors.title) setErrors({ ...errors, title: undefined });
              }}
              placeholder="Digite o título do poema"
              className={`text-base ${errors.title ? "border-destructive focus-visible:ring-destructive" : ""}`}
            />
            {errors.title && <p className="text-xs text-destructive">{errors.title}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="text" className={errors.text ? "text-destructive" : ""}>
              Texto do Poema *
            </Label>
            <Textarea
              id="text"
              value={newPoem.text}
              onChange={(e) => {
                setNewPoem({ ...newPoem, text: e.target.value });
                if (errors.text) setErrors({ ...errors, text: undefined });
              }}
              placeholder="Digite o texto do poema aqui..."
              className={`min-h-[300px] font-serif text-base leading-relaxed ${errors.text ? "border-destructive focus-visible:ring-destructive" : ""}`}
            />
            {errors.text ? (
              <p className="text-xs text-destructive">{errors.text}</p>
            ) : (
              <p className="text-sm text-muted-foreground">
                Use quebras de linha para separar os versos
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="reflection">Reflexão do Poema</Label>
            <Textarea
              id="reflection"
              value={newPoem.reflection}
              onChange={(e) => setNewPoem({ ...newPoem, reflection: e.target.value })}
              placeholder="Digite a reflexão do poema aqui..."
              className="min-h-[150px] text-base"
            />
            <p className="text-sm text-muted-foreground">
              Uma breve reflexão ou ensinamento sobre o poema
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
