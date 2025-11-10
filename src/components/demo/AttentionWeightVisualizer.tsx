import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface AttentionWeight {
  word: string;
  weight: number;
}

interface AttentionWeightVisualizerProps {
  text: string;
  weights: AttentionWeight[];
}

export const AttentionWeightVisualizer = ({ text, weights }: AttentionWeightVisualizerProps) => {
  const words = text.split(/\s+/);
  
  const getWordWeight = (word: string): number => {
    const cleanWord = word.toLowerCase().replace(/[^\w]/g, '');
    const weightData = weights.find(w => w.word.toLowerCase() === cleanWord);
    return weightData?.weight || 0;
  };

  const getColorIntensity = (weight: number): string => {
    if (weight === 0) return "bg-background text-foreground";
    if (weight < 0.3) return "bg-yellow-100 text-yellow-900 dark:bg-yellow-900/20 dark:text-yellow-300";
    if (weight < 0.6) return "bg-orange-100 text-orange-900 dark:bg-orange-900/30 dark:text-orange-300";
    return "bg-destructive/20 text-destructive dark:bg-destructive/30 dark:text-destructive";
  };

  return (
    <div className="space-y-4">
      <div className="flex items-start gap-2 p-4 bg-muted/50 rounded-lg">
        <Info className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
        <div className="text-sm text-muted-foreground">
          <p className="font-medium mb-1">Self-Attention Mechanism Visualization</p>
          <p>Words are highlighted based on their importance in the model's decision. Higher attention (darker colors) indicates the model focused more on these words when making its safety assessment.</p>
        </div>
      </div>

      <div className="flex gap-2 items-center text-xs text-muted-foreground">
        <span>Weight Scale:</span>
        <div className="flex gap-1 items-center">
          <div className="w-8 h-4 bg-background border rounded" />
          <span>Low</span>
        </div>
        <div className="flex gap-1 items-center">
          <div className="w-8 h-4 bg-yellow-100 dark:bg-yellow-900/20 rounded" />
          <span>Medium</span>
        </div>
        <div className="flex gap-1 items-center">
          <div className="w-8 h-4 bg-orange-100 dark:bg-orange-900/30 rounded" />
          <span>High</span>
        </div>
        <div className="flex gap-1 items-center">
          <div className="w-8 h-4 bg-destructive/20 dark:bg-destructive/30 rounded" />
          <span>Critical</span>
        </div>
      </div>

      <Card className="p-6">
        <div className="flex flex-wrap gap-2">
          <TooltipProvider>
            {words.map((word, index) => {
              const weight = getWordWeight(word);
              return (
                <Tooltip key={index}>
                  <TooltipTrigger>
                    <span
                      className={`px-2 py-1 rounded transition-colors ${getColorIntensity(weight)}`}
                    >
                      {word}
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs">
                      Attention Weight: {(weight * 100).toFixed(1)}%
                    </p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </TooltipProvider>
        </div>
      </Card>

      {weights.length > 0 && (
        <Card className="p-4">
          <p className="text-sm font-medium mb-3">Top Attention Words:</p>
          <div className="flex flex-wrap gap-2">
            {weights
              .sort((a, b) => b.weight - a.weight)
              .slice(0, 10)
              .map((item, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {item.word} ({(item.weight * 100).toFixed(0)}%)
                </Badge>
              ))}
          </div>
        </Card>
      )}
    </div>
  );
};
