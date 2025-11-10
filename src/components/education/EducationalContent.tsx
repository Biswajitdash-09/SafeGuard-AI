import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, Brain, Globe, Code, HelpCircle } from "lucide-react";

export const EducationalContent = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Understanding the Technology
            </h2>
            <p className="text-lg text-muted-foreground">
              Learn how our research-backed AI detects harmful content with 94% accuracy
            </p>
          </div>

          <Tabs defaultValue="basics" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 h-auto">
              <TabsTrigger value="basics" className="gap-2">
                <BookOpen className="w-4 h-4" />
                <span className="hidden sm:inline">Basics</span>
              </TabsTrigger>
              <TabsTrigger value="technology" className="gap-2">
                <Brain className="w-4 h-4" />
                <span className="hidden sm:inline">Technology</span>
              </TabsTrigger>
              <TabsTrigger value="language" className="gap-2">
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">Languages</span>
              </TabsTrigger>
              <TabsTrigger value="technical" className="gap-2">
                <Code className="w-4 h-4" />
                <span className="hidden sm:inline">Technical</span>
              </TabsTrigger>
              <TabsTrigger value="faq" className="gap-2">
                <HelpCircle className="w-4 h-4" />
                <span className="hidden sm:inline">FAQ</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="basics" className="mt-6">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">Understanding Cyberbullying Detection</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">What is Cyberbullying?</h4>
                    <p className="text-muted-foreground">
                      Cyberbullying is the use of electronic communication to bully, harass, or intimidate others. 
                      It can include sending threatening messages, spreading rumors, sharing embarrassing photos, 
                      or making derogatory comments online.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3">Why AI Detection Matters</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span><strong>Scale:</strong> Billions of messages are sent daily across social media platforms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span><strong>Speed:</strong> Harmful content can spread quickly before human moderators can respond</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span><strong>Mental Health:</strong> Early detection can prevent serious psychological harm to victims</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span><strong>Consistency:</strong> AI provides uniform standards across different contexts and languages</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3">The Impact of Online Harassment</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <p className="text-3xl font-bold text-primary mb-2">87%</p>
                        <p className="text-sm text-muted-foreground">of young people have witnessed cyberbullying</p>
                      </div>
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <p className="text-3xl font-bold text-primary mb-2">59%</p>
                        <p className="text-sm text-muted-foreground">of teens have experienced online harassment</p>
                      </div>
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <p className="text-3xl font-bold text-primary mb-2">2x</p>
                        <p className="text-sm text-muted-foreground">increased risk of depression from cyberbullying</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="technology" className="mt-6">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">How Our Technology Works</h3>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="bilstm">
                    <AccordionTrigger>BiLSTM (Bidirectional LSTM)</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-3">
                      <p>
                        BiLSTM (Bidirectional Long Short-Term Memory) is a neural network that reads text in both directions 
                        - forward and backward. This allows it to understand context better than traditional methods.
                      </p>
                      <p><strong>Analogy:</strong> Imagine reading a sentence. A regular LSTM only reads left-to-right. 
                      BiLSTM reads both ways, like when you reread a sentence to understand it better.</p>
                      <div className="p-4 bg-muted/50 rounded-lg mt-4">
                        <p className="font-mono text-sm">
                          Forward: "This is bad" → "is bad" → "bad"<br/>
                          Backward: "bad" → "is bad" → "This is bad"<br/>
                          <span className="text-primary">Result: Better context understanding!</span>
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="attention">
                    <AccordionTrigger>Self-Attention Mechanism (SAM)</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-3">
                      <p>
                        The Self-Attention Mechanism helps the model focus on the most important words in a sentence, 
                        just like how humans naturally emphasize certain words when understanding text.
                      </p>
                      <p><strong>Example:</strong> In "You're so stupid", the attention mechanism focuses heavily on 
                      "stupid" because it's the key word indicating harmful content.</p>
                      <div className="p-4 bg-muted/50 rounded-lg mt-4">
                        <p className="text-sm mb-2">Attention weights:</p>
                        <div className="space-y-1 font-mono text-xs">
                          <div className="flex items-center gap-2">
                            <span className="opacity-40">You're (10%)</span>
                            <div className="h-2 w-10 bg-muted rounded" />
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="opacity-60">so (30%)</span>
                            <div className="h-2 w-30 bg-primary/40 rounded" />
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold">stupid (90%)</span>
                            <div className="h-2 w-90 bg-primary rounded" />
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="focal-loss">
                    <AccordionTrigger>Custom Focal Loss Function (CFCLF)</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-3">
                      <p>
                        Standard machine learning treats all examples equally. But in cyberbullying detection, 
                        some harmful content is rare but critical. Focal Loss makes the model learn more from 
                        these difficult, rare examples.
                      </p>
                      <p><strong>The Problem:</strong> If 95% of comments are safe and only 5% are harmful, 
                      a naive model might just label everything as "safe" and still be 95% accurate!</p>
                      <p><strong>Our Solution:</strong> Focal Loss penalizes the model more for misclassifying 
                      rare but important harmful content, forcing it to learn to detect even subtle threats.</p>
                      <div className="p-4 bg-muted/50 rounded-lg mt-4">
                        <p className="text-sm font-semibold mb-2">Impact:</p>
                        <p className="text-sm">Using Focal Loss improved our detection accuracy from 
                        <span className="text-destructive font-bold"> 89%</span> to 
                        <span className="text-primary font-bold"> 94%</span> - a significant boost in catching 
                        harmful content!</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </Card>
            </TabsContent>

            <TabsContent value="language" className="mt-6">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">The Hindi/Hinglish Challenge</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">What is Code-Mixing?</h4>
                    <p className="text-muted-foreground mb-4">
                      Code-mixing is when speakers blend two or more languages in a single conversation. 
                      In India, Hinglish (Hindi + English) is extremely common online.
                    </p>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm mb-2 font-semibold">Examples of Hinglish:</p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>"Yaar, what are you doing?"</li>
                        <li>"Mujhe tumse baat karni hai, it's urgent"</li>
                        <li>"Kya scene hai? Let's meet up"</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3">Why Low-Resource Languages are Harder</h4>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span><strong>Limited Training Data:</strong> Most AI models are trained on English text. 
                        There's far less labeled data for Hindi or code-mixed content.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span><strong>Script Variations:</strong> Hindi can be written in Devanagari or Roman script, 
                        adding complexity.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span><strong>Cultural Context:</strong> What's offensive in one culture might be normal in another. 
                        AI must understand cultural nuances.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span><strong>Unpredictable Mixing:</strong> In code-mixed text, words can switch languages 
                        mid-sentence, making pattern detection difficult.</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3">Our Solution</h4>
                    <p className="text-muted-foreground mb-4">
                      We developed domain-adapted word embeddings specifically for Hindi and Hinglish text. 
                      We also used data augmentation techniques to expand our limited training data.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-primary/10 rounded-lg">
                        <p className="font-semibold mb-2">Traditional Models</p>
                        <p className="text-sm text-muted-foreground">Accuracy on Hinglish: ~65%</p>
                      </div>
                      <div className="p-4 bg-secondary/20 rounded-lg">
                        <p className="font-semibold mb-2">Our Model</p>
                        <p className="text-sm text-muted-foreground">Accuracy on Hinglish: 94%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="technical" className="mt-6">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">Technical Deep Dive</h3>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="architecture">
                    <AccordionTrigger>Model Architecture</AccordionTrigger>
                    <AccordionContent className="space-y-4">
                      <div className="p-4 bg-muted/50 rounded-lg font-mono text-sm">
                        <p>Input Layer → Word Embeddings (300d)</p>
                        <p>↓</p>
                        <p>BiLSTM Layer (128 units, bidirectional)</p>
                        <p>↓</p>
                        <p>Self-Attention Mechanism</p>
                        <p>↓</p>
                        <p>Dense Layer (64 units, ReLU)</p>
                        <p>↓</p>
                        <p>Output Layer (16 classes, Softmax)</p>
                        <p>↓</p>
                        <p>Custom Focal Loss Function</p>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Total Parameters: ~2.5M | Training Time: 6 hours on GPU
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="dataset">
                    <AccordionTrigger>Dataset Details</AccordionTrigger>
                    <AccordionContent className="space-y-4 text-muted-foreground">
                      <ul className="space-y-2">
                        <li>• Training samples: 25,000 labeled texts</li>
                        <li>• Validation samples: 5,000</li>
                        <li>• Test samples: 5,000</li>
                        <li>• Languages: English (40%), Hindi (30%), Hinglish (30%)</li>
                        <li>• 16 content categories with balanced representation</li>
                        <li>• Data augmentation: Back-translation, synonym replacement</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="metrics">
                    <AccordionTrigger>Performance Metrics</AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="p-4 bg-muted/50 rounded-lg">
                          <p className="text-2xl font-bold text-primary">94%</p>
                          <p className="text-sm text-muted-foreground">Accuracy</p>
                        </div>
                        <div className="p-4 bg-muted/50 rounded-lg">
                          <p className="text-2xl font-bold text-primary">0.92</p>
                          <p className="text-sm text-muted-foreground">Precision</p>
                        </div>
                        <div className="p-4 bg-muted/50 rounded-lg">
                          <p className="text-2xl font-bold text-primary">0.91</p>
                          <p className="text-sm text-muted-foreground">Recall</p>
                        </div>
                        <div className="p-4 bg-muted/50 rounded-lg">
                          <p className="text-2xl font-bold text-primary">0.973</p>
                          <p className="text-sm text-muted-foreground">ROC-AUC</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="training">
                    <AccordionTrigger>Training Process</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-3">
                      <ul className="space-y-2">
                        <li>• Optimizer: Adam (learning rate: 0.001)</li>
                        <li>• Batch size: 32</li>
                        <li>• Epochs: 50 with early stopping</li>
                        <li>• Dropout: 0.3 for regularization</li>
                        <li>• Hardware: NVIDIA Tesla V100 GPU</li>
                        <li>• Framework: TensorFlow 2.x with Keras</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </Card>
            </TabsContent>

            <TabsContent value="faq" className="mt-6">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="faq1">
                    <AccordionTrigger>How accurate is the detection?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Our model achieves 94% accuracy with a ROC-AUC score of 0.973, which is industry-leading 
                      for multilingual cyberbullying detection. This means out of 100 pieces of content, 
                      we correctly classify 94 of them.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq2">
                    <AccordionTrigger>Does it work in multiple languages?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Yes! Our model specializes in English, Hindi, and Hinglish (code-mixed). We trained it 
                      specifically to handle the unique challenges of code-mixed content, which is common in 
                      South Asian online communities.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq3">
                    <AccordionTrigger>How long does analysis take?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Analysis is typically completed in under 200 milliseconds, making it suitable for 
                      real-time content moderation on social media platforms and messaging apps.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq4">
                    <AccordionTrigger>Is my data stored or used for training?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      No. Text you analyze through our demo is processed in real-time and not stored. 
                      We respect user privacy and do not use demo inputs for model training or any other purpose.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq5">
                    <AccordionTrigger>How can I cite this research?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      You can find citation formats (BibTeX, APA, etc.) on our Research page. 
                      The full paper is also available for download there.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq6">
                    <AccordionTrigger>Can I use this in my application?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      This is a research demonstration. For commercial licensing or integration inquiries, 
                      please contact our research team through the contact information provided on the Research page.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq7">
                    <AccordionTrigger>What makes this better than existing solutions?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Our key innovations include: (1) Specialized support for Hindi/Hinglish code-mixed content, 
                      (2) Self-attention mechanism for better context understanding, (3) Custom focal loss to 
                      handle class imbalance, and (4) 16-class taxonomy covering comprehensive safety categories. 
                      These combined achieve state-of-the-art results on multilingual datasets.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq8">
                    <AccordionTrigger>Can the model make mistakes?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Yes, like all AI systems, our model is not perfect. At 94% accuracy, it misclassifies about 
                      6% of content. We recommend using it as an assistance tool alongside human moderators for 
                      critical decisions. The model provides confidence scores to help identify uncertain cases.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};
