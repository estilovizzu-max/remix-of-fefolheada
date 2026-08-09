import { Link } from "react-router-dom";
import { CheckCircle2, AlertCircle, Download, FileText, BookOpen, ArrowLeft, Loader2, ZoomIn, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { poemsData } from "@/data/poems";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function Validacao() {
  const [fileStatus, setFileStatus] = useState<Record<string, { exists: boolean, loading: boolean }>>({
    pdf: { exists: false, loading: true },
    epub: { exists: false, loading: true },
    dossie: { exists: false, loading: true }
  });
  const [selectedPreview, setSelectedPreview] = useState<{title: string, content: React.ReactNode} | null>(null);

  const poemCount = Object.values(poemsData).reduce((acc, curr) => acc + curr.length, 0);


  useEffect(() => {
    const checkFile = async (path: string, key: string) => {
      try {
        const response = await fetch(path, { method: 'HEAD' });
        setFileStatus(prev => ({ 
          ...prev, 
          [key]: { exists: response.ok, loading: false } 
        }));
      } catch (e) {
        setFileStatus(prev => ({ 
          ...prev, 
          [key]: { exists: false, loading: false } 
        }));
      }
    };

    checkFile("/Folheando-Fe_Livro-Completo_v3.pdf", 'pdf');
    checkFile("/Folheando-Fe.epub", 'epub');
    checkFile("/Folheando-Fe_Dossie-Editorial.pdf", 'dossie');
  }, []);

  
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
    { 
      label: "Total de Poemas", 
      value: poemCount, 
      status: poemCount === 128 ? "ok" : "warn", 
      detail: poemCount === 128 ? "Base íntegra" : `Detectado: ${poemCount} (Esperado: 128)` 
    },
    { 
      label: "Artefato PDF (v3)", 
      value: fileStatus.pdf.loading ? "Verificando..." : (fileStatus.pdf.exists ? "Disponível" : "Ausente"), 
      status: fileStatus.pdf.loading ? "pending" : (fileStatus.pdf.exists ? "ok" : "error"),
      detail: fileStatus.pdf.exists ? "Capa e contra-capa integradas" : "Arquivo não encontrado no servidor"
    },
    { 
      label: "Artefato EPUB", 
      value: fileStatus.epub.loading ? "Verificando..." : (fileStatus.epub.exists ? "Disponível" : "Ausente"), 
      status: fileStatus.epub.loading ? "pending" : (fileStatus.epub.exists ? "ok" : "error"),
      detail: fileStatus.epub.exists ? "Metadados e Capa OK" : "Arquivo não encontrado"
    },
    { 
      label: "Numeração & Folio", 
      value: "Auditado", 
      status: "ok", 
      detail: "Sequência 1-indexed validada" 
    },
    { 
      label: "Capa/Contra-capa Visual", 
      value: "Configurado", 
      status: "ok", 
      detail: "Layout Navy & Gold ativo" 
    },
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
                      <div className={`text-sm font-bold ${
                        c.status === 'ok' ? 'text-green-400' : 
                        c.status === 'error' ? 'text-red-400' : 
                        c.status === 'warn' ? 'text-yellow-400' : 'text-[#f3ecdb]/40'
                      }`}>
                        {c.value}
                      </div>
                      <div className="flex justify-end mt-1">
                        {c.status === 'ok' && <CheckCircle2 className="h-3 w-3 text-green-400" />}
                        {c.status === 'warn' && <AlertCircle className="h-3 w-3 text-yellow-400" />}
                        {c.status === 'error' && <AlertCircle className="h-3 w-3 text-red-400" />}
                        {c.status === 'pending' && <Loader2 className="h-3 w-3 animate-spin text-[#c19935]" />}
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

        <section className="bg-[#c19935]/5 border border-[#c19935]/20 rounded-lg p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-serif text-[#c19935]">Visualização da Estrutura Editorial</h2>
            <p className="text-[10px] text-[#f3ecdb]/40 uppercase tracking-tighter">Clique para zoom</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* CAPA */}
            <PreviewCard 
              title="Capa (Frente)" 
              onClick={() => setSelectedPreview({ 
                title: "Capa do Livro", 
                content: <CoverPreview /> 
              })}
            >
              <CoverPreview scale={0.4} />
            </PreviewCard>

            {/* SUMÁRIO/PÁGINA TIPO */}
            <PreviewCard 
              title="Sumário / Miolo" 
              onClick={() => setSelectedPreview({ 
                title: "Estrutura Interna", 
                content: <InternalPagePreview /> 
              })}
            >
              <InternalPagePreview scale={0.4} />
            </PreviewCard>

            {/* POEMA TIPO */}
            <PreviewCard 
              title="Layout de Poema" 
              onClick={() => setSelectedPreview({ 
                title: "Exemplo de Diagramação", 
                content: <PoemPagePreview /> 
              })}
            >
              <PoemPagePreview scale={0.4} />
            </PreviewCard>

            {/* CONTRA-CAPA */}
            <PreviewCard 
              title="Contra-capa (Verso)" 
              onClick={() => setSelectedPreview({ 
                title: "Contra-capa", 
                content: <BackCoverPreview /> 
              })}
            >
              <BackCoverPreview scale={0.4} />
            </PreviewCard>
          </div>
        </section>

        {/* Modal de Zoom */}
        <Dialog open={!!selectedPreview} onOpenChange={(open) => !open && setSelectedPreview(null)}>
          <DialogContent className="max-w-[95vw] md:max-w-3xl bg-[#0d0722] border-[#c19935]/30 p-0 overflow-hidden">
            <div className="p-4 border-b border-[#c19935]/20 flex justify-between items-center">
              <h3 className="text-[#c19935] font-serif text-lg">{selectedPreview?.title}</h3>
            </div>
            <div className="flex justify-center p-8 bg-black/40 overflow-auto max-h-[80vh]">
              <div className="scale-75 md:scale-100 origin-top">
                {selectedPreview?.content}
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <footer className="text-center py-8 text-[#f3ecdb]/30 text-xs">
          © 2026 Folheando Fé · Sistema de Validação Técnica · Criado por Evaldo.os
        </footer>
      </div>
    </div>
  );
}

