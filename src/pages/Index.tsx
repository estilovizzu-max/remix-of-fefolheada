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
import { BookOpen, Users, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

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
        <div className="mb-24 text-center space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <Header />
          <div className="max-w-3xl mx-auto space-y-10">
            <h2 className="text-3xl md:text-5xl font-light italic text-muted-foreground leading-tight tracking-tight px-4">
              "A fé que se torna verso, a alma que se torna prece. Uma experiência para <span className="text-primary font-bold">acessar o invisível</span>."
            </h2>
            <div className="h-1.5 w-40 bg-secondary/30 mx-auto rounded-full shadow-inner" />
            
            <div className="pt-4">
              <Button 
                onClick={() => document.getElementById('poems-content')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-bold text-xl py-8 px-12 rounded-full shadow-2xl hover:scale-105 transition-all animate-bounce"
              >
                QUERO MINHA TRANSFORMAÇÃO
              </Button>
            </div>
          </div>
        </div>

        {/* Espelho da Dor (Identification Section) */}
        <section className="mb-24 py-16 bg-muted/30 rounded-[3rem] px-8 border border-border/50">
          <div className="max-w-3xl mx-auto text-center space-y-12">
            <h3 className="text-3xl md:text-4xl font-black text-foreground tracking-tight">
              Você sente que algo está <span className="text-primary italic">faltando</span> na sua caminhada?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="bg-card p-6 rounded-2xl border border-border/40 shadow-sm">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  "Já tentei rezar, mas as palavras parecem vazias..."
                </p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border/40 shadow-sm">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  "Sinto que minha fé está estagnada e não sei como avançar..."
                </p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border/40 shadow-sm">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  "A correria do dia a dia me afasta da minha essência espiritual."
                </p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border/40 shadow-sm">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  "Busco uma conexão real, mas me perco no cansaço emocional."
                </p>
              </div>
            </div>

            <div className="pt-8">
              <p className="text-xl font-medium text-primary">
                O problema não é você. É a falta de um mecanismo que conecte sua linguagem ao seu coração.
              </p>
            </div>
          </div>
        </section>

        {/* Mecanismo Único (The Method) */}
        <div className="bg-primary/5 border border-primary/10 p-12 md:p-16 rounded-[3.5rem] mb-24 text-center max-w-5xl mx-auto shadow-sm backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full -mr-32 -mt-32 blur-3xl" />
          
          <h3 className="text-3xl md:text-5xl font-black text-primary mb-8 tracking-tighter">
            O Método <span className="text-secondary">Filho da Luz</span>
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
            Não é apenas uma coleção de poesias. É uma ferramenta de <span className="font-bold text-foreground">reprogramação espiritual</span>. 
            Organizamos 82 poemas em 6 blocos estratégicos para guiar sua alma do deserto à plenitude.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              "Conexão com o Invisível",
              "Cura das Emoções",
              "Fortalecimento da Fé",
              "Libertação Interior",
              "Paz Profunda",
              "Propósito de Vida"
            ].map((benefit, i) => (
              <div key={i} className="flex items-center space-x-3 bg-background/50 p-4 rounded-2xl border border-primary/5 shadow-sm">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                  {i + 1}
                </div>
                <span className="font-medium text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Selection / Journey Guidance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <button 
            onClick={() => document.getElementById('poems-content')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative overflow-hidden p-10 rounded-[3rem] bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-500 text-left"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-bl-[150px] -z-0 transition-transform group-hover:scale-110" />
            <BookOpen className="h-16 w-16 text-primary mb-8 transition-transform group-hover:scale-110 group-hover:-rotate-6" />
            <h3 className="text-3xl font-bold mb-4 text-foreground tracking-tight">Libertar Minha Alma</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Inicie sua jornada através dos poemas que vão reorganizar sua mente e tocar seu coração.
            </p>
            <div className="flex items-center text-primary font-bold text-lg group-hover:translate-x-2 transition-transform">
              Começar transformação <span className="ml-2">→</span>
            </div>
          </button>

          <button 
            onClick={() => {
              const diarySection = document.getElementById('diary-section');
              diarySection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative overflow-hidden p-10 rounded-[3rem] bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-500 text-left"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/5 rounded-bl-[150px] -z-0 transition-transform group-hover:scale-110" />
            <Users className="h-16 w-16 text-secondary mb-8 transition-transform group-hover:scale-110 group-hover:rotate-6" />
            <h3 className="text-3xl font-bold mb-4 text-foreground tracking-tight">Voz do Coração</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Transforme seus sentimentos em prece. Use o diário espiritual para registrar seu progresso.
            </p>
            <div className="flex items-center text-secondary font-bold text-lg group-hover:translate-x-2 transition-transform">
              Escrever reflexão <span className="ml-2">→</span>
            </div>
          </button>
        </div>

        {/* Quebra de Crença Section */}
        <section className="mb-24 text-center max-w-4xl mx-auto space-y-12 py-16">
          <h3 className="text-3xl md:text-5xl font-black text-foreground tracking-tighter leading-tight">
            Por que você ainda não alcançou sua <span className="text-primary italic">paz interior</span>?
          </h3>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Muitos buscam a espiritualidade em fórmulas complexas, quando a resposta está na simplicidade da <span className="text-foreground font-bold">linguagem da alma</span>. O Método Filho da Luz destrava o que estava bloqueado pela sua própria mente.
          </p>
        </section>

        {/* Módulos do Método */}
        <div className="mb-24 space-y-16">
          <div className="text-center space-y-4">
            <h3 className="text-3xl md:text-5xl font-black text-foreground tracking-tighter">O que você vai receber</h3>
            <p className="text-xl text-muted-foreground">Sua jornada espiritual organizada e direcionada.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Módulo 1: O Despertar", desc: "Acesse a linguagem invisível que conecta sua mente ao coração de Deus.", icon: "✨" },
              { title: "Módulo 2: O Deserto", desc: "Transforme sua dor em prece e cure suas feridas emocionais mais profundas.", icon: "🌵" },
              { title: "Módulo 3: O Fortalecimento", desc: "82 Poemas estrategicamente organizados para cada etapa da sua fé.", icon: "💪" },
              { title: "Módulo 4: O Diário", desc: "Sua ferramenta exclusiva de reflexão e registro da voz de Deus.", icon: "✍️" },
              { title: "Módulo 5: Os Grupos", desc: "Conexão direta com Grupos de Oração para fortalecer sua caminhada.", icon: "🕊️" },
              { title: "Bônus: Transformação", desc: "Acesso vitalício à plataforma e atualizações constantes do poeta.", icon: "💎" }
            ].map((mod, i) => (
              <div key={i} className="bg-card p-10 rounded-[2.5rem] border border-border shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="text-5xl mb-6">{mod.icon}</div>
                <h4 className="text-2xl font-bold mb-4 text-primary tracking-tight">{mod.title}</h4>
                <p className="text-muted-foreground leading-relaxed font-medium">{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Prova Social Section */}
        <section className="mb-24 py-16 px-8 rounded-[3.5rem] bg-secondary/5 border border-secondary/10">
          <div className="max-w-4xl mx-auto space-y-12">
            <h3 className="text-3xl md:text-5xl font-black text-foreground tracking-tighter text-center leading-tight">
              A transformação de quem já acessou a <span className="text-secondary italic">Luz</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Maria Silva", text: "Nunca imaginei que poesias pudessem mudar tanto minha forma de rezar. Sinto-me renovada.", role: "Participante do Grupo de Oração" },
                { name: "João Paulo", text: "O Método Filho da Luz me deu a clareza que eu buscava há anos na minha caminhada espiritual.", role: "Leitor Fiel" },
                { name: "Ana Beatriz", text: "O diário é minha parte favorita. Escrever o que sinto depois de cada verso é libertador.", role: "Membro da Comunidade" }
              ].map((test, i) => (
                <div key={i} className="bg-card p-8 rounded-3xl border border-border shadow-sm italic text-muted-foreground relative">
                  <span className="text-6xl text-primary/20 absolute top-4 left-4 font-serif">"</span>
                  <p className="relative z-10 pt-4 mb-6 leading-relaxed">
                    {test.text}
                  </p>
                  <div className="flex items-center space-x-3 not-italic">
                    <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center font-bold text-secondary">
                      {test.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-sm">{test.name}</p>
                      <p className="text-xs">{test.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

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
                  <Users className="h-4 w-4 mr-2" /> Grupos de Oração (RCC)
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

                  <div className="bg-card p-8 rounded-[2.5rem] shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                    <DiarySection
                      entries={diaryEntries}
                      onSaveEntry={handleSaveDiaryEntry}
                      onDeleteEntry={handleDeleteDiaryEntry}
                    />
                  </div>
                </div>

                {/* Coluna Direita: Grupos de Oração */}
                <div className="lg:col-span-8">
                  <GroupSelector />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Garantia e CTA Final */}
        <section className="mt-32 mb-16 py-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-[3.5rem] px-8 text-center border border-primary/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[120px]" />
          </div>

          <div className="max-w-3xl mx-auto space-y-10">
            <div className="inline-block p-4 bg-background rounded-2xl shadow-sm border border-border mb-4">
              <ShieldCheck className="h-12 w-12 text-primary mx-auto" />
              <p className="mt-2 font-bold text-sm uppercase tracking-widest text-primary">Sua Paz Garantida</p>
            </div>

            <h3 className="text-4xl md:text-5xl font-black text-foreground tracking-tight leading-tight">
              A jornada que você <span className="text-primary underline decoration-secondary/30">precisa</span> para o controle que você <span className="italic text-secondary">merece</span>.
            </h3>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Experimente o Método Filho da Luz sem riscos. Se em 7 dias você não sentir sua alma mais leve e sua mente mais organizada, nossa prece continua por você. O acesso é seu, o risco é nosso.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
              <Button 
                onClick={() => document.getElementById('poems-content')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg" 
                className="w-full sm:w-auto text-xl px-12 py-8 rounded-full shadow-xl shadow-primary/20 hover:shadow-2xl transition-all duration-300 font-black tracking-tight"
              >
                COMEÇAR MINHA TRANSFORMAÇÃO AGORA
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-4 pt-4 text-muted-foreground font-medium">
              <span className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> Acesso imediato</span>
              <span className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> 82 Poemas Inclusos</span>
            </div>
          </div>
        </section>
      </main>

      <AdminPanel onAddPoem={handleAddPoem} />

      <AchievementsModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        readCount={readPoems.length}
        totalPoems={totalPoems}
        diaryCount={diaryEntries.length}
      />
      <Footer />
    </div>
  );
};

export default Index;
