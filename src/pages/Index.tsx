import Header from "@/components/Header";
import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import SolutionsSection from "@/components/SolutionsSection";
import FeaturesSection from "@/components/FeaturesSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ResourcesSection from "@/components/ResourcesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "ObsFly - AI-Powered Full-Stack Observability Platform";
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <SolutionsSection />
        <FeaturesSection />
        <IntegrationsSection />
        <TestimonialsSection />
        <ResourcesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
