import { useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { navItems } from "./nav-items";
import Header from "./components/Header";
import MobileNavigation from "./components/MobileNavigation";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Header onOpenNavigation={() => setIsNavigationOpen(true)} />
            <MobileNavigation isOpen={isNavigationOpen} onClose={() => setIsNavigationOpen(false)} />
            <main className="flex-grow">
              <Routes>
                {navItems.map(({ to, component: PageComponent }) => (
                  <Route key={to} path={to} element={<PageComponent />} />
                ))}
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
