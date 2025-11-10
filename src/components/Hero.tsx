import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-safety.jpg";

export const Hero = () => {
  const scrollToDemo = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Digital safety shield" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-hero-from/95 via-hero-to/90 to-hero-from/95" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 backdrop-blur-sm border border-primary-foreground/20">
              <Shield className="w-4 h-4 text-primary-foreground" />
              <span className="text-sm font-medium text-primary-foreground">AI-Powered Online Safety</span>
            </div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm border border-secondary-foreground/20">
              <span className="text-sm font-medium text-secondary-foreground">Research-Backed • 94% Accuracy</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
            Human-Centric Machine Learning for{" "}
            <span className="text-secondary-foreground">Online Safety</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            A step against cyberbullying, information misutilization, and derogatory content. 
            Powered by cutting-edge research using BiLSTM + Self-Attention for Hindi/Hinglish content moderation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg"
              onClick={scrollToDemo}
              className="bg-background text-foreground hover:bg-background/90 shadow-lg"
            >
              Try the Demo
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};
