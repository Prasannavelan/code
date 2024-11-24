import { X, ExternalLink, Code2, CheckCircle } from 'lucide-react';
import type { Project } from './types';

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetails({ project, onClose }: Props) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={onClose}></div>

        <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">&#8203;</span>

        <div className="relative inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:align-middle">
          <div className="absolute right-0 top-0 pr-4 pt-4">
            <button
              type="button"
              className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="aspect-w-16 aspect-h-9 mb-6">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg object-cover"
              />
            </div>

            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-700"
                >
                  <span className="mr-2">Visit Project</span>
                  <ExternalLink className="h-5 w-5" />
                </a>
              )}
            </div>

            <p className="mt-4 text-gray-600">{project.description}</p>

            {project.features && (
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-900">Key Features</h4>
                <ul className="mt-2 space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.metrics && (
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-900">Project Impact</h4>
                <div className="mt-2 grid grid-cols-2 gap-4">
                  {project.metrics.map((metric, index) => (
                    <div key={index} className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-blue-600 font-semibold">{metric.value}</p>
                      <p className="text-sm text-gray-600">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6">
              <h4 className="text-lg font-semibold text-gray-900">Technologies Used</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                  >
                    <Code2 className="w-4 h-4 mr-1" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              type="button"
              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}