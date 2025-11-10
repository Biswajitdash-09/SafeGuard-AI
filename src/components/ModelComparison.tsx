import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const comparisonData = [
  {
    model: "LSTM",
    accuracy: "85%",
    precision: "0.83",
    recall: "0.82",
    f1Score: "0.82",
    rocAuc: "0.89",
  },
  {
    model: "BiLSTM",
    accuracy: "88%",
    precision: "0.86",
    recall: "0.85",
    f1Score: "0.85",
    rocAuc: "0.92",
  },
  {
    model: "BiLSTM + SAM + CFCLF",
    accuracy: "94%",
    precision: "0.93",
    recall: "0.92",
    f1Score: "0.93",
    rocAuc: "0.973",
    isOurs: true,
  },
];

export const ModelComparison = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Performance Metrics</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Model Comparison
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our approach significantly outperforms traditional architectures across all key metrics
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-4 font-semibold">Model</th>
                  <th className="text-center py-4 px-4 font-semibold">Accuracy</th>
                  <th className="text-center py-4 px-4 font-semibold">Precision</th>
                  <th className="text-center py-4 px-4 font-semibold">Recall</th>
                  <th className="text-center py-4 px-4 font-semibold">F1-Score</th>
                  <th className="text-center py-4 px-4 font-semibold">ROC-AUC</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={index}
                    className={`border-b ${row.isOurs ? 'bg-primary/5' : ''}`}
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        {row.isOurs && <CheckCircle className="w-5 h-5 text-primary" />}
                        <span className={row.isOurs ? 'font-semibold' : ''}>
                          {row.model}
                        </span>
                        {row.isOurs && (
                          <Badge variant="secondary" className="ml-2">Our Model</Badge>
                        )}
                      </div>
                    </td>
                    <td className={`text-center py-4 px-4 ${row.isOurs ? 'font-bold text-primary' : ''}`}>
                      {row.accuracy}
                    </td>
                    <td className={`text-center py-4 px-4 ${row.isOurs ? 'font-bold text-primary' : ''}`}>
                      {row.precision}
                    </td>
                    <td className={`text-center py-4 px-4 ${row.isOurs ? 'font-bold text-primary' : ''}`}>
                      {row.recall}
                    </td>
                    <td className={`text-center py-4 px-4 ${row.isOurs ? 'font-bold text-primary' : ''}`}>
                      {row.f1Score}
                    </td>
                    <td className={`text-center py-4 px-4 ${row.isOurs ? 'font-bold text-primary' : ''}`}>
                      {row.rocAuc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">+6%</div>
              <div className="text-sm text-muted-foreground">Accuracy Improvement</div>
              <p className="text-xs text-muted-foreground mt-2">vs. Standard BiLSTM</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">+5.8%</div>
              <div className="text-sm text-muted-foreground">ROC-AUC Improvement</div>
              <p className="text-xs text-muted-foreground mt-2">vs. Standard BiLSTM</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Class Imbalance Handling</div>
              <p className="text-xs text-muted-foreground mt-2">via Custom Focal Loss</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
