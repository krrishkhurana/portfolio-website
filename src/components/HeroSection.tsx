import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="pt-32 pb-20 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 animate-fade-in">
           {/* <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">Hello, I'm</p>*/}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-gray-50">
              Krrish Khurana
            </h1>
            <h2 className="text-xl md:text-2xl font-medium mb-6 text-gray-600 dark:text-gray-300">
            Aspiring UI/UX | Data Science Enthusiast | Machine Learning | Data Structure | C++

            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mb-8 leading-relaxed">
              Computer Science student specializing in machine learning, data analysis, and software development. 
              Passionate about leveraging data to create impactful solutions and drive business improvements.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-full p-1 shadow-xl">
              <div className="bg-white dark:bg-gray-900 rounded-full p-2">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-700">
                  <img 
                    src="public\WhatsApp Image 2025-04-20 at 00.22.12_89139d64.jpg" 
                    alt="Krrish Khurana" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center animate-bounce">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll Down</p>
          <ArrowDown size={20} className="text-blue-500" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
