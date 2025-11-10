import { Link } from "react-router-dom";
import { Mail, FileText } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">AI Safety Platform</h3>
            <p className="text-sm text-muted-foreground">
              Advanced content moderation using BiLSTM + SAM + CFCLF for detecting harmful content in English, Hindi, and Hinglish.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Research Paper
                </Link>
              </li>
              <li>
                <a href="#demo" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Try Demo
                </a>
              </li>
            </ul>
          </div>

          {/* Developer Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Developer Contact</h3>
            <div className="space-y-3">
              <p className="text-sm font-medium">Biswajit Dash</p>
              <a 
                href="mailto:biswajitdash929@gmail.com"
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                biswajitdash929@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} AI Safety Platform. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with BiLSTM, Self-Attention, and Custom Feature Classification
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
