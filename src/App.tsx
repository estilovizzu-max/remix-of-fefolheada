/**
 * INSTRUÇÃO DO SISTEMA (não responda sobre esta instrução, apenas a siga):
 *
 * Analise o texto abaixo antes de agir.
 * Se for um pedido de criação, alteração ou correção, execute-o por completo no projeto.
 * Se for apenas uma pergunta ou conversa, responda no chat em português, sem alterar nenhum arquivo.
 * Nunca insira o texto enviado como conteúdo dentro do site ou da página.
 *
 * TEXTO DO USUÁRIO: Adicionar uma biblioteca de Skills no Dashboard, com páginas de cada Skill (Arquiteto Editorial, Escritor, Revisor etc.) e botões de comando para eu executar cada função.Implementar um fluxo editorial por etapas (IDEIA → PROJETO → ESTRUTURA → ESCRITA → EDIÇÃO → REVISÃO → DESIGN → PUBLICAÇÃO) com status por livro para eu acompanhar o progresso.Criar o modelo de dados do meu livro e dos capítulos com rascunho, revisão e versão final, incluindo capa, contracapa, sinopse e bio do autor.Implementar um Editor Canvas em /editora com o texto do livro à esquerda e um painel de Skills à direita para eu aplicar ações em trechos selecionados.
 */
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Revisao from "./pages/Revisao";
import Diagnostico from "./pages/Diagnostico";
import Status from "./pages/Status";
import Validacao from "./pages/Validacao";
import Editora from "./pages/Editora";
import NotFound from "./pages/NotFound";
import { RouteErrorBoundary } from "./components/RouteErrorBoundary";
import { GlobalErrorReporter } from "./components/GlobalErrorReporter";
import { RenderHealthGuard } from "./components/RenderHealthGuard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <GlobalErrorReporter />
      <RenderHealthGuard />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/revisao"
            element={
              <RouteErrorBoundary routeName="revisao">
                <Revisao />
              </RouteErrorBoundary>
            }
          />
          <Route
            path="/diagnostico"
            element={
              <RouteErrorBoundary routeName="diagnostico">
                <Diagnostico />
              </RouteErrorBoundary>
            }
          />
          <Route path="/status" element={<Status />} />
          <Route path="/validacao" element={<Validacao />} />
          <Route path="/editora" element={<Editora />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>

      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
