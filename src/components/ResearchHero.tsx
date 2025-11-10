import { Badge } from "@/components/ui/badge";
import { Award, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const ResearchHero = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container px-4 relative z-10">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => navigate('/')}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Badge variant="secondary" className="gap-2 px-4 py-2">
            <Award className="w-4 h-4" />
            Published Research
          </Badge>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight px-4">
            Human-Centric Machine Learning for Online Safety
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground px-4">
            A Step Against Cyber Bullying, Information Misutilization and Derogatory Contents
          </p>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 pt-8 px-4">
            <div className="text-center min-w-[100px]">
              <div className="text-2xl sm:text-3xl font-bold text-primary">94%</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Accuracy</div>
            </div>
            <div className="text-center min-w-[100px]">
              <div className="text-2xl sm:text-3xl font-bold text-primary">0.973</div>
              <div className="text-xs sm:text-sm text-muted-foreground">ROC-AUC Score</div>
            </div>
            <div className="text-center min-w-[100px]">
              <div className="text-2xl sm:text-3xl font-bold text-primary">16</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Content Classes</div>
            </div>
          </div>

          <div className="pt-8 border-t border-border max-w-3xl mx-auto">
            <h2 className="text-lg font-semibold mb-4">Abstract</h2>
            <p className="text-muted-foreground text-left leading-relaxed">
              This research addresses the critical challenge of cyberbullying detection in low-resource languages, 
              specifically Hindi and Hinglish (code-mixed Hindi-English). We propose a novel architecture combining 
              Bidirectional Long Short-Term Memory (BiLSTM) networks with a Self-Attention Mechanism (SAM) and a 
              Custom Focal Loss Function (CFCLF). Our approach achieves 94% accuracy and a 0.973 ROC-AUC score, 
              outperforming traditional LSTM and standard BiLSTM models by effectively handling class imbalance 
              and capturing contextual nuances in code-mixed text.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