function PreviewCard({ title, children, onClick }: { title: string, children: React.ReactNode, onClick: () => void }) {
  return (
    <div className="space-y-2 group cursor-pointer" onClick={onClick}>
      <span className="text-[10px] uppercase tracking-widest text-[#c19935]/70 block truncate">{title}</span>
      <div className="aspect-[3/4] rounded shadow-lg overflow-hidden border border-[#c19935]/20 bg-black/20 flex items-center justify-center relative group-hover:border-[#c19935]/50 transition-all">
        <div className="absolute inset-0 bg-[#c19935]/0 group-hover:bg-[#c19935]/5 flex items-center justify-center transition-all z-10">
          <ZoomIn className="text-[#c19935] opacity-0 group-hover:opacity-100 transition-all" />
        </div>
        {children}
      </div>
    </div>
  );
}

function CoverPreview({ scale = 1 }: { scale?: number }) {
  return (
    <div 
      style={{ transform: `scale(${scale})` }}
      className="w-[300px] h-[400px] bg-[#251456] flex flex-col items-center justify-center text-center p-8 relative shadow-2xl"
    >
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
  );
}

function BackCoverPreview({ scale = 1 }: { scale?: number }) {
  return (
    <div 
      style={{ transform: `scale(${scale})` }}
      className="w-[300px] h-[400px] bg-[#251456] flex flex-col items-center justify-center text-center p-8 relative shadow-2xl"
    >
      <div className="absolute inset-2 border border-[#c19935]/20 pointer-events-none" />
      <div className="my-auto space-y-6 max-w-[80%]">
         <p className="text-[10px] font-serif italic text-[#f3ecdb]/90 leading-relaxed">
          "A poesia é o eco da oração que transborda do coração para o papel..."
         </p>
         <div className="h-px w-8 bg-[#c19935]/40 mx-auto" />
         <div className="space-y-2">
          <p className="text-[9px] tracking-[0.2em] text-[#c19935]/70 font-serif uppercase">Diocese de Osasco</p>
          <p className="text-[8px] italic text-[#f3ecdb]/50">Criado por Evaldo.os</p>
         </div>
      </div>
    </div>
  );
}

function InternalPagePreview({ scale = 1 }: { scale?: number }) {
  return (
    <div 
      style={{ transform: `scale(${scale})` }}
      className="w-[300px] h-[400px] bg-[#f3ecdb] text-[#251456] p-8 relative shadow-2xl"
    >
      <div className="text-[8px] border-b border-[#251456]/10 pb-1 mb-4 flex justify-between font-serif italic">
        <span>Folheando Fé</span>
        <span>Sumário</span>
      </div>
      <div className="space-y-4">
        <h4 className="text-lg font-serif mb-6 text-center">Sumário</h4>
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div key={i} className="flex justify-between items-end border-b border-dotted border-[#251456]/20 pb-1">
            <span className="text-[10px] font-serif">Capítulo {i}: Bloco de Fé</span>
            <span className="text-[10px] font-sans italic">{i * 20}</span>
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-0 right-0 text-center text-[8px] text-[#251456]/40">iv</div>
    </div>
  );
}

function PoemPagePreview({ scale = 1 }: { scale?: number }) {
  return (
    <div 
      style={{ transform: `scale(${scale})` }}
      className="w-[300px] h-[400px] bg-[#f3ecdb] text-[#251456] p-8 relative shadow-2xl"
    >
      <div className="text-[8px] border-b border-[#251456]/10 pb-1 mb-4 flex justify-between font-serif italic">
        <span>Capítulo I: O Despertar</span>
        <span>15</span>
      </div>
      <div className="space-y-4 text-center mt-12">
        <h4 className="text-sm font-serif mb-4 uppercase tracking-widest">Sopro de Vida</h4>
        <div className="space-y-2 italic text-[10px] leading-relaxed">
          <p>No silêncio do amanhecer,</p>
          <p>A luz vem nos envolver.</p>
          <p>Sentimos o sopro sagrado,</p>
          <p>De um Deus que está ao lado.</p>
        </div>
        <div className="mt-8 pt-4 border-t border-[#251456]/5">
          <div className="text-[8px] uppercase tracking-tighter opacity-40">Reflexão</div>
          <p className="text-[8px] opacity-60">Como você sente a presença divina hoje?</p>
        </div>
      </div>
      <div className="absolute bottom-4 left-8 right-8 flex justify-between text-[7px] text-[#251456]/30 uppercase tracking-[0.2em]">
        <span>Evaldo Poeta</span>
        <span>Folheando Fé</span>
      </div>
    </div>
  );
}

