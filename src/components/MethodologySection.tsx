import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Zap, Target } from "lucide-react";

const methodologySteps = [
  {
    icon: Brain,
    title: "BiLSTM Architecture",
    description: "Bidirectional LSTM processes text in both forward and backward directions, capturing comprehensive contextual information from Hindi/Hinglish text.",
    highlight: "Contextual Understanding",
  },
  {
    icon: Zap,
    title: "Self-Attention Mechanism",
    description: "Dynamically weights important words and phrases, focusing on critical features that indicate cyberbullying, hate speech, or derogatory content.",
    highlight: "Attention Weights",
  },
  {
    icon: Target,
    title: "Custom Focal Loss",
    description: "Addresses class imbalance by focusing on hard-to-classify examples, improving detection of rare but critical content categories.",
    highlight: "98% Improvement",
  },
];

export const MethodologySection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Methodology</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Research-Driven Approach
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our novel architecture combines three powerful techniques to achieve 
              state-of-the-art performance in cyberbullying detection
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {methodologySteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="p-8 hover:shadow-xl transition-all">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="mb-4">{step.highlight}</Badge>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </Card>
              );
            })}
          </div>

          <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-2">
            <h3 className="text-2xl font-bold mb-6 text-center">Architecture Flow</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
              <div className="flex-1 p-4">
                <div className="w-16 h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center mx-auto mb-3 font-bold text-primary">
                  1
                </div>
                <p className="font-semibold mb-2">Input Processing</p>
                <p className="text-sm text-muted-foreground">Hindi/Hinglish Text Preprocessing</p>
              </div>
              <div className="text-muted-foreground">→</div>
              <div className="flex-1 p-4">
                <div className="w-16 h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center mx-auto mb-3 font-bold text-primary">
                  2
                </div>
                <p className="font-semibold mb-2">BiLSTM Layer</p>
                <p className="text-sm text-muted-foreground">Bidirectional Context Extraction</p>
              </div>
              <div className="text-muted-foreground">→</div>
              <div className="flex-1 p-4">
                <div className="w-16 h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center mx-auto mb-3 font-bold text-primary">
                  3
                </div>
                <p className="font-semibold mb-2">Self-Attention</p>
                <p className="text-sm text-muted-foreground">Feature Weighting</p>
              </div>
              <div className="text-muted-foreground">→</div>
              <div className="flex-1 p-4">
                <div className="w-16 h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center mx-auto mb-3 font-bold text-primary">
                  4
                </div>
                <p className="font-semibold mb-2">Classification</p>
                <p className="text-sm text-muted-foreground">16-Class Output with Focal Loss</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
