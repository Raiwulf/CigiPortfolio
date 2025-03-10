export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}

export interface SkillCategory {
  id: string;
  skills: Skill[];
}

export const skillsData: Record<string, SkillCategory> = {
  frontend: {
    id: 'frontend',
    skills: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'JavaScript', level: 95 },
      { name: 'TypeScript', level: 85 },
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Vue.js', level: 75 },
    ],
  },
  backend: {
    id: 'backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'Django', level: 75 },
      { name: 'GraphQL', level: 80 },
      { name: 'RESTful APIs', level: 90 },
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 80 },
    ],
  },
  tools: {
    id: 'tools',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'CI/CD', level: 80 },
      { name: 'AWS', level: 70 },
      { name: 'Firebase', level: 85 },
      { name: 'Jest', level: 80 },
      { name: 'Figma', level: 75 },
      { name: 'Webpack', level: 80 },
    ],
  },
}; 