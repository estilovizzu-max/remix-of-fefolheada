import { useState, useMemo } from 'react';
import { Navbar } from '@/components/Navbar';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
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
    <div className="w-full min-h-screen scroll-smooth bg-background relative overflow-hidden font-sans pt-20">
      <Navbar />
      {/* Background patterns/shapes for layout change */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-primary/10 via-primary/5 to-transparent -z-10" />
      <div className="absolute top-[10%] -left-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="absolute top-[30%] -right-20 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[80px] -z-10" />
      
      <QuickNav />
      <BackToTop />

      <main className="w-full max-w-6xl mx-auto px-4 py-12 sm:px-6 md:py-20">
        <div className="mb-20 text-center space-y-6">
          <Header />
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl md:text-3xl font-light italic text-muted-foreground leading-relaxed">
              "A fé que se torna verso, a alma que se torna prece."
            </h2>
            <div className="h-1 w-24 bg-secondary mx-auto rounded-full" />
          </div>
        </div>

        {/* Hero Selection / Journey Guidance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <button 
            onClick={() => document.getElementById('poems-content')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative overflow-hidden p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-300 text-left"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-0 transition-transform group-hover:scale-110" />
            <BookOpen className="h-12 w-12 text-primary mb-6 transition-transform group-hover:scale-110" />
            <h3 className="text-2xl font-bold mb-3 text-foreground">Jornada do Leitor</h3>
            <p className="text-muted-foreground leading-relaxed">
              Explore uma coleção de poemas que tocam a alma e fortalecem a fé. Deixe-se inspirar pelas palavras de Evaldo Poeta.
            </p>
            <div className="mt-6 flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
              Começar a ler <span className="ml-2">→</span>
            </div>
          </button>

          <button 
            onClick={() => {
              const diarySection = document.getElementById('diary-section');
              diarySection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative overflow-hidden p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-300 text-left"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-[100px] -z-0 transition-transform group-hover:scale-110" />
            <Users className="h-12 w-12 text-secondary mb-6 transition-transform group-hover:scale-110" />
            <h3 className="text-2xl font-bold mb-3 text-foreground">Canto do Poeta</h3>
            <p className="text-muted-foreground leading-relaxed">
              Registre suas reflexões diárias e acompanhe seu crescimento espiritual. Um espaço para sua própria voz.
            </p>
            <div className="mt-6 flex items-center text-secondary font-semibold group-hover:translate-x-2 transition-transform">
              Minhas reflexões <span className="ml-2">→</span>
            </div>
          </button>
        </div>

        <div id="poems-content">
          <Tabs defaultValue="poems" className="w-full">
            <div className="flex justify-center mb-16">
              <TabsList className="inline-flex h-14 items-center justify-center rounded-full bg-muted p-1 text-muted-foreground w-full max-w-md border border-border shadow-inner">
                <TabsTrigger 
                  value="poems" 
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full px-8 py-3 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
                >
                  <BookOpen className="h-4 w-4 mr-2" /> Poemas
                </TabsTrigger>
                <TabsTrigger 
                  value="groups" 
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full px-8 py-3 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
                >
                  <Users className="h-4 w-4 mr-2" /> Grupos de Oração
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="poems" className="animate-in fade-in-50 duration-700 slide-in-from-bottom-4">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                {/* Coluna Esquerda: Progresso e Diário */}
                <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
                  <div className="bg-card p-8 rounded-[2.5rem] shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                    <ProgressSection 
                      readCount={readPoems.length}
                      totalPoems={totalPoems}
                      onOpenModal={() => setIsModalOpen(true)}
                    />
                  </div>

                  <div id="diary-section" className="bg-card p-8 rounded-[2.5rem] shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                    <DiarySection
                      entries={diaryEntries}
                      onSaveEntry={handleSaveDiaryEntry}
                      onDeleteEntry={handleDeleteDiaryEntry}
                    />
                  </div>
                </div>

                {/* Coluna Direita: Temas e Poemas */}
                <div className="lg:col-span-8 space-y-16">
                  {Object.keys(themeTitles).map((themeKey) => {
                    const poems = allPoems[themeKey];
                    if (!poems || poems.length === 0) return null;
                    
                    const themeId = `theme-${themeKey}`;
                    return (
                      <section key={themeKey} className="scroll-mt-32">
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

            <TabsContent value="groups" className="animate-in fade-in-50 duration-700 slide-in-from-bottom-4">
              <div className="max-w-4xl mx-auto">
                <GroupSelector />
              </div>
            </TabsContent>
          </Tabs>
        </div>
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
