import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Check, Download, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const citations = {
  bibtex: `@article{pati2024human,
  title={Human-Centric Machine Learning for Online Safety: A Step Against Cyber Bullying, Information Misutilization and Derogatory Contents},
  author={Pati, Ankita and Kar, Tanaya T. and Das, Balaram and Dash, Biswajit},
  year={2024},
  journal={Research Paper},
  note={BiLSTM + Self-Attention + Custom Focal Loss Architecture}
}`,
  apa: `Pati, A., Kar, T. T., Das, B., & Dash, B. (2024). Human-Centric Machine Learning for Online Safety: A Step Against Cyber Bullying, Information Misutilization and Derogatory Contents. Research Paper.`,
  chicago: `Pati, Ankita, Tanaya T. Kar, Balaram Das, and Biswajit Dash. "Human-Centric Machine Learning for Online Safety: A Step Against Cyber Bullying, Information Misutilization and Derogatory Contents." Research Paper, 2024.`,
  mla: `Pati, Ankita, et al. "Human-Centric Machine Learning for Online Safety: A Step Against Cyber Bullying, Information Misutilization and Derogatory Contents." Research Paper, 2024.`,
  ieee: `A. Pati, T. T. Kar, B. Das, and B. Dash, "Human-Centric Machine Learning for Online Safety: A Step Against Cyber Bullying, Information Misutilization and Derogatory Contents," Research Paper, 2024.`,
  plain: `Human-Centric Machine Learning for Online Safety: A Step Against Cyber Bullying, Information Misutilization and Derogatory Contents
Authors: Ankita Pati, Tanaya T. Kar, Balaram Das, Biswajit Dash
Year: 2024
Model: BiLSTM + Self-Attention + Custom Focal Loss
Accuracy: 94% | ROC-AUC: 0.973`,
};

export const CitationExport = () => {
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);
  const { toast } = useToast();

  const copyToClipboard = async (text: string, format: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedFormat(format);
      toast({
        title: "Copied to clipboard!",
        description: `${format.toUpperCase()} citation copied successfully.`,
      });
      setTimeout(() => setCopiedFormat(null), 2000);
    } catch (error) {
      toast({
        title: "Copy failed",
        description: "Please try again or copy manually.",
        variant: "destructive",
      });
    }
  };

  const downloadBibTeX = () => {
    const blob = new Blob([citations.bibtex], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'safeguard-ai-citation.bib';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Downloaded!",
      description: "BibTeX file downloaded successfully.",
    });
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cite This Research
            </h2>
            <p className="text-muted-foreground">
              Use our research in your work? Cite us in your preferred format.
            </p>
          </div>

          <Card className="p-6">
            <Tabs defaultValue="bibtex" className="w-full">
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
                <TabsTrigger value="bibtex">BibTeX</TabsTrigger>
                <TabsTrigger value="apa">APA</TabsTrigger>
                <TabsTrigger value="chicago">Chicago</TabsTrigger>
                <TabsTrigger value="mla">MLA</TabsTrigger>
                <TabsTrigger value="ieee">IEEE</TabsTrigger>
                <TabsTrigger value="plain">Plain</TabsTrigger>
              </TabsList>

              {Object.entries(citations).map(([format, citation]) => (
                <TabsContent key={format} value={format} className="mt-4">
                  <div className="space-y-4">
                    <div className="relative">
                      <pre className="p-4 bg-muted rounded-lg text-sm overflow-x-auto">
                        <code className="text-foreground">{citation}</code>
                      </pre>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        onClick={() => copyToClipboard(citation, format)}
                        className="flex-1"
                        variant="outline"
                      >
                        {copiedFormat === format ? (
                          <>
                            <Check className="w-4 h-4 mr-2" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 mr-2" />
                            Copy to Clipboard
                          </>
                        )}
                      </Button>
                      {format === 'bibtex' && (
                        <Button
                          onClick={downloadBibTeX}
                          variant="secondary"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download .bib
                        </Button>
                      )}
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>

            <div className="mt-6 p-4 bg-primary/10 rounded-lg">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-medium mb-1">Research Highlights</p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• 94% accuracy in multilingual harmful content detection</li>
                    <li>• Novel BiLSTM + Self-Attention + Custom Focal Loss architecture</li>
                    <li>• Specialized for Hindi/Hinglish code-mixed content</li>
                    <li>• 0.973 ROC-AUC score - state-of-the-art performance</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
