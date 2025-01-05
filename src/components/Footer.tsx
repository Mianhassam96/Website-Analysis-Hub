import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-[#1A1F2C] to-[#2A2F3C] py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] text-transparent bg-clip-text mb-4">
              MultiMian
            </h3>
            <p className="text-gray-300 text-sm">
              Empowering websites with comprehensive SEO analytics and optimization tools.
            </p>
          </div>
          
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-[#9b87f5] transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#9b87f5] transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#9b87f5] transition-colors">API Access</a></li>
            </ul>
          </div>
          
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-[#9b87f5]">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-[#9b87f5]">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-[#9b87f5]">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-[#9b87f5]">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} MultiMian. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;