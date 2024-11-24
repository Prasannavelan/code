import { useState } from 'react';
import { ExternalLink, Code2 } from 'lucide-react';
import type { Project } from './types';

interface Props {
  project: Project;
  featured?: boolean;
  onViewDetails: (project: Project) => void;
}

export default function ProjectCard({ project, featured = false, onViewDetails }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden
        ${featured ? 'col-span-2 md:col-span-3' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-w-16 aspect-h-9 bg-gray-200 relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className={`object-cover w-full h-full transform transition-transform duration-300
            ${isHovered ? 'scale-105' : 'scale-100'}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300
          ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute bottom-4 left-4 right-4">
            <button
              onClick={() => onViewDetails(project)}
              className="w-full px-4 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>

        <p className="mt-2 text-gray-600 line-clamp-2">{project.description}</p>

        {project.metrics && featured && (
          <div className="mt-4 grid grid-cols-2 gap-4">
            {project.metrics.map((metric, index) => (
              <div key={index} className="bg-blue-50 p-3 rounded-lg">
                <p className="text-blue-600 font-semibold">{metric.value}</p>
                <p className="text-sm text-gray-600">{metric.label}</p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
            >
              <Code2 className="w-3 h-3 mr-1" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}