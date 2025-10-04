import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { readingAchievementsList, diaryAchievementsList } from '@/data/poems';

interface AchievementsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  readCount: number;
  totalPoems: number;
  diaryCount: number;
}

export const AchievementsModal = ({ 
  open, 
  onOpenChange, 
  readCount, 
  totalPoems,
  diaryCount 
}: AchievementsModalProps) => {
  const AchievementCard = ({ 
    achievement, 
    isUnlocked 
  }: { 
    achievement: { name: string; desc: string; icon: string; goal: number | 'all' }; 
    isUnlocked: boolean;
  }) => (
    <div 
      className={`border-2 rounded-lg p-3 text-center transition-all duration-300 ${
        isUnlocked 
          ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-950/20' 
          : 'border-border bg-muted grayscale opacity-70'
      }`}
    >
      <div className="text-3xl">{achievement.icon}</div>
      <div className="font-bold text-sm mt-1">{achievement.name}</div>
      <div className="text-xs text-muted-foreground">{achievement.desc}</div>
    </div>
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">
            Minhas Conquistas
          </DialogTitle>
        </DialogHeader>
        <div>
          <h4 className="text-lg font-semibold text-primary mb-2">
            Progresso de Leitura
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
            {readingAchievementsList.map((ach) => {
              const goal = ach.goal === 'all' ? totalPoems : ach.goal;
              const isUnlocked = readCount >= goal;
              return (
                <AchievementCard 
                  key={ach.name} 
                  achievement={ach} 
                  isUnlocked={isUnlocked} 
                />
              );
            })}
          </div>
          <h4 className="text-lg font-semibold text-primary mt-6 mb-2">
            Progresso do Diário
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {diaryAchievementsList.map((ach) => {
              const isUnlocked = diaryCount >= ach.goal;
              return (
                <AchievementCard 
                  key={ach.name} 
                  achievement={ach} 
                  isUnlocked={isUnlocked} 
                />
              );
            })}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
