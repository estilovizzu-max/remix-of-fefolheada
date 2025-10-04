import { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { ProgressSection } from '@/components/ProgressSection';
import { DiarySection } from '@/components/DiarySection';
import { ThemeSection } from '@/components/ThemeSection';
import { AchievementsModal } from '@/components/AchievementsModal';
import { QuickNav } from '@/components/QuickNav';
import { BackToTop } from '@/components/BackToTop';
import { AdminPanel } from '@/components/AdminPanel';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { poemsData, themeTitles } from '@/data/poems';
import { loadCustomPoems, saveCustomPoem, mergePoems, generatePoemId } from '@/utils/poemLoader';

interface DiaryEntry {
  text: string;
  date: string;
}

const Index = () => {
  const [readPoems, setReadPoems] = useLocalStorage<string[]>('readPoems', []);
  const [diaryEntries, setDiaryEntries] = useLocalStorage<DiaryEntry[]>('spiritualDiaryEntries', []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customPoems, setCustomPoems] = useState(loadCustomPoems());

  // Mescla poemas base com poemas customizados
  const allPoems = useMemo(() => mergePoems(poemsData, customPoems), [customPoems]);

  const totalPoems = useMemo(() => {
    return Object.values(allPoems).reduce((sum, poems) => sum + poems.length, 0);
  }, [allPoems]);

  const handleAddPoem = (newPoem: { theme: string; title: string; text: string }) => {
    const poemId = generatePoemId(newPoem.theme);
    const poem = {
      id: poemId,
      title: newPoem.title,
      text: newPoem.text
    };
    
    saveCustomPoem(newPoem.theme, poem);
    setCustomPoems(loadCustomPoems());
  };

  const handleToggleRead = (poemId: string, isRead: boolean) => {
    setReadPoems(prev => {
      if (isRead && !prev.includes(poemId)) {
        return [...prev, poemId];
      } else if (!isRead) {
        return prev.filter(id => id !== poemId);
      }
      return prev;
    });
  };

  const handleSaveDiaryEntry = (text: string) => {
    setDiaryEntries(prev => [...prev, { text, date: new Date().toISOString() }]);
  };

  const handleDeleteDiaryEntry = (index: number) => {
    setDiaryEntries(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full scroll-smooth">
      <AdminPanel onAddPoem={handleAddPoem} />
      <QuickNav />
      <BackToTop />

      <main className="w-full max-w-4xl mx-auto p-6 sm:p-8 md:p-12">
        <Header />

        <ProgressSection 
          readCount={readPoems.length}
          totalPoems={totalPoems}
          onOpenModal={() => setIsModalOpen(true)}
        />

        <DiarySection
          entries={diaryEntries}
          onSaveEntry={handleSaveDiaryEntry}
          onDeleteEntry={handleDeleteDiaryEntry}
        />

        <div className="space-y-4">
          {Object.keys(themeTitles).map((themeKey) => {
            const poems = allPoems[themeKey];
            if (!poems || poems.length === 0) return null;
            
            const themeId = `theme-${themeKey}`;
            return (
              <ThemeSection
                key={themeKey}
                themeId={themeId}
                title={themeTitles[themeKey]}
                poems={poems}
                readPoems={readPoems}
                onToggleRead={handleToggleRead}
              />
            );
          })}
        </div>
      </main>

      <AchievementsModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        readCount={readPoems.length}
        totalPoems={totalPoems}
        diaryCount={diaryEntries.length}
      />
    </div>
  );
};

export default Index;
