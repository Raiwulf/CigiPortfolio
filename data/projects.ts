export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  sourceUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with Next.js, Stripe, and a headless CMS.',
    image: 'https://placehold.co/600x400/4F46E5/FFFFFF?text=E-Commerce+Platform',
    tags: ['Next.js', 'React', 'Stripe', 'Tailwind CSS'],
    demoUrl: 'https://example.com',
    sourceUrl: 'https://github.com',
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    description: 'A productivity app for managing tasks and projects with real-time collaboration features.',
    image: 'https://placehold.co/600x400/10B981/FFFFFF?text=Task+Management',
    tags: ['React', 'Firebase', 'Material UI', 'TypeScript'],
    demoUrl: 'https://example.com',
    sourceUrl: 'https://github.com',
  },
  {
    id: 'project-3',
    title: 'Weather Dashboard',
    description: 'A weather dashboard that displays current and forecasted weather data using a weather API.',
    image: 'https://placehold.co/600x400/3B82F6/FFFFFF?text=Weather+Dashboard',
    tags: ['JavaScript', 'API Integration', 'Chart.js', 'CSS3'],
    demoUrl: 'https://example.com',
    sourceUrl: 'https://github.com',
  },
  {
    id: 'project-4',
    title: 'Social Media Analytics',
    description: 'A dashboard for tracking and analyzing social media performance across multiple platforms.',
    image: 'https://placehold.co/600x400/EC4899/FFFFFF?text=Social+Media+Analytics',
    tags: ['Vue.js', 'D3.js', 'Node.js', 'Express'],
    demoUrl: 'https://example.com',
    sourceUrl: 'https://github.com',
  },
]; 