import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, Shield, Languages } from "lucide-react";

const keyFindings = [
  {
    icon: Target,
    title: "Superior Accuracy",
    value: "94%",
    description: "Achieved 94% accuracy in detecting cyberbullying, hate speech, and derogatory content across 16 different categories.",
  },
  {
    icon: TrendingUp,
    title: "Outstanding ROC-AUC",
    value: "0.973",
    description: "Industry-leading ROC-AUC score of 0.973 demonstrates exceptional discrimination capability between content classes.",
  },
  {
    icon: Shield,
    title: "Balanced Performance",
    value: "0.93 F1",
    description: "Maintains high F1-score of 0.93, ensuring balanced precision and recall across all content categories.",
  },
  {
    icon: Languages,
    title: "Low-Resource Languages",
    value: "Hindi/Hinglish",
    description: "Successfully handles code-mixed Hindi-English content, addressing critical gap in multilingual content moderation.",
  },
];

export const ResultsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Research Outcomes</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Key Findings & Results
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our research demonstrates significant improvements in cyberbullying detection, 
              particularly for low-resource languages
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {keyFindings.map((finding, index) => {
              const Icon = finding.icon;
              return (
                <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-semibold">{finding.title}</h3>
                        <Badge variant="secondary">{finding.value}</Badge>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {finding.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
            <h3 className="text-2xl font-bold mb-6 text-center">Research Impact</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-4">Technical Contributions</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span>Novel combination of BiLSTM, Self-Attention, and Custom Focal Loss</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span>Domain-adapted embeddings for Hindi/Hinglish code-mixed text</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span>Effective handling of severe class imbalance in cyberbullying data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span>Data augmentation techniques for low-resource languages</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4">Practical Applications</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span>Real-time content moderation for social media platforms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span>Automated detection of harmful content in multiple languages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span>Transparent and explainable AI decisions via attention weights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span>Scalable solution for protecting users in low-resource language communities</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
