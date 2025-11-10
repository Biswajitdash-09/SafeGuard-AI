import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { EnhancedSafetyDemo } from "@/components/demo/EnhancedSafetyDemo";
import { EducationalContent } from "@/components/education/EducationalContent";
import { Statistics } from "@/components/Statistics";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <EducationalContent />
      <EnhancedSafetyDemo />
      <Statistics />
    </div>
  );
};

export default Index;
