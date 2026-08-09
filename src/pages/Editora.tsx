import { useState } from "react";
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
  Library
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function EditoraDashboard() {
  const skills = [
    { id: 'arquiteto', name: 'Arquiteto Editorial', icon: Layout, color: 'text-blue-400', desc: 'Estrutura e Sumário' },
    { id: 'escritor', name: 'Escritor', icon: PenTool, color: 'text-green-400', desc: 'Desenvolvimento Narrativo' },
    { id: 'pch', name: 'PCH / VerboLuz', icon: Sparkles, color: 'text-purple-400', desc: 'Poética e Cognição' },
    { id: 'revisor', name: 'Revisor', icon: Search, color: 'text-yellow-400', desc: 'Gramática e Clareza' },
    { id: 'literario', name: 'Editor Literário', icon: Book, color: 'text-pink-400', desc: 'Ritmo e Voz' },
    { id: 'comercial', name: 'Editor Comercial', icon: ShoppingBag, color: 'text-orange-400', desc: 'Posicionamento e Venda' },
    { id: 'diagramador', name: 'Diagramador', icon: Library, color: 'text-cyan-400', desc: 'Design Interno' },
    { id: 'capista', name: 'Capista', icon: Palette, color: 'text-indigo-400', desc: 'Conceito Visual' },
  ];

  return (
    <div className="min-h-screen bg-[#0d0722] text-[#f3ecdb] font-sans">
      {/* Sidebar Simulado */}
      <div className="flex h-screen overflow-hidden">
        <aside className="w-64 bg-black/40 border-r border-[#c19935]/20 p-6 flex flex-col gap-8 hidden md:flex">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded bg-[#c19935] flex items-center justify-center text-[#0d0722] font-bold">F</div>
             <span className="font-serif text-lg text-[#c19935]">Folheando Fé</span>
          </div>
          
          <nav className="flex flex-col gap-2">
            <Button variant="ghost" className="justify-start text-[#f3ecdb]/60 hover:text-[#c19935] hover:bg-[#c19935]/5">
              <Book className="mr-3 h-4 w-4" /> Meus Livros
            </Button>
            <Button variant="ghost" className="justify-start text-[#c19935] bg-[#c19935]/10">
              <Plus className="mr-3 h-4 w-4" /> Novo Projeto
            </Button>
            <Button variant="ghost" className="justify-start text-[#f3ecdb]/60 hover:text-[#c19935] hover:bg-[#c19935]/5">
              <Library className="mr-3 h-4 w-4" /> Biblioteca Skills
            </Button>
          </nav>

          <div className="mt-auto pt-6 border-t border-[#c19935]/10">
            <Button variant="ghost" className="w-full justify-start text-[#f3ecdb]/30 text-xs">
              <Settings className="mr-3 h-3 w-3" /> Configurações
            </Button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <header className="flex items-center justify-between mb-12">
            <div>
              <h1 className="text-3xl font-serif text-[#c19935]">Publishing House</h1>
              <p className="text-[#f3ecdb]/50 italic">Sua Editora Inteligente com Agentes PCH</p>
            </div>
            <Link to="/">
              <Button variant="outline" className="border-[#c19935]/20 text-[#f3ecdb]/40 hover:text-[#f3ecdb]">
                <ArrowLeft className="mr-2 h-4 w-4" /> Voltar ao Site
              </Button>
            </Link>
          </header>

          <section className="space-y-8">
            <div>
              <h2 className="text-xl font-serif mb-6 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-[#c19935]" />
                Núcleo de Skills Editoriais
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {skills.map(skill => (
                  <Card key={skill.id} className="bg-black/20 border-[#c19935]/10 hover:border-[#c19935]/40 transition-all group cursor-pointer">
                    <CardHeader className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <skill.icon className={`h-6 w-6 ${skill.color} group-hover:scale-110 transition-transform`} />
                        <ChevronRight className="h-4 w-4 text-[#f3ecdb]/20 group-hover:text-[#c19935]" />
                      </div>
                      <CardTitle className="text-sm text-[#f3ecdb]">{skill.name}</CardTitle>
                      <CardDescription className="text-[10px] text-[#f3ecdb]/40">{skill.desc}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="lg:col-span-2 bg-black/20 border-[#c19935]/10 p-6 flex flex-col items-center justify-center min-h-[300px] border-dashed">
                 <div className="text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#c19935]/10 flex items-center justify-center mx-auto">
                      <Plus className="h-8 w-8 text-[#c19935]/40" />
                    </div>
                    <div>
                      <h3 className="text-lg font-serif">Começar Novo Livro</h3>
                      <p className="text-xs text-[#f3ecdb]/30">Inicie o fluxo editorial com o Arquiteto IA</p>
                    </div>
                    <Button className="bg-[#c19935] hover:bg-[#c19935]/80 text-[#0d0722] font-bold">
                      Criar Manuscrito
                    </Button>
                 </div>
              </Card>

              <Card className="bg-[#c19935]/5 border-[#c19935]/20 p-6">
                <h3 className="font-serif text-[#c19935] mb-4">Fluxo Editorial</h3>
                <div className="space-y-6 relative">
                  <div className="absolute left-[11px] top-2 bottom-2 w-px bg-[#c19935]/20" />
                  
                  {[
                    { step: 'Ideia', status: 'concluído' },
                    { step: 'Estrutura', status: 'ativo' },
                    { step: 'Escrita', status: 'pendente' },
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
                        {i + 1}
                      </div>
                      <span className={`text-xs ${s.status === 'ativo' ? 'text-[#f3ecdb]' : 'text-[#f3ecdb]/30'}`}>
                        {s.step}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </section>

          <footer className="mt-20 pt-8 border-t border-[#c19935]/10 text-center text-[10px] text-[#f3ecdb]/20">
            © 2026 Editora Inteligente Folheando Fé · Powered by Agentes PCH · Criado por Evaldo.os
          </footer>
        </main>
      </div>
    </div>
  );
}
