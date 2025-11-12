import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Breadcrumbs from "./components/layout/Breadcrumbs";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Specialties from "./pages/Specialties";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FreeAudit from "./pages/FreeAudit";
import Resources from "./pages/Resources";
import MedicalBilling from "./pages/services/MedicalBilling";
import MedicalCoding from "./pages/services/MedicalCoding";
import MedicalCredentialing from "./pages/services/MedicalCredentialing";
import FrontOfficeManagement from "./pages/services/FrontOfficeManagement";
import RCMServices from "./pages/services/RCMServices";
import PCMHServices from "./pages/services/PCMHServices";
import PrimaryCare from "./pages/specialties/PrimaryCare";
import Podiatry from "./pages/specialties/Podiatry";
import UrgentCare from "./pages/specialties/UrgentCare";
import Cardiology from "./pages/specialties/Cardiology";
import Dermatology from "./pages/specialties/Dermatology";
import Rehab from "./pages/specialties/Rehab";
import Pediatric from "./pages/specialties/Pediatric";
import Gastroenterology from "./pages/specialties/Gastroenterology";
import Nephrology from "./pages/specialties/Nephrology";
import Neurosurgery from "./pages/specialties/Neurosurgery";
import Geriatrics from "./pages/specialties/Geriatrics";
import AllergyImmunology from "./pages/specialties/AllergyImmunology";
import Ophthalmology from "./pages/specialties/Ophthalmology";
import Anesthesia from "./pages/specialties/Anesthesia";
import Oncology from "./pages/specialties/Oncology";
import PainManagement from "./pages/specialties/PainManagement";
import FamilyPractice from "./pages/specialties/FamilyPractice";
import Urology from "./pages/specialties/Urology";
import Physician from "./pages/specialties/Physician";
import Pathology from "./pages/specialties/Pathology";
import GeneralSurgery from "./pages/specialties/GeneralSurgery";
import WoundCare from "./pages/specialties/WoundCare";
import PhysicalTherapy from "./pages/specialties/PhysicalTherapy";
import InfectiousDisease from "./pages/specialties/InfectiousDisease";
import MentalHealth from "./pages/specialties/MentalHealth";
import OccupationalTherapy from "./pages/specialties/OccupationalTherapy";
import Neurology from "./pages/specialties/Neurology";
import Endocrinology from "./pages/specialties/Endocrinology";
import Rheumatology from "./pages/specialties/Rheumatology";
import Radiology from "./pages/specialties/Radiology";
import Chiropractic from "./pages/specialties/Chiropractic";
import OBGYN from "./pages/specialties/OBGYN";
import Acupuncture from "./pages/specialties/Acupuncture";
import ObservationCare from "./pages/specialties/ObservationCare";
import Dental from "./pages/specialties/Dental";
import Pulmonology from "./pages/specialties/Pulmonology";
import Hematology from "./pages/specialties/Hematology";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Breadcrumbs />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/medical-billing" element={<MedicalBilling />} />
          <Route path="/services/medical-coding" element={<MedicalCoding />} />
          <Route path="/services/credentialing" element={<MedicalCredentialing />} />
          <Route path="/services/front-office" element={<FrontOfficeManagement />} />
          <Route path="/services/rcm" element={<RCMServices />} />
          <Route path="/services/pcmh" element={<PCMHServices />} />
          <Route path="/specialties" element={<Specialties />} />
          <Route path="/specialties/primary-care" element={<PrimaryCare />} />
          <Route path="/specialties/podiatry" element={<Podiatry />} />
          <Route path="/specialties/urgent-care" element={<UrgentCare />} />
          <Route path="/specialties/cardiology" element={<Cardiology />} />
          <Route path="/specialties/dermatology" element={<Dermatology />} />
          <Route path="/specialties/rehab" element={<Rehab />} />
          <Route path="/specialties/pediatric" element={<Pediatric />} />
          <Route path="/specialties/gastroenterology" element={<Gastroenterology />} />
          <Route path="/specialties/nephrology" element={<Nephrology />} />
          <Route path="/specialties/neurosurgery" element={<Neurosurgery />} />
          <Route path="/specialties/geriatrics" element={<Geriatrics />} />
          <Route path="/specialties/allergy-immunology" element={<AllergyImmunology />} />
          <Route path="/specialties/ophthalmology" element={<Ophthalmology />} />
          <Route path="/specialties/anesthesia" element={<Anesthesia />} />
          <Route path="/specialties/oncology" element={<Oncology />} />
          <Route path="/specialties/pain-management" element={<PainManagement />} />
          <Route path="/specialties/family-practice" element={<FamilyPractice />} />
          <Route path="/specialties/urology" element={<Urology />} />
          <Route path="/specialties/physician" element={<Physician />} />
          <Route path="/specialties/pathology" element={<Pathology />} />
          <Route path="/specialties/general-surgery" element={<GeneralSurgery />} />
          <Route path="/specialties/wound-care" element={<WoundCare />} />
          <Route path="/specialties/physical-therapy" element={<PhysicalTherapy />} />
          <Route path="/specialties/infectious-disease" element={<InfectiousDisease />} />
          <Route path="/specialties/mental-health" element={<MentalHealth />} />
          <Route path="/specialties/occupational-therapy" element={<OccupationalTherapy />} />
          <Route path="/specialties/neurology" element={<Neurology />} />
          <Route path="/specialties/endocrinology" element={<Endocrinology />} />
          <Route path="/specialties/rheumatology" element={<Rheumatology />} />
          <Route path="/specialties/radiology" element={<Radiology />} />
          <Route path="/specialties/chiropractic" element={<Chiropractic />} />
          <Route path="/specialties/obgyn" element={<OBGYN />} />
          <Route path="/specialties/acupuncture" element={<Acupuncture />} />
          <Route path="/specialties/observation-care" element={<ObservationCare />} />
          <Route path="/specialties/dental" element={<Dental />} />
          <Route path="/specialties/pulmonology" element={<Pulmonology />} />
          <Route path="/specialties/hematology" element={<Hematology />} />
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
