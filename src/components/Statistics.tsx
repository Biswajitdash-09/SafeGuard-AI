import { Card } from "@/components/ui/card";

const stats = [
  {
    value: "94%",
    label: "Research Accuracy",
    description: "Peer-reviewed model performance on cyberbullying detection"
  },
  {
    value: "0.973",
    label: "ROC-AUC Score",
    description: "Industry-leading discrimination capability"
  },
  {
    value: "16",
    label: "Content Categories",
    description: "Multi-class classification of harmful content"
  },
  {
    value: "Hindi/Hinglish",
    label: "Language Support",
    description: "Specialized low-resource language handling"
  }
];

export const Statistics = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Proven Impact & Performance
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Our platform delivers measurable results in creating safer online environments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={index}
                className="p-8 bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors backdrop-blur-sm"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 text-secondary-foreground">
                  {stat.value}
                </div>
                <div className="text-xl font-semibold mb-2 text-primary-foreground">
                  {stat.label}
                </div>
                <p className="text-sm text-primary-foreground/70">
                  {stat.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
