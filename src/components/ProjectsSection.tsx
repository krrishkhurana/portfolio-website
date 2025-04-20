
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, BarChart3, BarChart4, FileSpreadsheet, Brain } from 'lucide-react';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Predictive Modelling on Train Accident Dataset",
      date: "October 2024 - November 2024",
      description: "Predict passenger survival in train accidents using advanced machine learning models to enhance safety strategies.",
      tech: "Python, scikit-learn, XGBoost, Random Forest, KNN",
      icon: <Brain className="h-8 w-8 text-blue-500" />,
      achievements: [
        "Analyzed train dataset, implemented diverse machine learning models (KNN, Ridge Bayes, Decision Trees, Random Forest, Linear Regression)",
        "Performed data scaling, cleaning, imputation, encoding, and feature extraction to create an optimized and trained model",
        "Provided insights into factors affecting passenger survival rates"
      ]
    },
    {
      id: 2,
      title: "Growing Store's Data Analysis 2022",
      date: "April 2024 - May 2024",
      description: "Analyzed financial, operational, and market performance to derive actionable business insights.",
      tech: "MS Excel, ETL, Data Visualization",
      icon: <BarChart3 className="h-8 w-8 text-blue-500" />,
      achievements: [
        "Implemented comprehensive ETL processes for data collection, cleansing, and transformation",
        "Performed in-depth analysis of financial and operational metrics",
        "Created interactive visualizations and dashboards enabling data-driven decision making and strategy planning"
      ]
    },
    {
      id: 3,
      title: "Mail Customer Analysis",
      date: "April 2024 - May 2024",
      description: "Analysis of gender distribution, age demographics, income, and spending trends of mail customers.",
      tech: "R, ggplot, GGally, plotly, dplyr, forcats",
      icon: <BarChart4 className="h-8 w-8 text-blue-500" />,
      achievements: [
        "Developed a dashboard using R programming to analyze mail customer data, focusing on gender, age, income, and spending",
        "Key findings included higher female representation, most customers aged 30-40, varied income levels, and nuanced spending behaviors",
        "Insights aimed to enhance targeted marketing and optimize profitability"
      ]
    },
    {
      id: 4,
      title: "Payroll Management System",
      date: "June 2024 - July 2024",
      description: "A system to automate employee payment processes using C++.",
      tech: "C++",
      icon: <FileSpreadsheet className="h-8 w-8 text-blue-500" />,
      achievements: [
        "Created a system to automate employee payment processes using C++",
        "Key features included employee information management, attendance tracking, salary calculation, payslip generation, tax filing and reporting",
        "Successfully streamlined payroll operations, reduced manual errors, and ensured compliance with regulations"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Projects</h2>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto mb-12">
          Here are some of the key projects I've worked on, showcasing my skills in data analysis, machine learning, and software development.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="bg-gray-100 dark:bg-gray-700 flex flex-row items-center gap-4 pb-4">
                <div className="p-2 bg-white dark:bg-gray-800 rounded-md shadow">
                  {project.icon}
                </div>
                <div>
                  <CardTitle className="text-lg md:text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-sm text-blue-600 dark:text-blue-400">{project.date}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="mb-4">
                  <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">Tech: </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{project.tech}</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                  {project.achievements.map((achievement, index) => (
                    <li key={index} className="text-sm">{achievement}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
