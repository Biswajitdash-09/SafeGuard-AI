import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const AlgorithmVisualizer = () => {
  return (
    <section className="py-24 bg-secondary/5">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Algorithm Deep Dive
            </h2>
            <p className="text-lg text-muted-foreground">
              Understanding the technical innovations behind our approach
            </p>
          </div>

          <Tabs defaultValue="focal-loss" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="focal-loss">Custom Focal Loss</TabsTrigger>
              <TabsTrigger value="attention">Self-Attention Mechanism</TabsTrigger>
            </TabsList>

            <TabsContent value="focal-loss">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">Custom Focal Loss Function</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3">The Challenge: Class Imbalance</h4>
                    <p className="text-muted-foreground mb-4">
                      Traditional cross-entropy loss treats all examples equally, leading to poor 
                      performance on rare but critical content categories. Our custom focal loss 
                      addresses this by focusing learning on hard-to-classify examples.
                    </p>
                  </div>

                  <div className="bg-muted/50 p-6 rounded-lg font-mono text-sm">
                    <p className="text-center mb-2 text-muted-foreground">Mathematical Formulation</p>
                    <p className="text-center">FL(p<sub>t</sub>) = -α<sub>t</sub>(1 - p<sub>t</sub>)<sup>γ</sup> log(p<sub>t</sub>)</p>
                    <div className="mt-4 space-y-2 text-xs">
                      <p>where:</p>
                      <p>• p<sub>t</sub> = predicted probability for the true class</p>
                      <p>• α<sub>t</sub> = balancing factor for class weights</p>
                      <p>• γ = focusing parameter (typically 2)</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-3">Key Benefits</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span><strong>98% Improvement:</strong> Dramatically better performance on minority classes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span><strong>Dynamic Weighting:</strong> Automatically focuses on hard examples</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span><strong>Balanced Learning:</strong> Prevents model bias toward majority classes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="attention">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">Self-Attention Mechanism</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3">How It Works</h4>
                    <p className="text-muted-foreground mb-4">
                      Self-attention allows the model to dynamically focus on the most relevant parts 
                      of the input text, learning which words and phrases are most indicative of 
                      cyberbullying or harmful content.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="p-4 bg-primary/5">
                      <div className="text-center mb-2 font-semibold">Step 1</div>
                      <p className="text-sm text-muted-foreground text-center">
                        Compute attention scores for each word relative to all other words
                      </p>
                    </Card>
                    <Card className="p-4 bg-primary/5">
                      <div className="text-center mb-2 font-semibold">Step 2</div>
                      <p className="text-sm text-muted-foreground text-center">
                        Apply softmax to normalize scores into probability distribution
                      </p>
                    </Card>
                    <Card className="p-4 bg-primary/5">
                      <div className="text-center mb-2 font-semibold">Step 3</div>
                      <p className="text-sm text-muted-foreground text-center">
                        Weight hidden states by attention scores to create context vector
                      </p>
                    </Card>
                  </div>

                  <div className="bg-muted/50 p-6 rounded-lg">
                    <p className="text-center mb-4 font-semibold">Attention Weight Visualization</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-destructive/80 text-destructive-foreground text-sm">
                        insult (0.92)
                      </span>
                      <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm">
                        you (0.15)
                      </span>
                      <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm">
                        are (0.12)
                      </span>
                      <span className="px-3 py-1 rounded-full bg-destructive/60 text-destructive-foreground text-sm">
                        stupid (0.78)
                      </span>
                    </div>
                    <p className="text-xs text-center mt-4 text-muted-foreground">
                      Higher attention weights (darker) indicate words the model focuses on
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-3">Advantages</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span><strong>Context Awareness:</strong> Understands word relationships in code-mixed text</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span><strong>Interpretability:</strong> Attention weights show what the model focuses on</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span><strong>Long-Range Dependencies:</strong> Captures relationships across entire sentences</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};
