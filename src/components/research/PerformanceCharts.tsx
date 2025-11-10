import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Area, AreaChart } from "recharts";

const modelComparisonData = [
  { model: 'LSTM', Accuracy: 0.85, Precision: 0.83, Recall: 0.82, F1: 0.82, 'ROC-AUC': 0.88 },
  { model: 'BiLSTM', Accuracy: 0.89, Precision: 0.87, Recall: 0.86, F1: 0.87, 'ROC-AUC': 0.92 },
  { model: 'Our Model', Accuracy: 0.94, Precision: 0.92, Recall: 0.91, F1: 0.91, 'ROC-AUC': 0.973 },
];

const rocData = [
  { fpr: 0, tpr: 0, model: 'LSTM' },
  { fpr: 0.1, tpr: 0.65, model: 'LSTM' },
  { fpr: 0.2, tpr: 0.78, model: 'LSTM' },
  { fpr: 0.3, tpr: 0.85, model: 'LSTM' },
  { fpr: 0.5, tpr: 0.91, model: 'LSTM' },
  { fpr: 1, tpr: 1, model: 'LSTM' },
];

const rocDataBiLSTM = [
  { fpr: 0, tpr: 0 },
  { fpr: 0.05, tpr: 0.72 },
  { fpr: 0.1, tpr: 0.85 },
  { fpr: 0.15, tpr: 0.91 },
  { fpr: 0.3, tpr: 0.96 },
  { fpr: 1, tpr: 1 },
];

const rocDataOurs = [
  { fpr: 0, tpr: 0 },
  { fpr: 0.02, tpr: 0.80 },
  { fpr: 0.05, tpr: 0.91 },
  { fpr: 0.08, tpr: 0.96 },
  { fpr: 0.15, tpr: 0.98 },
  { fpr: 1, tpr: 1 },
];

const trainingProgressData = [
  { epoch: 1, trainLoss: 1.8, valLoss: 1.6, accuracy: 0.65 },
  { epoch: 5, trainLoss: 1.2, valLoss: 1.1, accuracy: 0.75 },
  { epoch: 10, trainLoss: 0.8, valLoss: 0.85, accuracy: 0.82 },
  { epoch: 15, trainLoss: 0.5, valLoss: 0.6, accuracy: 0.88 },
  { epoch: 20, trainLoss: 0.35, valLoss: 0.45, accuracy: 0.91 },
  { epoch: 25, trainLoss: 0.25, valLoss: 0.38, accuracy: 0.93 },
  { epoch: 30, trainLoss: 0.18, valLoss: 0.35, accuracy: 0.94 },
  { epoch: 35, trainLoss: 0.15, valLoss: 0.34, accuracy: 0.94 },
];

const categoryPerformanceData = [
  { category: 'Cyberbullying', score: 95 },
  { category: 'Hate Speech', score: 93 },
  { category: 'Profanity', score: 96 },
  { category: 'Threats', score: 92 },
  { category: 'Misinformation', score: 90 },
  { category: 'Derogatory', score: 94 },
  { category: 'Sexual Harassment', score: 91 },
  { category: 'Identity Attack', score: 93 },
];

const languagePerformanceData = [
  { language: 'English', accuracy: 95, precision: 94, recall: 93 },
  { language: 'Hindi', accuracy: 93, precision: 92, recall: 91 },
  { language: 'Hinglish', accuracy: 94, precision: 91, recall: 93 },
];

