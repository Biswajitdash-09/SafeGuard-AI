import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SampleExamplesProps {
  onExampleClick: (text: string) => void;
}

const examples = [
  {
    label: "Safe - English",
    text: "I really enjoyed reading your blog post about machine learning. Great insights!",
    type: "safe",
  },
  {
    label: "Safe - Hinglish",
    text: "Aapka article bahut accha tha. Keep up the good work!",
    type: "safe",
  },
  {
    label: "Mild - English",
    text: "This is complete nonsense. You clearly don't know what you're talking about.",
    type: "mild",
  },
  {
    label: "Severe - English",
    text: "You're absolutely worthless and everyone knows it. Nobody wants you here.",
    type: "severe",
  },
  {
    label: "Code-Mixed Hindi",
    text: "Yaar, tumhara behavior theek nahi hai. Please be respectful to others.",
    type: "mild",
  },
];

export const SampleExamples = ({ onExampleClick }: SampleExamplesProps) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "safe":
        return "secondary";
      case "mild":
        return "outline";
      case "severe":
        return "destructive";
      default:
        return "outline";
    }
  };

  return (
    <Card className="p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium">Try Sample Examples:</h3>
        <Badge variant="outline" className="text-xs">
          Showcasing multilingual capability
        </Badge>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {examples.map((example, index) => (
          <Button
            key={index}
            variant="outline"
            className="h-auto min-h-[80px] py-3 px-4 text-left justify-start items-start flex-col gap-2"
            onClick={() => onExampleClick(example.text)}
          >
            <Badge variant={getTypeColor(example.type)} className="text-xs flex-shrink-0">
              {example.label}
            </Badge>
            <p className="text-xs text-muted-foreground line-clamp-2 break-words w-full">
              {example.text}
            </p>
          </Button>
        ))}
      </div>
    </Card>
  );
};
