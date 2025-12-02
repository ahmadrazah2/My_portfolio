import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://github.com/ahmadrazah2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmad-raza-hussain-50a989282/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:ahmadrazah2@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Ahmad Raza.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
