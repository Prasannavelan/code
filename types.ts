export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  features?: string[];
  metrics?: Array<{
    label: string;
    value: string;
  }>;
}