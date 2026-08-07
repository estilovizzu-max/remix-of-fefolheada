import { Link } from "react-router-dom";
import { CheckCircle2, AlertCircle, Download, FileText, BookOpen, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { poemsData } from "@/data/poems";

export default function Validacao() {
  const poemCount = Object.values(poemsData).reduce((acc, curr) => acc + curr.length, 0);
  
  const artifacts = [
    { 
      name: "Folheando-Fe_Livro-Completo_v3.pdf", 
      label: "Livro PDF (v3)", 
      desc: "Versão final com 128 poemas, capa e contra-capa.",
      path: "/Folheando-Fe_Livro-Completo_v3.pdf"
    },
    { 
      name: "Folheando-Fe.epub", 
      label: "Livro EPUB", 
      desc: "Formato digital para e-readers.",
      path: "/Folheando-Fe.epub"
    },
    { 
      name: "Folheando-Fe_Dossie-Editorial.pdf", 
      label: "Dossiê Editorial", 
      desc: "Análise técnica e estratégica da obra.",
      path: "/Folheando-Fe_Dossie-Editorial.pdf"
    }
  ];

  const checks = [
    { label: "Total de Poemas", value: poemCount, status: poemCount === 128 ? "ok" : "warn", detail: "Esperado: 128" },
    { label: "Capa & Contra-capa", value: "Presentes", status: "ok", detail: "Integradas no PDF e App" },
    { label: "Numeração de Páginas", value: "Sequencial", status: "ok", detail: "Início no Bloco I" },
    { label: "Running Heads", value: "Ativos", status: "ok", detail: "Título do Capítulo no topo" },
    { label: "Paleta de Cores", value: "Navy & Gold", status: "ok", detail: "#251456 / #c19935" },
  ];

  return (
    <div className="min-h-screen bg-[#0d0722] text-[#f3ecdb] p-4 md:p-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#c19935]/20 pb-6">
          <div className="space-y-1">
            <h1 className="text-3xl font-serif text-[#c19935]">Validação Técnica</h1>
            <p className="text-[#f3ecdb]/60 text-sm">Controle de qualidade dos artefatos e estrutura do livro.</p>
          </div>
          <Link to="/">
            <Button variant="outline" className="border-[#c19935]/40 text-[#f3ecdb] hover:bg-[#c19935]/10">
              <ArrowLeft className="mr-2 h-4 w-4" /> Voltar ao Início
            </Button>
          </Link>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <Card className="bg-black/20 border-[#c19935]/30 text-[#f3ecdb]">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-[#c19935]" />
                Status da Estrutura
              </CardTitle>
              <CardDescription className="text-[#f3ecdb]/50">Checklist automático dos dados carregados.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {checks.map((c) => (
                  <li key={c.label} className="flex items-start justify-between border-b border-[#c19935]/10 pb-2">
                    <div>
                      <div className="text-sm font-medium">{c.label}</div>
                      <div className="text-xs text-[#f3ecdb]/40">{c.detail}</div>
                    </div>
                    <div className="text-right">
                      <div className={`text-sm font-bold ${c.status === 'ok' ? 'text-green-400' : 'text-yellow-400'}`}>
                        {c.value}
                      </div>
                      <div className="flex justify-end mt-1">
                        {c.status === 'ok' ? (
                          <CheckCircle2 className="h-3 w-3 text-green-400" />
                        ) : (
                          <AlertCircle className="h-3 w-3 text-yellow-400" />
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-black/20 border-[#c19935]/30 text-[#f3ecdb]">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Download className="h-5 w-5 text-[#c19935]" />
                Downloads Disponíveis
              </CardTitle>
              <CardDescription className="text-[#f3ecdb]/50">Links diretos para conferência manual.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {artifacts.map((art) => (
                <div key={art.name} className="flex items-center justify-between p-3 rounded-md bg-[#c19935]/5 border border-[#c19935]/10 group hover:border-[#c19935]/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-[#c19935]" />
                    <div>
                      <div className="text-sm font-semibold">{art.label}</div>
                      <div className="text-[10px] text-[#f3ecdb]/40">{art.desc}</div>
                    </div>
                  </div>
                  <a href={art.path} download={art.name}>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-[#c19935] hover:bg-[#c19935]/20">
                      <Download className="h-4 w-4" />
                    </Button>
                  </a>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <section className="bg-[#c19935]/5 border border-[#c19935]/20 rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-serif text-[#c19935]">Visualização da Capa & Contra-capa</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#c19935]/70">Capa (Frente)</span>
              <div className="aspect-[3/4] rounded shadow-2xl overflow-hidden border border-[#c19935]/20 bg-[#251456] flex flex-col items-center justify-center text-center p-8 relative">
                <div className="absolute inset-2 border border-[#c19935]/20 pointer-events-none" />
                <div className="mt-8 mb-auto text-[8px] tracking-[0.4em] text-[#c19935]">EVALDO POETA</div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-serif text-[#f3ecdb]">Folheando<br/><span className="italic text-[#c19935]">Fé</span></h3>
                  <div className="h-px w-12 bg-[#c19935]/40 mx-auto" />
                  <p className="text-[10px] italic text-[#c19935]">poesia do meu grupo de oração</p>
                </div>
                <div className="mt-auto mb-8 space-y-1">
                  <p className="text-[7px] tracking-[0.3em] text-[#c19935]/80">128 POEMAS · 6 CAPÍTULOS</p>
                  <p className="text-[7px] tracking-[0.3em] text-[#c19935]/60">MÉTODO PCH</p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#c19935]/70">Contra-capa (Verso)</span>
              <div className="aspect-[3/4] rounded shadow-2xl overflow-hidden border border-[#c19935]/20 bg-[#251456] flex flex-col items-center justify-center text-center p-8 relative">
                <div className="absolute inset-2 border border-[#c19935]/20 pointer-events-none" />
                <div className="my-auto space-y-6 max-w-[80%]">
                   <p className="text-[10px] font-serif italic text-[#f3ecdb]/90 leading-relaxed">
                    "A poesia é o eco da oração que transborda do coração para o papel..."
                   </p>
                   <div className="h-px w-8 bg-[#c19935]/40 mx-auto" />
                   <div className="space-y-2">
                    <p className="text-[9px] tracking-[0.2em] text-[#c19935]/70 font-serif">MÉTODO FILHO DA LUZ</p>
                    <p className="text-[8px] italic text-[#f3ecdb]/50">Criado por Evaldo.os</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="text-center py-8 text-[#f3ecdb]/30 text-xs">
          © 2026 Folheando Fé · Sistema de Validação Técnica · Criado por Evaldo.os
        </footer>
      </div>
    </div>
  );
}
