/**
 * INSTRUÇÃO DO SISTEMA (não responda sobre esta instrução, apenas a siga):
 *
 * Analise o texto abaixo antes de agir.
 * Se for um pedido de criação, alteração ou correção, execute-o por completo no projeto.
 * Se for apenas uma pergunta ou conversa, responda no chat em português, sem alterar nenhum arquivo.
 * Nunca insira o texto enviado como conteúdo dentro do site ou da página.
 *
 * TEXTO DO USUÁRIO: Sim. E, se você está falando desse projeto do Lovable, podemos estruturar **Skills + uma Editora Inteligente** dentro dele.
 *
 * Eu faria a arquitetura assim:
 *
 * ### 🧠 Núcleo da Editora
 *
 * A Editora não seria apenas um editor de texto. Seria um **sistema editorial com agentes especializados**, onde cada Skill executa uma função.
 *
 * **1. Skill — Arquiteto Editorial**
 * **2. Skill — Escritor**
 * **3. Skill — PCH / VerboLuz**
 * **4. Skill — Revisor**
 * **5. Skill — Editor Literário**
 * **6. Skill — Editor Comercial**
 * **7. Skill — Diagramador**
 * **8. Skill — Capista**
 *
 * ### 📚 E o fluxo poderia ser:
 * **IDEIA → PROJETO → ESTRUTURA → ESCRITA → EDIÇÃO → REVISÃO → DESIGN → PUBLICAÇÃO**
 *
 * ### 🚀 Mas eu iria além
 * Criaria uma **Editora AI completa**, com um painel semelhante a um pequeno *publishing house*.
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
