import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface ProgressSectionProps {
  readCount: number;
  totalPoems: number;
  onOpenModal: () => void;
}

export const ProgressSection = ({ readCount, totalPoems, onOpenModal }: ProgressSectionProps) => {
  const percentage = totalPoems > 0 ? (readCount / totalPoems) * 100 : 0;

  return (
    <section className="bg-card p-6 rounded-lg shadow-md mb-12">
      <h3 className="text-2xl font-bold text-primary mb-4">Sua Jornada de Leitura</h3>
      <div className="w-full progress-bar-bg rounded-full h-4">
        <div 
          className="progress-bar-fill h-4 rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="flex justify-between items-center mt-3">
        <p className="text-sm font-semibold text-foreground">
          Você leu {readCount} de {totalPoems} poemas
        </p>
        <Button onClick={onOpenModal} className="bg-primary hover:bg-primary/90">
          Ver Conquistas
        </Button>
      </div>
    </section>
  );
};
