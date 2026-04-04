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

        {/* 🪞 ESPELHO DA DOR (IDENTIFICAÇÃO PROFUNDA) */}
        <section className="mb-24 py-20 bg-muted/40 rounded-[3.5rem] px-8 md:px-16 border border-border/50 relative overflow-hidden shadow-sm">
          <div className="absolute top-0 left-0 w-24 h-24 bg-primary/5 rounded-full -ml-12 -mt-12" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -mr-16 -mb-16" />
          
          <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
            <h3 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter leading-none">
              Isso parece <span className="text-primary italic">familiar</span> para você?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {[
                { question: "Já tentou rezar, mas as palavras parecem vazias?", icon: "😔" },
                { question: "Sente que sua fé está estagnada e não sabe como avançar?", icon: "🛑" },
                { question: "A correria do dia a dia te afasta da sua essência espiritual?", icon: "🏃" },
                { question: "Busca uma conexão real, mas se perde no cansaço emocional?", icon: "⛈️" }
              ].map((item, i) => (
                <div key={i} className="bg-card/80 backdrop-blur-sm p-8 rounded-3xl border border-border/40 shadow-sm hover:scale-[1.02] transition-transform">
                  <span className="text-4xl mb-4 block">{item.icon}</span>
                  <p className="text-xl font-medium text-muted-foreground leading-relaxed">
                    "{item.question}"
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-12 max-w-2xl mx-auto">
              <p className="text-2xl md:text-3xl font-black text-primary leading-tight">
                O problema não é você. O erro está no método que você está usando para se conectar.
              </p>
            </div>
          </div>
        </section>

        {/* 💡 O MECANISMO ÚNICO (MÉTODO PCH) */}
        <div className="bg-primary border-0 p-12 md:p-24 rounded-[4rem] mb-24 text-center max-w-6xl mx-auto shadow-2xl relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full -ml-32 -mb-32 blur-2xl" />
          
          <div className="relative z-10 space-y-8">
            <h3 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 text-white leading-[0.85]">
              Conheça o Método <br/><span className="text-secondary italic">PCH</span>
            </h3>
            <p className="text-2xl md:text-3xl font-light leading-relaxed max-w-4xl mx-auto mb-16 opacity-90">
              Não é sobre ler poesias. É sobre <span className="font-black text-white decoration-secondary underline underline-offset-8">Poesia que Cura o Homem</span>. 
              Um sistema de {totalPoems} chaves que acessam o invisível para uma transformação definitiva.
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
                <div key={i} className="flex items-center space-x-4 bg-white/10 p-6 rounded-[2rem] border border-white/10 shadow-lg backdrop-blur-md">
                  <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-primary font-black text-lg">
                    {i + 1}
                  </div>
                  <span className="font-black text-xl text-white tracking-tight">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 🎯 CTA FINAL (FORTE E EMOCIONAL) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
          <button 
            onClick={() => document.getElementById('poems-content')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative overflow-hidden p-12 rounded-[4rem] bg-card border border-border shadow-xl hover:shadow-2xl transition-all duration-500 text-left border-b-8 border-primary/20"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-[200px] -z-0 transition-transform group-hover:scale-110" />
            <BookOpen className="h-20 w-20 text-primary mb-10 transition-transform group-hover:scale-110 group-hover:-rotate-6" />
            <h3 className="text-4xl font-black mb-6 text-foreground tracking-tighter leading-none">Sair dessa Prisão <br/><span className="text-primary italic">Hoje</span></h3>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10 font-medium">
              Inicie sua jornada através das {totalPoems} chaves que vão reorganizar sua mente e libertar sua alma da estagnação.
            </p>
            <div className="flex items-center text-primary font-black text-2xl group-hover:translate-x-4 transition-transform tracking-tight">
              COMEÇAR MINHA TRANSFORMAÇÃO <span className="ml-3">→</span>
            </div>
          </button>

          <button 
            onClick={() => {
              const diarySection = document.getElementById('diary-section');
              diarySection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative overflow-hidden p-12 rounded-[4rem] bg-card border border-border shadow-xl hover:shadow-2xl transition-all duration-500 text-left border-b-8 border-secondary/20"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-bl-[200px] -z-0 transition-transform group-hover:scale-110" />
            <Users className="h-20 w-20 text-secondary mb-10 transition-transform group-hover:scale-110 group-hover:rotate-6" />
            <h3 className="text-4xl font-black mb-6 text-foreground tracking-tighter leading-none">Voz do <br/><span className="text-secondary italic">Coração</span></h3>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10 font-medium">
              Transforme seus sentimentos em prece materializada. Use o Diário PCH para registrar sua conexão com o invisível.
            </p>
            <div className="flex items-center text-secondary font-black text-2xl group-hover:translate-x-4 transition-transform tracking-tight">
              ESCREVER MINHA REFLEXÃO <span className="ml-3">→</span>
            </div>
          </button>
        </div>

        {/* 🔥 QUEBRA DE CRENÇA */}
        <section className="mb-24 text-center max-w-5xl mx-auto space-y-12 py-20 px-4">
          <h3 className="text-4xl md:text-7xl font-black text-foreground tracking-tighter leading-[0.85]">
            Por que sua paz interior ainda parece <span className="text-primary italic">distante</span>?
          </h3>
          <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed max-w-4xl mx-auto font-light">
            Muitos buscam a espiritualidade em fórmulas complexas e rituais vazios, quando a resposta está na simplicidade da <span className="text-foreground font-black underline decoration-secondary decoration-4 underline-offset-8">linguagem da alma</span>. O Método PCH destrava o que estava bloqueado pela sua própria mente racional.
          </p>
        </section>

        {/* 🧱 O QUE VOCÊ VAI RECEBER (CONTEÚDO) */}
        <div className="mb-24 space-y-20">
          <div className="text-center space-y-6">
            <h3 className="text-4xl md:text-7xl font-black text-foreground tracking-tighter">O que você vai receber</h3>
            <p className="text-2xl text-muted-foreground font-light max-w-2xl mx-auto">Sua jornada espiritual organizada, estratégica e profundamente emocionante.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: "Módulo 1: O Despertar", desc: "Acesse a linguagem invisível que conecta sua mente ao coração de Deus através da poesia.", icon: "✨" },
              { title: "Módulo 2: O Deserto", desc: "Aprenda a transformar sua dor em prece e cure suas feridas emocionais mais ocultas.", icon: "🌵" },
              { title: "Módulo 3: O Fortalecimento", desc: "82 Poemas estrategicamente organizados para cada etapa crítica da sua caminhada.", icon: "💪" },
              { title: "Módulo 4: O Diário PCH", desc: "Sua ferramenta exclusiva de reflexão e registro para materializar a voz do invisível.", icon: "✍️" },
              { title: "Módulo 5: Os Grupos", desc: "Conexão direta com Grupos de Oração para fortalecer e sustentar sua nova identidade.", icon: "🕊️" },
              { title: "Bônus: Transformação", desc: "Acesso vitalício à plataforma e todas as futuras atualizações do Método PCH.", icon: "💎" }
            ].map((mod, i) => (
              <div key={i} className="bg-card p-12 rounded-[3rem] border border-border/50 shadow-sm hover:shadow-2xl transition-all duration-500 group">
                <div className="text-6xl mb-8 group-hover:scale-110 transition-transform">{mod.icon}</div>
                <h4 className="text-3xl font-black mb-6 text-primary tracking-tight leading-none">{mod.title}</h4>
                <p className="text-lg text-muted-foreground leading-relaxed font-medium">{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 👥 PROVA SOCIAL (DEPOIMENTOS) */}
        <section className="mb-24 py-24 px-8 rounded-[4rem] bg-secondary/10 border border-secondary/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32" />
          
          <div className="max-w-6xl mx-auto space-y-20 relative z-10">
            <h3 className="text-4xl md:text-7xl font-black text-foreground tracking-tighter text-center leading-none">
              A transformação de quem já acessou o <span className="text-secondary italic">Invisível</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { name: "Maria Silva", text: "Nunca imaginei que poesias pudessem mudar tanto minha forma de rezar. Sinto-me renovada e conectada como nunca.", role: "Participante do Grupo de Oração" },
                { name: "João Paulo", text: "O Método PCH me deu a clareza que eu buscava há anos. Finalmente entendi como falar com Deus pelo coração.", role: "Leitor Fiel" },
                { name: "Ana Beatriz", text: "O diário é minha parte favorita. Escrever o que sinto depois de cada verso é verdadeiramente libertador.", role: "Membro da Comunidade" }
              ].map((test, i) => (
                <div key={i} className="bg-card/90 backdrop-blur-sm p-10 rounded-[2.5rem] border border-border/50 shadow-lg italic text-muted-foreground relative group hover:-translate-y-2 transition-transform">
                  <span className="text-7xl text-primary/10 absolute top-4 left-4 font-serif group-hover:text-primary/20 transition-colors">"</span>
                  <p className="relative z-10 pt-6 mb-8 text-xl leading-relaxed">
                    {test.text}
                  </p>
                  <div className="flex items-center space-x-4 not-italic">
                    <div className="h-14 w-14 rounded-full bg-secondary/30 flex items-center justify-center font-black text-secondary text-xl shadow-inner">
                      {test.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-black text-foreground text-lg tracking-tight">{test.name}</p>
                      <p className="text-sm font-bold text-primary/70">{test.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ⏳ OFERTA IRRESISTÍVEL + GARANTIA */}
        <section className="mb-24 py-24 bg-primary rounded-[4rem] text-white text-center px-8 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-50" />
          
          <div className="max-w-4xl mx-auto relative z-10 space-y-12">
            <h3 className="text-4xl md:text-7xl font-black tracking-tighter leading-none mb-4">
              Comece sua Jornada <br/><span className="text-secondary italic">Hoje Mesmo</span>
            </h3>
            
            <div className="bg-white/10 backdrop-blur-xl p-12 rounded-[3rem] border border-white/20 shadow-2xl inline-block w-full max-w-2xl">
              <p className="text-xl font-bold uppercase tracking-[0.2em] mb-4 opacity-80">Acesso Vitalício ao Método PCH</p>
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="text-3xl line-through opacity-50">R$ 197,00</span>
                <span className="text-6xl md:text-8xl font-black text-secondary drop-shadow-lg">R$ 97</span>
              </div>
              <ul className="text-left space-y-4 mb-10 max-w-md mx-auto">
                <li className="flex items-center gap-3 font-bold text-lg">
                  <CheckCircle2 className="text-secondary h-6 w-6 shrink-0" />
                  82 Poemas de Reprogramação
                </li>
                <li className="flex items-center gap-3 font-bold text-lg">
                  <CheckCircle2 className="text-secondary h-6 w-6 shrink-0" />
                  Módulo de Cura das Emoções
                </li>
                <li className="flex items-center gap-3 font-bold text-lg">
                  <CheckCircle2 className="text-secondary h-6 w-6 shrink-0" />
                  Diário Espiritual Interativo
                </li>
                <li className="flex items-center gap-3 font-bold text-lg">
                  <CheckCircle2 className="text-secondary h-6 w-6 shrink-0" />
                  Acesso aos Grupos VIP
                </li>
              </ul>
              
              <Button 
                onClick={() => document.getElementById('poems-content')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="w-full bg-secondary hover:bg-secondary/90 text-primary font-black text-2xl py-10 rounded-[2rem] shadow-2xl hover:scale-[1.02] transition-all"
              >
                QUERO MEU ACESSO AGORA
              </Button>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8">
              <div className="flex items-center gap-4 text-left">
                <ShieldCheck className="h-16 w-16 text-secondary" />
                <div>
                  <p className="font-black text-xl">Garantia Blindada</p>
                  <p className="opacity-80">7 dias para testar sem riscos. Se não sentir a transformação, devolvemos cada centavo.</p>
                </div>
              </div>
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

        {/* 🚀 CTA FINAL (FORTE E EMOCIONAL) */}
        <section className="mt-32 mb-16 py-20 bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/10 rounded-[4rem] px-8 text-center border border-primary/20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-40">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white rounded-full blur-[150px]" />
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            <div className="inline-block p-6 bg-background rounded-3xl shadow-xl border border-border/50 mb-6">
              <ShieldCheck className="h-16 w-16 text-primary mx-auto" />
              <p className="mt-4 font-black text-lg uppercase tracking-widest text-primary">Sua Paz Blindada</p>
            </div>

            <h3 className="text-4xl md:text-7xl font-black text-foreground tracking-tighter leading-tight">
              A jornada que você <span className="text-primary underline decoration-secondary/30 underline-offset-8">precisa</span> para a liberdade que você <span className="italic text-secondary">merece</span>.
            </h3>
            
            <p className="text-2xl text-muted-foreground leading-relaxed font-light max-w-2xl mx-auto">
              Experimente o Método PCH sem riscos. Se em 7 dias você não sentir sua alma mais livre e sua mente mais organizada, devolvemos seu investimento integralmente.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-10">
              <Button 
                onClick={() => document.getElementById('poems-content')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg" 
                className="w-full sm:w-auto text-3xl px-16 py-12 rounded-[2.5rem] shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-500 font-black tracking-tighter hover:scale-105"
              >
                QUERO COMEÇAR MINHA TRANSFORMAÇÃO
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 pt-8 text-muted-foreground font-black text-lg uppercase tracking-widest opacity-80">
              <span className="flex items-center"><CheckCircle2 className="h-6 w-6 mr-3 text-secondary" /> Acesso Imediato</span>
              <span className="flex items-center"><CheckCircle2 className="h-6 w-6 mr-3 text-secondary" /> 100% Seguro</span>
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
