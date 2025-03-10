"use client";

import { useTranslations } from "next-intl";
import { useRef } from "react";
import { skillsData } from "@/data/skills";
import { projects } from "@/data/projects";

interface ResumeProps {
  className?: string;
}

export default function Resume({ className = "" }: ResumeProps) {
  const t = useTranslations();
  const aboutT = useTranslations("about");
  const skillsT = useTranslations("skills");
  const projectsT = useTranslations("projects");
  const resumeT = useTranslations("resume");
  
  // Only show top 2 projects
  const topProjects = projects.slice(0, 2);

  return (
    <div className={`bg-white text-black w-[800px] p-10 ${className}`}>
      {/* Header */}
      <div className="border-b-2 border-primary-light pb-6 mb-6">
        <h1 className="text-4xl font-bold">{t("hero.name")}</h1>
        <h2 className="text-2xl text-gray-600 mt-1">{t("hero.title")}</h2>
        <div className="flex justify-between mt-4">
          <div>
            <p>hello@johndoe.com</p>
            <p>+1 (555) 123-4567</p>
          </div>
          <div className="text-right">
            <p>San Francisco, CA</p>
            <p>github.com/johndoe</p>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-3">{resumeT("professionalSummary")}</h3>
        <p className="text-gray-700">{t("hero.description")}</p>
        <p className="text-gray-700 mt-2">{aboutT("bio")}</p>
      </div>

      {/* Skills */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-3">{resumeT("skills")}</h3>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <h4 className="font-semibold mb-2">{skillsT("frontend")}</h4>
            <ul className="list-disc list-inside">
              {skillsData.frontend.skills.slice(0, 5).map((skill) => (
                <li key={skill.name} className="text-gray-700">
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">{skillsT("backend")}</h4>
            <ul className="list-disc list-inside">
              {skillsData.backend.skills.slice(0, 5).map((skill) => (
                <li key={skill.name} className="text-gray-700">
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">{skillsT("tools")}</h4>
            <ul className="list-disc list-inside">
              {skillsData.tools.skills.slice(0, 5).map((skill) => (
                <li key={skill.name} className="text-gray-700">
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-3">{resumeT("featuredProjects")}</h3>
        {topProjects.map((project) => (
          <div key={project.id} className="mb-4">
            <h4 className="font-semibold">{project.title}</h4>
            <p className="text-gray-700 mb-1">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-gray-100 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Experience */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-3">{resumeT("workExperience")}</h3>
        <div className="mb-4">
          <div className="flex justify-between">
            <h4 className="font-semibold">Senior Developer</h4>
            <span className="text-gray-600">2020 - Present</span>
          </div>
          <p className="text-gray-600 italic">Tech Innovations Inc.</p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Led development of company's flagship product</li>
            <li>Managed team of 5 junior developers</li>
            <li>Implemented CI/CD pipeline reducing deployment time by 40%</li>
          </ul>
        </div>
        <div>
          <div className="flex justify-between">
            <h4 className="font-semibold">Web Developer</h4>
            <span className="text-gray-600">2018 - 2020</span>
          </div>
          <p className="text-gray-600 italic">Digital Solutions LLC</p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Developed responsive websites for 20+ clients</li>
            <li>Optimized website performance increasing load speed by 30%</li>
            <li>Collaborated with design team to implement UI/UX improvements</li>
          </ul>
        </div>
      </div>

      {/* Education */}
      <div>
        <h3 className="text-xl font-bold mb-3">{resumeT("education")}</h3>
        <div className="flex justify-between">
          <h4 className="font-semibold">Bachelor of Science in Computer Science</h4>
          <span className="text-gray-600">2014 - 2018</span>
        </div>
        <p className="text-gray-600 italic">University of Technology</p>
      </div>
    </div>
  );
} 