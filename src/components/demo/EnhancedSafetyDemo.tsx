import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, CheckCircle, AlertCircle, Globe, Clock, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { AttentionWeightVisualizer } from "./AttentionWeightVisualizer";
import { CategoryBreakdown } from "./CategoryBreakdown";
import { SampleExamples } from "./SampleExamples";

interface AnalysisResult {
  safe: boolean;
  categories: Array<{
    name: string;
    confidence: number;
    severity: "low" | "medium" | "high";
  }>;
  overallSeverity: "none" | "low" | "medium" | "high";
  explanation: string;
  suggestions?: string;
  detectedLanguage?: {
    primary: string;
    confidence: number;
    isCodeMixed: boolean;
  };
  processingTime?: number;
  attentionWeights?: Array<{
    word: string;
    weight: number;
  }>;
  modelInfo?: {
    name: string;
    version: string;
    accuracy: string;
    rocAuc: string;
  };
}

export const EnhancedSafetyDemo = () => {
  const [text, setText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const { toast } = useToast();

  const MAX_CHARS = 5000;
  const charCount = text.length;
  const isOverLimit = charCount > MAX_CHARS;

  const analyzeContent = async () => {
    if (!text.trim()) {
      toast({
        title: "Empty input",
        description: "Please enter some text to analyze.",
        variant: "destructive",
      });
      return;
    }

    if (isOverLimit) {
      toast({
        title: "Text too long",
        description: `Please limit your text to ${MAX_CHARS} characters.`,
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

      if (error) {
        // Handle specific error types
        if (error.message?.includes('429')) {
          throw new Error('Rate limit exceeded. Please wait a moment and try again.');
        }
        if (error.message?.includes('402')) {
          throw new Error('Service temporarily unavailable. Please try again later.');
        }
        throw error;
      }

      setResult(data);
      toast({
        title: "Analysis complete",
        description: data.safe ? "No harmful content detected" : "Potentially harmful content found",
      });
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

  const handleExampleClick = (exampleText: string) => {
    setText(exampleText);
    setResult(null);
  };

  return (
    <section id="demo" className="py-24 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Try Our AI Safety Analyzer
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Enter any text below to see our research-backed AI analyze it for harmful content in real-time.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Badge variant="secondary" className="text-sm">
                <Zap className="w-3 h-3 mr-1" />
                94% Accuracy
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Globe className="w-3 h-3 mr-1" />
                Hindi/Hinglish Support
              </Badge>
              <Badge variant="secondary" className="text-sm">
                BiLSTM + SAM + CFCLF
              </Badge>
            </div>
          </div>

          <SampleExamples onExampleClick={handleExampleClick} />

          <Card className="p-8 space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium">
                  Enter text to analyze
                </label>
                <span className={`text-xs ${isOverLimit ? 'text-destructive' : 'text-muted-foreground'}`}>
                  {charCount} / {MAX_CHARS}
                </span>
              </div>
              <Textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type or paste text here... (English, Hindi, or Hinglish)"
                className={`min-h-[150px] resize-none ${isOverLimit ? 'border-destructive' : ''}`}
                disabled={isAnalyzing}
              />
              {isOverLimit && (
                <p className="text-xs text-destructive mt-1">
                  Text exceeds maximum length
                </p>
              )}
            </div>

            <Button 
              onClick={analyzeContent}
              disabled={isAnalyzing || !text.trim() || isOverLimit}
              className="w-full"
              size="lg"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Analyzing with BiLSTM + SAM...
                </>
              ) : (
                "Analyze Content"
              )}
            </Button>

            {result && (
              <Card className="p-6 border-2">
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="attention">Attention</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-4">
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
                        {result.overallSeverity?.toUpperCase() || "UNKNOWN"}
                      </Badge>
                    </div>

                    {result.detectedLanguage && (
                      <div className="flex items-center gap-2 text-sm">
                        <Globe className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Language:</span>
                        <Badge variant="outline">
                          {result.detectedLanguage.primary}
                          {result.detectedLanguage.isCodeMixed && " (Code-Mixed)"}
                        </Badge>
                        <span className="text-muted-foreground">
                          {Math.round(result.detectedLanguage.confidence * 100)}% confidence
                        </span>
                      </div>
                    )}

                    {result.processingTime && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        Processed in {result.processingTime}ms
                      </div>
                    )}

                    {result.modelInfo && (
                      <div className="p-3 bg-muted/50 rounded-lg">
                        <p className="text-sm font-medium mb-1">Model: {result.modelInfo.name}</p>
                        <div className="flex gap-4 text-xs text-muted-foreground">
                          <span>Accuracy: {result.modelInfo.accuracy}</span>
                          <span>ROC-AUC: {result.modelInfo.rocAuc}</span>
                          <span>Version: {result.modelInfo.version}</span>
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
                  </TabsContent>

                  <TabsContent value="details">
                    <CategoryBreakdown categories={result.categories} />
                  </TabsContent>

                  <TabsContent value="attention">
                    <AttentionWeightVisualizer 
                      text={text}
                      weights={result.attentionWeights || []}
                    />
                  </TabsContent>
                </Tabs>
              </Card>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};
