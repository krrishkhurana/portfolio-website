import { Card } from '@/components/ui/card';
import { BarChart4, Brain, Code, Database, FileSpreadsheet, PenTool } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: <Code className="h-8 w-8 text-blue-500" />,
      skills: ["Python", "C++", "Java", "R"]
    },
    {
      category: "Technologies & Frameworks",
      icon: <Database className="h-8 w-8 text-blue-500" />,
      skills: ["Django", "Pandas", "NumPy", "Artificial Intelligence (AI)", "Tableau", "MS Excel"]
    },
    {
      category: "Data Science & Analytics",
      icon: <Brain className="h-8 w-8 text-blue-500" />,
      skills: ["Machine Learning", "Data Analysis", "Statistical Modeling", "Predictive Analytics", "ETL Processes"]
    },
    {
      category: "Visualization",
      icon: <BarChart4 className="h-8 w-8 text-blue-500" />,
      skills: ["Tableau", "ggplot", "Matplotlib", "Data Visualization", "Dashboard Creation"]
    },
    {
      category: "Other Skills",
      icon: <PenTool className="h-8 w-8 text-blue-500" />,
      skills: ["Data Structures and Algorithms", "Problem-Solving", "Web Design", "Adaptive Learner", "UI/UX Design"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Technical Skills</h2>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto mb-12">
          My areas of expertise span multiple domains of computer science and data analysis.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 h-full border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold ml-3 text-gray-800 dark:text-gray-200">{category.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="inline-block bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        <div id="certificates" className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">Certificates</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Data Visualization with Tableau", date: "November 2024", source: "Coursera", url: "https://www.coursera.org/account/accomplishments/verify/WSYGYWY9EARE" },
              { title: "Supervised Machine Learning: Regression and Classification", date: "October 2024", source: "Coursera", url: "https://www.coursera.org/account/accomplishments/verify/VI2WV8J0WUA4" },
              { title: "Excel Skills for Data Analytics and Visualization", date: "March 2024", source: "Coursera", url: "https://www.coursera.org/account/accomplishments/specialization/EEKJ9J48L6L6" }
            ].map((cert, index) => (
              <a 
                key={index} 
                href={cert.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow bg-white dark:bg-gray-800 block"
              >
                <FileSpreadsheet className="h-6 w-6 text-blue-500 mb-2" />
                <h4 className="font-medium text-gray-800 dark:text-gray-200">{cert.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{cert.source} • {cert.date}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;