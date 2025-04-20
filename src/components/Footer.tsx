
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-blue-400">Krrish Khurana</h2>
            <p className="mt-2 text-gray-400">Data Science & Machine Learning Specialist</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/in/krrish-khurana-165195332/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="https://github.com/KrrishKhurana"
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="mailto:khuranakrrish463@gmail.com"
              className="p-2 rounded-full bg-gray-800 hover:bg-red-600 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {currentYear} Krrish Khurana. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <nav className="flex space-x-6">
              <a href="#home" className="text-gray-400 text-sm hover:text-white transition-colors">Home</a>
              <a href="#about-me" className="text-gray-400 text-sm hover:text-white transition-colors">About Me</a>
              <a href="#projects" className="text-gray-400 text-sm hover:text-white transition-colors">Projects</a>
              <a href="#skills" className="text-gray-400 text-sm hover:text-white transition-colors">Skills</a>
              <a href="#certificates" className="text-gray-400 text-sm hover:text-white transition-colors">Certificates</a>
              <a href="#contact" className="text-gray-400 text-sm hover:text-white transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
