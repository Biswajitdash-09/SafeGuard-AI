import { ResearchHero } from "@/components/ResearchHero";
import { TeamSection } from "@/components/TeamSection";
import { MethodologySection } from "@/components/MethodologySection";
import { ResultsSection } from "@/components/ResultsSection";
import { AlgorithmVisualizer } from "@/components/AlgorithmVisualizer";
import { DownloadPaper } from "@/components/DownloadPaper";
import { ModelComparison } from "@/components/ModelComparison";
import { CitationExport } from "@/components/research/CitationExport";
import { PerformanceCharts } from "@/components/research/PerformanceCharts";

const Research = () => {
  return (
    <div className="min-h-screen bg-background">
      <ResearchHero />
      <DownloadPaper />
      <CitationExport />
      <MethodologySection />
      <AlgorithmVisualizer />
      <ModelComparison />
      <PerformanceCharts />
      <ResultsSection />
      <TeamSection />
    </div>
  );
};

export default Research;
