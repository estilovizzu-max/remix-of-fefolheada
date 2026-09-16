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
  Info,
  X,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  RefreshCw,
  History,
  Columns,
  Printer,
  FileDown,
  Scissors,
  Maximize2
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
          <Button 
            variant="ghost" 
            onClick={() => setActiveTab("memoria")}
            className={`justify-start ${activeTab === 'memoria' ? 'text-[#c19935] bg-[#c19935]/10' : 'text-[#f3ecdb]/60 hover:text-[#c19935]'}`}
          >
            <Sparkles className="mr-3 h-4 w-4" /> 🧠 Memória & Contexto
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
          <Card className="bg-[#c19935]/5 border-[#c19935]/20 p-4">
             <div className="flex justify-between items-center mb-2">
                <div className="text-[10px] uppercase tracking-widest text-[#c19935]">Editorial Readiness</div>
                <div className="text-xs font-bold text-[#c19935]">{book.readinessScore}%</div>
             </div>
             <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-[#c19935]/10">
                <div 
                  className="h-full bg-gradient-to-r from-[#c19935]/50 to-[#c19935] transition-all duration-1000" 
                  style={{ width: `${book.readinessScore}%` }}
                ></div>
             </div>
             <Button 
                className="w-full mt-4 bg-[#c19935] hover:bg-[#c19935]/90 text-[#0d0722] text-[10px] font-bold py-1 h-8 uppercase tracking-widest"
                onClick={() => setActiveTab("finalizacao")}
             >
                🚀 Finalizar Livro
             </Button>
          </Card>
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
                     <Button size="sm" className="bg-[#c19935] hover:bg-[#c19935]/90 text-[#0d0722]" onClick={() => setActiveTab("finalizacao")}>
                        <Printer className="h-4 w-4 mr-2" /> Preparar Impressão
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
                        defaultValue={selectedChapter.content}
                     />
                  </div>

                  <div className="w-80 flex flex-col gap-6 overflow-y-auto pr-2 scrollbar-thin">
                    <Tabs defaultValue="versoes" className="w-full">
                       <TabsList className="w-full bg-black/20 border border-[#c19935]/10 h-8 p-0.5">
                          <TabsTrigger value="versoes" className="flex-1 text-[9px] h-full data-[state=active]:bg-[#c19935] data-[state=active]:text-[#0d0722]">
                             <History className="h-3 w-3 mr-1" /> Versões
                          </TabsTrigger>
                          <TabsTrigger value="comparar" className="flex-1 text-[9px] h-full data-[state=active]:bg-[#c19935] data-[state=active]:text-[#0d0722]">
                             <Columns className="h-3 w-3 mr-1" /> Comparar
                          </TabsTrigger>
                          <TabsTrigger value="audit" className="flex-1 text-[9px] h-full data-[state=active]:bg-[#c19935] data-[state=active]:text-[#0d0722]">
                             <Search className="h-3 w-3 mr-1" /> Audit
                          </TabsTrigger>
                       </TabsList>

                       <TabsContent value="versoes" className="mt-4 space-y-3">
                          <div className="flex flex-col gap-2">
                             {selectedChapter.versions.map(v => (
                                <div key={v.id} className="p-2 rounded bg-white/5 border border-white/5 hover:border-[#c19935]/20 cursor-pointer transition-colors group">
                                   <div className="flex justify-between items-center mb-1">
                                      <span className="text-[10px] font-bold text-[#c19935]">{v.id.toUpperCase()}</span>
                                      <span className="text-[8px] text-[#f3ecdb]/20">{new Date(v.timestamp).toLocaleDateString()}</span>
                                   </div>
                                   <p className="text-[9px] text-[#f3ecdb]/50 italic line-clamp-1">{v.changeSummary}</p>
                                   <div className="hidden group-hover:flex justify-end gap-1 mt-2">
                                      <Button variant="ghost" className="h-5 px-1.5 text-[8px] text-[#c19935]">Restaurar</Button>
                                   </div>
                                </div>
                             ))}
                          </div>
                       </TabsContent>

                       <TabsContent value="comparar" className="mt-4 space-y-4">
                          <div className="space-y-4">
                             <div className="text-[10px] text-[#c19935]/60 italic mb-2 px-1">Visualização V1 vs Atual</div>
                             <div className="grid grid-cols-1 gap-4">
                                <div className="p-3 bg-red-500/5 border border-red-500/10 rounded">
                                   <div className="text-[8px] uppercase text-red-500/40 mb-1">V1 — Original</div>
                                   <p className="text-[10px] text-red-200/40 line-through leading-relaxed">{selectedChapter.content.substring(0, 100)}...</p>
                                </div>
                                <div className="p-3 bg-green-500/5 border border-green-500/10 rounded">
                                   <div className="text-[8px] uppercase text-green-500/40 mb-1">Versão Atual</div>
                                   <p className="text-[10px] text-green-200/60 leading-relaxed">{selectedChapter.content.substring(0, 100)}...</p>
                                </div>
                             </div>
                             <Button size="sm" variant="outline" className="w-full text-[9px] border-[#c19935]/20 text-[#c19935]">Ver Diff Completo</Button>
                          </div>
                       </TabsContent>

                       <TabsContent value="audit" className="mt-4 space-y-3">
                          <div className="space-y-2">
                             {selectedChapter.auditLog.length > 0 ? selectedChapter.auditLog.map((log, i) => (
                                <div key={i} className="text-[9px] p-2 rounded bg-black/40 border-l-2 border-[#c19935]/40">
                                   <div className="font-bold text-[#c19935] mb-1">{skills.find(s => s.id === log.skillId)?.name}</div>
                                   <p className="text-[#f3ecdb]/40 mb-1">{log.action}</p>
                                   <div className="text-[8px] italic opacity-50 bg-[#c19935]/5 p-1 rounded mt-1 border border-[#c19935]/10">
                                      🔍 Evidência: {log.evidence}
                                   </div>
                                </div>
                             )) : (
                                <div className="text-[9px] text-[#f3ecdb]/10 italic">Nenhuma atividade registrada</div>
                             )}
                          </div>
                       </TabsContent>
                    </Tabs>
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
                                        {Array.isArray(items) ? (
                                          items.length > 0 ? items.map(item => (
                                             <span key={item} className="text-[9px] px-2 py-0.5 bg-[#c19935]/10 rounded border border-[#c19935]/20 text-[#c19935]">{item}</span>
                                          )) : <span className="text-[9px] text-[#f3ecdb]/10 italic">Nenhum dado registrado</span>
                                        ) : (
                                          <span className="text-[10px] text-[#f3ecdb]/60">{items}</span>
                                        )}
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
          <TabsContent value="memoria" className="flex-1 p-8 overflow-y-auto m-0 border-none">
             <div className="max-w-5xl mx-auto space-y-8">
                <header className="flex justify-between items-end">
                   <div>
                      <h2 className="text-3xl font-serif text-[#c19935] mb-2">🧠 BOOK_CONTEXT</h2>
                      <p className="text-[#f3ecdb]/40 italic text-sm">A alma do projeto: tom, voz, conceitos e regras que guiam as Skills.</p>
                   </div>
                   <Button size="sm" className="bg-[#c19935] text-[#0d0722]">
                      <Save className="h-4 w-4 mr-2" /> Salvar Contexto
                   </Button>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-6">
                      <Card className="bg-black/20 border-[#c19935]/10 p-6 space-y-6">
                         <div className="space-y-4">
                            <div className="space-y-2">
                               <label className="text-[10px] uppercase tracking-widest text-[#c19935]">Tom Editorial</label>
                               <input 
                                  className="w-full bg-transparent border-b border-[#c19935]/20 focus:border-[#c19935] outline-none py-2 text-sm italic" 
                                  defaultValue={book.editorialMemory.tom} 
                               />
                            </div>
                            <div className="space-y-2">
                               <label className="text-[10px] uppercase tracking-widest text-[#c19935]">Voz da Obra</label>
                               <input 
                                  className="w-full bg-transparent border-b border-[#c19935]/20 focus:border-[#c19935] outline-none py-2 text-sm italic" 
                                  defaultValue={book.editorialMemory.voz} 
                               />
                            </div>
                         </div>
                      </Card>

                      <Card className="bg-black/20 border-[#c19935]/10 p-6 space-y-4">
                         <div className="flex justify-between items-center">
                            <h3 className="text-sm font-serif text-[#c19935]">Regras do Autor</h3>
                            <Button variant="ghost" size="sm" className="h-6 text-[8px] text-[#c19935]">Adicionar Regra</Button>
                         </div>
                         <div className="space-y-2">
                            {book.editorialMemory.regrasAutor.map((regra, i) => (
                               <div key={i} className="flex gap-2 items-center p-2 rounded bg-[#c19935]/5 border border-[#c19935]/10 group">
                                  <div className="w-1.5 h-1.5 rounded-full bg-[#c19935]" />
                                  <span className="text-xs text-[#f3ecdb]/60 flex-1">{regra}</span>
                                  <button className="opacity-0 group-hover:opacity-100 transition-opacity text-red-500/40 hover:text-red-500">
                                     <X className="h-3 w-3" />
                                  </button>
                               </div>
                            ))}
                         </div>
                      </Card>

                      <Card className="bg-black/20 border-[#c19935]/10 p-6 space-y-4">
                         <h3 className="text-sm font-serif text-[#c19935]">Personagens & Entidades</h3>
                          <div className="flex flex-wrap gap-2">
                             {book.editorialMemory.personagens.length > 0 ? book.editorialMemory.personagens.map(p => (
                                <span key={p} className="text-[10px] px-2 py-1 bg-[#c19935]/10 rounded border border-[#c19935]/20 text-[#c19935]">{p}</span>
                             )) : <p className="text-[10px] italic text-[#f3ecdb]/20">Nenhum personagem cadastrado.</p>}

                            <Button variant="outline" size="sm" className="h-6 px-2 text-[8px] border-dashed border-[#c19935]/20">+</Button>
                         </div>
                      </Card>
                   </div>

                   <div className="space-y-6">
                      <Card className="bg-[#c19935]/5 border-[#c19935]/20 p-6">
                         <h3 className="text-sm font-serif text-[#c19935] mb-4">Rastreamento de Contexto (Audit)</h3>
                         <p className="text-[10px] text-[#f3ecdb]/40 mb-6 italic leading-relaxed">
                            Visualize como as Skills utilizaram a Memória Editorial nas últimas execuções.
                         </p>
                         
                         <div className="space-y-4">
                            {book.chapters[0].auditLog.length > 0 ? book.chapters[0].auditLog.map((log, i) => (
                               <div key={i} className="p-3 rounded bg-black/40 border border-[#c19935]/10 space-y-2">
                                  <div className="flex justify-between items-center">
                                     <span className="text-[10px] font-bold text-[#c19935] uppercase">{skills.find(s => s.id === log.skillId)?.name}</span>
                                     <span className="text-[8px] opacity-30">{new Date(log.timestamp).toLocaleTimeString()}</span>
                                  </div>
                                  <p className="text-[10px] text-[#f3ecdb]/60 italic">"{log.action}"</p>
                                  <div className="flex flex-wrap gap-1 mt-2 pt-2 border-t border-white/5">
                                     {log.contextUsed ? log.contextUsed.map(ctx => (
                                        <span key={ctx} className="text-[8px] px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                           🔗 {ctx}
                                        </span>
                                     )) : (
                                        <span className="text-[8px] text-[#f3ecdb]/20">Sem contexto específico rastreado</span>
                                     )}
                                  </div>
                               </div>
                            )) : (
                               <div className="text-center py-12 border border-dashed border-[#c19935]/10 rounded">
                                  <Info className="h-8 w-8 mx-auto text-[#f3ecdb]/10 mb-2" />
                                  <p className="text-[10px] text-[#f3ecdb]/20">Aguardando primeira execução de Skill com rastreamento.</p>
                               </div>
                            )}
                         </div>
                      </Card>

                      <Card className="bg-black/20 border-[#c19935]/10 p-6 space-y-4">
                         <h3 className="text-sm font-serif text-[#c19935]">Conceitos & Promessas</h3>
                         <div className="space-y-3">
                            <div className="space-y-1">
                               <div className="text-[9px] uppercase tracking-widest text-[#c19935]/40">Conceitos Chave</div>
                               <div className="flex flex-wrap gap-1">
                                   {book.editorialMemory.conceitos.map(c => (
                                      <span key={c.tag} className="text-[9px] px-1.5 py-0.5 bg-[#c19935]/5 rounded border border-[#c19935]/10 text-[#f3ecdb]/60">{c.tag}</span>
                                   ))}

                               </div>
                            </div>
                            <div className="space-y-1">
                               <div className="text-[9px] uppercase tracking-widest text-[#c19935]/40">Promessas da Obra</div>
                               <div className="flex flex-wrap gap-1">
                                   {book.editorialMemory.promessas.map(p => (
                                      <span key={p} className="text-[9px] px-1.5 py-0.5 bg-[#c19935]/5 rounded border border-[#c19935]/10 text-[#f3ecdb]/60">{p}</span>
                                   ))}

                               </div>
                            </div>
                         </div>
                      </Card>
                   </div>
                </div>
             </div>
          </TabsContent>
          <TabsContent value="finalizacao" className="flex-1 p-8 overflow-y-auto m-0 border-none">
             <div className="max-w-4xl mx-auto space-y-8">
                <header className="flex justify-between items-center">
                   <div>
                      <h2 className="text-3xl font-serif text-[#c19935] mb-2 text-glow">🚀 Central de Finalização</h2>
                      <p className="text-[#f3ecdb]/40 italic text-sm">Transformando material bruto em uma obra editorial de excelência.</p>
                   </div>
                   <div className="text-right">
                      <div className="text-[10px] text-[#c19935] uppercase tracking-widest mb-1">Status Global</div>
                      <div className="px-3 py-1 rounded-full bg-[#c19935]/10 border border-[#c19935]/20 text-[#c19935] text-[10px] font-bold uppercase">
                         {book.readinessScore >= 95 ? 'Pronto para Publicação' : 'Em Refinamento'}
                      </div>
                   </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   <div className="md:col-span-2 space-y-6">
                      <Card className="bg-black/40 border-[#c19935]/20 p-6 relative overflow-hidden group">
                         <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Sparkles className="h-24 w-24 text-[#c19935]" />
                         </div>
                         <h3 className="text-lg font-serif text-[#c19935] mb-6 flex items-center gap-2">
                            <Layout className="h-5 w-5" /> Fila de Trabalho Editorial
                         </h3>
                         
                         <div className="space-y-4">
                            {[
                               { id: 'arq', label: 'Arquitetura e Sumário', status: 'concluído', skill: 'Arquiteto', approved: true },
                               { id: 'pch1-4', label: 'Capítulos 1 a 4 (Refinamento PCH)', status: 'concluído', skill: 'PCH', approved: true },
                               { id: 'ed5', label: 'Capítulo 5 (Edição Literária)', status: 'ativo', skill: 'Editor', approved: null },
                               { id: 'esc6', label: 'Capítulo 6 (Desenvolvimento)', status: 'pendente', skill: 'Escritor', approved: null },
                               { id: 'fontes', label: 'Verificação de Fontes e Citações', status: 'ativo', skill: 'Pesquisador', approved: null },
                               { id: 'rev', label: 'Revisão Gramatical Global', status: 'pendente', skill: 'Revisor', approved: null },
                               { id: 'concl', label: 'Conclusão e Posfácio', status: 'vazio', skill: 'Escritor', approved: null },
                               { id: 'design', label: 'Design de Capa e Diagramação', status: 'pendente', skill: 'Designer', approved: null }
                            ].map((item, idx) => (
                               <div key={idx} className="group flex flex-col gap-2 p-3 rounded bg-white/5 border border-white/5 hover:border-[#c19935]/20 transition-all">
                                  <div className="flex items-center gap-4">
                                     <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                                        item.status === 'concluído' ? 'bg-[#c19935] text-[#0d0722]' :
                                        item.status === 'ativo' ? 'border border-[#c19935] text-[#c19935] animate-pulse' :
                                        item.status === 'vazio' ? 'border border-red-500/40 text-red-500/40' :
                                        'border border-white/10 text-white/10'
                                     }`}>
                                        {item.status === 'concluído' ? <CheckCircle2 className="h-3 w-3" /> : <div className="w-1 h-1 rounded-full bg-current" />}
                                     </div>
                                     <div className="flex-1">
                                        <div className="flex justify-between">
                                           <span className={`text-xs font-bold ${item.status === 'vazio' ? 'text-red-500/60' : 'text-[#f3ecdb]/80'}`}>{item.label}</span>
                                           <span className="text-[9px] uppercase tracking-widest text-[#c19935]/40">{item.skill}</span>
                                        </div>
                                     </div>
                                  </div>
                                  
                                  {/* Gate de Aprovação do Autor */}
                                  {item.status === 'concluído' && (
                                     <div className="flex items-center justify-between mt-2 pl-9 pr-2 py-2 border-t border-white/5">
                                        <div className="flex items-center gap-2">
                                           <span className="text-[8px] uppercase tracking-widest text-[#c19935]/60">Aprovação do Autor:</span>
                                           {item.approved ? (
                                              <span className="text-[8px] font-bold text-green-500 flex items-center gap-1">
                                                 <CheckCircle2 className="h-2 w-2" /> APROVADO
                                              </span>
                                           ) : (
                                              <span className="text-[8px] font-bold text-yellow-500">AGUARDANDO</span>
                                           )}
                                        </div>
                                        <div className="flex gap-1">
                                           <Button size="icon" variant="ghost" className="h-6 w-6 text-green-500/40 hover:text-green-500 hover:bg-green-500/10">
                                              <ThumbsUp className="h-3 w-3" />
                                           </Button>
                                           <Button size="icon" variant="ghost" className="h-6 w-6 text-red-500/40 hover:text-red-500 hover:bg-red-500/10">
                                              <ThumbsDown className="h-3 w-3" />
                                           </Button>
                                           <Button size="icon" variant="ghost" className="h-6 w-6 text-[#c19935]/40 hover:text-[#c19935] hover:bg-[#c19935]/10">
                                              <MessageSquare className="h-3 w-3" />
                                           </Button>
                                        </div>
                                     </div>
                                  )}
                               </div>
                            ))}
                         </div>
                      </Card>

                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <Card className="bg-black/20 border-[#c19935]/10 p-6">
                             <h3 className="text-sm font-serif text-[#c19935] mb-4 flex items-center gap-2">
                                <Scissors className="h-4 w-4" /> Especificações de Impressão
                             </h3>
                             <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                   <label className="text-[9px] uppercase tracking-widest text-[#c19935]/50">Formato Físico</label>
                                    <select
                                       value={book.printSettings.format}
                                       onChange={(event) => setBook(currentBook => ({
                                          ...currentBook,
                                          printSettings: { ...currentBook.printSettings, format: event.target.value }
                                       }))}
                                       className="w-full bg-white/5 border border-[#c19935]/20 rounded p-1 text-[10px] text-[#f3ecdb]"
                                    >
                                      <option value="14x21">14 × 21 cm</option>
                                      <option value="15x21">15 × 21 cm</option>
                                      <option value="16x23">16 × 23 cm</option>
                                      <option value="17x24">17 × 24 cm</option>
                                      <option value="custom">Personalizado</option>
                                   </select>
                                </div>
                                <div className="space-y-1">
                                   <label className="text-[9px] uppercase tracking-widest text-[#c19935]/50">Perfil de Cor</label>
                                   <div className="text-xs text-[#f3ecdb]/80 p-1 bg-white/5 rounded border border-[#c19935]/10">CMYK (Gráfica)</div>
                                </div>
                                <div className="space-y-1">
                                   <label className="text-[9px] uppercase tracking-widest text-[#c19935]/50">Margens / Sangria</label>
                                    <div className="text-[9px] text-[#f3ecdb]/60 leading-relaxed">
                                       Superior/Inferior: 20 mm<br />Interna: 25 mm · Externa: 20 mm<br />Sangria: 3 mm
                                    </div>
                                </div>
                                <div className="space-y-1">
                                   <label className="text-[9px] uppercase tracking-widest text-[#c19935]/50">DPI / Resolução</label>
                                   <div className="text-[9px] text-green-500 font-bold">300 DPI (Alta Qualidade)</div>
                                </div>
                             </div>
                          </Card>

                          <Card className="bg-black/20 border-[#c19935]/10 p-6">
                             <h3 className="text-sm font-serif text-[#c19935] mb-4 flex items-center gap-2">
                                <Printer className="h-4 w-4" /> PDF Print Check
                             </h3>
                             <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                                {[
                                   { check: 'Dimensões Corretas', done: true },
                                   { check: 'Margens e Sangria', done: true },
                                   { check: 'Fontes Incorporadas', done: true },
                                   { check: 'Imagens (300 DPI)', done: true },
                                   { check: 'Área Segura', done: false },
                                   { check: 'Ficha Editorial', done: false },
                                   { check: 'Lombada Calculada', done: false },
                                   { check: 'PDF/X-1a Válido', done: false }
                                ].map((c, i) => (
                                   <div key={i} className="flex items-center gap-2 text-[10px]">
                                      <div className={`w-3 h-3 rounded-sm border ${c.done ? 'bg-[#c19935] border-[#c19935] flex items-center justify-center' : 'border-[#c19935]/20'}`}>
                                         {c.done && <CheckCircle2 className="h-2 w-2 text-[#0d0722]" />}
                                      </div>
                                      <span className={c.done ? 'text-[#f3ecdb]/60' : 'text-[#f3ecdb]/20'}>{c.check}</span>
                                   </div>
                                ))}
                             </div>
                          </Card>
                       </div>
                    </div>

                    <aside className="space-y-6">
                       <Card className="bg-[#c19935]/10 border-[#c19935]/30 p-6 border-t-4 border-t-[#c19935]">
                          <h3 className="font-serif text-[#c19935] mb-4 flex items-center gap-2">
                             <Sparkles className="h-4 w-4" /> Orquestrador AI
                          </h3>
                          <p className="text-[10px] text-[#f3ecdb]/60 leading-relaxed mb-6">
                             O orquestrador analisará a obra completa, identificando fraquezas estruturais, inconsistências e trechos que necessitam de refinamento PCH ou pesquisa.
                          </p>
                          <div className="flex flex-col gap-2">
                             <Button className="w-full bg-[#c19935] text-[#0d0722] font-bold py-6 group h-auto shadow-[0_0_20px_rgba(193,153,53,0.3)]">
                                <div className="flex flex-col items-center">
                                   <span className="flex items-center text-sm uppercase tracking-widest">🖨️ PREPARAR LIVRO PARA IMPRESSÃO</span>
                                   <span className="text-[9px] opacity-70 mt-1">Orquestrar Diagramação e Pré-Impressão</span>
                                </div>
                             </Button>
                             <div className="grid grid-cols-2 gap-2">
                                <Button variant="outline" className="border-[#c19935]/20 text-[#c19935] hover:bg-[#c19935]/10 h-10 text-[9px]">
                                   <FileDown className="mr-2 h-3 w-3" /> PDF LEITURA (DIGITAL)
                                </Button>
                                <Button variant="outline" className="border-[#c19935]/20 text-[#c19935] hover:bg-[#c19935]/10 h-10 text-[9px]">
                                   <RefreshCw className="mr-2 h-3 w-3" /> REEXECUTAR PENDENTES
                                </Button>
                             </div>
                          </div>
                       </Card>

                       <Card className="bg-black/20 border-[#c19935]/10 p-6">
                          <h4 className="text-[10px] uppercase tracking-widest text-[#c19935]/50 mb-4">Estatísticas do Ciclo</h4>
                          <div className="space-y-1">
                             <div className="flex justify-between text-[9px]"><span className="text-[#f3ecdb]/40">Skills Executadas:</span> <span>42</span></div>
                             <div className="flex justify-between text-[9px]"><span className="text-[#f3ecdb]/40">Versões Geradas:</span> <span>128</span></div>
                             <div className="flex justify-between text-[9px]"><span className="text-[#f3ecdb]/40">Alterações Aceitas:</span> <span>89%</span></div>
                          </div>
                       </Card>
                    </aside>
                </div>
             </div>
          </TabsContent>
        </Tabs>

      </main>
    </div>
  );
}
