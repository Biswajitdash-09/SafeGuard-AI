import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface AnalysisResult {
  safe: boolean;
  categories: string[];
  severity: "none" | "low" | "medium" | "high";
  explanation: string;
  suggestions?: string;
}

export const SafetyDemo = () => {
  const [text, setText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const { toast } = useToast();

  const analyzeContent = async () => {
    if (!text.trim()) {
      toast({
        title: "Empty input",
        description: "Please enter some text to analyze.",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    setResult(null);

    try {
      const { data, error } = await supabase.functions.invoke('analyze-content', {
        body: { text }
      });

      if (error) throw error;

      setResult(data);
    } catch (error: any) {
      console.error('Analysis error:', error);
      toast({
        title: "Analysis failed",
        description: error.message || "Failed to analyze content. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "text-destructive";
      case "medium": return "text-yellow-600";
      case "low": return "text-blue-600";
      default: return "text-secondary";
    }
  };

  return (
    <section id="demo" className="py-24 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Try Our AI Safety Analyzer
            </h2>
            <p className="text-lg text-muted-foreground">
              Enter any text below to see our AI analyze it for harmful content in real-time.
            </p>
          </div>

          <Card className="p-8 space-y-6">
            <div>
              <label className="text-sm font-medium mb-2 block">
                Enter text to analyze
              </label>
              <Textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type or paste text here..."
                className="min-h-[150px] resize-none"
                disabled={isAnalyzing}
              />
            </div>

            <Button 
              onClick={analyzeContent}
              disabled={isAnalyzing || !text.trim()}
              className="w-full"
              size="lg"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Analyzing...
                </>
              ) : (
                "Analyze Content"
              )}
            </Button>

            {result && (
              <Card className="p-6 border-2">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {result.safe ? (
                        <CheckCircle className="w-6 h-6 text-secondary" />
                      ) : (
                        <AlertCircle className="w-6 h-6 text-destructive" />
                      )}
                      <h3 className="text-xl font-semibold">
                        {result.safe ? "Content appears safe" : "Potentially harmful content detected"}
                      </h3>
                    </div>
                    <Badge variant={result.safe ? "secondary" : "destructive"}>
                      {result.severity.toUpperCase()}
                    </Badge>
                  </div>

                  {result.categories.length > 0 && (
                    <div>
                      <p className="text-sm font-medium mb-2">Detected Issues:</p>
                      <div className="flex flex-wrap gap-2">
                        {result.categories.map((category, index) => (
                          <Badge key={index} variant="outline">
                            {category}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <p className="text-sm font-medium mb-2">Analysis:</p>
                    <p className="text-muted-foreground">{result.explanation}</p>
                  </div>

                  {result.suggestions && (
                    <div>
                      <p className="text-sm font-medium mb-2">Suggestions:</p>
                      <p className="text-muted-foreground">{result.suggestions}</p>
                    </div>
                  )}
                </div>
              </Card>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};
