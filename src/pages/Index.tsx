import { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { ProgressSection } from '@/components/ProgressSection';
import { DiarySection } from '@/components/DiarySection';
import { ThemeSection } from '@/components/ThemeSection';
import { AchievementsModal } from '@/components/AchievementsModal';
import { QuickNav } from '@/components/QuickNav';
import { BackToTop } from '@/components/BackToTop';
import { AdminPanel } from '@/components/AdminPanel';
import { GroupSelector } from '@/components/GroupSelector';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { poemsData, themeTitles } from '@/data/poems';
import { loadCustomPoems, saveCustomPoem, mergePoems, generatePoemId } from '@/utils/poemLoader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Users } from "lucide-react";

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

  const handleAddPoem = (newPoem: { theme: string; title: string; text: string; reflection: string }) => {
    const poemId = generatePoemId(newPoem.theme);
    const poem = {
      id: poemId,
      title: newPoem.title,
      text: newPoem.text,
      reflection: newPoem.reflection
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
    <div className="w-full min-h-screen scroll-smooth bg-background relative overflow-hidden">
      {/* Background patterns/shapes for layout change */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-primary/5 to-transparent -z-10" />
      <div className="absolute top-40 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-40 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10" />

      
      <QuickNav />
      <BackToTop />

      <main className="w-full max-w-5xl mx-auto px-4 py-8 sm:px-6 md:py-16">
        <div className="mb-12 text-center">
          <Header />
        </div>

        <Tabs defaultValue="poems" className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="poems" className="gap-2">
                <BookOpen className="h-4 w-4" /> Poemas
              </TabsTrigger>
              <TabsTrigger value="groups" className="gap-2">
                <Users className="h-4 w-4" /> Grupos de Oração
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="poems" className="animate-in fade-in-50 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Coluna Esquerda: Progresso e Diário */}
              <div className="md:col-span-4 space-y-8 sticky top-24">
                <div className="bg-card p-6 rounded-2xl shadow-sm border border-border">
                  <ProgressSection 
                    readCount={readPoems.length}
                    totalPoems={totalPoems}
                    onOpenModal={() => setIsModalOpen(true)}
                  />
                </div>

                <div className="bg-card p-6 rounded-2xl shadow-sm border border-border">
                  <DiarySection
                    entries={diaryEntries}
                    onSaveEntry={handleSaveDiaryEntry}
                    onDeleteEntry={handleDeleteDiaryEntry}
                  />
                </div>
              </div>

              {/* Coluna Direita: Temas e Poemas */}
              <div className="md:col-span-8 space-y-12">
                {Object.keys(themeTitles).map((themeKey) => {
                  const poems = allPoems[themeKey];
                  if (!poems || poems.length === 0) return null;
                  
                  const themeId = `theme-${themeKey}`;
                  return (
                    <section key={themeKey} className="scroll-mt-24">
                      <ThemeSection
                        themeId={themeId}
                        title={themeTitles[themeKey]}
                        poems={poems}
                        readPoems={readPoems}
                        onToggleRead={handleToggleRead}
                      />
                    </section>
                  );
                })}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="groups" className="animate-in fade-in-50 duration-500">
            <GroupSelector />
          </TabsContent>
        </Tabs>
      </main>

      <AdminPanel onAddPoem={handleAddPoem} />

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
