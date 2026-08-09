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
  const editorRef = useRef<HTMLTextAreaElement>(null);

  const skills = [
    { id: 'arquiteto', name: 'Arquiteto Editorial', icon: Layout, color: 'text-blue-400', desc: 'Estrutura e Sumário', prompt: 'Analise a estrutura deste sumário e sugira melhorias na lógica dos capítulos.' },
    { id: 'escritor', name: 'Escritor', icon: PenTool, color: 'text-green-400', desc: 'Desenvolvimento Narrativo', prompt: 'Expanda este parágrafo mantendo o tom autoral e adicionando mais profundidade.' },
    { id: 'pch', name: 'PCH / VerboLuz', icon: Sparkles, color: 'text-purple-400', desc: 'Poética e Cognição', prompt: 'Aplique o Método PCH para tornar este texto mais poético e emocionalmente conectado.' },
    { id: 'revisor', name: 'Revisor', icon: Search, color: 'text-yellow-400', desc: 'Gramática e Clareza', prompt: 'Revise este trecho buscando erros gramaticais e melhorando a coesão.' },
    { id: 'literario', name: 'Editor Literário', icon: Book, color: 'text-pink-400', desc: 'Ritmo e Voz', prompt: 'Avalie o ritmo narrativo e a voz deste capítulo.' },
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
      <aside className="w-64 bg-black/40 border-r border-[#c19935]/20 p-6 flex flex-col gap-8">
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
            <PenTool className="mr-3 h-4 w-4" /> Editor Canvas
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => setActiveTab("biblioteca")}
            className={`justify-start ${activeTab === 'biblioteca' ? 'text-[#c19935] bg-[#c19935]/10' : 'text-[#f3ecdb]/60 hover:text-[#c19935]'}`}
          >
            <Library className="mr-3 h-4 w-4" /> Biblioteca Skills
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => setActiveTab("projeto")}
            className={`justify-start ${activeTab === 'projeto' ? 'text-[#c19935] bg-[#c19935]/10' : 'text-[#f3ecdb]/60 hover:text-[#c19935]'}`}
          >
            <Settings className="mr-3 h-4 w-4" /> Projeto Editorial
          </Button>
        </nav>

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
                     <h2 className="font-serif text-[#c19935]">{book.chapters[0].title}</h2>
                     <span className="text-[10px] px-2 py-0.5 rounded border border-[#c19935]/30 text-[#c19935]/60 uppercase tracking-tighter">
                        {book.chapters[0].status}
                     </span>
                  </div>
                  <div className="flex items-center gap-2">
                     <Button variant="ghost" size="sm" className="text-[#f3ecdb]/40 hover:text-[#c19935]">
                        <Save className="h-4 w-4 mr-2" /> Salvar
                     </Button>
                     <Button size="sm" className="bg-[#c19935] hover:bg-[#c19935]/90 text-[#0d0722]">
                        Exportar Manuscrito
                     </Button>
                  </div>
               </div>
               <textarea 
                  ref={editorRef}
                  onSelect={handleTextSelection}
                  className="flex-1 bg-transparent border-none focus:ring-0 resize-none font-serif text-lg leading-relaxed text-[#f3ecdb]/80 p-4 scrollbar-thin scrollbar-thumb-[#c19935]/20"
                  placeholder="Comece a escrever aqui seu livro..."
                  defaultValue={book.chapters[0].draft}
               />
            </div>

            {/* Painel de Skills à Direita */}
            <aside className="w-80 bg-black/20 border-l border-[#c19935]/20 p-6 flex flex-col gap-6 overflow-y-auto">
               <h3 className="font-serif text-[#c19935] flex items-center gap-2">
                  <Wand2 className="h-4 w-4" /> Ações de Skill
               </h3>
               
               {selectedText ? (
                 <div className="space-y-4">
                    <div className="p-3 bg-[#c19935]/5 border border-[#c19935]/20 rounded text-xs italic opacity-60 line-clamp-3">
                       "{selectedText}"
                    </div>
                    <div className="space-y-2">
                       {skills.map(skill => (
                          <Button 
                            key={skill.id}
                            variant="outline" 
                            className="w-full justify-start border-[#c19935]/10 hover:border-[#c19935]/40 bg-black/20 text-[#f3ecdb]/60 hover:text-[#c19935]"
                            onClick={() => applySkillAction(skill.name)}
                          >
                             <skill.icon className={`h-4 w-4 mr-3 ${skill.color}`} />
                             <span className="text-xs">{skill.name}</span>
                          </Button>
                       ))}
                    </div>
                 </div>
               ) : (
                 <div className="flex flex-col items-center justify-center h-40 text-center space-y-2 text-[#f3ecdb]/20">
                    <Info className="h-8 w-8" />
                    <p className="text-xs">Selecione um trecho do texto para ativar as Skills</p>
                 </div>
               )}

               <div className="mt-auto border-t border-[#c19935]/10 pt-6">
                  <h4 className="text-[10px] uppercase tracking-widest text-[#c19935]/50 mb-4">Dica do Arquiteto</h4>
                  <p className="text-[10px] italic text-[#f3ecdb]/40 leading-relaxed">
                     "Tente manter a conexão emocional entre as estrofes usando o PCH. A transição deve ser fluida como um sopro."
                  </p>
               </div>
            </aside>
          </TabsContent>

          <TabsContent value="biblioteca" className="flex-1 p-8 overflow-y-auto m-0 border-none">
             <div className="max-w-4xl mx-auto space-y-12">
                <header>
                   <h2 className="text-3xl font-serif text-[#c19935] mb-2">Biblioteca de Agentes</h2>
                   <p className="text-[#f3ecdb]/40 italic text-sm">Skills especializadas para cada etapa da sua obra.</p>
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
                         <p className="text-xs text-[#f3ecdb]/50 leading-relaxed">{skill.desc}</p>
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
                              <div key={s.step} className="flex items-center gap-4 relative z-10">
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
        </Tabs>
      </main>
    </div>
  );
}
