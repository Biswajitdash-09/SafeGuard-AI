import { Card } from "@/components/ui/card";
import { Shield, AlertTriangle, TrendingDown, Eye, Brain, Languages } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Real-time Detection",
    description: "AI analyzes content instantly, identifying cyberbullying, hate speech, and harmful language as it happens.",
    color: "text-blue-500",
  },
  {
    icon: AlertTriangle,
    title: "Multi-Category Classification",
    description: "Detects 16 different types of harmful content including insults, threats, profanity, and misinformation.",
    color: "text-amber-500",
  },
  {
    icon: TrendingDown,
    title: "Prevent Escalation",
    description: "Early detection helps prevent minor issues from escalating into serious cyberbullying incidents.",
    color: "text-green-500",
  },
  {
    icon: Eye,
    title: "Transparent Moderation",
    description: "Clear explanations for every decision with attention weight visualization showing what the AI focuses on.",
    color: "text-purple-500",
  },
  {
    icon: Brain,
    title: "Research-Driven Approach",
    description: "Built on peer-reviewed research achieving 94% accuracy using BiLSTM + Self-Attention + Custom Focal Loss.",
    color: "text-primary",
  },
  {
    icon: Languages,
    title: "Low-Resource Language Support",
    description: "Specialized support for Hindi/Hinglish code-mixed content, addressing critical gaps in multilingual moderation.",
    color: "text-teal-500",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-secondary/10">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Advanced Safety Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powered by cutting-edge AI research and human-centered design principles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                  <Icon className={`w-12 h-12 ${feature.color} mb-6`} />
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
