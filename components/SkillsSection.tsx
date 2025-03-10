"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { skillsData } from "@/data/skills";

export default function SkillsSection() {
  const t = useTranslations("skills");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="skills" className="section bg-gray-50 dark:bg-slate-900">
      <div className="container-custom">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          {t("title")}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          <SkillCategory
            title={t("frontend")}
            skills={skillsData.frontend.skills}
            delay={0.1}
            isInView={isInView}
          />
          <SkillCategory
            title={t("backend")}
            skills={skillsData.backend.skills}
            delay={0.3}
            isInView={isInView}
          />
          <SkillCategory
            title={t("tools")}
            skills={skillsData.tools.skills}
            delay={0.5}
            isInView={isInView}
          />
        </div>
      </div>
    </section>
  );
}

interface SkillCategoryProps {
  title: string;
  skills: { name: string; level: number }[];
  delay: number;
  isInView: boolean;
}

function SkillCategory({ title, skills, delay, isInView }: SkillCategoryProps) {
  return (
    <motion.div
      className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay }}
    >
      <h3 className="text-xl font-bold mb-6 text-center">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            index={index}
            delay={delay}
            isInView={isInView}
          />
        ))}
      </div>
    </motion.div>
  );
}

interface SkillBarProps {
  skill: { name: string; level: number };
  index: number;
  delay: number;
  isInView: boolean;
}

function SkillBar({ skill, index, delay, isInView }: SkillBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-medium">{skill.name}</span>
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {skill.level}%
        </span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary-light dark:bg-primary-dark"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 0.8, delay: delay + index * 0.1 }}
        />
      </div>
    </div>
  );
} 