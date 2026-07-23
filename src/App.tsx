import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Revisao from "./pages/Revisao";
import Diagnostico from "./pages/Diagnostico";
import Status from "./pages/Status";
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>

      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