export const PerformanceCharts = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Interactive Performance Analysis
            </h2>
            <p className="text-muted-foreground">
              Explore our model's performance through comprehensive visualizations
            </p>
          </div>

          <Tabs defaultValue="comparison" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
              <TabsTrigger value="comparison">Model Comparison</TabsTrigger>
              <TabsTrigger value="roc">ROC Analysis</TabsTrigger>
              <TabsTrigger value="training">Training Progress</TabsTrigger>
              <TabsTrigger value="categories">Categories</TabsTrigger>
              <TabsTrigger value="languages">Languages</TabsTrigger>
            </TabsList>

            <TabsContent value="comparison" className="mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Model Performance Comparison</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Comparing LSTM, BiLSTM, and our BiLSTM+SAM+CFCLF model across key metrics
                </p>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={modelComparisonData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="model" />
                    <YAxis domain={[0, 1]} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Accuracy" fill="hsl(var(--primary))" />
                    <Bar dataKey="Precision" fill="hsl(var(--secondary))" />
                    <Bar dataKey="Recall" fill="hsl(var(--accent))" />
                    <Bar dataKey="F1" fill="hsl(var(--muted))" />
                    <Bar dataKey="ROC-AUC" fill="hsl(var(--chart-1))" />
                  </BarChart>
                </ResponsiveContainer>
              </Card>
            </TabsContent>

            <TabsContent value="roc" className="mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">ROC Curve Analysis</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Receiver Operating Characteristic curves showing True Positive Rate vs False Positive Rate
                </p>
                <ResponsiveContainer width="100%" height={400}>
                  <AreaChart>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="fpr" label={{ value: 'False Positive Rate', position: 'insideBottom', offset: -5 }} />
                    <YAxis label={{ value: 'True Positive Rate', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" data={rocData} dataKey="tpr" stroke="hsl(var(--muted))" fill="hsl(var(--muted))" fillOpacity={0.3} name="LSTM (AUC=0.88)" />
                    <Area type="monotone" data={rocDataBiLSTM} dataKey="tpr" stroke="hsl(var(--secondary))" fill="hsl(var(--secondary))" fillOpacity={0.3} name="BiLSTM (AUC=0.92)" />
                    <Area type="monotone" data={rocDataOurs} dataKey="tpr" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.4} name="Our Model (AUC=0.973)" />
                  </AreaChart>
                </ResponsiveContainer>
                <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>ROC-AUC Score of 0.973</strong> indicates excellent model discrimination. 
                    The closer to 1.0, the better the model distinguishes between harmful and safe content.
                  </p>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="training" className="mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Training Progress Over Epochs</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Model convergence showing loss reduction and accuracy improvement during training
                </p>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={trainingProgressData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="epoch" label={{ value: 'Epoch', position: 'insideBottom', offset: -5 }} />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" domain={[0, 1]} />
                    <Tooltip />
                    <Legend />
                    <Line yAxisId="left" type="monotone" dataKey="trainLoss" stroke="hsl(var(--destructive))" strokeWidth={2} name="Training Loss" />
                    <Line yAxisId="left" type="monotone" dataKey="valLoss" stroke="hsl(var(--chart-2))" strokeWidth={2} name="Validation Loss" />
                    <Line yAxisId="right" type="monotone" dataKey="accuracy" stroke="hsl(var(--primary))" strokeWidth={2} name="Accuracy" />
                  </LineChart>
                </ResponsiveContainer>
                <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Early stopping at epoch 35 prevented overfitting while achieving optimal performance.
                  </p>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="categories" className="mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Per-Category Performance</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Detection accuracy across different harmful content categories
                </p>
                <ResponsiveContainer width="100%" height={400}>
                  <RadarChart data={categoryPerformanceData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="category" />
                    <PolarRadiusAxis domain={[0, 100]} />
                    <Radar name="Accuracy %" dataKey="score" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.6} />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
                <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {categoryPerformanceData.map((cat) => (
                    <div key={cat.category} className="p-3 bg-muted/50 rounded-lg">
                      <p className="text-sm font-medium">{cat.category}</p>
                      <p className="text-2xl font-bold text-primary">{cat.score}%</p>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="languages" className="mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Multilingual Performance</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Model performance across English, Hindi, and Hinglish (code-mixed) content
                </p>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={languagePerformanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="language" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="accuracy" fill="hsl(var(--primary))" name="Accuracy %" />
                    <Bar dataKey="precision" fill="hsl(var(--secondary))" name="Precision %" />
                    <Bar dataKey="recall" fill="hsl(var(--accent))" name="Recall %" />
                  </BarChart>
                </ResponsiveContainer>
                <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Key Achievement:</strong> Our model maintains high performance (94% accuracy) 
                    even on code-mixed Hinglish content, which is typically challenging for traditional models.
                  </p>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};
