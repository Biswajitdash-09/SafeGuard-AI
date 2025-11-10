import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { EnhancedSafetyDemo } from "@/components/demo/EnhancedSafetyDemo";
import { EducationalContent } from "@/components/education/EducationalContent";
import { Statistics } from "@/components/Statistics";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Hero />
      <Features />
      <EducationalContent />
      <EnhancedSafetyDemo />
      <Statistics />
      <Footer />
    </div>
  );
};

export default Index;
