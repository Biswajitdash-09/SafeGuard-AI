import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, FileText } from "lucide-react";

export const DownloadPaper = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container px-4">
        <Card className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-2">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4 flex-1">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Read the Full Research Paper</h3>
                <p className="text-muted-foreground">
                  Access our complete research paper with detailed methodology, experiments, 
                  and analysis of results.
                </p>
              </div>
            </div>
            <Button size="lg" asChild className="flex-shrink-0">
              <a href="/research/research-paper.pdf" download>
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};
