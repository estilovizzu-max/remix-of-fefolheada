import { useState, useRef } from "react";
import { 
  Book, 
  PenTool, 
  Sparkles, 
  Search, 
  Layout, 
  Palette, 
  ShoppingBag, 
  Settings,
  ArrowLeft,
  ChevronRight,
  Plus,
  Library,
  Save,
  Wand2,
  FileText,
  CheckCircle2,
  Info
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { initialBookData, BookProject, Chapter } from "@/data/bookProject";

export default function Editora() {
  const [book, setBook] = useState<BookProject>(initialBookData);
  const [activeTab, setActiveTab] = useState("canvas");
  const [selectedText, setSelectedText] = useState("");
  const [selectedChapterId, setSelectedChapterId] = useState<string>(initialBookData.chapters[0].id);
  const editorRef = useRef<HTMLTextAreaElement>(null);

  const selectedChapter = book.chapters.find(c => c.id === selectedChapterId) || book.chapters[0];


  const skills = [
    { id: 'diretor', name: 'Diretor Editorial', icon: CheckCircle2, color: 'text-red-500', desc: 'Julga decisões e Readiness Score.', details: 'Avalia se o livro está pronto. Readiness: 87/100.' },
    { id: 'arquiteto', name: 'Arquiteto Editorial', icon: Layout, color: 'text-blue-400', desc: 'Estrategista estrutural e sumário.', details: 'Missão: Definir o que o livro precisa ser para cumprir sua promessa.' },
    { id: 'pesquisador', name: 'Pesquisador', icon: Search, color: 'text-cyan-400', desc: 'Fundamentação e verificação.', details: 'Regra: Nunca inventar referências. Verificação de fatos e fontes.' },
    { id: 'escritor', name: 'Escritor', icon: PenTool, color: 'text-green-400', desc: 'Motor de produção textual.', details: 'Regra: Preservar a voz autoral, evitando texto genérico.' },
    { id: 'pch', name: 'PCH / VerboLuz', icon: Sparkles, color: 'text-purple-400', desc: 'Linguagem cognitiva e poética.', details: 'Transforma comum em profundo. Equilíbrio entre emoção e clareza.' },
    { id: 'consistencia', name: 'Consistência', icon: Library, color: 'text-orange-400', desc: 'Memória Editorial do Livro.', details: 'Garante que o livro não se contradiga entre capítulos.' },
    { id: 'literario', name: 'Editor Literário', icon: Book, color: 'text-pink-400', desc: 'Ritmo, voz e profundidade.', details: 'Avalia se o texto funciona como obra literária.' },
    { id: 'revisor', name: 'Revisor', icon: Search, color: 'text-yellow-400', desc: 'Gramática e Coesão.', details: 'Pergunta: "O texto está correto?". Ortografia e padronização.' },
    { id: 'design', name: 'Design Editorial', icon: Palette, color: 'text-indigo-400', desc: 'Experiência visual e Design System.', details: 'Capa, tipografia, sumário e abertura de capítulos.' },
    { id: 'comercial', name: 'Editor Comercial', icon: ShoppingBag, color: 'text-emerald-400', desc: 'Produto Editorial e Venda.', details: 'Título, sinopse, bio, posicionamento e promessa.' },
    { id: 'publicador', name: 'Publicador', icon: Save, color: 'text-slate-400', desc: 'Estágio Final de Exportação.', details: 'Geração de PDF, EPUB e Manuscrito final.' },


  ];

  const handleTextSelection = () => {
    if (editorRef.current) {
      const start = editorRef.current.selectionStart;
      const end = editorRef.current.selectionEnd;
      if (start !== end) {
        setSelectedText(editorRef.current.value.substring(start, end));
      }
    }
  };

  const applySkillAction = (skillName: string) => {
    if (!selectedText) return;
    console.log(`Aplicando ${skillName} ao texto:`, selectedText);
    // Aqui seria a integração real com a AI
  };

  return (
    <div className="min-h-screen bg-[#0d0722] text-[#f3ecdb] font-sans flex overflow-hidden">
      {/* Sidebar Navegação */}
      <aside className="w-64 bg-black/40 border-r border-[#c19935]/20 p-6 flex flex-col gap-6">
        <div className="flex items-center gap-3">
           <div className="w-8 h-8 rounded bg-[#c19935] flex items-center justify-center text-[#0d0722] font-bold">F</div>
           <span className="font-serif text-lg text-[#c19935]">Folheando Fé</span>
        </div>
        
        <nav className="flex flex-col gap-2">
          <Button 
            variant="ghost" 
            onClick={() => setActiveTab("canvas")}
            className={`justify-start ${activeTab === 'canvas' ? 'text-[#c19935] bg-[#c19935]/10' : 'text-[#f3ecdb]/60 hover:text-[#c19935]'}`}
          >
            <PenTool className="mr-3 h-4 w-4" /> ✍️ Modo Escrita
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => setActiveTab("projeto")}
            className={`justify-start ${activeTab === 'projeto' ? 'text-[#c19935] bg-[#c19935]/10' : 'text-[#f3ecdb]/60 hover:text-[#c19935]'}`}
          >
            <Layout className="mr-3 h-4 w-4" /> 🏗️ Modo Projeto
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => setActiveTab("dashboard-producao")}
            className={`justify-start ${activeTab === 'dashboard-producao' ? 'text-[#c19935] bg-[#c19935]/10' : 'text-[#f3ecdb]/60 hover:text-[#c19935]'}`}
          >
            <Library className="mr-3 h-4 w-4" /> 🏭 Modo Editora
          </Button>
        </nav>

        <div className="border-t border-[#c19935]/10 pt-4">
          <div className="text-[10px] uppercase tracking-widest text-[#c19935]/50 mb-4 px-2">Capítulos</div>
          <div className="flex flex-col gap-1 max-h-48 overflow-y-auto pr-2 scrollbar-thin">
            {book.chapters.map(ch => (
              <button
                key={ch.id}
                onClick={() => setSelectedChapterId(ch.id)}
                className={`text-left px-2 py-1.5 rounded text-xs transition-colors ${selectedChapterId === ch.id ? 'bg-[#c19935]/20 text-[#c19935]' : 'text-[#f3ecdb]/40 hover:text-[#f3ecdb]/60'}`}
              >
                {ch.title}
              </button>
            ))}
            <button className="text-left px-2 py-1.5 text-xs text-[#c19935]/60 hover:text-[#c19935] flex items-center gap-2">
              <Plus className="h-3 w-3" /> Novo Capítulo
            </button>
          </div>
        </div>


        <div className="mt-auto space-y-4">
          <div className="bg-[#c19935]/5 border border-[#c19935]/20 rounded p-4">
             <div className="text-[10px] uppercase tracking-widest text-[#c19935] mb-2">Progresso Atual</div>
             <div className="text-xs font-serif mb-1 capitalize">{book.status}</div>
             <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-[#c19935]" style={{ width: '45%' }}></div>
             </div>
          </div>
          <Link to="/">
            <Button variant="ghost" className="w-full justify-start text-[#f3ecdb]/30 text-xs">
              <ArrowLeft className="mr-3 h-3 w-3" /> Sair do Editor
            </Button>
          </Link>
        </div>
      </aside>

      {/* Área Principal */}
      <main className="flex-1 flex flex-col">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
          <TabsContent value="canvas" className="flex-1 flex overflow-hidden m-0 p-0 border-none">
            {/* Editor Canvas à Esquerda */}
            <div className="flex-1 p-8 flex flex-col gap-4 overflow-hidden">
               <div className="flex items-center justify-between border-b border-[#c19935]/10 pb-4">
                  <div className="flex items-center gap-4">
                     <h2 className="font-serif text-[#c19935]">{selectedChapter.title}</h2>
                     <span className="text-[10px] px-2 py-0.5 rounded border border-[#c19935]/30 text-[#c19935]/60 uppercase tracking-tighter">
                        {selectedChapter.status}
                     </span>
                  </div>
                  <div className="flex items-center gap-2">
                     <Button variant="ghost" size="sm" className="text-[#f3ecdb]/40 hover:text-[#c19935]">
                        <Save className="h-4 w-4 mr-2" /> Salvar
                     </Button>
                     <Button size="sm" className="bg-[#c19935] hover:bg-[#c19935]/90 text-[#0d0722]">
                        Exportar PDF
                     </Button>
                  </div>
               </div>
               
               <div className="flex-1 flex gap-6 overflow-hidden">
                  <div className="flex-1 flex flex-col gap-2">
                     <div className="text-[9px] uppercase tracking-widest text-[#c19935]/40 px-4">Manuscrito</div>
                     <textarea 
                        ref={editorRef}
                        onSelect={handleTextSelection}
                        className="flex-1 bg-black/20 rounded border border-[#c19935]/5 focus:border-[#c19935]/20 focus:ring-0 resize-none font-serif text-lg leading-relaxed text-[#f3ecdb]/80 p-6 scrollbar-thin scrollbar-thumb-[#c19935]/20"
                        placeholder="Comece a escrever aqui seu livro..."
                        defaultValue={selectedChapter.draft}
                     />
                  </div>

                  <div className="w-64 flex flex-col gap-6 overflow-y-auto pr-2 scrollbar-thin">
                    <div className="space-y-3">
                       <div className="text-[9px] uppercase tracking-widest text-[#c19935]/40">Versões</div>
                       <div className="flex flex-col gap-2">
                          {selectedChapter.versions.map(v => (
                             <div key={v.id} className="p-2 rounded bg-white/5 border border-white/5 hover:border-[#c19935]/20 cursor-pointer transition-colors group">
                                <div className="flex justify-between items-center mb-1">
                                   <span className="text-[10px] font-bold text-[#c19935]">{v.id.toUpperCase()}</span>
                                   <span className="text-[8px] text-[#f3ecdb]/20">{new Date(v.timestamp).toLocaleDateString()}</span>
                                </div>
                                <p className="text-[9px] text-[#f3ecdb]/50 italic line-clamp-1">{v.changeSummary}</p>
                                <div className="hidden group-hover:flex justify-end gap-1 mt-2">
                                   <Button variant="ghost" className="h-5 px-1.5 text-[8px] text-[#c19935]">Comparar</Button>
                                   <Button variant="ghost" className="h-5 px-1.5 text-[8px] text-[#c19935]">Restaurar</Button>
                                </div>
                             </div>
                          ))}
                       </div>
                    </div>

                    <div className="space-y-3">
                       <div className="text-[9px] uppercase tracking-widest text-[#c19935]/40">Histórico Audit</div>
                       <div className="space-y-2">
                          {selectedChapter.auditLog.length > 0 ? selectedChapter.auditLog.map((log, i) => (
                             <div key={i} className="text-[9px] p-2 rounded bg-black/40 border-l-2 border-[#c19935]/40">
                                <div className="font-bold text-[#c19935] mb-1">{skills.find(s => s.id === log.skillId)?.name}</div>
                                <p className="text-[#f3ecdb]/40 mb-1">{log.action}</p>
                                <div className="text-[8px] italic opacity-50">Evidência: {log.evidence}</div>
                             </div>
                          )) : (
                             <div className="text-[9px] text-[#f3ecdb]/10 italic">Nenhuma atividade registrada</div>
                          )}
                       </div>
                    </div>
                  </div>
               </div>
            </div>

            {/* Painel de Skills à Direita */}
            <aside className="w-80 bg-black/20 border-l border-[#c19935]/20 p-6 flex flex-col gap-6 overflow-y-auto scrollbar-thin">
               <div className="flex items-center justify-between">
                  <h3 className="font-serif text-[#c19935] flex items-center gap-2">
                     <Wand2 className="h-4 w-4" /> Pipeline Editorial
                  </h3>
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
               </div>
               
               <div className="space-y-6">
                  {selectedText ? (
                    <div className="space-y-4">
                       <div className="p-3 bg-[#c19935]/5 border border-[#c19935]/20 rounded text-xs italic opacity-60 line-clamp-3">
                          "{selectedText}"
                       </div>
                       <div className="text-[10px] uppercase tracking-widest text-[#c19935]/50">Skills Disponíveis</div>
                       <div className="space-y-2">
                          {skills.map(skill => (
                             <div key={skill.id} className="group relative">
                                <Button 
                                  variant="outline" 
                                  className="w-full justify-start border-[#c19935]/10 hover:border-[#c19935]/40 bg-black/20 text-[#f3ecdb]/60 hover:text-[#c19935] h-9"
                                  onClick={() => applySkillAction(skill.name)}
                                >
                                   <skill.icon className={`h-4 w-4 mr-3 ${skill.color}`} />
                                   <span className="text-xs">{skill.name}</span>
                                </Button>
                                <div className="hidden group-hover:block absolute left-full ml-2 top-0 w-48 p-3 bg-[#0d0722] border border-[#c19935]/20 rounded shadow-xl z-50">
                                   <div className="text-[9px] uppercase tracking-widest text-[#c19935] mb-2">Missão</div>
                                   <p className="text-[9px] text-[#f3ecdb]/60 mb-2">{skill.details}</p>
                                   <div className="text-[9px] uppercase tracking-widest text-[#c19935] mb-1">Critério</div>
                                   <p className="text-[8px] italic text-[#f3ecdb]/40">{skill.desc}</p>
                                </div>
                             </div>
                          ))}
                       </div>
                       <Button className="w-full bg-[#c19935] text-[#0d0722] font-bold mt-2">
                         Executar Orquestrador
                       </Button>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="flex flex-col items-center justify-center h-40 text-center space-y-2 text-[#f3ecdb]/20 border border-dashed border-[#c19935]/10 rounded">
                         <Info className="h-8 w-8" />
                         <p className="text-xs px-4">Selecione um trecho ou capítulo para ativar o Pipeline</p>
                      </div>

                      <div className="space-y-4">
                         <div className="text-[10px] uppercase tracking-widest text-[#c19935]/50">Orquestração do Capítulo</div>
                         <div className="grid grid-cols-2 gap-2">
                            <Button variant="outline" className="text-[9px] h-8 border-[#c19935]/10 bg-[#c19935]/5">Revisar Capítulo</Button>
                            <Button variant="outline" className="text-[9px] h-8 border-[#c19935]/10 bg-[#c19935]/5">Expandir Texto</Button>
                            <Button variant="outline" className="text-[9px] h-8 border-[#c19935]/10 bg-[#c19935]/5">Analise PCH</Button>
                            <Button variant="outline" className="text-[9px] h-8 border-[#c19935]/10 bg-[#c19935]/5">Check Consistência</Button>
                         </div>
                      </div>
                    </div>
                  )}
               </div>

               <div className="mt-auto border-t border-[#c19935]/10 pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-[10px] uppercase tracking-widest text-[#c19935]/50">Dica do Orquestrador</h4>
                    <Sparkles className="h-3 w-3 text-[#c19935]/40" />
                  </div>
                  <p className="text-[10px] italic text-[#f3ecdb]/40 leading-relaxed bg-[#c19935]/5 p-3 rounded border border-[#c19935]/10">
                     "Este capítulo está com 87% de prontidão. Recomendo passar o PCH nas metáforas do segundo parágrafo para atingir a meta de 95%."
                  </p>
               </div>
            </aside>
          </TabsContent>

          <TabsContent value="biblioteca" className="flex-1 p-8 overflow-y-auto m-0 border-none">
             <div className="max-w-4xl mx-auto space-y-12">
                <header className="flex justify-between items-end">
                   <div>
                      <h2 className="text-3xl font-serif text-[#c19935] mb-2">Núcleo de Inteligência Editorial</h2>
                      <p className="text-[#f3ecdb]/40 italic text-sm">Agentes operacionais orquestrados para a excelência da obra.</p>
                   </div>
                   <div className="text-right">
                      <div className="text-[10px] text-[#c19935] uppercase tracking-widest mb-1">Editorial Readiness</div>
                      <div className="text-2xl font-serif text-[#c19935]">{book.readinessScore}/100</div>
                   </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                   {skills.map(skill => (
                      <Card key={skill.id} className="bg-black/20 border-[#c19935]/10 hover:border-[#c19935]/40 transition-all p-6 space-y-4">
                         <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded bg-[#c19935]/10 flex items-center justify-center">
                               <skill.icon className={`h-5 w-5 ${skill.color}`} />
                            </div>
                            <h4 className="font-serif text-[#c19935]">{skill.name}</h4>
                         </div>
                         <p className="text-xs text-[#f3ecdb]/50 leading-relaxed min-h-[40px]">{skill.desc}</p>
                         <div className="pt-2">
                            <p className="text-[9px] text-[#c19935]/60 italic line-clamp-2">{skill.details}</p>
                         </div>

                         <div className="pt-4 flex flex-col gap-2">
                            <Button size="sm" variant="outline" className="text-[10px] h-7 border-[#c19935]/20 text-[#f3ecdb]/60 hover:text-[#c19935]">
                               Ver Documentação
                            </Button>
                            <Button size="sm" className="text-[10px] h-7 bg-[#c19935] text-[#0d0722]">
                               Testar Prompt
                            </Button>
                         </div>
                      </Card>
                   ))}
                </div>
             </div>
          </TabsContent>

          <TabsContent value="projeto" className="flex-1 p-8 overflow-y-auto m-0 border-none">
             <div className="max-w-4xl mx-auto space-y-8">
                <header>
                   <h2 className="text-3xl font-serif text-[#c19935] mb-2">Dossiê Editorial</h2>
                   <p className="text-[#f3ecdb]/40 italic text-sm">Gerencie os metadados e a identidade do seu livro.</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   <div className="md:col-span-2 space-y-6">
                      <Card className="bg-black/20 border-[#c19935]/10 p-6 space-y-6">
                         <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-[#c19935]">Título do Livro</label>
                            <input className="w-full bg-transparent border-b border-[#c19935]/20 focus:border-[#c19935] outline-none py-2 text-xl font-serif" defaultValue={book.title} />
                         </div>
                         <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-[#c19935]">Subtítulo</label>
                            <input className="w-full bg-transparent border-b border-[#c19935]/20 focus:border-[#c19935] outline-none py-2 text-sm italic" defaultValue={book.subtitle} />
                         </div>
                         <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-[#c19935]">Sinopse</label>
                            <textarea className="w-full bg-transparent border border-[#c19935]/10 focus:border-[#c19935]/40 rounded outline-none p-4 text-xs leading-relaxed h-32 resize-none" defaultValue={book.synopsis} />
                         </div>
                      </Card>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <Card className="bg-black/20 border-[#c19935]/10 p-4 space-y-2">
                            <label className="text-[9px] uppercase tracking-widest text-[#c19935]">Bio do Autor</label>
                            <p className="text-[10px] text-[#f3ecdb]/40 italic line-clamp-3">{book.authorBio}</p>
                         </Card>
                         <Card className="bg-black/20 border-[#c19935]/10 p-4 space-y-2">
                            <label className="text-[9px] uppercase tracking-widest text-[#c19935]">Capa (Conceito)</label>
                            <p className="text-[10px] text-[#f3ecdb]/40 italic line-clamp-3">{book.coverPrompt}</p>
                         </Card>
                      </div>
                   </div>

                   <aside className="space-y-6">
                      <Card className="bg-[#c19935]/5 border-[#c19935]/20 p-6">
                         <h3 className="font-serif text-[#c19935] mb-6">Fluxo Editorial</h3>
                          <div className="space-y-6 relative">
                             <div className="absolute left-[11px] top-2 bottom-2 w-px bg-[#c19935]/20" />
                             {[
                               { step: 'Ideia', status: 'concluído' },
                               { step: 'Projeto', status: 'concluído' },
                               { step: 'Estrutura', status: 'concluído' },
                               { step: 'Escrita', status: 'ativo' },
                               { step: 'Edição', status: 'pendente' },
                               { step: 'Revisão', status: 'pendente' },
                               { step: 'Design', status: 'pendente' },
                               { step: 'Publicação', status: 'pendente' },
                             ].map((s, i) => (
                               <div key={s.step} className="flex items-center gap-4 relative z-10 group">
                                 <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] ${
                                   s.status === 'concluído' ? 'bg-[#c19935] text-[#0d0722]' : 
                                   s.status === 'ativo' ? 'bg-[#0d0722] border border-[#c19935] text-[#c19935]' : 
                                   'bg-black/40 border border-[#f3ecdb]/10 text-[#f3ecdb]/20'
                                 }`}>
                                   {s.status === 'concluído' ? <CheckCircle2 className="h-3 w-3" /> : i + 1}
                                 </div>
                                 <span className={`text-[10px] uppercase tracking-wider ${s.status === 'ativo' ? 'text-[#f3ecdb]' : 'text-[#f3ecdb]/30'}`}>
                                   {s.step}
                                 </span>
                                 {s.status === 'ativo' && (
                                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#c19935] animate-pulse" />
                                 )}
                               </div>
                             ))}
                          </div>
                      </Card>
                      
                      <Button className="w-full bg-[#c19935] text-[#0d0722] font-bold">
                         Avançar para Edição
                      </Button>
                   </aside>
                </div>
             </div>
          </TabsContent>

          <TabsContent value="dashboard-producao" className="flex-1 p-8 overflow-y-auto m-0 border-none">
             <div className="max-w-5xl mx-auto space-y-8">
                <header>
                   <h2 className="text-3xl font-serif text-[#c19935] mb-2">🏭 Modo Editora</h2>
                   <p className="text-[#f3ecdb]/40 italic text-sm">Visão de produção e saúde editorial da obra.</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   <div className="md:col-span-2 space-y-6">
                      <Card className="bg-black/20 border-[#c19935]/10 p-6">
                         <CardHeader className="p-0 mb-6">
                            <CardTitle className="text-lg text-[#c19935] font-serif flex items-center gap-2">
                               <CheckCircle2 className="h-5 w-5" /> Editorial Readiness Score
                            </CardTitle>
                         </CardHeader>
                         <div className="space-y-6">
                            <div className="flex items-center gap-6">
                               <div className="text-5xl font-serif text-[#c19935]">{book.readinessScore}</div>
                               <div className="flex-1 space-y-2">
                                  <div className="h-4 bg-white/5 rounded-full overflow-hidden border border-[#c19935]/10">
                                     <div className="h-full bg-gradient-to-r from-[#c19935]/50 to-[#c19935]" style={{ width: `${book.readinessScore}%` }}></div>
                                  </div>
                                  <div className="flex justify-between text-[10px] text-[#c19935] uppercase tracking-widest font-bold">
                                     <span>Status: Pronto para última rodada</span>
                                     <span>Readiness Score: {book.readinessScore}%</span>
                                  </div>
                               </div>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-4 pt-4 border-t border-[#c19935]/10">
                               {Object.entries(book.scores).map(([key, value]) => (
                                  <div key={key} className="space-y-1">
                                     <div className="flex justify-between items-center text-[9px] uppercase tracking-tighter text-[#f3ecdb]/40">
                                        <span>{key}</span>
                                        <span className={value >= 90 ? 'text-green-400' : 'text-[#c19935]'}>{value}</span>
                                     </div>
                                     <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-[#c19935]/30" style={{ width: `${value}%` }}></div>
                                     </div>
                                  </div>
                               ))}
                            </div>
                         </div>
                      </Card>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <Card className="bg-black/20 border-[#c19935]/10 p-6">
                            <h3 className="text-sm font-serif text-[#c19935] mb-4 flex items-center gap-2">
                               <Library className="h-4 w-4" /> Memória Editorial
                            </h3>
                            <div className="space-y-3">
                               {Object.entries(book.editorialMemory).map(([key, items]) => (
                                  <div key={key} className="space-y-1">
                                     <div className="text-[9px] uppercase tracking-widest text-[#f3ecdb]/30">{key}</div>
                                     <div className="flex flex-wrap gap-1">
                                        {items.length > 0 ? items.map(item => (
                                           <span key={item} className="text-[9px] px-2 py-0.5 bg-[#c19935]/10 rounded border border-[#c19935]/20 text-[#c19935]">{item}</span>
                                        )) : <span className="text-[9px] text-[#f3ecdb]/10 italic">Nenhum dado registrado</span>}
                                     </div>
                                  </div>
                               ))}
                            </div>
                         </Card>

                         <Card className="bg-black/20 border-[#c19935]/10 p-6">
                            <h3 className="text-sm font-serif text-[#c19935] mb-4 flex items-center gap-2">
                               <Info className="h-4 w-4" /> Relatório do Diretor
                            </h3>
                            <p className="text-[10px] text-[#f3ecdb]/50 leading-relaxed italic">
                               "O livro apresenta uma força poética excepcional (PCH 95), porém a revisão gramatical e a consistência visual ainda precisam de um ciclo final de aprimoramento antes da exportação definitiva."
                            </p>
                            <div className="mt-4 p-2 bg-red-500/10 border border-red-500/20 rounded text-[9px] text-red-400">
                               ⚠️ 3 Inconsistências Críticas detectadas pelo Agente de Consistência no Cap. 04.
                            </div>
                         </Card>
                      </div>
                   </div>

                   <Card className="bg-[#c19935]/5 border-[#c19935]/20 p-6">
                      <div className="flex justify-between items-center mb-6">
                         <h3 className="font-serif text-[#c19935]">Produção Operacional</h3>
                         <Button variant="ghost" size="sm" className="h-6 text-[8px] uppercase tracking-tighter text-[#c19935]/50 border border-[#c19935]/10">Audit Log Geral</Button>
                      </div>
                      <div className="space-y-5">
                         {[
                            { label: 'Ideia', progress: 100 },
                            { label: 'Projeto', progress: 100 },
                            { label: 'Estrutura', progress: 100 },
                            { label: 'Escrita', progress: 45 },
                            { label: 'Edição', progress: 20 },
                            { label: 'Revisão', progress: 10 },
                            { label: 'Design', progress: 5 },
                            { label: 'Publicação', progress: 0 },
                         ].map(item => (
                            <div key={item.label} className="space-y-1.5">
                               <div className="flex justify-between text-[10px] uppercase tracking-widest">
                                  <span className="text-[#f3ecdb]/40">{item.label}</span>
                                  <span className="text-[#c19935]">{item.progress}%</span>
                               </div>
                               <div className="h-1.5 bg-black/40 rounded-full overflow-hidden border border-[#c19935]/5">
                                  <div className="h-full bg-[#c19935]" style={{ width: `${item.progress}%` }}></div>
                               </div>
                            </div>
                         ))}
                      </div>
                   </Card>
                </div>
             </div>
          </TabsContent>
        </Tabs>

      </main>
    </div>
  );
}
