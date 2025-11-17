import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Upload, Download, Loader2, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface BatchResult {
  text: string;
  result: any;
  error?: string;
}

export const BatchAnalysis = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState<BatchResult[]>([]);
  const { toast } = useToast();

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.name.endsWith('.csv') && !file.name.endsWith('.txt')) {
      toast({
        title: "Invalid file",
        description: "Please upload a CSV or TXT file",
        variant: "destructive",
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = async (event) => {
      const content = event.target?.result as string;
      const lines = content.split('\n').filter(line => line.trim());
      
      if (lines.length === 0) {
        toast({
          title: "Empty file",
          description: "The file contains no content",
          variant: "destructive",
        });
        return;
      }

      if (lines.length > 50) {
        toast({
          title: "Too many entries",
          description: "Maximum 50 texts per batch. Please split your file.",
          variant: "destructive",
        });
        return;
      }

      await processBatch(lines);
    };

    reader.readAsText(file);
  };

  const processBatch = async (texts: string[]) => {
    setIsProcessing(true);
    setProgress(0);
    const batchResults: BatchResult[] = [];

    for (let i = 0; i < texts.length; i++) {
      const text = texts[i].trim();
      if (!text) continue;

      try {
        // Add small delay to avoid rate limiting
        if (i > 0) await new Promise(resolve => setTimeout(resolve, 500));

        const { data, error } = await supabase.functions.invoke('analyze-content', {
          body: { text }
        });

        if (error) {
          batchResults.push({
            text,
            result: null,
            error: error.message,
          });
        } else {
          batchResults.push({
            text,
            result: data,
          });
        }
      } catch (err: any) {
        batchResults.push({
          text,
          result: null,
          error: err.message || 'Unknown error',
        });
      }

      setProgress(((i + 1) / texts.length) * 100);
    }

    setResults(batchResults);
    setIsProcessing(false);

    toast({
      title: "Batch processing complete",
      description: `Processed ${batchResults.length} texts`,
    });
  };

  const downloadResults = () => {
    const csv = [
      ['Text', 'Safe', 'Overall Severity', 'Categories Detected', 'Language', 'Processing Time', 'Error'],
      ...results.map(r => [
        `"${r.text.replace(/"/g, '""')}"`,
        r.result?.safe ?? 'N/A',
        r.result?.overallSeverity ?? 'N/A',
        r.result?.categories?.length ?? 0,
        r.result?.detectedLanguage?.primary ?? 'N/A',
        r.result?.processingTime ?? 'N/A',
        r.error ?? '',
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `batch-analysis-${Date.now()}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);

    toast({
      title: "Download started",
      description: "Results exported as CSV",
    });
  };

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Batch Analysis</h3>
          <p className="text-sm text-muted-foreground">
            Upload a CSV or TXT file with one text per line (max 50 entries)
          </p>
        </div>

        <div className="flex gap-4">
          <label className="flex-1">
            <input
              type="file"
              accept=".csv,.txt"
              onChange={handleFileUpload}
              disabled={isProcessing}
              className="hidden"
            />
            <Button
              variant="outline"
              className="w-full"
              disabled={isProcessing}
              asChild
            >
              <span>
                <Upload className="w-4 h-4 mr-2" />
                Upload File
              </span>
            </Button>
          </label>

          {results.length > 0 && (
            <Button
              variant="secondary"
              onClick={downloadResults}
              disabled={isProcessing}
            >
              <Download className="w-4 h-4 mr-2" />
              Download Results
            </Button>
          )}
        </div>

        {isProcessing && (
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span className="text-sm">Processing batch... {Math.round(progress)}%</span>
            </div>
            <Progress value={progress} />
          </div>
        )}

        {results.length > 0 && !isProcessing && (
          <div className="space-y-2">
            <h4 className="font-medium">Results ({results.length} items)</h4>
            <div className="max-h-96 overflow-y-auto space-y-2">
              {results.map((result, index) => (
                <div
                  key={index}
                  className="p-3 border rounded-lg text-sm"
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="flex-1 truncate">{result.text}</p>
                    {result.error ? (
                      <span className="flex items-center gap-1 text-destructive text-xs">
                        <AlertCircle className="w-3 h-3" />
                        Error
                      </span>
                    ) : (
                      <span className={`text-xs ${result.result?.safe ? 'text-green-600' : 'text-destructive'}`}>
                        {result.result?.safe ? 'Safe' : 'Harmful'}
                      </span>
                    )}
                  </div>
                  {result.error && (
                    <p className="text-xs text-muted-foreground mt-1">{result.error}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};
