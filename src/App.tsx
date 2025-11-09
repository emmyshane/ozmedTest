import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Specialties from "./pages/Specialties";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FreeAudit from "./pages/FreeAudit";
import Resources from "./pages/Resources";
import MedicalBilling from "./pages/services/MedicalBilling";
import PrimaryCare from "./pages/specialties/PrimaryCare";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/medical-billing" element={<MedicalBilling />} />
          <Route path="/services/revenue-cycle" element={<MedicalBilling />} />
          <Route path="/services/medical-coding" element={<MedicalBilling />} />
          <Route path="/services/credentialing" element={<MedicalBilling />} />
          <Route path="/services/ar-management" element={<MedicalBilling />} />
          <Route path="/services/practice-management" element={<MedicalBilling />} />
          <Route path="/specialties" element={<Specialties />} />
          <Route path="/specialties/primary-care" element={<PrimaryCare />} />
          <Route path="/specialties/cardiology" element={<PrimaryCare />} />
          <Route path="/specialties/dermatology" element={<PrimaryCare />} />
          <Route path="/specialties/pediatrics" element={<PrimaryCare />} />
          <Route path="/specialties/orthopedics" element={<PrimaryCare />} />
          <Route path="/specialties/mental-health" element={<PrimaryCare />} />
          <Route path="/specialties/surgery-centers" element={<PrimaryCare />} />
          <Route path="/specialties/labs" element={<PrimaryCare />} />
          <Route path="/specialties/urgent-care" element={<PrimaryCare />} />
          <Route path="/specialties/multi-specialty" element={<PrimaryCare />} />
          <Route path="/specialties/physical-therapy" element={<PrimaryCare />} />
          <Route path="/specialties/gastroenterology" element={<PrimaryCare />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/free-audit" element={<FreeAudit />} />
          <Route path="/resources" element={<Resources />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
