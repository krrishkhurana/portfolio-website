import { User } from 'lucide-react';

const AboutMeSection = () => {
  return (
    <section id="about-me" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
          About Me
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto mb-12">
        Hello! I'm Krrish, and I am a passionate student of data science and machine learning with a strong foundation in computer science. I have a keen interest in leveraging data to build innovative solutions. My journey in technology has been fueled by curiosity and a drive to solve real-world problems through analytics and predictive modeling.
        </p>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="flex flex-col items-center space-y-6">
              <div className="w-24 h-24 flex items-center justify-center bg-blue-500 rounded-full border-4 border-white dark:border-gray-900">
                <User className="h-12 w-12 text-white" />
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-center">
              With a focus on learning about data preprocessing, machine learning algorithms, and data visualization, I am enthusiastic about transforming raw data into meaningful insights. I enjoy collaborating with peers and continuously exploring new tools and techniques to enhance my skills.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-center">
                Outside of coding, I love exploring new places, reading about emerging tech trends, and contributing to open-source projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;