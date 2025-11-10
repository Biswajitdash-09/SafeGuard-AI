import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AlertCircle, CheckCircle, AlertTriangle } from "lucide-react";

interface Category {
  name: string;
  confidence: number;
  severity: "low" | "medium" | "high";
}

interface CategoryBreakdownProps {
  categories: Category[];
}

export const CategoryBreakdown = ({ categories }: CategoryBreakdownProps) => {
  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "high":
        return <AlertCircle className="w-4 h-4 text-destructive" />;
      case "medium":
        return <AlertTriangle className="w-4 h-4 text-yellow-600" />;
      case "low":
        return <CheckCircle className="w-4 h-4 text-blue-600" />;
      default:
        return <CheckCircle className="w-4 h-4 text-secondary" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "text-destructive";
      case "medium":
        return "text-yellow-600";
      case "low":
        return "text-blue-600";
      default:
        return "text-secondary";
    }
  };

  if (categories.length === 0) {
    return (
      <Card className="p-6">
        <div className="flex items-center gap-3 text-secondary">
          <CheckCircle className="w-6 h-6" />
          <div>
            <p className="font-medium">No harmful content detected</p>
            <p className="text-sm text-muted-foreground">All 16 safety categories passed</p>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <div className="p-4 bg-muted/50 rounded-lg">
        <p className="text-sm text-muted-foreground">
          Detected {categories.length} potential issue{categories.length > 1 ? 's' : ''} across our 16-class safety taxonomy
        </p>
      </div>

      <div className="space-y-3">
        {categories.map((category, index) => (
          <Card key={index} className="p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                {getSeverityIcon(category.severity)}
                <div>
                  <p className="font-medium">{category.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge 
                      variant={category.severity === "high" ? "destructive" : "outline"}
                      className="text-xs"
                    >
                      {category.severity.toUpperCase()}
                    </Badge>
                    <span className={`text-sm font-medium ${getSeverityColor(category.severity)}`}>
                      {Math.round(category.confidence * 100)}% confidence
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <Progress 
              value={category.confidence * 100} 
              className="h-2"
            />
          </Card>
        ))}
      </div>

      <div className="p-4 bg-muted/50 rounded-lg text-sm text-muted-foreground">
        <p className="font-medium mb-1">About our 16-class taxonomy:</p>
        <p>Our model detects: Cyberbullying, Hate Speech, Profanity, Threats, Misinformation, Derogatory Content, Sexual Harassment, Identity Attacks, Toxic Language, Insults, Obscene Content, Severe Toxicity, Religious Hate, Racial Hate, Gender-based Harassment, and Age-based Discrimination.</p>
      </div>
    </div>
  );
};
