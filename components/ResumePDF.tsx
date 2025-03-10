"use client";

import { useTranslations } from "next-intl";
import { skillsData } from "@/data/skills";
import { projects } from "@/data/projects";
import { forwardRef } from "react";

interface ResumePDFProps {
  className?: string;
}

const ResumePDF = forwardRef<HTMLDivElement, ResumePDFProps>(
  ({ className = "" }, ref) => {
    const t = useTranslations();
    const heroT = useTranslations("hero");
    const aboutT = useTranslations("about");
    const skillsT = useTranslations("skills");
    const projectsT = useTranslations("projects");

    return (
      <div 
        ref={ref} 
        className={`bg-white text-black w-[800px] p-10 mx-auto ${className}`}
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {/* Header */}
        <div className="border-b-2 border-primary-light pb-6 mb-6">
          <h1 className="text-3xl font-bold">{heroT("name")}</h1>
          <h2 className="text-xl text-gray-600 mt-1">{heroT("title")}</h2>
          
          <div className="flex justify-between mt-4">
            <div>
              <p className="text-sm">hello@johndoe.com</p>
              <p className="text-sm">+1 (555) 123-4567</p>
            </div>
            <div className="text-right">
              <p className="text-sm">San Francisco, CA</p>
              <p className="text-sm">github.com/johndoe</p>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Professional Summary</h3>
          <p className="text-sm leading-relaxed">{aboutT("bio")}</p>
        </div>

        {/* Skills */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">{skillsT("title")}</h3>
          
          <div className="grid grid-cols-3 gap-4">
            <div>
              <h4 className="text-md font-medium mb-2">{skillsT("frontend")}</h4>
              <ul className="text-sm space-y-1">
                {skillsData.frontend.skills.slice(0, 6).map((skill) => (
                  <li key={skill.name} className="flex items-center justify-between">
                    <span>{skill.name}</span>
                    <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary-light" 
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-md font-medium mb-2">{skillsT("backend")}</h4>
              <ul className="text-sm space-y-1">
                {skillsData.backend.skills.slice(0, 6).map((skill) => (
                  <li key={skill.name} className="flex items-center justify-between">
                    <span>{skill.name}</span>
                    <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary-light" 
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-md font-medium mb-2">{skillsT("tools")}</h4>
              <ul className="text-sm space-y-1">
                {skillsData.tools.skills.slice(0, 6).map((skill) => (
                  <li key={skill.name} className="flex items-center justify-between">
                    <span>{skill.name}</span>
                    <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary-light" 
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">{projectsT("title")}</h3>
          
          <div className="space-y-4">
            {projects.slice(0, 3).map((project) => (
              <div key={project.id} className="border-l-2 border-primary-light pl-4">
                <h4 className="text-md font-medium">{project.title}</h4>
                <p className="text-sm text-gray-600 mb-1">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs px-2 py-0.5 bg-gray-100 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Work Experience</h3>
          
          <div className="space-y-4">
            <div className="border-l-2 border-primary-light pl-4">
              <h4 className="text-md font-medium">Senior Developer</h4>
              <p className="text-sm text-gray-600">Tech Solutions Inc. | 2020 - Present</p>
              <ul className="text-sm list-disc list-inside mt-1">
                <li>Led development of enterprise web applications</li>
                <li>Mentored junior developers and implemented best practices</li>
                <li>Reduced application load time by 40% through optimization</li>
              </ul>
            </div>
            
            <div className="border-l-2 border-primary-light pl-4">
              <h4 className="text-md font-medium">Web Developer</h4>
              <p className="text-sm text-gray-600">Digital Creations | 2018 - 2020</p>
              <ul className="text-sm list-disc list-inside mt-1">
                <li>Developed responsive websites for various clients</li>
                <li>Implemented CI/CD pipelines for streamlined deployments</li>
                <li>Collaborated with design team to create intuitive UIs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Education</h3>
          
          <div className="border-l-2 border-primary-light pl-4">
            <h4 className="text-md font-medium">Bachelor of Science in Computer Science</h4>
            <p className="text-sm text-gray-600">University of Technology | 2014 - 2018</p>
            <p className="text-sm mt-1">Graduated with honors. Specialized in web technologies and software engineering.</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t text-center text-xs text-gray-500">
          <p>This resume was generated from johndoe-portfolio.com • Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    );
  }
);

ResumePDF.displayName = "ResumePDF";

export default ResumePDF; 