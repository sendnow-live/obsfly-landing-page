import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PricingPage from './components/ui/PricingPage';
import Product from './pages/Product';
import Solutions from './pages/Solutions';
import Docs from './pages/Docs';
import Login from './pages/Login';
import GetStarted from './pages/GetStarted';


// Product Pages
import Infrastructure from "./pages/products/Infrastructure";
import APM from "./pages/products/APM";
import Logs from './pages/products/Logs';
import DatabaseMonitoring from './pages/products/Database';
import NetworkFlow from './pages/products/NetworkFlow';
import ProtocolVisibility from './pages/products/ProtocolVisibility';
import CNI from './pages/products/CNI';
import LoadBalancer from './pages/products/LoadBalancer';
import ClusterMesh from './pages/products/ClusterMesh';
import Bandwidth from './pages/products/Bandwidth';
import KubeProxy from './pages/products/KubeProxy';
import BGP from './pages/products/BGP';
import Egress from './pages/products/Egress';
import ServiceMesh from './pages/products/ServiceMesh';
import HostFirewall from './pages/products/HostFirewall';
import Ingress from './pages/products/Ingress';
import Encryption from './pages/products/Encryption';
import NetworkPolicy from './pages/products/NetworkPolicy';
import RuntimeSecurity from './pages/products/RuntimeSecurity';
import BlogSection from "./components/ui/Blogs";
import BlogDetail from "./components/ui/BlogDetail";




const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/product" element={<Product />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/get-started" element={<GetStarted />} />
           <Route path="/blogs" element={<BlogSection />} />
           <Route path="/blog/:id" element={<BlogDetail />} />

          {/* Product Pages */}
          <Route path="/products/infrastructure" element={<Infrastructure />} />
          <Route path="/products/apm" element={<APM />} />
          <Route path="/products/logs" element={<Logs />} />
          <Route path="/products/database" element={<DatabaseMonitoring />} />
          <Route path="/products/network-flow" element={<NetworkFlow />} />
          <Route path="/products/network-protocol" element={<ProtocolVisibility />} />
          <Route path="/products/cni" element={<CNI />} />
          <Route path="/products/load-balancer" element={<LoadBalancer />} />
          <Route path="/products/cluster-mesh" element={<ClusterMesh />} />
          <Route path="/products/bandwidth" element={<Bandwidth />} />
          <Route path="/products/kube-proxy" element={<KubeProxy />} />
          <Route path="/products/bgp" element={<BGP />} />
          <Route path="/products/egress" element={<Egress />} />
          <Route path="/products/service-mesh" element={<ServiceMesh />} />
          <Route path="/products/host-firewall" element={<HostFirewall />} />
          <Route path="/products/ingress" element={<Ingress />} />
          <Route path="/products/encryption" element={<Encryption />} />
          <Route path="/products/network-policy" element={<NetworkPolicy />} />
          <Route path="/products/runtime-security" element={<RuntimeSecurity />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
