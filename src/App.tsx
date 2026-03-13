import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";

import CitizenLayout from "./layouts/CitizenLayout";
import CitizenDashboard from "./pages/citizen/CitizenDashboard";
import FindHospitals from "./pages/citizen/FindHospitals";
import AIAssistant from "./pages/citizen/AIAssistant";
import HealthRecords from "./pages/citizen/HealthRecords";
import BedAvailability from "./pages/citizen/BedAvailability";
import EmergencyAlerts from "./pages/citizen/EmergencyAlerts";
import HealthEducation from "./pages/citizen/HealthEducation";

import HospitalLayout from "./layouts/HospitalLayout";
import HospitalDashboard from "./pages/hospital/HospitalDashboard";
import PatientRecords from "./pages/hospital/PatientRecords";
import BedManagement from "./pages/hospital/BedManagement";
import DiseaseAnalytics from "./pages/hospital/DiseaseAnalytics";
import DrugInventory from "./pages/hospital/DrugInventory";
import DualCodingEngine from "./pages/hospital/DualCodingEngine";

const queryClient = new QueryClient();

function ProtectedRoute({ children, role }: { children: React.ReactNode; role: "citizen" | "hospital" }) {
  const { isAuthenticated, role: userRole } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (userRole !== role) return <Navigate to="/" replace />;
  return <>{children}</>;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />

            <Route path="/citizen" element={<ProtectedRoute role="citizen"><CitizenLayout /></ProtectedRoute>}>
              <Route index element={<CitizenDashboard />} />
              <Route path="hospitals" element={<FindHospitals />} />
              <Route path="assistant" element={<AIAssistant />} />
              <Route path="records" element={<HealthRecords />} />
              <Route path="beds" element={<BedAvailability />} />
              <Route path="alerts" element={<EmergencyAlerts />} />
              <Route path="education" element={<HealthEducation />} />
            </Route>

            <Route path="/hospital" element={<ProtectedRoute role="hospital"><HospitalLayout /></ProtectedRoute>}>
              <Route index element={<HospitalDashboard />} />
              <Route path="patients" element={<PatientRecords />} />
              <Route path="beds" element={<BedManagement />} />
              <Route path="analytics" element={<DiseaseAnalytics />} />
              <Route path="drugs" element={<DrugInventory />} />
              <Route path="coding" element={<DualCodingEngine />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
